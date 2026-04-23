import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DepositSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background text-foreground gap-10 max-w-2xl mx-auto">
      <div className="flex flex-col items-center gap-3 w-full">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          Encomenda Entregue!
        </h1>
      </div>

      <div className="relative w-72 h-72 overflow-hidden rounded-xl border bg-muted">
        <Image
          src="/images/generated-1776212722546.png"
          alt="Sucesso na entrega"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg font-medium text-center text-muted-foreground max-w-md">
        A felicidade de quem recebe e a satisfação de quem entrega. Obrigado por fazer parte deste processo!
      </p>

      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <Button
          size="lg"
          className="h-16 w-full text-lg font-bold"
        >
          Ver comprovante de entrega
        </Button>

        <Button
          variant="link"
          asChild
          className="text-lg font-medium text-primary"
        >
          <Link href="/deposit">
            Realizar novas entregas
          </Link>
        </Button>
      </div>
    </div>
  );
}
