import { Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Stepper } from "../../_stepper/define"

export default function Step1User({ form }: { form: any }) {
  return (
    <Stepper.Content step={"user-info"}>
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold">Informações do Administrador</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="reg-name">Nome Completo</FieldLabel>
                <Input
                  {...field}
                  id="reg-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Ex: Samuel Silva"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="reg-email">E-mail</FieldLabel>
                <Input
                  {...field}
                  id="reg-email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="email@exemplo.com"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="reg-password">Senha</FieldLabel>
                <Input
                  {...field}
                  id="reg-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="******"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="reg-confirm-password">Confirmar Senha</FieldLabel>
                <Input
                  {...field}
                  id="reg-confirm-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="******"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
      </div>
    </Stepper.Content>
  )
}
