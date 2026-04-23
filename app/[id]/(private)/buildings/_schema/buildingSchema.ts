import { z } from "zod"

export const buildingSchema = z.object({
  name: z.string().min(1, "O nome da torre é obrigatório"),
})

export type BuildingFormValues = z.infer<typeof buildingSchema>
