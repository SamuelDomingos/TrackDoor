import { NextRequest, NextResponse } from "next/server";
import { getPackagesByResident } from "@/app/api/private/services/resident.service";
import { AuthService } from "@/app/api/private/services/auth.service";

export async function GET(req: NextRequest) {
  try {
    const auth = await AuthService.validateSession(req);
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const residentId = searchParams.get("residentId");

    if (!residentId) {
      return NextResponse.json({ error: "residentId is required" }, { status: 400 });
    }

    const packages = await getPackagesByResident(residentId);
    return NextResponse.json(packages);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
