import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import prisma from "@/lib/prisma"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
    }

    const { packageId } = await req.json()

    if (!packageId) {
      return NextResponse.json(
        { error: "ID do pacote é obrigatório" },
        { status: 400 }
      )
    }

    // 1. Find the package and verify it belongs to the resident's apartment
    // We assume the session contains the resident's apartmentId or we fetch the resident first
    const resident = await prisma.resident.findFirst({
      where: { email: session.user.email! },
      select: { apartmentId: true },
    })

    if (!resident) {
      return NextResponse.json(
        { error: "Residente não encontrado" },
        { status: 404 }
      )
    }

    const pkg = await prisma.package.findUnique({
      where: { id: packageId },
    })

    if (!pkg) {
      return NextResponse.json(
        { error: "Pacote não encontrado" },
        { status: 404 }
      )
    }

    if (pkg.apartmentId !== resident.apartmentId) {
      return NextResponse.json(
        { error: "Você não tem permissão para confirmar este pacote" },
        { status: 403 }
      )
    }

    if (pkg.status === "PICKED_UP") {
      return NextResponse.json(
        { error: "Este pacote já foi retirado" },
        { status: 400 }
      )
    }

    // 2. Update package status and create log
    await prisma.$transaction([
      prisma.package.update({
        where: { id: packageId },
        data: {
          status: "PICKED_UP",
          pickedUpAt: new Date(),
        },
      }),
      prisma.packageLog.create({
        data: {
          packageId: packageId,
          action: "PICKED_UP",
        },
      }),
    ])

    return NextResponse.json({ message: "Retirada confirmada com sucesso" })
  } catch (error: any) {
    console.error("[PACKAGES_CONFIRM]", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
