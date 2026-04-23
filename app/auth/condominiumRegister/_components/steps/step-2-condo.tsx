import { Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Stepper } from "../../_stepper/define"

export default function Step2Condo({ form }: { form: any }) {
  return (
    <Stepper.Content step={"condo-info"}>
      <div className="space-y-4">
        <h2 className="mb-4 text-xl font-bold">Dados do Condomínio</h2>
        <Controller
          name="condominiumName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="reg-condo-name">
                Nome do Condomínio
              </FieldLabel>
              <Input
                {...field}
                id="reg-condo-name"
                aria-invalid={fieldState.invalid}
                placeholder="Ex: Residencial Solar das Palmeiras"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="address"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="reg-address">Endereço Completo</FieldLabel>
              <Input
                {...field}
                id="reg-address"
                aria-invalid={fieldState.invalid}
                placeholder="Rua, Número, Bairro, Cidade - UF"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </Stepper.Content>
  )
}
