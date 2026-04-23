import {
  IconPackage,
  IconShieldCheck,
  IconClockHour4,
  IconUsers,
  IconBell,
  IconChartBar,
} from "@tabler/icons-react"

const features = [
  {
    icon: IconPackage,
    title: "Gestão de Encomendas",
    description:
      "Registre, rastreie e notifique automaticamente cada entrega. Nenhum pacote some, nenhum morador fica sem saber.",
    tag: "Mais usado",
    accent: "from-blue-500/20 to-blue-500/0",
    iconBg: "bg-blue-500/10 text-blue-400",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: IconShieldCheck,
    title: "Controle de Acesso",
    description:
      "Libere, bloqueie e monitore quem entra no condomínio com logs completos e em tempo real.",
    tag: "Segurança",
    accent: "from-emerald-500/20 to-emerald-500/0",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: IconBell,
    title: "Notificações Instantâneas",
    description:
      "O morador recebe alertas no celular assim que uma entrega chega. Zero ligações, zero confusão.",
    tag: "Automação",
    accent: "from-yellow-500/20 to-yellow-500/0",
    iconBg: "bg-yellow-500/10 text-yellow-400",
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    icon: IconClockHour4,
    title: "Portaria Mais Rápida",
    description:
      "Reduza filas e tempo de espera. O porteiro foca no que importa — a segurança — não em papeladas.",
    tag: "Eficiência",
    accent: "from-orange-500/20 to-orange-500/0",
    iconBg: "bg-orange-500/10 text-orange-400",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    icon: IconUsers,
    title: "Gestão de Visitantes",
    description:
      "Autorize visitas com antecedência pelo app. O porteiro só confirma — sem burocracia, sem espera.",
    tag: "Moradores",
    accent: "from-purple-500/20 to-purple-500/0",
    iconBg: "bg-purple-500/10 text-purple-400",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    icon: IconChartBar,
    title: "Relatórios e Dashboards",
    description:
      "Veja o histórico completo de movimentações, gere relatórios e tome decisões com dados reais.",
    tag: "Gestão",
    accent: "from-primary/20 to-primary/0",
    iconBg: "bg-primary/10 text-primary",
    tagColor: "bg-primary/10 text-primary border-primary/20",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Funcionalidades
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.05] mb-6">
            Tudo que uma portaria
            <br />
            precisa. Nada que não precisa.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desenvolvido especificamente para condomínios brasileiros. Simples de usar, poderoso por dentro.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-5 rounded-3xl border border-border/50 bg-card p-7 overflow-hidden hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Gradient accent top-right */}
              <div
                className={`pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${feature.accent} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              {/* Tag */}
              <div className="flex items-center justify-between">
                <div className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${feature.tagColor}`}>
                  {feature.tag}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.iconBg}`}>
                <feature.icon className="size-5" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}