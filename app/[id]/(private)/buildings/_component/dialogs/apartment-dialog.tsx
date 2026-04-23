"use client"

import { useState } from "react"
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
import { useFormApartment } from "../../_hooks/useFormApartment"

interface ApartmentDialogProps {
  buildingId: string
  onSuccess?: () => void
}

export function ApartmentDialog({ buildingId, onSuccess }: ApartmentDialogProps) {
  const [open, setOpen] = useState(false)
  const { formApartment, isLoading, handleSubmit } = useFormApartment({
    buildingId,
    onSuccess: () => setOpen(false),
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-transparent text-muted-foreground transition-all hover:border-primary hover:text-primary">
          <IconPlus className="size-6" />
          <span className="text-[10px] font-medium">Adicionar</span>
        </button>
      </DialogTrigger>
      <DialogContent className="border-border bg-card text-white sm:max-w-[425px]">
        <form onSubmit={formApartment.handleSubmit(handleSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Novo Apartamento</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Insira o número do apartamento para adicioná-lo à torre.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-6">
            <Controller
              name="number"
              control={formApartment.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="apartment-number">Número do Apartamento</FieldLabel>
                  <Input
                    {...field}
                    id="apartment-number"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ex: 101, 202..."
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
              onClick={() => setOpen(false)}
              className="border-border text-muted-foreground hover:bg-accent"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Criando..." : "Criar Apartamento"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
