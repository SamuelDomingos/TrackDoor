import { BuildingCard } from "./_component/buildingCard"
import { BuildingsHeader } from "./_component/buildings-header"
import { BuildingsSearch } from "./_component/buildings-search"
import { BuildingDialog } from "./_component/dialogs/building-dialog"
import { getBuildings } from "./_services/buildings.service"

export default async function BuildingsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id: condominiumId } = await params
  const { buildings, totalTowers, totalApts, totalPending } =
    await getBuildings(condominiumId)

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-background p-0 lg:p-0">
      <BuildingsHeader
        totalApts={totalApts}
        totalPending={totalPending}
        totalTowers={totalTowers}
      />

      <BuildingsSearch />

      <div className="max-w mx-auto flex w-full flex-col gap-6">
        {buildings.map((building) => (
          <BuildingCard key={building.id} building={building} />
        ))}

        <BuildingDialog condominiumId={condominiumId} />
      </div>
    </div>
  )
}
