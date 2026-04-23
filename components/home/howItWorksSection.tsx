import { IconScan, IconBellRinging, IconCircleCheck } from "@tabler/icons-react"

const steps = [
  {
    number: "01",
    icon: IconScan,
    title: "Encomenda chega na portaria",
    description:
      "O porteiro registra o pacote em segundos com nome do morador, remetente e foto. Tudo digital, sem papel.",
  },
  {
    number: "02",
    icon: IconBellRinging,
    title: "Notificação automática",
    description:
      "O morador recebe um alerta no celular com os detalhes da entrega. Sem precisar ligar ou ir ficar esperando.",
  },
  {
    number: "03",
    icon: IconCircleCheck,
    title: "Retirada confirmada",
    description:
      "Ao retirar, o morador confirma com assinatura digital. O registro fica salvo com data, hora e responsável.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-card/20 border-y border-border/30 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — steps */}
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Como funciona
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.05] mb-6">
              Da entrega à retirada,
              <br />
              tudo sob controle.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-14">
              Um fluxo óbvio de usar — para o porteiro e para o morador.
            </p>

            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-card text-xs font-black text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 my-2 bg-gradient-to-b from-border/60 to-transparent" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="font-bold text-foreground text-base mb-2 flex items-center gap-2">
                      <step.icon className="size-4 text-primary" />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo slot */}
          <div className="relative">
            {/*
              ════════════════════════════════════════════════
              FOTO DE PESSOAS — instrução para o dev:

              Substitua o bloco de placeholder por:

              import Image from "next/image"

              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/porteiro-sistema.jpg"
                  alt="Porteiro usando o TrackDoor no tablet"
                  fill
                  className="object-cover"
                />
              </div>

              Sugestão: porteiro olhando para tablet/celular com sorriso,
              ou close nas mãos fazendo registro de encomenda.
              ════════════════════════════════════════════════
            */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border/30 bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-background" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="text-7xl">📱</div>
                <div className="rounded-2xl border border-dashed border-border/30 p-6 text-center">
                  <p className="text-sm font-semibold text-muted-foreground/50">Foto do porteiro</p>
                  <p className="text-xs text-muted-foreground/35 mt-1">usando o sistema</p>
                  <p className="mt-3 text-[10px] font-mono text-muted-foreground/25">/public/images/porteiro-sistema.jpg</p>
                </div>
              </div>
            </div>

            {/* Overlay chip */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border/50 bg-card/90 backdrop-blur-md px-5 py-4 shadow-xl">
              <p className="text-2xl font-black text-foreground">3x</p>
              <p className="text-xs text-muted-foreground">mais rápido na portaria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}