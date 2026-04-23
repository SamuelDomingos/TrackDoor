import { NextRequest, NextResponse } from "next/server";
import { ApartmentService } from "@/app/api/private/services/apartment.service";
import { AuthService } from "@/app/api/private/services/auth.service";

const apartmentService = new ApartmentService();

export async function POST(req: NextRequest) {
  try {
    const auth = await AuthService.validateSession(req);
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Request body must be an array of apartments" }, { status: 400 });
    }

    if (body.length === 0) {
      return NextResponse.json({ error: "Apartments list cannot be empty" }, { status: 400 });
    }

    const { buildingId } = body[0];

    if (!buildingId) {
      return NextResponse.json({ error: "buildingId is required for each apartment" }, { status: 400 });
    }

    const hasAccess = await AuthService.verifyBuildingAccess(auth.userId, buildingId);
    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const data = await apartmentService.createApartments(body);
    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
