import { Card, CardContent } from "@/components/ui/card"
import { IconUser } from "@tabler/icons-react"
import { Resident } from "@/app/generated/client"

const CardResident = ({
  resident,
  openEditDialog,
}: {
  resident: Resident
  openEditDialog: (resident: Resident) => void
}) => {
  return (
    <Card
      key={resident.id}
      className="group cursor-pointer rounded-xl border-border bg-card shadow-none transition-colors hover:bg-accent/50"
      onClick={() => openEditDialog(resident)}
    >
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex size-14 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-muted-foreground/20">
          <IconUser className="size-7 text-muted-foreground" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-white">{resident.name}</p>
          <p className="text-xs text-muted-foreground">
            {resident.phone || "Sem telefone"} • {resident.id.slice(0, 8)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardResident
