import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function createResident(data: {
  name: string
  email: string
  phone?: string
  password?: string
  apartmentId: string
}) {
  try {
    const hashedPassword = data.password
      ? await bcrypt.hash(data.password, 10)
      : undefined

    const resident = await prisma.resident.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: hashedPassword,
        apartmentId: data.apartmentId,
      },
    })
    return { success: true, data: resident }
  } catch (error) {
    console.error("Error creating resident:", error)
    return { success: false, error: "Erro ao criar morador." }
  }
}

export async function updateResident(
  id: string,
  data: Partial<{
    name: string
    email: string
    phone?: string
    password?: string
  }>
) {
  try {
    const updateData: any = { ...data }
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10)
    }

    const resident = await prisma.resident.update({
      where: { id },
      data: updateData,
    })
    return { success: true, data: resident }
  } catch (error) {
    console.error("Error updating resident:", error)
    return { success: false, error: "Erro ao atualizar morador." }
  }
}

export async function deleteResident(id: string) {
  try {
    await prisma.resident.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    console.error("Error deleting resident:", error)
    return { success: false, error: "Erro ao excluir morador." }
  }
}

export async function getPackagesByResident(residentId: string) {
  const resident = await prisma.resident.findUnique({
    where: { id: residentId },
    select: { apartmentId: true },
  })

  if (!resident) throw new Error("Resident not found")

  return prisma.package.findMany({
    where: {
      apartmentId: resident.apartmentId,
      status: { in: ["PENDING", "DELIVERED"] },
    },
    include: {
      images: true,
      logs: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
    orderBy: { createdAt: "desc" },
  })
}

export async function getPackageDetails(packageId: string, residentId: string) {
  const resident = await prisma.resident.findUnique({
    where: { id: residentId },
    select: { apartmentId: true },
  })

  if (!resident) throw new Error("Resident not found")

  const pkg = await prisma.package.findUnique({
    where: { id: packageId },
    include: {
      images: true,
      logs: {
        orderBy: { createdAt: "desc" },
      },
    },
  })

  if (!pkg) throw new Error("Package not found")
  if (pkg.apartmentId !== resident.apartmentId) throw new Error("Unauthorized access to package")

  return pkg
}
