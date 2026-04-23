"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { ApartmentDialog } from "../dialogs/apartment-dialog"

const BuildingCardApartments = ({
  apartments,
  buildingId,
}: {
  apartments: {
    id: string
    number: string
    _count: {
      packages: number
    }
  }[]
  buildingId: string
}) => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
      {apartments.map((apt) => {
        const pending = apt._count.packages

        return (
          <Button
            key={apt.id}
            variant="outline"
            onClick={() => router.push(`buildings/${apt.id}`)}
            className={cn(
              "flex aspect-square h-auto w-full max-w-20 flex-col items-center justify-center gap-1 rounded-lg border-2 text-white transition-all hover:brightness-110",
              pending > 0
                ? "border-destructive bg-destructive hover:bg-destructive"
                : "border-muted-foreground/30 bg-[#262626] hover:bg-muted"
            )}
          >
            <span
              className={cn(
                "text-sm font-bold",
                pending > 0 ? "text-destructive" : "text-muted-foreground"
              )}
            >
              {apt.number}
            </span>
            {pending > 0 ? (
              <Badge
                variant="destructive"
                className="rounded-full px-1.5 py-0 text-[10px] font-bold"
              >
                {pending}
              </Badge>
            ) : (
              <span className="size-1.5 rounded-full bg-green-500 opacity-60" />
            )}
          </Button>
        )
      })}
      <ApartmentDialog buildingId={buildingId} />
    </div>
  )
}

export default BuildingCardApartments
