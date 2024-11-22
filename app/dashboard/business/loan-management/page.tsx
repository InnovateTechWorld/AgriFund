import { DashboardLayout } from "@/components/dashboard/layout"
import { BusinessLoanManagement } from "@/components/dashboard/business/loan-management"

export default function LoanManagementPage() {
  return (
    <DashboardLayout userType="business">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Loan Management</h1>
          <p className="text-muted-foreground">
            Apply for and manage your business loans
          </p>
        </div>
        <BusinessLoanManagement />
      </div>
    </DashboardLayout>
  )
} 