import { DashboardLayout } from "@/components/dashboard/layout"
import { ApplicationsManagement } from "@/components/dashboard/admin/applications-management"

export default function ApplicationsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Loans & Scholarships</h1>
          <p className="text-muted-foreground">
            Review and manage loan and scholarship applications
          </p>
        </div>
        <ApplicationsManagement />
      </div>
    </DashboardLayout>
  )
} 