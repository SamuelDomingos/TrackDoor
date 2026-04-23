"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Loader2 } from "lucide-react"
import useDeleteBuilding from "../../_hooks/useDeleteBuilding"

export function DeleteBuildingDialog({
  open,
  onOpenChange,
  buildingId,
  buildingName,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  buildingId: string
  buildingName: string
}) {
  const { isLoading, handleDelete } = useDeleteBuilding({
    buildingId,
    onOpenChange,
  })

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="border-border bg-card text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">
            Tem certeza que deseja deletar a torre{" "}
            <strong>{buildingName}</strong>? Esta ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-border text-muted-foreground hover:bg-accent">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault()
              handleDelete()
            }}
            disabled={isLoading}
            variant={"destructive"}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Deletar Torre
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
