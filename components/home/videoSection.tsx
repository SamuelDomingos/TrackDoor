"use client"

import { useState } from "react"
import { IconPlayerPlay } from "@tabler/icons-react"

export function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Veja na prática
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-tight">
            Não é só portaria remota.
            <br />
            <span className="text-primary">É TrackDoor.</span>
          </h2>
        </div>

        {/*
          ════════════════════════════════════════════════
          VÍDEO — instrução para o dev:

          Opção A (YouTube embed):
          Substitua o bloco inteiro por:
          <div className="aspect-video w-full rounded-3xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          Opção B (vídeo próprio):
          <video
            src="/videos/trackdoor-demo.mp4"
            controls
            poster="/images/video-thumbnail.jpg"
            className="w-full rounded-3xl"
          />
          ════════════════════════════════════════════════
        */}

        {/* ── PLACEHOLDER do vídeo ── */}
        <div
          className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border/40 bg-card cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          {/* Thumbnail placeholder — troque por uma <Image> real */}
          <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />

          {/* Fake screenshot da interface */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] max-w-lg rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="flex gap-1.5 px-4 py-3 border-b border-border/30">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                <span className="ml-2 text-[10px] text-muted-foreground font-mono">TrackDoor · Portaria</span>
              </div>
              <div className="p-4 space-y-2">
                {["Ap. 401 — Maria Santos · Correios · Aguardando", "Ap. 203 — Carlos Lima · Amazon · Retirado", "Ap. 115 — Ana Souza · iFood · Aguardando"].map((r, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-card/60 border border-border/30 px-3 py-2">
                    <span className="text-[11px] text-foreground">{r.split(" · ")[0]}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${r.includes("Retirado") ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                      {r.includes("Retirado") ? "Retirado" : "Aguardando"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40">
                <IconPlayerPlay className="size-6 text-primary-foreground fill-primary-foreground ml-0.5" />
              </div>
            </div>
            <p className="text-white/80 text-sm font-medium tracking-wide">
              Adicionar vídeo de demonstração
            </p>
            <p className="text-white/40 text-xs font-mono">
              YouTube embed ou /public/videos/demo.mp4
            </p>
          </div>
        </div>

        {/* Below video — trust line */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/60">
          <span>✦ Implementação em 1 dia</span>
          <span>✦ Sem fidelidade</span>
          <span>✦ Suporte 24/7 em português</span>
          <span>✦ Cancele quando quiser</span>
        </div>
      </div>
    </section>
  )
}