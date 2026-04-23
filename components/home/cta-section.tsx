import { Button } from "@/components/ui/button"
import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react"

export function CTASection() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-card">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/15 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[60px] rounded-full" />
          </div>

          {/* Dot pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 py-16 px-8 sm:px-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Sem fidelidade · Cancele quando quiser
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.05] mb-6">
              Sua portaria inteligente
              <br />
              começa hoje.
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Configure em menos de 1 dia. Suporte dedicado na implantação. Resultados visíveis na primeira
              semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="h-13 px-8 text-base font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
              >
                Começar agora — é grátis
                <IconArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base rounded-2xl border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all gap-2"
              >
                <IconBrandWhatsapp className="size-4 text-emerald-400" />
                Falar com especialista
              </Button>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-xs text-muted-foreground/60">
              Sem cartão de crédito · Implementação gratuita · Suporte em português
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}