import { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard/layout"
import { AdminSettings } from "@/components/dashboard/admin/settings"

export const metadata: Metadata = {
  title: "Platform Settings",
  description: "Configure system settings and platform parameters",
}

export default function SettingsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="container mx-auto px-6 py-8 space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Platform Settings</h1>
          <p className="text-muted-foreground">
            Configure system settings and platform parameters
          </p>
        </div>
        <div className="grid gap-6">
          <AdminSettings />
        </div>
      </div>
    </DashboardLayout>
  )
} 