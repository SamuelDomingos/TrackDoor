import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "E-mail e senha são obrigatórios" },
        { status: 400 }
      )
    }

    const resident = await prisma.resident.findFirst({
      where: { email: email.trim().toLowerCase() },
    })

    if (!resident) {
      return NextResponse.json(
        { error: "Credenciais inválidas" },
        { status: 401 }
      )
    }

    if (!resident.password) {
      return NextResponse.json(
        { error: "Credenciais inválidas" },
        { status: 401 }
      )
    }

    const isValid = await bcrypt.compare(password, resident.password)

    if (!isValid) {
      return NextResponse.json(
        { error: "Credenciais inválidas" },
        { status: 401 }
      )
    }

    return NextResponse.json({
      message: "Autenticado com sucesso",
      resident: {
        id: resident.id,
        name: resident.name,
        apartmentId: resident.apartmentId,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
