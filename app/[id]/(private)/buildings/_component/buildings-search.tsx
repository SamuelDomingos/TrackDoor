"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { IconSearch } from "@tabler/icons-react"

export function BuildingsSearch() {
  const [search, setSearch] = useState("")

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="relative mx-auto w-full max-w-md">
        <IconSearch className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar apartamento… ex: 101"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border-border bg-card pl-9 text-white"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-1">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="inline-block size-2.5 rounded-sm border bg-background" />
          Sem pendências
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="inline-block size-2.5 rounded-sm border border-destructive/40 bg-destructive/5" />
          Entregas pendentes
        </div>
      </div>
    </div>
  )
}
