"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormValues, loginSchema } from "@/app/auth/_schema/authSchema"

export function useResidentAuth() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const formLogin = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  async function handleLogin(values: LoginFormValues) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/resident/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erro ao autenticar")
      }

      localStorage.setItem("resident_id", data.resident.id)
      localStorage.setItem("resident_apartmentId", data.resident.apartmentId)

      toast.success("Bem-vindo!")
      router.push("/resident/packages")
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
