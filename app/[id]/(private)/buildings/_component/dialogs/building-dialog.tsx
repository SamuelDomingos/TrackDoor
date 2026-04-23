"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Controller } from "react-hook-form"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Loader2 } from "lucide-react"
import { IconPlus } from "@tabler/icons-react"
import { useFormBuilding } from "../../_hooks/useFormBuilding"

export function BuildingDialog({
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
  condominiumId,
  building,
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  condominiumId: string
  building?: {
    id: string
    name: string
  }
}) {
  
  const { formBuilding, isLoading, handleSubmit, open, onOpenChange } =
    useFormBuilding({
      condominiumId,
      buildingId: building?.id,
      initialValues: building ? { name: building.name } : {},
      externalOpen,
      externalOnOpenChange,
    })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {!building && (
        <DialogTrigger asChild>
          <button className="group flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-accent">
            <div className="flex size-10 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary/20">
              <IconPlus className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <span className="text-lg font-medium text-white">
              Adicionar nova torre
            </span>
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="border-border bg-card text-white sm:max-w-106.25">
        <form onSubmit={formBuilding.handleSubmit(handleSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {building ? "Editar Torre" : "Nova Torre"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {building
                ? "Atualize as informações da torre selecionada."
                : "Insira o nome da torre para adicioná-la ao condomínio."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-6">
            <Controller
              name="name"
              control={formBuilding.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="building-name">Nome da Torre</FieldLabel>
                  <Input
                    {...field}
                    id="building-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ex: Torre A, Bloco 1..."
                    className="border-border bg-background text-white"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-border text-muted-foreground hover:bg-accent"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              variant={'default'}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading
                ? "Processando..."
                : building
                  ? "Salvar Alterações"
                  : "Criar Torre"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
