"use client"

import { useState } from "react"
import { Package, PackageImage, PackageLog } from "@/app/generated/client"
import { PackageItem } from "./package-item"
import { toast } from "sonner"

interface PackageWithImages extends Package {
  images: PackageImage[]
  logs: PackageLog[]
}

interface PackageListProps {
  initialPackages: PackageWithImages[]
}

export function PackageList({ initialPackages }: PackageListProps) {
  const [packages, setPackages] = useState(initialPackages)
  const [isConfirming, setIsConfirming] = useState<string | null>(null)

  async function handleConfirm(packageId: string) {
    setIsConfirming(packageId)
    try {
      const response = await fetch("/api/packages/confirm", {
        method: "POST",
        body: JSON.stringify({ packageId }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Erro ao confirmar retirada")
      }

      toast.success("Retirada confirmada com sucesso!")
      setPackages(prev => prev.filter(p => p.id !== packageId))
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro inesperado"
      toast.error("Erro", { description: message })
    } finally {
      setIsConfirming(null)
    }
  }

  if (packages.length === 0) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center text-center">
        <div className="rounded-full bg-muted p-4 mb-4">
          <span className="text-4xl">📦</span>
        </div>
        <h3 className="text-lg font-medium">Nenhuma encomenda pendente</h3>
        <p className="text-muted-foreground">
          Você não possui encomendas aguardando retirada no momento.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <PackageItem
          key={pkg.id}
          pkg={pkg}
          onConfirm={handleConfirm}
          isConfirming={isConfirming === pkg.id}
        />
      ))}
    </div>
  )
}
