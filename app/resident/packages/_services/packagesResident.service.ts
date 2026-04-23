import prisma from "@/lib/prisma"

export async function getResidentPackages(email: string) {
  const resident = await prisma.resident.findFirst({
    where: { email },
    select: { apartmentId: true },
  })

  if (!resident) {
    throw new Error("Residente não encontrado")
  }

  return await prisma.package.findMany({
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

export async function getResidentProfile(email: string) {
  return await prisma.resident.findFirst({
    where: { email },
    select: { name: true, apartmentId: true },
  })
}
