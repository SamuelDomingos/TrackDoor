export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from "next/server";
import { BuildingService } from "@/app/api/private/services/building.service";
import { AuthService } from "@/app/api/private/services/auth.service";

const buildingService = new BuildingService();

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const auth = await AuthService.validateSession(req);
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const hasAccess = await AuthService.verifyBuildingAccess(auth.userId, id);
    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const data = await buildingService.updateBuilding(id, body);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.message.includes("Record not found") ? 404 : 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const auth = await AuthService.validateSession(req);
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const hasAccess = await AuthService.verifyBuildingAccess(auth.userId, id);
    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await buildingService.deleteBuilding(id);
    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.message.includes("Record not found") ? 404 : 500 });
  }
}
