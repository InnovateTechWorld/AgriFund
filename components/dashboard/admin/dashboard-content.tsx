"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  CircleDollarSign, 
  GraduationCap, 
  ShieldCheck,
  ChevronRight,
  AlertCircle,
  FileText,
  PiggyBank
} from "lucide-react"
import { MetricsCard } from "@/components/dashboard/metrics-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function AdminDashboardContent() {
  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <Link href="/dashboard/admin/applications">
          <Button size="lg" className="gap-2">
            <FileText className="h-4 w-4" />
            Review Applications
          </Button>
        </Link>
        <Link href="/dashboard/admin/users">
          <Button size="lg" variant="outline" className="gap-2">
            <Users className="h-4 w-4" />
            Manage Users
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard
          title="Total Users"
          value="2,834"
          icon={Users}
          trend={{ value: 12, label: "vs last month" }}
        />
        <MetricsCard
          title="Active Loans"
          value="$534K"
          icon={CircleDollarSign}
          trend={{ value: 8, label: "vs last month" }}
        />
        <MetricsCard
          title="Scholarships"
          value="156"
          icon={GraduationCap}
          description="Active scholarships"
        />
        <MetricsCard
          title="Platform Health"
          value="98.2%"
          icon={ShieldCheck}
          trend={{ value: 2, label: "vs last month" }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Pending Approvals */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Pending Approvals</CardTitle>
            <Badge variant="secondary">12 New</Badge>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Request</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { type: "Loan", request: "Farm Equipment", amount: "$12,000", status: "Pending" },
                  { type: "Scholarship", request: "University Fees", amount: "$5,000", status: "Review" },
                  { type: "Business", request: "Partnership", amount: "$8,000", status: "Pending" },
                ].map((item, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{item.type}</TableCell>
                    <TableCell>{item.request}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "Pending" ? "secondary" : "outline"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Review
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>System Alerts</CardTitle>
            <Badge variant="destructive">3 Critical</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  title: "High Loan Default Risk", 
                  description: "3 accounts flagged for potential default",
                  priority: "high"
                },
                { 
                  title: "Blockchain Sync", 
                  description: "15 pending transactions require verification",
                  priority: "medium"
                },
                { 
                  title: "System Maintenance", 
                  description: "Scheduled maintenance in 2 days",
                  priority: "low"
                },
              ].map((alert, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <AlertCircle className={`h-5 w-5 flex-shrink-0 ${
                    alert.priority === 'high' ? 'text-red-500' :
                    alert.priority === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-semibold">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 