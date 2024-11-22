import { DashboardLayout } from "@/components/dashboard/layout"
import { StudentLoans } from "@/components/dashboard/student/loans"

export default function LoansPage() {
  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Loans</h1>
          <p className="text-muted-foreground">
            Manage your educational loans and applications
          </p>
        </div>
        <StudentLoans />
      </div>
    </DashboardLayout>
  )
} 