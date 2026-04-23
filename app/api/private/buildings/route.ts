import { NextRequest, NextResponse } from "next/server"
import { BuildingService } from "@/app/api/private/services/building.service"
import { AuthService } from "@/app/api/private/services/auth.service"

const buildingService = new BuildingService()

export async function POST(req: NextRequest) {
  try {
    const auth = await AuthService.validateSession(req)
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const data = await buildingService.createBuilding(body)
    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
