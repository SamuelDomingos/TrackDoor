"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStepper } from "../_stepper/define"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { z } from "zod"
import { register } from "@/lib/api/register"
import {
  CondominiumCreateInput,
  UserCreateManyInput,
} from "@/app/generated/models"

export default function useRegistrationForm() {
  const stepper = useStepper()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const schema = stepper.state.current.data.schema as
    | z.ZodObject<Record<string, z.ZodTypeAny>>
    | undefined

  const form = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      condominiumName: "",
      address: "",
    },
  })

  const submitForm = async () => {
    setIsLoading(true)
    try {
      const values = form.getValues()

      await register(
        values as unknown as UserCreateManyInput & CondominiumCreateInput
      )

      toast.success("Cadastro realizado com sucesso!")
      router.push("/auth")
    } catch {
      toast.error("Erro de conexão com o servidor")
    } finally {
      setIsLoading(false)
    }
  }

  const onValid = async () => {
    if (stepper.state.isLast) {
      await submitForm()
    } else {
      stepper.navigation.next()
    }
  }

  return { form, isLoading, onValid, stepper }
}
