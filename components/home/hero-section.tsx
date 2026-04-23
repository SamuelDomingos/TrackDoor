"use client"

import { Button } from "@/components/ui/button"
import { IconArrowRight, IconCheck } from "@tabler/icons-react"

const checklist = [
  "Implementação em menos de 1 dia",
  "Suporte dedicado em português",
  "Interface pensada para porteiros reais",
  "Segurança com logs completos",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">

      {/* Subtle top-left glow */}
      <div className="pointer-events-none absolute top-0 left-0 w-[600px] h-[500px] bg-primary/8 blur-[130px] rounded-full" />

      {/* ── SPLIT GRID ───────────────────────────────────── */}
      <div className="relative z-10 grid min-h-screen lg:grid-cols-[1fr_1fr]">

        {/* LEFT — copy */}
        <div className="flex flex-col justify-center px-6 py-32 lg:px-16 xl:px-20">
          {/* Animated badge */}
          <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            A nova era da portaria condominial
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.6rem,5vw,4.8rem)] font-black leading-[0.93] tracking-tighter text-foreground mb-6">
            Portaria que{" "}
            <span className="relative inline-block">
              <span className="text-primary">pensa</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 160 6" fill="none" aria-hidden>
                <path
                  d="M2 4C40 1.5 80 1.5 158 4"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ animation: "drawLine 1s ease 0.5s both" }}
                />
              </svg>
            </span>
            <br />
            pelo seu
            <br />
            condomínio.
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-10">
            Controle total de encomendas, acesso de visitantes e segurança em tempo real —
            sem cadernos, sem planilhas, sem confusão na portaria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button
              size="lg"
              className="h-12 px-8 rounded-2xl font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all"
            >
              Começar gratuitamente <IconArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 rounded-2xl text-base border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              Ver demonstração
            </Button>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-2.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <IconCheck className="size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — photo area */}
        <div className="relative hidden lg:block">
          {/*
            ════════════════════════════════════════════════
            FOTO DE PESSOAS — instrução para o dev:
            Substitua o bloco abaixo por:

            import Image from "next/image"

            <Image
              src="/images/hero-portaria.jpg"
              alt="Porteiro e morador interagindo na portaria do condomínio"
              fill
              className="object-cover object-center"
              priority
            />

            Sugestão de imagem: porteiro sorrindo com tablet na mão,
            ou morador retirando encomenda. Fundo neutro ou do condomínio.
            ════════════════════════════════════════════════
          */}

          {/* ── PLACEHOLDER visual enquanto não há foto ── */}
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-background/60" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-3xl border-2 border-dashed border-border/30 p-10 text-center">
              <div className="text-6xl mb-4">🧑‍💼</div>
              <p className="text-sm font-semibold text-muted-foreground/50">Foto de pessoas aqui</p>
              <p className="text-xs text-muted-foreground/35 mt-1 max-w-[180px] mx-auto">
                Porteiro atendendo morador ou usando o sistema
              </p>
              <p className="mt-4 text-[10px] font-mono text-muted-foreground/25">
                /public/images/hero-portaria.jpg
              </p>
            </div>
          </div>
          {/* Gradient overlay que faz a foto fundir com o fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── FLOATING CARDS ────────────────────────────── */}
      {/* Notificação — canto inferior esquerdo da foto */}
      <div className="hidden lg:block absolute bottom-16 right-1/2 translate-x-20 z-20 animate-float">
        <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/90 backdrop-blur-md px-4 py-3 shadow-2xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-lg">
            📦
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">Encomenda registrada</p>
            <p className="text-[10px] text-muted-foreground">Ap. 304 · João Silva · agora</p>
          </div>
          <div className="ml-1 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      {/* Stat chip — topo direito */}
      <div className="hidden lg:block absolute top-28 right-8 z-20 animate-float-slow">
        <div className="rounded-2xl border border-border/50 bg-card/90 backdrop-blur-md px-5 py-3.5 shadow-xl text-center">
          <p className="text-2xl font-black text-foreground">+2.700</p>
          <p className="text-[10px] text-muted-foreground">condomínios ativos</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          from { stroke-dasharray: 200; stroke-dashoffset: 200; }
          to   { stroke-dasharray: 200; stroke-dashoffset: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateX(80px) translateY(0); }
          50%       { transform: translateX(80px) translateY(-8px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .animate-float      { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 5s ease-in-out infinite 1s; }
      `}</style>
    </section>
  )
}