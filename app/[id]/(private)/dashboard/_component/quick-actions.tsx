"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClockAlert } from "lucide-react"

interface AlertItem {
  id: string
  message: string
  date: string
}

const MOCK_ALERTS: AlertItem[] = [
  {
    id: "1",
    message: "Apt 402 - Torre B: Pacote não retirado desde 06/04.",
    date: "10 min atrás",
  },
  {
    id: "2",
    message: "Apt 105 - Torre A: Pacote não retirado desde 08/04.",
    date: "2 horas atrás",
  },
  {
    id: "3",
    message: "Apt 201 - Torre C: Alerta de entrega pendente.",
    date: "5 horas atrás",
  },
]

export function QuickActions() {
  return (
    <Card className="h-full w-full rounded-[16px] border-none bg-transparent text-white">
      <CardHeader className="bg-transparent p-6 pb-2">
        <CardTitle className="text-[20px] font-bold text-white">
          Alertas Críticos
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 bg-transparent p-6 pt-2">
        {MOCK_ALERTS.map((alert) => (
          <div
            key={alert.id}
            className="relative flex h-20 items-center justify-between rounded-[12px] border-2 border-destructive bg-destructive/10 p-4 pl-11 transition-colors hover:bg-destructive/20"
          >
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <ClockAlert className="h-5 w-5 text-destructive" />
            </div>

            {/* Alert Message */}
            <div className="flex flex-col gap-1">
              <p className="text-sm leading-tight font-normal text-muted-foreground">
                {alert.message}
              </p>
              <span className="text-xs text-muted-foreground/60">{alert.date}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
