import { z } from "zod"

export const apartmentSchema = z.object({
  number: z.string().min(1, "O número do apartamento é obrigatório"),
})

export type ApartmentFormValues = z.infer<typeof apartmentSchema>
