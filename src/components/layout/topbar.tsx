"use client"

import { Search, Bell, HelpCircle, Command } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { usePathname } from "next/navigation"

export function Topbar() {
  const pathname = usePathname()
  const pageName = pathname === "/" 
    ? "Overview" 
    : pathname.split('/').pop()?.replace(/^\w/, c => c.toUpperCase()) || "Overview"

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border/50 bg-background px-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search anything..."
            className="w-full bg-muted/30 pl-9 pr-12 focus-visible:ring-foreground"
          />
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground ml-4">
          <span className="cursor-pointer hover:text-foreground">Dashboard</span>
          <span>/</span>
          <span className="text-foreground font-medium">{pageName}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium border rounded-md px-3 py-1.5 flex items-center gap-2 bg-background text-foreground shadow-sm">
          Today, 24 Oct
        </div>
        <div className="flex items-center border-r border-border/50 pr-4 gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center font-medium text-sm group-hover:opacity-90 transition-opacity">
            A
          </div>
        </div>
      </div>
    </header>
  )
}
