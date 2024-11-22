import { DashboardLayout } from "@/components/dashboard/layout"
import { InvestorDashboardContent } from "@/components/dashboard/investor/dashboard-content"
import { FarmerDashboardContent } from "@/components/dashboard/farmer/dashboard-content"
import { BusinessDashboardContent } from "@/components/dashboard/business/dashboard-content"
import { StudentDashboardContent } from "@/components/dashboard/student/dashboard-content"
import { AdminDashboardContent } from "@/components/dashboard/admin/dashboard-content"
import { redirect } from "next/navigation"
import { Metadata } from "next"

const validRoles = ["investor", "farmer", "business", "student", "admin"] as const

const roleComponents = {
  investor: InvestorDashboardContent,
  farmer: FarmerDashboardContent,
  business: BusinessDashboardContent,
  student: StudentDashboardContent,
  admin: AdminDashboardContent,
}

type Role = (typeof validRoles)[number]

export const revalidate = 3600 // Revalidate metadata every hour

interface DashboardPageProps {
  params: {
    role: string
  }
}

export default async function DashboardPage({ params: { role } }: DashboardPageProps) {
  try {
    if (!validRoles.includes(role as Role)) {
      redirect("/get-started")
    }

    const DashboardContent = roleComponents[role as keyof typeof roleComponents]

    return (
      <DashboardLayout userType={role}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to your {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your {role} activities and track your progress
            </p>
          </div>
          <DashboardContent />
        </div>
      </DashboardLayout>
    )
  } catch (error) {
    // Log error
    console.error("Dashboard error:", error)
    redirect("/error")
  }
} 