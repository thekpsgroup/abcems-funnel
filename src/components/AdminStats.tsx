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
    { label: "Total Learners", value: totalLearners, color: "bg-blue-500" },
    { label: "Total Enrollments", value: totalEnrollments, color: "bg-green-500" },
    { label: "Total Payments", value: totalPayments, color: "bg-yellow-500" },
    { label: "Certificates Issued", value: totalCertificates, color: "bg-purple-500" }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
