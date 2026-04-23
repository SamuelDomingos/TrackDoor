import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ResidentFormData, residentSchema } from "../_schemas/residentSchema"
import { postResident, putResident } from "@/lib/api/residents"
import { Resident } from "@/app/generated/client"

export function useFormResident(apartmentId: string) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedResident, setSelectedResident] = useState<Resident | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ResidentFormData>({
    resolver: zodResolver(residentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const openCreateDialog = () => {
    setSelectedResident(null)
    form.reset({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setIsDialogOpen(true)
  }

  const openEditDialog = (resident: Resident) => {
    setSelectedResident(resident)
    form.reset({
      name: resident.name,
      phone: resident.phone || "",
      email: resident.email || "",
      password: "",
      confirmPassword: "",
    })
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    form.reset()
  }

  const onSubmit = async (data: ResidentFormData) => {
    setIsLoading(true)
    try {
      if (selectedResident) {
        // Modo Edição
        await putResident(selectedResident.id, {
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password || undefined,
        })
      } else {
        // Modo Criação
        await postResident({
          ...data,
          apartmentId,
        })
      }
      closeDialog()
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro inesperado ao processar a requisição"
      form.setError("root", {
        message: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    form,
    isLoading,
    isDialogOpen,
    selectedResident,
    openCreateDialog,
    openEditDialog,
    closeDialog,
    onSubmit,
  }
}
