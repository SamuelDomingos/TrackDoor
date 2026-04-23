import prisma from "@/lib/prisma";
import { PackageStatus } from "@prisma/client";

export class DashboardService {
  async getDashboardStats() {
    const now = new Date();
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(now.getDate() - 3);

    const [received, pending, delivered, recentDeliveries, criticalAlerts] = await Promise.all([
      prisma.package.count({ where: { status: PackageStatus.PENDING } }),
      prisma.package.count({ where: { status: PackageStatus.PENDING } }),
      prisma.package.count({ where: { status: PackageStatus.PICKED_UP } }),
      prisma.package.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: { apartment: true }
      }),
      prisma.package.findMany({
        where: {
          status: PackageStatus.PENDING,
          createdAt: { lte: threeDaysAgo }
        },
        include: { apartment: true }
      })
    ]);

    return {
      stats: {
        received,
        pending,
        delivered
      },
      recentDeliveries,
      criticalAlerts
    };
  }
}
