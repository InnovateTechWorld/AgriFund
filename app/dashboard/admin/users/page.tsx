import { DashboardLayout } from "@/components/dashboard/layout"
import { UserManagement } from "@/components/dashboard/admin/user-management"

export default function UsersPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage user accounts, roles, and permissions
          </p>
        </div>
        <UserManagement />
      </div>
    </DashboardLayout>
  )
} 