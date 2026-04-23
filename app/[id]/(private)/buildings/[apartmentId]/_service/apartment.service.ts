import prisma from "@/lib/prisma"
import { Resident, Package } from "@/app/generated/client"

export async function getApartmentDetails(apartmentId: string) {
  return {
    apartment: {
      id: apartmentId,
      number: "101",
      buildingId: "build-1",
    },
    residents: [
      { id: "res-1", name: "João Silva", email: "joao@email.com", phone: "11999999999", password: "password123", apartmentId },
      { id: "res-2", name: "Maria Silva", email: "maria@email.com", phone: "11888888888", password: "password456", apartmentId },
    ],
    packages: [
      { id: "pkg-1", trackingCode: "BR123456789", status: "PENDING", description: "Caixa Amazon", receivedAt: new Date().toISOString() },
      { id: "pkg-2", trackingCode: "BR987654321", status: "DELIVERED", description: "Mercado Livre", receivedAt: new Date().toISOString() },
    ],
  };
}
