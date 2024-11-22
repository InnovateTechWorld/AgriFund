import { ReactNode } from "react"
import { redirect } from "next/navigation"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  // You can add authentication check here
  // const isAuthenticated = await checkAuth()
  // if (!isAuthenticated) redirect('/login')
  
  return (
    <>
      {children}
    </>
  )
} 