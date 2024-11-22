import { DashboardLayout } from "@/components/dashboard/layout"
import { SystemIntegrity } from "@/components/dashboard/admin/system-integrity"

export default function SystemPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Integrity</h1>
          <p className="text-muted-foreground">
            Monitor blockchain transactions and system health
          </p>
        </div>
        <SystemIntegrity />
      </div>
    </DashboardLayout>
  )
} 