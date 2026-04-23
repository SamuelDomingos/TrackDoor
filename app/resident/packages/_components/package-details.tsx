"use client"

import * as React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CalendarDays,
  Package as PackageIcon,
  Clock,
  Image as ImageIcon,
} from "lucide-react"
import Image from "next/image"
import { Package, PackageImage, PackageLog } from "@/app/generated/client"

interface PackageWithImages extends Package {
  images: PackageImage[]
  logs: PackageLog[]
}

interface PackageDetailsProps {
  packageData: PackageWithImages
  children: React.ReactNode
}

export function PackageDetails({ packageData, children }: PackageDetailsProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2 text-2xl">
              <PackageIcon className="size-6 text-primary" />
              Detalhes da Encomenda
            </DrawerTitle>
            <DrawerDescription>
              Informações detalhadas sobre a sua encomenda #
              {packageData.id.slice(-6).toUpperCase()}
            </DrawerDescription>
          </DrawerHeader>

          <div className="space-y-8 px-6 py-4">
            {/* Status and Main Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 rounded-xl border bg-muted/30 p-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3" /> Status
                </span>
                <Badge
                  variant={
                    packageData.status === "DELIVERED" ? "default" : "secondary"
                  }
                  className="w-fit"
                >
                  {packageData.status === "DELIVERED" ? "Entregue" : "Pendente"}
                </Badge>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border bg-muted/30 p-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarDays className="size-3" /> Chegada
                </span>
                <span className="text-sm font-medium">
                  {new Date(packageData.createdAt).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <ImageIcon className="size-4" />
                Fotos do Pacote
              </h3>
              {packageData.images && packageData.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {packageData.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square overflow-hidden rounded-lg border bg-muted"
                    >
                      <Image
                        src={img.url}
                        alt={`Package proof ${idx + 1}`}
                        fill
                        className="transition-hover object-cover hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  Nenhuma foto disponível para esta encomenda.
                </p>
              )}
            </div>

            <Separator />

            {/* Timeline / Logs */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">
                Histórico de Movimentação
              </h3>
              <div className="relative space-y-4 border-l-2 border-muted pl-4">
                {packageData.logs && packageData.logs.length > 0 ? (
                  packageData.logs.map((log, idx) => (
                    <div key={idx} className="relative pl-4">
                      <div className="absolute top-1 -left-5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                      <p className="text-sm font-medium">{log.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(log.createdAt).toLocaleString("pt-BR")}
                      </p>
                      {log.metadata &&
                        typeof log.metadata === "object" &&
                        "details" in log.metadata && (
                          <p className="mt-1 text-xs text-muted-foreground/80">
                            {String(log.metadata.details)}
                          </p>
                        )}
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Nenhum registro de movimentação.
                  </p>
                )}
              </div>
            </div>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Fechar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
