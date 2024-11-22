import {
  LayoutDashboard,
  Users,
  FileText,
  PiggyBank,
  Shield,
  Bell,
  History,
  Settings
} from "lucide-react"

export const adminNavItems = [
  {
    title: "Overview",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    title: "User Management",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Loans & Scholarships",
    href: "/dashboard/admin/applications",
    icon: FileText,
  },
  {
    title: "Fund Monitoring",
    href: "/dashboard/admin/funds",
    icon: PiggyBank,
  },
  {
    title: "System Integrity",
    href: "/dashboard/admin/system",
    icon: Shield,
  },
  {
    title: "Notifications",
    href: "/dashboard/admin/notifications",
    icon: Bell,
  },
  {
    title: "Audit Logs",
    href: "/dashboard/admin/audit",
    icon: History,
  },
  {
    title: "Settings",
    href: "/dashboard/admin/settings",
    icon: Settings,
  }
] 