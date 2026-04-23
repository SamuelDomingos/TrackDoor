"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getSession, signIn } from "next-auth/react"
import { toast } from "sonner"
import { LoginFormValues, loginSchema } from "../_schema/authSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function useFormAuth() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const formLogin = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  async function handleLogin(values: LoginFormValues) {
    setIsLoading(true)
    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      })

      if (result?.error) throw new Error(result.error)

      const session = await getSession()
      const condominiumId = (session?.user as any)?.condominiumId

      if (!condominiumId) {
        throw new Error("Condominium não encontrado")
      }

      router.push(`/${condominiumId}/dashboard`)
      router.refresh()
    } catch (error: any) {
      toast.error("Erro de Autenticação", {
        description: error.message || "E-mail ou senha incorretos",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formLogin,
    isLoading,
    handleLogin,
  }
}
