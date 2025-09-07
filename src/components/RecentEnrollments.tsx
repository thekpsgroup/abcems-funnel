import { prisma } from "@/lib/prisma"

export async function RecentEnrollments() {
  const enrollments = await prisma.enrollment.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } },
      course: { select: { title: true } }
    }
  })

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-kps-navy mb-4">Recent Enrollments</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Student</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Course</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id} className="border-b border-gray-100">
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium text-gray-900">
                      {enrollment.user.name || "No name"}
                    </div>
                    <div className="text-sm text-gray-500">
                      {enrollment.user.email}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-900">
                  {enrollment.course.title}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    enrollment.status === "completed" 
                      ? "bg-green-100 text-green-800"
                      : enrollment.status === "attended"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {enrollment.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">
                  {enrollment.createdAt.toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
