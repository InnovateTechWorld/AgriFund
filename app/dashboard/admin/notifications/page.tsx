import { DashboardLayout } from "@/components/dashboard/layout"
import { NotificationsManagement } from "@/components/dashboard/admin/notifications-management"

export default function NotificationsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Manage system notifications and alerts
          </p>
        </div>
        <NotificationsManagement />
      </div>
    </DashboardLayout>
  )
} 