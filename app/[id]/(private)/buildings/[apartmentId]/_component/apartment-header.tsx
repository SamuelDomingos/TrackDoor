"use client"

import { Button } from "@/components/ui/button"
import { IconArrowLeft } from "@tabler/icons-react"
import { useRouter } from "next/navigation"

export function ApartmentHeader({
  apartmentNumber,
}: {
  apartmentNumber: string | undefined
}) {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center gap-2 rounded-lg border-border bg-card hover:bg-accent"
        >
          <IconArrowLeft className="size-4" />
          Voltar
        </Button>
        <h1 className="text-2xl font-bold text-white">
          Apartamento {apartmentNumber}
        </h1>
      </div>
    </div>
  )
}
