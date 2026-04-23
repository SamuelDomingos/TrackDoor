import { ResidentFormData } from "@/app/[id]/(private)/buildings/[apartmentId]/_schemas/residentSchema"

export interface ResidentResponse {
  id: string
  name: string
  email: string
  phone: string | null
  apartmentId: string
  createdAt: string
}

export async function postResident(
  data: ResidentFormData & { apartmentId: string }
) {
  const response = await fetch("/api/private/residents", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || "Erro ao criar morador")
  }

  return response.json() as Promise<ResidentResponse>
}

export async function putResident(id: string, data: Partial<ResidentFormData>) {
  const response = await fetch(`/api/private/residents/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || "Erro ao atualizar morador")
  }

  return response.json() as Promise<ResidentResponse>
}

export async function deleteResident(id: string) {
  const response = await fetch(`/api/private/residents/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || "Erro ao excluir morador")
  }

  return response.json() as Promise<{ message: string }>
}
