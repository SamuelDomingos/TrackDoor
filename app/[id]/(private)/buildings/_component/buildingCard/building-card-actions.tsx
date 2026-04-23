"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react"
import { BuildingDialog } from "../dialogs/building-dialog"
import { DeleteBuildingDialog } from "../dialogs/delete-building-dialog"

export function BuildingCardActions({
  buildingId,
  buildingName,
  condominiumId,
}: {
  buildingId: string
  buildingName: string
  condominiumId: string
}) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 p-0 text-muted-foreground hover:text-white"
          >
            <IconDotsVertical className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border-border bg-card text-white"
        >
          <DropdownMenuItem
            className="cursor-pointer gap-2 text-muted-foreground hover:text-white"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <IconEdit className="size-4" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            <IconTrash className="size-4" />
            Deletar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <BuildingDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        condominiumId={condominiumId}
        building={{
          id: buildingId,
          name: buildingName,
        }}
      />
      <DeleteBuildingDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        buildingId={buildingId}
        buildingName={buildingName}
      />
    </>
  )
}
