import { Button } from "@/components/ui/button"
import { IconUserPlus } from "@tabler/icons-react"

const ResidentsActions = ({ openCreateDialog }: { openCreateDialog: () => void }) => {
  return (
    <Button
      variant="outline"
      onClick={openCreateDialog}
      className="flex h-22 items-center justify-center gap-2 rounded-xl border-dashed border-border bg-transparent text-muted-foreground hover:bg-accent hover:text-white"
    >
      <IconUserPlus className="size-5" />
      <span className="font-bold">Adicionar Novo Morador</span>
    </Button>
  )
}

export default ResidentsActions
