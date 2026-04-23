import { Controller } from "react-hook-form"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import { IconCamera } from "@tabler/icons-react"

import { UseFormReturn } from "react-hook-form"
import { Resident } from "@/app/generated/client"
import { ResidentFormData } from "../../_schemas/residentSchema"

export function ResidentForm({
  form,
  isLoading,
  isDialogOpen,
  selectedResident,
  closeDialog,
  onSubmit,
}: {
  form: UseFormReturn<ResidentFormData>
  isLoading: boolean
  isDialogOpen: boolean
  selectedResident: Resident | null
  closeDialog: () => void
  onSubmit: (data: ResidentFormData) => Promise<void>
}) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent className="max-w-2xl rounded-2xl border-border bg-card text-white">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedResident ? "Editar Morador" : "Cadastrar Novo Morador"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="flex flex-col items-center gap-3">
              <div className="relative flex size-28 items-center justify-center overflow-hidden rounded-full border-2 border-primary bg-muted">
                <IconCamera className="size-8 text-muted-foreground" />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-primary hover:bg-primary/10 hover:text-primary"
              >
                Adicionar Foto
              </Button>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="resident-name">
                      Nome Completo
                    </FieldLabel>
                    <Input
                      {...field}
                      id="resident-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Ex: Ricardo Silva"
                      className="border-border bg-muted text-white"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="resident-phone">Telefone</FieldLabel>
                    <Input
                      {...field}
                      id="resident-phone"
                      aria-invalid={fieldState.invalid}
                      placeholder="(00) 00000-0000"
                      className="border-border bg-muted text-white"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="sm:col-span-2"
                  >
                    <FieldLabel htmlFor="resident-email">E-mail</FieldLabel>
                    <Input
                      {...field}
                      id="resident-email"
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="email@exemplo.com"
                      className="border-border bg-muted text-white"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="resident-password">Senha</FieldLabel>
                    <Input
                      {...field}
                      id="resident-password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      placeholder="******"
                      className="border-border bg-muted text-white"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="resident-confirm-password">
                      Confirmar Senha
                    </FieldLabel>
                    <Input
                      {...field}
                      id="resident-confirm-password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      placeholder="******"
                      className="border-border bg-muted text-white"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={closeDialog}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading
                ? "Processando..."
                : selectedResident
                  ? "Salvar Alterações"
                  : "Criar Morador"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
