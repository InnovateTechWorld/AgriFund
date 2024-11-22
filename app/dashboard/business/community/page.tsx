import { DashboardLayout } from "@/components/dashboard/layout"
import { BusinessCommunity } from "@/components/dashboard/business/community"

export default function CommunityPage() {
  return (
    <DashboardLayout userType="business">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community Engagement</h1>
          <p className="text-muted-foreground">
            Manage partnerships and community initiatives
          </p>
        </div>
        <BusinessCommunity />
      </div>
    </DashboardLayout>
  )
} 