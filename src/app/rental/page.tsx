import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Maximize, Key } from "lucide-react"

const assets = [
  { id: "AST-8472", name: "Industrial Generator X5", category: "Heavy Equipment", status: "Available", price: "₹15,000/day" },
  { id: "AST-8473", name: "Forklift Pro Max", category: "Warehouse", status: "Rented", currentCustomer: "Wayne Enterprises", returnDate: "2026-10-30", price: "₹5,000/day" },
  { id: "AST-8474", name: "Server Rack Alpha", category: "IT Infrastructure", status: "Maintenance", price: "₹2,000/day" },
]

export default function RentalPage() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Rental Fleet Management</h1>
          <p className="text-muted-foreground">Track asset availability, utilization, and contracts.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Asset
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {assets.map((asset) => (
          <Card key={asset.id} className="flex flex-col overflow-hidden transition-all hover:shadow-md">
            <div className="h-48 bg-muted flex items-center justify-center border-b border-border/50 relative group">
              <Key className="h-12 w-12 text-muted-foreground/30 transition-transform group-hover:scale-110" />
              <div className="absolute top-4 right-4">
                <Badge 
                  variant={
                    asset.status === 'Available' ? 'completed' : 
                    asset.status === 'Rented' ? 'default' : 'pending'
                  }
                >
                  {asset.status}
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{asset.name}</CardTitle>
                  <CardDescription className="mt-1">{asset.id} • {asset.category}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end">
              <div className="flex justify-between items-center py-3 border-t border-border/50">
                <span className="text-sm font-medium text-muted-foreground">Rate</span>
                <span className="font-semibold">{asset.price}</span>
              </div>
              {asset.status === 'Rented' && (
                <div className="flex justify-between items-center py-3 border-t border-border/50 text-sm">
                  <span className="text-muted-foreground">Return by</span>
                  <span className="font-medium">{asset.returnDate}</span>
                </div>
              )}
              <Button variant="outline" className="w-full mt-4 gap-2">
                <Maximize className="h-4 w-4" />
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
