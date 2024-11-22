import { DashboardLayout } from "@/components/dashboard/layout"
import { StudentCommunity } from "@/components/dashboard/student/community"

export default function CommunityPage() {
  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">
            Connect with peers, mentors, and participate in community activities
          </p>
        </div>
        <StudentCommunity />
      </div>
    </DashboardLayout>
  )
} 