"use client"

import { useState } from "react"
import { 
  Settings,
  Save,
  AlertTriangle,
  Percent,
  DollarSign,
  Clock,
  Shield,
  Users
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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const settingsSchema = z.object({
  platformFee: z.string(),
  minLoanAmount: z.string(),
  maxLoanAmount: z.string(),
  defaultInterestRate: z.string(),
  loanDuration: z.string(),
  maintenanceMode: z.boolean(),
  twoFactorAuth: z.boolean(),
  autoApproval: z.boolean(),
})

export function AdminSettings() {
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      platformFee: "2.5",
      minLoanAmount: "1000",
      maxLoanAmount: "50000",
      defaultInterestRate: "8.5",
      loanDuration: "12",
      maintenanceMode: false,
      twoFactorAuth: true,
      autoApproval: false,
    },
  })

  function onSubmit(data: z.infer<typeof settingsSchema>) {
    console.log(data)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Parameters</CardTitle>
                  <CardDescription>
                    Configure core platform settings and financial parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="platformFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Platform Fee (%)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input {...field} className="pl-9" />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Fee charged on each transaction
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="defaultInterestRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Default Interest Rate (%)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input {...field} className="pl-9" />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Base interest rate for loans
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="minLoanAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Minimum Loan Amount</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input {...field} className="pl-9" />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="maxLoanAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Maximum Loan Amount</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input {...field} className="pl-9" />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button type="submit" className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure platform security and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    Require 2FA for all admin accounts
                  </p>
                </div>
                <Switch
                  checked={form.watch("twoFactorAuth")}
                  onCheckedChange={(checked) => form.setValue("twoFactorAuth", checked)}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <h4 className="font-medium">Maintenance Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Temporarily disable platform access
                  </p>
                </div>
                <Switch
                  checked={form.watch("maintenanceMode")}
                  onCheckedChange={(checked) => form.setValue("maintenanceMode", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automation Rules</CardTitle>
              <CardDescription>
                Configure automated processes and approvals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <h4 className="font-medium">Auto-Approval</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically approve low-risk applications
                  </p>
                </div>
                <Switch
                  checked={form.watch("autoApproval")}
                  onCheckedChange={(checked) => form.setValue("autoApproval", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 