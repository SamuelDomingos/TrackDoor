import prisma from "@/lib/prisma"

export class DeliveryService {
  async notifyDrawerOpen(apartmentId: string) {
    // Here would be the integration with the hardware to open the drawer
    console.log(`Opening drawer for apartment ${apartmentId}`)
    return { success: true, message: "Drawer opened successfully" }
  }

  async confirmDeposit(packageId: string, apartmentId: string) {
    // Update package status to DELIVERED (or PENDING if just arrived)
    const packageUpdate = await prisma.package.upsert({
      where: { id: packageId },
      update: { status: "PENDING" },
      create: {
        apartmentId,
        status: "PENDING",
      },
    })

    return { success: true, package: packageUpdate }
  }
}
