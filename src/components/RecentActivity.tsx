import { prisma } from "@/lib/prisma"
import {
  UserPlusIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  ClockIcon
} from "@heroicons/react/24/outline"

interface RecentActivityItem {
  id: string
  type: "user_created" | "enrollment" | "payment" | "certificate"
  description: string
  timestamp: Date
  user?: string
  amount?: number
}

async function getRecentActivity(): Promise<RecentActivityItem[]> {
  const activities: RecentActivityItem[] = []

  // Get recent users (last 5)
  const recentUsers = await prisma.user.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, email: true, role: true, createdAt: true }
  })

  recentUsers.forEach(user => {
    activities.push({
      id: `user-${user.id}`,
      type: "user_created",
      description: `${user.name || user.email} joined as ${user.role.toLowerCase()}`,
      timestamp: user.createdAt,
      user: user.name || user.email
    })
  })

  // Get recent enrollments (last 5)
  const recentEnrollments = await prisma.enrollment.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } },
      course: { select: { title: true } }
    }
  })

  recentEnrollments.forEach(enrollment => {
    if (enrollment.user) {
      activities.push({
        id: `enrollment-${enrollment.id}`,
        type: "enrollment",
        description: `${enrollment.user.name || enrollment.user.email} enrolled in ${enrollment.course.title}`,
        timestamp: enrollment.createdAt,
        user: enrollment.user.name || enrollment.user.email
      })
    }
  })

  // Get recent payments (last 5)
  const recentPayments = await prisma.payment.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } }
    },
    where: { status: "paid" }
  })

  recentPayments.forEach(payment => {
    if (payment.user) {
      activities.push({
        id: `payment-${payment.id}`,
        type: "payment",
        description: `${payment.user.name || payment.user.email} made a payment`,
        timestamp: payment.createdAt,
        user: payment.user.name || payment.user.email,
        amount: payment.amountCents / 100
      })
    }
  })

  // Sort by timestamp and take top 15
  return activities
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 15)
}

export async function RecentActivity() {
  const activities = await getRecentActivity()

  const getActivityIcon = (type: RecentActivityItem["type"]) => {
    switch (type) {
      case "user_created":
        return <UserPlusIcon className="h-5 w-5 text-green-600" />
      case "enrollment":
        return <AcademicCapIcon className="h-5 w-5 text-blue-600" />
      case "payment":
        return <CurrencyDollarIcon className="h-5 w-5 text-green-600" />
      case "certificate":
        return <AcademicCapIcon className="h-5 w-5 text-purple-600" />
      default:
        return <ClockIcon className="h-5 w-5 text-gray-600" />
    }
  }

  const getActivityColor = (type: RecentActivityItem["type"]) => {
    switch (type) {
      case "user_created":
        return "border-l-green-500"
      case "enrollment":
        return "border-l-blue-500"
      case "payment":
        return "border-l-green-500"
      case "certificate":
        return "border-l-purple-500"
      default:
        return "border-l-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      {activities.length === 0 ? (
        <div className="text-center py-8">
          <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="text-gray-500 mt-2">No recent activity</p>
        </div>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className={`flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border-l-4 ${getActivityColor(activity.type)}`}
          >
            <div className="flex-shrink-0">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {activity.description}
              </p>
              {activity.amount && (
                <p className="text-sm text-green-600 font-medium">
                  ${activity.amount.toFixed(2)}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {activity.timestamp.toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
