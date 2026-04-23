import { BuildingCreateManyInput } from "@/app/generated/models"

export const postBuilding = async (values: BuildingCreateManyInput) => {
  const response = await fetch("/api/private/buildings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })

  const data = await response.json()

  if (!response.ok) {
    return {
      success: false,
      error: data.message || "Erro ao criar torre",
    }
  }

  return { success: true, data }
}

export const deleteBuilding = async (id: string) => {
  const response = await fetch(`/api/private/buildings/${id}`, {
    method: "DELETE",
  })

  const data = await response.json()

  if (!response.ok) {
    return {
      success: false,
      error: data.message || "Erro ao deletar torre",
    }
  }

  return { success: true, data }
}

export const putBuilding = async (id: string, values: { name: string }) => {
  const response = await fetch(`/api/private/buildings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })

  const data = await response.json()

  if (!response.ok) {
    return {
      success: false,
      error: data.message || "Erro ao atualizar torre",
    }
  }

  return { success: true, data }
}
