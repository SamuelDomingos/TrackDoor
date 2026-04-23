"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconPackage, IconBell, IconCheck } from "@tabler/icons-react"
import { Package } from "@/app/generated/client"

export function PackagesSection({ packages }: { packages: any[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">
        Pacotes Pendentes ({packages.length})
      </h2>
      <div className="flex flex-col gap-6">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className="overflow-hidden rounded-xl border-border bg-card shadow-none"
          >
            <CardContent className="flex flex-col gap-6 p-6">
              {/* Top Row: Photo, Info, Status */}
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-6">
                  <div className="flex size-24 items-center justify-center rounded-lg border border-border bg-[#2A2A2A]">
                    <IconPackage className="size-10 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold text-white">
                      #{pkg.id.slice(-6).toUpperCase()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {pkg.createdAt ? new Date(pkg.createdAt).toLocaleDateString("pt-BR") : "Data não disponível"}
                    </p>
                  </div>
                </div>
                <Badge
                  variant="destructive"
                  className="text-destructive-foreground rounded-lg bg-destructive px-4 py-1 text-sm font-bold"
                >
                  {pkg.status}
                </Badge>
              </div>

              {/* Timeline Section */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
                  Histórico de Ações
                </h3>
                <div className="ml-2 flex flex-col gap-4 border-l-2 border-border pl-5">
                  {(pkg.logs || pkg.history)?.map((event: any, index: number) => (
                    <div
                      key={index}
                      className="relative flex flex-col gap-1 pl-4"
                    >
                      <div className="absolute top-1 -left-[21px] size-3 rounded-full border-2 border-background bg-border" />
                      <p className="text-sm font-medium text-white">
                        {event.action}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {event.createdAt ? new Date(event.createdAt).toLocaleDateString("pt-BR") : event.date}
                      </p>
                    </div>
                  )) || (
                    <p className="text-sm text-muted-foreground italic">
                      Nenhum registro de histórico.
                    </p>
                  )}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end gap-3 border-t border-border pt-4">
                <Button
                  variant="outline"
                  className="flex gap-2 rounded-lg border-border bg-transparent text-muted-foreground hover:bg-accent hover:text-white"
                >
                  <IconBell className="size-4" />
                  Notificar Morador
                </Button>
                <Button className="flex gap-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
                  <IconCheck className="size-4" />
                  Confirmar Retirada
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
