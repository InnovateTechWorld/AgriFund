"use client"

import { useState } from "react"
import { 
  Shield,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Activity,
  Link as LinkIcon,
  RefreshCcw,
  Search,
  ExternalLink
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
import { Progress } from "@/components/ui/progress"

const systemMetrics = {
  blockchainStatus: "Operational",
  lastSync: "2 minutes ago",
  networkHealth: 98,
  pendingTransactions: 15,
  activeNodes: 24,
  averageBlockTime: "5.2s"
}

const recentTransactions = [
  {
    id: "0x1234...5678",
    type: "Loan Disbursement",
    status: "success",
    timestamp: "2024-03-20 14:30:25",
    confirmations: 12
  },
  {
    id: "0x8765...4321",
    type: "Repayment",
    status: "pending",
    timestamp: "2024-03-20 14:28:15",
    confirmations: 8
  },
  {
    id: "0x9876...1234",
    type: "Investment",
    status: "failed",
    timestamp: "2024-03-20 14:25:10",
    confirmations: 0
  }
]

const systemAlerts = [
  {
    id: 1,
    type: "warning",
    message: "High network latency detected",
    timestamp: "2024-03-20 14:20:00"
  },
  {
    id: 2,
    type: "error",
    message: "Failed transaction: Invalid signature",
    timestamp: "2024-03-20 14:15:00"
  },
  {
    id: 3,
    type: "info",
    message: "System maintenance scheduled",
    timestamp: "2024-03-20 14:10:00"
  }
]

export function SystemIntegrity() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      {/* System Health Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blockchain Status</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-green-500">Operational</p>
                <p className="text-xs text-muted-foreground">Last sync: {systemMetrics.lastSync}</p>
              </div>
              <Badge variant="outline">{systemMetrics.activeNodes} Nodes</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Network Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{systemMetrics.networkHealth}%</span>
                <span className="text-xs text-muted-foreground">
                  Avg. Block Time: {systemMetrics.averageBlockTime}
                </span>
              </div>
              <Progress value={systemMetrics.networkHealth} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Transactions</CardTitle>
            <RefreshCcw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{systemMetrics.pendingTransactions}</p>
              <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest blockchain transactions</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Explorer
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search transactions..." 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Confirmations</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="font-mono">{tx.id}</TableCell>
                      <TableCell>{tx.type}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            tx.status === "success" ? "default" :
                            tx.status === "pending" ? "secondary" :
                            "destructive"
                          }
                          className="capitalize"
                        >
                          {tx.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{tx.timestamp}</TableCell>
                      <TableCell>{tx.confirmations}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>Recent system events and warnings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemAlerts.map((alert) => (
              <div 
                key={alert.id}
                className="flex items-start space-x-4 p-4 border rounded-lg"
              >
                {alert.type === "warning" && (
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                )}
                {alert.type === "error" && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                {alert.type === "info" && (
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                )}
                <div className="flex-1">
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 