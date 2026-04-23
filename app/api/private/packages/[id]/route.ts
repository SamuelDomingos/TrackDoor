export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from "next/server";
import { getPackageDetails } from "@/app/api/private/services/resident.service";
import { AuthService } from "@/app/api/private/services/auth.service";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: packageId } = await params;
    const auth = await AuthService.validateSession(req);
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const residentId = searchParams.get("residentId");

    if (!residentId) {
      return NextResponse.json({ error: "residentId is required" }, { status: 400 });
    }

    const data = await getPackageDetails(packageId, residentId);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.message.includes("not found") ? 404 : 500 });
  }
}
