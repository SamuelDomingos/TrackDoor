import {
  CondominiumCreateInput,
  UserCreateManyInput,
} from "@/app/generated/models"

export const register = async (
  values: UserCreateManyInput & CondominiumCreateInput
) => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })

  if (!response.ok) {
    const data = await response.json()
    return data
  }
}
