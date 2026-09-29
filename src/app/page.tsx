import { KpiCard } from "@/components/dashboard/kpi-card"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { DollarSign, ShoppingCart, Wrench, Key, FileSignature, AlertCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Good Morning, Admin</h1>
        <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your business today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        <KpiCard 
          title="Total Revenue" 
          value="₹12,48,560" 
          change="+18.4%" 
          trend="up" 
          comparison="vs last month" 
          icon={DollarSign} 
        />
        <KpiCard 
          title="Total Sales" 
          value="142" 
          change="+12.1%" 
          trend="up" 
          comparison="vs last month" 
          icon={ShoppingCart} 
        />
        <KpiCard 
          title="Active Tickets" 
          value="28" 
          change="-4.5%" 
          trend="down" 
          comparison="vs yesterday" 
          icon={Wrench} 
        />
        <KpiCard 
          title="Rental Contracts" 
          value="156" 
          change="+2.4%" 
          trend="up" 
          comparison="vs last week" 
          icon={Key} 
        />
        <KpiCard 
          title="Active AMC" 
          value="89" 
          change="+0.0%" 
          trend="neutral" 
          comparison="vs last month" 
          icon={FileSignature} 
        />
        <KpiCard 
          title="Pending Payments" 
          value="14" 
          change="+3" 
          trend="down" 
          comparison="needs attention" 
          icon={AlertCircle} 
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        <RevenueChart />
        <RecentOrders />
      </div>
    </>
  )
}
