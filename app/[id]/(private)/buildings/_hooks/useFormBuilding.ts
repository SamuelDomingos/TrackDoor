"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { buildingSchema, BuildingFormValues } from "../_schema/buildingSchema"
import { postBuilding, putBuilding } from "@/lib/api/building"

interface UseFormBuildingProps {
  condominiumId: string
  buildingId?: string
  initialValues?: Partial<BuildingFormValues>
  onSuccess?: () => void
  externalOpen?: boolean
  externalOnOpenChange?: (open: boolean) => void
}

export function useFormBuilding({
  condominiumId,
  buildingId,
  initialValues,
  onSuccess,
  externalOpen,
  externalOnOpenChange,
}: UseFormBuildingProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [internalOpen, setInternalOpen] = useState(false)

  const open = externalOpen ?? internalOpen
  const onOpenChange = (val: boolean) => {
    if (externalOnOpenChange) {
      externalOnOpenChange(val)
    } else {
      setInternalOpen(val)
    }
  }

  const formBuilding = useForm<BuildingFormValues>({
    resolver: zodResolver(buildingSchema),
    defaultValues: {
      name: initialValues?.name || "",
    },
  })

  async function handleSubmit(values: BuildingFormValues) {
    setIsLoading(true)
    try {
      let result
      if (buildingId) {
        result = await putBuilding(buildingId, values)
      } else {
        result = await postBuilding({
          name: values.name,
          condominiumId,
        })
      }

      if (!result.success) {
        throw new Error(result.error || "Erro ao processar torre")
      }

      toast.success(
        buildingId
          ? "Torre atualizada com sucesso!"
          : "Torre criada com sucesso!"
      )
      formBuilding.reset()

      onOpenChange(false)
      router.refresh()
      if (onSuccess) onSuccess()

      return { success: true }
    } catch (error: any) {
      toast.error(
        buildingId ? "Erro ao atualizar torre" : "Erro ao criar torre",
        {
          description: error.message || "Ocorreu um erro inesperado",
        }
      )
      return { success: false }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (buildingId && initialValues?.name) {
      formBuilding.reset({
        name: initialValues.name
      })
    }
  }, [buildingId])

  return {
    formBuilding,
    isLoading,
    handleSubmit,
    open,
    onOpenChange,
  }
}
