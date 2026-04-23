import { IconQuote } from "@tabler/icons-react"

const testimonials = [
  {
    quote:
      "Em 2 semanas de TrackDoor, zeramos as reclamações de encomenda perdida. O que parecia impossível virou rotina.",
    name: "Rafael Couto",
    role: "Síndico · Edifício Nuvem — Fortaleza/CE",
    initials: "RC",
    color: "bg-blue-500",
  },
  {
    quote:
      "A portaria ficou 3x mais rápida. Os porteiros adoraram porque agora têm um sistema que realmente funciona.",
    name: "Patricia Moura",
    role: "Administradora · Condomínio Beira Lago",
    initials: "PM",
    color: "bg-purple-500",
  },
  {
    quote:
      "Recebo notificação no celular e vou buscar quando estou em casa. Não preciso mais ficar ligando para a portaria.",
    name: "João Henrique",
    role: "Morador · Ap. 802",
    initials: "JH",
    color: "bg-emerald-500",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Depoimentos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Quem usa, aprova.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-border/50 bg-card p-7 hover:border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 duration-300"
            >
              <div>
                <IconQuote className="size-6 text-primary/40 mb-4" />
                <p className="text-foreground leading-relaxed text-base mb-8">&quot;{t.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}