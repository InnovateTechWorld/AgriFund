import { DashboardLayout } from "@/components/dashboard/layout"
import { FundMonitoring } from "@/components/dashboard/admin/fund-monitoring"

export default function FundsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fund Monitoring</h1>
          <p className="text-muted-foreground">
            Track and manage platform funds and transactions
          </p>
        </div>
        <FundMonitoring />
      </div>
    </DashboardLayout>
  )
} 