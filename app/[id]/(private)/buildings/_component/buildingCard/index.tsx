import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconBuildingBridge2 } from "@tabler/icons-react"
import BuildingCardApartments from "./building-card-Apartments"
import { BuildingCardActions } from "./building-card-actions"

export function BuildingCard({
  building,
}: {
  building: {
    id: string
    name: string
    condominiumId: string
    apartments: {
      id: string
      number: string
      _count: {
        packages: number
      }
    }[]
  }
}) {
  return (
    <Card className="rounded-xl border-border bg-card shadow-none">
      <CardHeader className="px-4 pt-4 pb-3">
        <CardTitle className="flex items-center justify-between text-lg font-bold text-white">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-md bg-muted">
              <IconBuildingBridge2 className="size-3.5 text-muted-foreground" />
            </span>
            {building.name}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {building.apartments.reduce((s, a) => s + a._count.packages, 0) >
                0 && (
                <Badge
                  variant="outline"
                  className="gap-1.5 rounded-full border-destructive px-3 py-1 font-normal text-destructive"
                >
                  {building.apartments.reduce(
                    (s, a) => s + a._count.packages,
                    0
                  )}{" "}
                  pendente
                  {building.apartments.reduce(
                    (s, a) => s + a._count.packages,
                    0
                  ) !== 1 && "s"}
                </Badge>
              )}
              <Badge
                variant="outline"
                className="gap-1.5 rounded-full border-border px-3 py-1 font-normal text-muted-foreground"
              >
                <span className="font-medium text-white">
                  {building.apartments.length}
                </span>{" "}
                apts
              </Badge>
            </div>
            <BuildingCardActions
              buildingId={building.id}
              buildingName={building.name}
              condominiumId={building.condominiumId}
            />
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        <BuildingCardApartments
          apartments={building.apartments}
          buildingId={building.id}
        />
      </CardContent>
    </Card>
  )
}
