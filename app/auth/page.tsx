import { GalleryVerticalEnd } from "lucide-react"
import { Suspense } from "react"
import { AuthForm } from "./_components/auth-form"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            TrackDoor
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  Carregando...
                </div>
              }
            >
              <AuthForm />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block" />
    </div>
  )
}
