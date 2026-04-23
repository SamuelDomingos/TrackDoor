import z from "zod"

export const registrationSchema = z
  .object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirme sua senha"),
    condominiumName: z.string().min(2, "O nome do condomínio é obrigatório"),
    address: z.string().min(5, "O endereço é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export const userSchema = z
  .object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export const condominiumSchema = z.object({
  condominiumName: z.string().min(2, "O nome do condomínio é obrigatório"),
  address: z.string().min(5, "O endereço é obrigatório"),
})

export type RegistrationFormValues = z.infer<typeof registrationSchema>
export type UserFormValues = z.infer<typeof userSchema>
export type CondominiumFormValues = z.infer<typeof condominiumSchema>
