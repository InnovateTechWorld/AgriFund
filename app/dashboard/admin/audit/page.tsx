import { DashboardLayout } from "@/components/dashboard/layout"
import { AuditLogs } from "@/components/dashboard/admin/audit-logs"

export default function AuditPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Audit Logs</h1>
          <p className="text-muted-foreground">
            Track and review all system activities and admin actions
          </p>
        </div>
        <AuditLogs />
      </div>
    </DashboardLayout>
  )
} 