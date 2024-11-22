import { notFound } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/layout"

const validRoles = ["admin", "user", "manager"]

export default function DashboardPage({ params }: { params: { role: string } }) {
  if (!validRoles.includes(params.role)) {
    notFound()
  }

  return (
    <DashboardLayout userType={params.role}>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold">{params.role.charAt(0).toUpperCase() + params.role.slice(1)} Dashboard</h1>
      </div>
    </DashboardLayout>
  )
}

export async function generateStaticParams() {
  return validRoles.map((role) => ({
    role: role,
  }))
} 