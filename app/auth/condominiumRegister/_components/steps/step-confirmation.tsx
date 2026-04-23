import { Stepper } from "../../_stepper/define"

export default function StepConfirmation({ form }: { form: any }) {
  const values = form.getValues()

  return (
    <Stepper.Content step={"confirmation"}>
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold">Confirme seus dados</h2>
        <div className="grid grid-cols-1 gap-6 rounded-lg border bg-muted/30 p-4 md:grid-cols-2">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase">
              Nome Completo
            </p>
            <p className="text-sm font-medium">
              {values.name || "Não informado"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase">
              E-mail
            </p>
            <p className="text-sm font-medium">
              {values.email || "Não informado"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase">
              Condomínio
            </p>
            <p className="text-sm font-medium">
              {values.condominiumName || "Não informado"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase">
              Endereço
            </p>
            <p className="text-sm font-medium">
              {values.address || "Não informado"}
            </p>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Por favor, verifique se todas as informações estão corretas antes de
          finalizar.
        </p>
      </div>
    </Stepper.Content>
  )
}
