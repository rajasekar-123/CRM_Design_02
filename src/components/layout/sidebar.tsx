"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  ShoppingCart,
  Package,
  Wrench,
  Key,
  FileSignature,
  FileSpreadsheet,
  CreditCard,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "CRM", href: "/crm", icon: Users },
  { name: "Leads", href: "/leads", icon: Briefcase },
  { name: "Sales", href: "/sales", icon: ShoppingCart },
  { name: "Quotations", href: "/quotations", icon: FileText },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Service", href: "/service", icon: Wrench },
  { name: "Rental", href: "/rental", icon: Key },
  { name: "AMC", href: "/amc", icon: FileSignature },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Invoices", href: "/invoices", icon: FileSpreadsheet },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "AI Copilot", href: "/ai", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r border-[#262626] bg-[#0a0a0a] transition-all duration-300">
      <div className="flex h-16 shrink-0 items-center px-6">
        <div className="flex items-center gap-2 font-bold tracking-tight text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-black">
            <span className="text-lg">N</span>
          </div>
          <span className="text-xl">Nexus</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 hide-scrollbar">
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-white text-black"
                    : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-black" : "text-gray-400")} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="border-t border-[#262626] p-4">
        <div className="flex items-center gap-3 rounded-md p-2">
          <div className="h-9 w-9 rounded-full bg-[#262626]" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Admin User</span>
            <span className="text-xs text-gray-400">admin@nexus.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
