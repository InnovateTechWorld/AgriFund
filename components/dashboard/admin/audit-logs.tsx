"use client"

import { useState } from "react"
import { 
  History,
  Search,
  Download,
  Filter,
  User,
  Settings,
  Shield,
  FileText,
  AlertTriangle,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

const auditLogs = [
  {
    id: 1,
    action: "User Role Modified",
    description: "Changed user role from Farmer to Verified Farmer",
    performedBy: "Admin (John Doe)",
    timestamp: "2024-03-20 15:45:00",
    category: "user_management",
    severity: "medium",
    status: "success"
  },
  {
    id: 2,
    action: "Loan Application Approved",
    description: "Approved loan application #1234 for $50,000",
    performedBy: "Admin (Sarah Smith)",
    timestamp: "2024-03-20 15:30:00",
    category: "loan_management",
    severity: "high",
    status: "success"
  },
  {
    id: 3,
    action: "System Settings Updated",
    description: "Modified platform fee structure",
    performedBy: "System",
    timestamp: "2024-03-20 15:15:00",
    category: "system",
    severity: "high",
    status: "warning"
  },
  {
    id: 4,
    action: "User Account Suspended",
    description: "Suspended account due to suspicious activity",
    performedBy: "Admin (Mike Johnson)",
    timestamp: "2024-03-20 15:00:00",
    category: "security",
    severity: "critical",
    status: "success"
  }
]

export function AuditLogs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [severityFilter, setSeverityFilter] = useState("all")
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  })

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Actions</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Critical Changes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">15</div>
            <p className="text-xs text-muted-foreground">Requires review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Admin Actions</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <p className="text-xs text-muted-foreground">By 12 admins</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">System Changes</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">378</div>
            <p className="text-xs text-muted-foreground">Automated actions</p>
          </CardContent>
        </Card>
      </div>

      {/* Audit Log Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Complete history of system activities</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export Logs
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search audit logs..." 
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="user_management">User Management</SelectItem>
                  <SelectItem value="loan_management">Loan Management</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                </SelectContent>
              </Select>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severity</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
              <DatePickerWithRange 
                date={date} 
                setDate={(range) => setDate({
                  from: range?.from || new Date(), 
                  to: range?.to || new Date()
                })} 
              />
            </div>

            {/* Logs Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Performed By</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="text-left">
                              <div>
                                <p className="font-medium">{log.action}</p>
                                <p className="text-sm text-muted-foreground">{log.description}</p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell>{log.performedBy}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {log.category.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            log.severity === "critical" ? "destructive" :
                            log.severity === "high" ? "default" :
                            "secondary"
                          }
                          className="capitalize"
                        >
                          {log.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={log.status === "success" ? "default" : "destructive"}
                          className="capitalize"
                        >
                          {log.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 