"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

interface Building {
  name: string
  apartments: {
    id: string
    number: string
  }[]
}

export function DeliverySelector({ buildings, condominiumId }: { buildings: Building[], condominiumId: string }) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-10">
      <div className="group relative w-full">
        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#888888]" />
        <Input
          className="h-14 rounded-lg border-[#333333] bg-[#1E1E1E] pl-12 text-base text-white placeholder:text-[#888888] focus-visible:ring-[#333333]"
          placeholder="Buscar apartamento..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-full space-y-6">
        {buildings.map((building) => (
          <Card
            key={building.name}
            className="rounded-xl border-[#333333] bg-[#1E1E1E] p-5 text-white shadow-none"
          >
            <h2 className="mb-5 text-lg font-bold text-white">
              {building.name}
            </h2>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {building.apartments
                .filter((apt) =>
                  apt.number.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((apt) => (
                  <Button
                    key={apt.id}
                    variant="outline"
                    className="flex h-20 w-20 items-center justify-center rounded-lg border-[#444444] bg-[#262626] p-0 text-white transition-colors hover:bg-[#333333]"
                    onClick={() => router.push(`/${condominiumId}/deposit?apartmentId=${apt.id}`)}
                  >
                    <span className="text-sm font-medium">{apt.number}</span>
                  </Button>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
