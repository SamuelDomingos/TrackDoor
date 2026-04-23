import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ConfirmDepositPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-10 bg-background p-6 text-foreground">
      <div className="flex w-full flex-col items-center gap-3">
        <h1 className="text-center text-3xl font-bold tracking-tight">
          Depositar Pacote
        </h1>
      </div>

      <div className="relative h-72 w-72 overflow-hidden rounded-xl border bg-muted">
        <Image
          src="/images/generated-1775994981138.png"
          alt="Instruções de depósito"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-center text-lg font-medium text-muted-foreground">
        Entenda o funcionamento
      </p>

      <div className="flex w-full max-w-md flex-col gap-4">
        {[
          "Puxe a gaveta e deposite sua encomenda.",
          "Feche a gaveta após o depósito",
          "Confirme a entrega no botão abaixo",
        ].map((step, index) => (
          <div key={index} className="flex items-center justify-center">
            <p className="text-center text-lg font-medium text-muted-foreground">
              <span className="mr-2 font-bold text-foreground">
                {index + 1}
              </span>
              {step}
            </p>
          </div>
        ))}
      </div>


      <div className="flex w-full max-w-md flex-col gap-3">
        <Button asChild size="lg" className="h-16 w-full text-lg font-bold">
          <Link href="success">
            Entrega depositada e porta fechada
          </Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="h-16 w-full text-lg font-bold"
        >
          Não consegui depositar
        </Button>
      </div>
    </div>
  )
}
