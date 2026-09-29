import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Acme Corp",
    date: "2026-10-24",
    amount: "₹1,24,000",
    status: "Completed",
    type: "Sales",
  },
  {
    id: "SRV-082",
    customer: "Global Tech",
    date: "2026-10-23",
    amount: "₹45,500",
    status: "In Progress",
    type: "Service",
  },
  {
    id: "RNT-109",
    customer: "Stark Industries",
    date: "2026-10-23",
    amount: "₹12,000 / mo",
    status: "Active",
    type: "Rental",
  },
  {
    id: "AMC-005",
    customer: "Wayne Enterprises",
    date: "2026-10-22",
    amount: "₹2,50,000",
    status: "Pending",
    type: "AMC",
  },
  {
    id: "ORD-002",
    customer: "Daily Planet",
    date: "2026-10-21",
    amount: "₹89,000",
    status: "Completed",
    type: "Sales",
  },
]

export function RecentOrders() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.type}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      order.status === 'Completed' || order.status === 'Active' 
                        ? 'completed' 
                        : order.status === 'Pending' 
                        ? 'pending' 
                        : 'default'
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">{order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
