import { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard/layout"

export const metadata: Metadata = {
  title: "System Management",
  description: "Monitor and manage system resources and performance",
}

export default function SystemPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="container mx-auto px-6 py-8 space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">System Management</h1>
          <p className="text-muted-foreground">
            Monitor and manage system resources and performance
          </p>
        </div>
        <div className="grid gap-6">
          {/* Add your system management components here */}
        </div>
      </div>
    </DashboardLayout>
  )
} 