"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", current: 4000, previous: 2400 },
  { name: "Feb", current: 3000, previous: 1398 },
  { name: "Mar", current: 2000, previous: 9800 },
  { name: "Apr", current: 2780, previous: 3908 },
  { name: "May", current: 1890, previous: 4800 },
  { name: "Jun", current: 2390, previous: 3800 },
  { name: "Jul", current: 3490, previous: 4300 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Revenue Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹${value}`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-3 shadow-md">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Current
                            </span>
                            <span className="font-bold text-foreground">
                              ₹{payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Previous
                            </span>
                            <span className="font-bold text-muted-foreground">
                              ₹{payload[1].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line
                type="monotone"
                dataKey="current"
                stroke="currentColor"
                strokeWidth={2}
                dot={false}
                className="text-foreground"
              />
              <Line
                type="monotone"
                dataKey="previous"
                stroke="currentColor"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
                className="text-muted-foreground"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
