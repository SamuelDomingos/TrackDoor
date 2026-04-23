import { defineStepper } from "@stepperize/react"
import { condominiumSchema, userSchema } from "../_schemas/registrationSchema"

export const { Stepper, useStepper, Scoped } = defineStepper(
  { id: "user-info", title: "Dados do Administrador", schema: userSchema },
  { id: "condo-info", title: "Dados do Condomínio", schema: condominiumSchema },
  { id: "confirmation", title: "Confirmação", schema: undefined }
)

export type StepId = "user-info" | "condo-info" | "confirmation"
