import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json(
      { error: "ID do residente é obrigatório" },
      { status: 400 }
    )
  }

  try {
    const resident = await prisma.resident.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        apartmentId: true,
      },
    })

    if (!resident) {
      return NextResponse.json(
        { error: "Residente não encontrado" },
        { status: 404 }
      )
    }

    return NextResponse.json(resident)
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
