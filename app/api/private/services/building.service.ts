import prisma from "@/lib/prisma"
import {
  BuildingCreateManyInput,
  BuildingUncheckedUpdateManyInput,
} from "@/app/generated/models"

export class BuildingService {

  async createBuilding(data: BuildingCreateManyInput) {
    return prisma.building.create({
      data,
    })
  }

  async updateBuilding(id: string, data: BuildingUncheckedUpdateManyInput) {
    return prisma.building.update({
      where: { id },
      data,
    })
  }

  async deleteBuilding(id: string) {
    return prisma.building.delete({
      where: { id },
    })
  }
}
