import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PackageX, PackageCheck } from "lucide-react"

interface ActivityItem {
  id: string
  user: string
  packageId: string
  status: "completed" | "pending" | "denied"
  statusLabel: string
  variant: "default" | "secondary" | "destructive" | "outline"
  icon: React.ElementType
}

const MOCK_DATA: ActivityItem[] = [
  {
    id: "1",
    user: "João Silva",
    packageId: "PK-9901",
    status: "denied",
    statusLabel: "Pendente",
    variant: "secondary",
    icon: PackageX,
  },
  {
    id: "2",
    user: "Maria Oliveira",
    packageId: "PK-8823",
    status: "completed",
    statusLabel: "Entregue",
    variant: "default",
    icon: PackageCheck,
  },
  {
    id: "3",
    user: "Carlos Souza",
    packageId: "PK-7741",
    status: "denied",
    statusLabel: "Atrasado",
    variant: "destructive",
    icon: PackageX,
  },
]

export function ActivityTable() {
  return (
    <Card className="h-full w-full rounded-[16px] border-none bg-transparent text-white">
      <CardHeader className="p-6 pb-2">
        <CardTitle className="text-[20px] font-bold text-white">
          Entregas Recentes
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 p-6 pt-2">
        {MOCK_DATA.map((item) => (
          <div
            key={item.id}
            className="relative flex h-20 items-center justify-between rounded-[12px] border bg-card p-4 pl-11"
            style={{
              borderColor:
                item.status === "completed"
                  ? "var(--primary)"
                  : "var(--border)",
            }}
          >
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <item.icon
                className="h-4.5 w-4.5"
                style={{
                  color:
                    item.variant === "destructive"
                      ? "var(--destructive)"
                      : item.variant === "default"
                        ? "var(--primary)"
                        : "var(--muted-foreground)",
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-white">
                {item.user}
              </span>
              <span className="text-xs text-[#888888]">{item.packageId}</span>
            </div>

            <Badge
              variant={item.variant}
              className="h-6 rounded-[12px] border-none px-3 text-[12px] font-normal"
            >
              {item.statusLabel}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
