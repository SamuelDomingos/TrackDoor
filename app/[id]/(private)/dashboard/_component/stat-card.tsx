
import React from "react"
import * as LucideIcons from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatCard({
  title,
  value,
  iconName,
  subtext,
  subtextColor = "text-muted-foreground",
  strokeColor = "border-border",
}: {
  title: string
  value: string | number
  iconName: string
  subtext: string
  subtextColor?: string
  strokeColor?: string
}) {
  const Icon = (LucideIcons as unknown as Record<string, React.ElementType>)[
    iconName
  ]

  return (
    <Card
      className={cn(
        "relative flex h-40 w-full max-w-75 flex-col gap-1 overflow-hidden rounded-[16px] border bg-card p-6",
        strokeColor
      )}
    >
      <p className="mb-1 text-[14px] font-normal text-muted-foreground">
        {title}
      </p>
      <p className="mb-2 text-[48px] leading-none font-bold text-foreground">
        {value}
      </p>
      <p className={cn("text-[12px] font-normal", subtextColor)}>{subtext}</p>

      {Icon && (
        <div className="pointer-events-none absolute -right-2.5 -bottom-2.5 text-foreground opacity-20">
          <Icon className={cn("h-20 w-20", subtextColor)} strokeWidth={2} />
        </div>
      )}
    </Card>
  )
}
