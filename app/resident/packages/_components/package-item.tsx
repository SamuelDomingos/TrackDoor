"use client"

import { Package, PackageImage, PackageLog } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PackageDetails } from "./package-details"
import { Loader2, Eye, CheckCircle } from "lucide-react"

interface PackageWithImages extends Package {
  images: PackageImage[]
  logs: PackageLog[]
}

interface PackageItemProps {
  pkg: PackageWithImages
  onConfirm: (id: string) => void
  isConfirming: boolean
}

export function PackageItem({
  pkg,
  onConfirm,
  isConfirming,
}: PackageItemProps) {
  return (
    <PackageDetails packageData={pkg}>
      <div className="flex items-center justify-between rounded-lg border bg-card p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              Encomenda #{pkg.id.slice(-6).toUpperCase()}
            </span>
            <Badge variant="outline" className="h-4 px-1.5 py-0 text-[10px]">
              {pkg.status === "DELIVERED" ? "Entregue" : "Pendente"}
            </Badge>
          </div>
          <span className="text-xs text-muted-foreground">
            {new Date(pkg.createdAt).toLocaleDateString("pt-BR")}
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1 px-3 text-xs"
          >
            <Eye className="size-3" />
            Detalhes
          </Button>
          <Button
            size="sm"
            className="h-8 gap-1 px-3 text-xs"
            onClick={() => onConfirm(pkg.id)}
            disabled={isConfirming}
          >
            {isConfirming ? (
              <Loader2 className="size-3 animate-spin" />
            ) : (
              <CheckCircle className="size-3" />
            )}
            Confirmar
          </Button>
        </div>
      </div>
    </PackageDetails>
  )
}
