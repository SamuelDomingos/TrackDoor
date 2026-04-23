import prisma from "@/lib/prisma";

export class DeliveryService {
  async getBuildingsForDelivery() {
    return await prisma.building.findMany({
      include: {
        apartments: {
          select: {
            id: true,
            number: true,
          },
        },
      },
    });
  }
}
