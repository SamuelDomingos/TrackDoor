import { Badge } from "@/components/ui/badge"

export function BuildingsHeader({
  totalApts,
  totalPending,
  totalTowers,
}: {
  totalApts: number
  totalPending: number
  totalTowers: number
}) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <h1 className="text-2xl font-bold tracking-tight text-white">
        Gestão de Torres e Apartamentos
      </h1>

      <div className="flex flex-wrap justify-center gap-2">
        <Badge
          variant="outline"
          className="gap-1.5 rounded-full border-border px-3 py-1 font-normal text-muted-foreground"
        >
          <span className="inline-block size-2 rounded-full bg-green-500" />
          <span className="font-medium text-white">{totalApts}</span> apts
        </Badge>
        <Badge
          variant="outline"
          className="gap-1.5 rounded-full border-destructive px-3 py-1 font-normal text-destructive"
        >
          <span className="inline-block size-2 rounded-full bg-destructive" />
          <span className="font-medium">{totalPending}</span>{" "}
          {totalPending === 1 ? "pendente" : "pendentes"}
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-border px-3 py-1 font-normal text-muted-foreground"
        >
          {totalTowers} torres
        </Badge>
      </div>
    </div>
  )
}
