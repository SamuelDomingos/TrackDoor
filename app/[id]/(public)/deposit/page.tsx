"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FishOff, WineOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DepositPackagePage({
  params,
}: {
  params: { id: string }
}) {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-background p-6 text-foreground md:p-12">
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
          Depositar Pacote
        </h1>
      </div>

      <div className="relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-2xl border-2 border-border bg-muted shadow-inner">
        <div className="p-6 text-center text-muted-foreground">
          <p className="mb-2 text-lg font-semibold">Imagem de Instrução</p>
          <p className="text-xs opacity-60">
            O guia visual de depósito aparecerá aqui
          </p>
        </div>
      </div>

      <div className="max-w-2xl px-4 text-center">
        <p className="text-3xl leading-tight font-bold tracking-tight md:text-4xl">
          Pronto, agora é só depositar sua encomenda...
        </p>
      </div>

      <Button
        size="lg"
        className="h-[62px] gap-4 rounded-lg px-10 text-2xl font-bold shadow-lg transition-all"
        onClick={() => router.push(`deposit/confirm`)}
      >
        Abrir gaveta
        <ArrowRight className="h-7 w-7" />
      </Button>

      <div className="mt-12 flex w-full max-w-lg flex-col items-center gap-10">
        <p className="text-center text-[25px] font-medium text-foreground">
          Veja os cuidado na hora de depositar
        </p>

        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex gap-4 mb-10">
            <div className="flex h-6 w-6 items-center justify-center">
              <WineOff className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <p className="text-center text-[20px] font-medium text-muted-foreground">
                Cuidado com produtos sensíveis
              </p>
              <p className="max-w-[324px] text-center text-[14px] font-normal text-muted-foreground">
                Evite depositar vidros ou itens frágeis que possam quebrar.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-6 w-6 items-center justify-center">
              <FishOff className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <p className="text-center text-[20px] font-medium text-muted-foreground">
                Nada de pedidos de comida
              </p>
              <p className="max-w-[278px] text-center text-[14px] font-normal text-muted-foreground">
                Alimentos e bebidas não são permitidos para evitar odores e
                pragas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}