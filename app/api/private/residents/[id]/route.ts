export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from "next/server"
import { deleteResident, updateResident } from "../../services/resident.service"

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()

    if (!id) {
      return NextResponse.json(
        { error: "ID do morador é obrigatório" },
        { status: 400 }
      )
    }

    const result = await updateResident(id, body)

    if (result.success) {
      return NextResponse.json(result.data)
    }
    return NextResponse.json({ error: result.error }, { status: 500 })
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: "ID do morador é obrigatório" },
        { status: 400 }
      )
    }

    const result = await deleteResident(id)

    if (result.success) {
      return NextResponse.json({ message: "Morador excluído com sucesso" })
    }
    return NextResponse.json({ error: result.error }, { status: 500 })
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    )
  }
}
