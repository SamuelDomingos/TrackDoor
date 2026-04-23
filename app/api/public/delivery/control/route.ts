import { NextResponse } from "next/server";
import { DeliveryService } from "@/app/api/public/services/delivery.service";

const deliveryService = new DeliveryService();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, apartmentId, packageId } = body;

    if (action === "open_drawer") {
      const result = await deliveryService.notifyDrawerOpen(apartmentId);
      return NextResponse.json(result);
    }

    if (action === "confirm_deposit") {
      const result = await deliveryService.confirmDeposit(packageId, apartmentId);
      return NextResponse.json(result);
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
