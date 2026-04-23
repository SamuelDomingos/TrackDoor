import { NextResponse } from "next/server";
import { DashboardService } from "@/app/api/private/services/dashboard.service";

const dashboardService = new DashboardService();

export async function GET() {
  try {
    const data = await dashboardService.getDashboardStats();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
