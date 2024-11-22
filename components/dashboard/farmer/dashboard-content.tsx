"use client"

import { motion } from "framer-motion"
import { 
  Coins, 
  TrendingUp, 
  BookOpen, 
  Bell, 
  FileText,
  Leaf,
  CloudSun,
  Sprout
} from "lucide-react"
import { MetricsCard } from "@/components/dashboard/metrics-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FarmerCoinInsights } from "./coin-insights"
import Link from "next/link"

const metrics = [
  {
    title: "Farm Value",
    value: "$125,000",
    change: "+12.5%",
    icon: Coins,
  },
  {
    title: "Crop Performance",
    value: "92%",
    change: "+5.2%",
    icon: Leaf,
  },
  {
    title: "Active Loans",
    value: "2",
    change: "Healthy",
    icon: FileText,
  },
  {
    title: "Weather Index",
    value: "Favorable",
    change: "Next 7 days",
    icon: CloudSun,
  },
]

export function FarmerDashboardContent() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <MetricsCard {...metric} />
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Crop Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-primary" />
                  <span className="font-medium">Corn</span>
                </div>
                <span className="text-sm text-muted-foreground">Stage: Growing</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-sm text-muted-foreground">Expected harvest: 45 days</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-primary" />
                  <span className="font-medium">Soybeans</span>
                </div>
                <span className="text-sm text-muted-foreground">Stage: Planting</span>
              </div>
              <Progress value={15} className="h-2" />
              <p className="text-sm text-muted-foreground">Expected harvest: 90 days</p>
            </div>

            <Button className="w-full" asChild>
              <Link href="/dashboard/farmer/crops">Manage Crops</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Farmer Coin Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <FarmerCoinInsights />
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 