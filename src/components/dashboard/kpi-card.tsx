import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface KpiCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  comparison: string
  icon: React.ElementType
}

export function KpiCard({ title, value, change, trend, comparison, icon: Icon }: KpiCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:border-foreground/30 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="rounded-full bg-muted p-2 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">{value}</h3>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-xs">
          <span
            className={cn(
              "font-medium",
              trend === "up" && "text-foreground",
              trend === "down" && "text-muted-foreground",
              trend === "neutral" && "text-muted-foreground"
            )}
          >
            {change}
          </span>
          <span className="text-muted-foreground">{comparison}</span>
        </div>
        
        {/* Subtle minimal sparkline representation for pure design */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-muted">
          <div 
            className="h-full bg-foreground transition-all duration-500 ease-in-out" 
            style={{ width: trend === 'up' ? '70%' : trend === 'down' ? '30%' : '50%' }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
