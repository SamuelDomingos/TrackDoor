import { ResidentAuthForm } from "./_components/resident-auth-form"

export default function ResidentLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Portal do Morador
          </h1>
          <p className="mt-2 text-muted-foreground">
            Acompanhe suas encomendas em tempo real
          </p>
        </div>
        <ResidentAuthForm />
      </div>
    </div>
  )
}
