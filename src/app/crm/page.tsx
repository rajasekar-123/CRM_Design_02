import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download } from "lucide-react"

const customers = [
  { id: "CUST-001", name: "Acme Corp", contact: "john@acmecorp.com", value: "₹4,50,000", status: "Active" },
  { id: "CUST-002", name: "Global Tech", contact: "sarah@globaltech.io", value: "₹1,25,000", status: "Active" },
  { id: "CUST-003", name: "Stark Industries", contact: "tony@stark.com", value: "₹12,40,000", status: "Active" },
  { id: "CUST-004", name: "Wayne Enterprises", contact: "bruce@wayne.com", value: "₹8,90,000", status: "Active" },
  { id: "CUST-005", name: "Daily Planet", contact: "clark@dailyplanet.com", value: "₹50,000", status: "Inactive" },
]

export default function CRMPage() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Customer Relationship Management</h1>
          <p className="text-muted-foreground">Manage your customer relationships and lifetime value.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Customer
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Customer Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer ID</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Primary Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Lifetime Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((cust) => (
                <TableRow key={cust.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{cust.id}</TableCell>
                  <TableCell>{cust.name}</TableCell>
                  <TableCell className="text-muted-foreground">{cust.contact}</TableCell>
                  <TableCell>
                    <Badge variant={cust.status === 'Active' ? 'completed' : 'pending'}>
                      {cust.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">{cust.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
