export const postApartment = async (values: { number: string; buildingId: string }) => {
  const response = await fetch("/api/private/apartments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify([values]),
  })

  const data = await response.json()

  if (!response.ok) {
    return {
      success: false,
      error: data.error || "Erro ao criar apartamento",
    }
  }

  return { success: true, data }
}
