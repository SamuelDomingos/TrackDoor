import { NextRequest, NextResponse } from "next/server"
import { createResident } from "../services/resident.service"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.name || !body.email || !body.apartmentId) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 })
    }

    const result = await createResident(body)

    if (result.success) {
      return NextResponse.json(result.data, { status: 201 })
    }
    return NextResponse.json({ error: result.error }, { status: 500 })
  } catch (error) {
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 })
  }
}
