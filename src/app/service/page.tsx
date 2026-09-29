import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Clock, CheckCircle2, AlertCircle } from "lucide-react"

const tickets = [
  { id: "SRV-104", issue: "Server Rack Maintenance", priority: "High", status: "In Progress", technician: "Mike R." },
  { id: "SRV-105", issue: "Network Switch Configuration", priority: "Medium", status: "Open", technician: "Unassigned" },
  { id: "SRV-106", issue: "Cooling System Failure", priority: "Critical", status: "Waiting for Parts", technician: "Sarah J." },
  { id: "SRV-107", issue: "Quarterly Hardware Audit", priority: "Low", status: "Completed", technician: "David T." },
]

export default function ServicePage() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Service Desk</h1>
          <p className="text-muted-foreground">Manage support tickets and technician assignments.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Open Tickets", value: "12", icon: AlertCircle },
          { label: "In Progress", value: "8", icon: Clock },
          { label: "Completed (Today)", value: "5", icon: CheckCircle2 },
          { label: "Unassigned", value: "3", icon: AlertCircle },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold tracking-tight mt-1">{stat.value}</h3>
              </div>
              <div className="rounded-full bg-muted p-2">
                <stat.icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        <h2 className="text-xl font-semibold mt-4">Active Tickets</h2>
        <div className="grid grid-cols-1 gap-4">
          {tickets.map((ticket) => (
            <Card key={ticket.id} className="hover:border-foreground/30 transition-colors cursor-pointer">
              <CardContent className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-muted h-12 w-12 rounded-lg font-bold text-xs">
                    {ticket.id.split('-')[1]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{ticket.issue}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">Assigned to: {ticket.technician}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="border-muted-foreground/30">
                    Priority: {ticket.priority}
                  </Badge>
                  <Badge 
                    variant={
                      ticket.status === 'Completed' ? 'completed' : 
                      ticket.status === 'Open' ? 'default' : 'pending'
                    }
                  >
                    {ticket.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
