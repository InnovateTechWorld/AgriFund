import { DashboardLayout } from "@/components/dashboard/layout"
import { AdminSettings } from "@/components/dashboard/admin/settings"

export default function SettingsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Platform Settings</h1>
          <p className="text-muted-foreground">
            Configure system settings and platform parameters
          </p>
        </div>
        <AdminSettings />
      </div>
    </DashboardLayout>
  )
} 