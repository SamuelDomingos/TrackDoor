import prisma from "@/lib/prisma"
import { ApartmentCreateManyInput, ApartmentUncheckedUpdateManyInput } from "@/app/generated/models"
import { PackageStatus } from "@prisma/client"

export class ApartmentService {
  async getApartmentDetails(id: string) {
    const apartment = await prisma.apartment.findUnique({
      where: { id },
      include: {
        residents: true,
        packages: {
          where: { status: PackageStatus.PENDING },
          orderBy: { createdAt: "desc" },
        },
      },
    })

    if (!apartment) throw new Error("Apartment not found")

    return apartment
  }

  async createApartments(data: ApartmentCreateManyInput[]) {
    return prisma.apartment.createMany({
      data,
    })
  }

  async updateApartment(id: string, data: ApartmentUncheckedUpdateManyInput) {
    return prisma.apartment.update({
      where: { id },
      data,
    })
  }

  async deleteApartment(id: string) {
    return prisma.apartment.delete({
      where: { id },
    })
  }
}
