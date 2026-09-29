import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, ShieldAlert, FileSignature } from "lucide-react"

const contracts = [
  { id: "AMC-2026-001", customer: "Stark Industries", type: "Comprehensive", coverage: "All IT Assets", status: "Active", expiry: "2027-10-01" },
  { id: "AMC-2026-002", customer: "Wayne Enterprises", type: "Non-Comprehensive", coverage: "HVAC Systems", status: "Expiring Soon", expiry: "2026-11-15" },
  { id: "AMC-2026-003", customer: "Acme Corp", type: "Comprehensive", coverage: "Generators", status: "Expired", expiry: "2026-09-30" },
]

export default function AMCPage() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">AMC Contracts</h1>
          <p className="text-muted-foreground">Manage Annual Maintenance Contracts and renewals.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Contract
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {contracts.map((contract) => (
          <Card key={contract.id} className="relative overflow-hidden transition-colors hover:border-foreground/40 group">
            {contract.status === 'Expiring Soon' && (
              <div className="absolute top-0 left-0 w-1 h-full bg-foreground" />
            )}
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-muted p-3 mt-1">
                  <FileSignature className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold">{contract.customer}</h3>
                    <Badge 
                      variant={
                        contract.status === 'Active' ? 'completed' : 
                        contract.status === 'Expired' ? 'outline' : 'default'
                      }
                    >
                      {contract.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>ID: {contract.id}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>Type: {contract.type}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>Coverage: {contract.coverage}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
                  <div className="flex items-center gap-2 font-medium">
                    {contract.status === 'Expiring Soon' && <ShieldAlert className="h-4 w-4" />}
                    {contract.expiry}
                  </div>
                </div>
                <Button variant="outline">View Contract</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
