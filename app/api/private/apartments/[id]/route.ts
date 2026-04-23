import { NextRequest, NextResponse } from "next/server";
import { ApartmentService } from "@/app/api/private/services/apartment.service";
import { AuthService } from "@/app/api/private/services/auth.service";
import prisma from "@/lib/prisma";

const apartmentService = new ApartmentService();

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await apartmentService.getApartmentDetails(id);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.message === "Apartment not found" ? 404 : 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const auth = await AuthService.validateSession(req);
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apartment = await prisma.apartment.findUnique({
      where: { id },
      select: { buildingId: true },
    });

    if (!apartment) {
      return NextResponse.json({ error: "Apartment not found" }, { status: 404 });
    }

    const hasAccess = await AuthService.verifyBuildingAccess(auth.userId, apartment.buildingId);
    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const data = await apartmentService.updateApartment(id, body);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const auth = await AuthService.validateSession(req);
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apartment = await prisma.apartment.findUnique({
      where: { id },
      select: { buildingId: true },
    });

    if (!apartment) {
      return NextResponse.json({ error: "Apartment not found" }, { status: 404 });
    }

    const hasAccess = await AuthService.verifyBuildingAccess(auth.userId, apartment.buildingId);
    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await apartmentService.deleteApartment(id);
    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
