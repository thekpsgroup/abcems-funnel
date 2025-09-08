import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  CurrencyDollarIcon, 
  DocumentCheckIcon 
} from "@heroicons/react/24/outline"

interface AdminStatsProps {
  totalLearners: number
  totalEnrollments: number
  totalPayments: number
  totalCertificates: number
}

export function AdminStats({ 
  totalLearners, 
  totalEnrollments, 
  totalPayments, 
  totalCertificates 
}: AdminStatsProps) {
  const stats = [
    { 
      label: "Total Learners", 
      value: totalLearners, 
      icon: UserGroupIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    { 
      label: "Total Enrollments", 
      value: totalEnrollments, 
      icon: AcademicCapIcon,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    { 
      label: "Total Payments", 
      value: totalPayments, 
      icon: CurrencyDollarIcon,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    { 
      label: "Certificates Issued", 
      value: totalCertificates, 
      icon: DocumentCheckIcon,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <div key={index} className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value.toLocaleString()}</p>
                </div>
                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${stat.textColor}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${Math.min((stat.value / Math.max(...stats.map(s => s.value))) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
