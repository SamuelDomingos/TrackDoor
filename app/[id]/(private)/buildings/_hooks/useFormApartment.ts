"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { apartmentSchema, ApartmentFormValues } from "../_schema/apartmentSchema"
import { postApartment } from "@/lib/api/apartment"

interface UseFormApartmentProps {
  buildingId: string
  onSuccess?: () => void
}

export function useFormApartment({ buildingId, onSuccess }: UseFormApartmentProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const formApartment = useForm<ApartmentFormValues>({
    resolver: zodResolver(apartmentSchema),
    defaultValues: { number: "" },
  })

  async function handleSubmit(values: ApartmentFormValues) {
    setIsLoading(true)
    try {
      const result = await postApartment({
        number: values.number,
        buildingId,
      })

      if (!result.success) {
        throw new Error(result.error || "Erro ao criar apartamento")
      }

      toast.success("Apartamento criado com sucesso!")
      formApartment.reset()

      router.refresh()
      if (onSuccess) onSuccess()

      return { success: true }
    } catch (error: any) {
      toast.error("Erro ao criar apartamento", {
        description: error.message || "Ocorreu um erro inesperado",
      })
      return { success: false }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formApartment,
    isLoading,
    handleSubmit,
  }
}
