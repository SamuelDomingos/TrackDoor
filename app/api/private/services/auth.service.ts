import { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import prisma from "@/lib/prisma"

export class AuthService {
  static async validateSession(
    req: NextRequest
  ): Promise<{ userId: string } | null> {
    const token = await getToken({ req })
    if (!token || !token.sub) {
      return null
    }
    return { userId: token.sub }
  }

  static async verifyBuildingAccess(
    userId: string,
    buildingId: string
  ): Promise<boolean> {
    const building = await prisma.building.findFirst({
      where: {
        id: buildingId,
        condominium: {
          users: {
            some: {
              id: userId,
            },
          },
        },
      },
    })
    return !!building
  }
}
