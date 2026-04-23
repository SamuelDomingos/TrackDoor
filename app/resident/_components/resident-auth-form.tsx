"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useResidentAuth } from "../_hooks/useResidentAuth"
import { Controller } from "react-hook-form"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"

export function ResidentAuthForm() {
  const { formLogin, isLoading, handleLogin } = useResidentAuth()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Login do Morador</CardTitle>
        <CardDescription>
          Entre com suas credenciais para acessar suas encomendas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={formLogin.handleSubmit(handleLogin)}
          className="space-y-4"
        >
          <Controller
            name="email"
            control={formLogin.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="res-login-email">E-mail</FieldLabel>
                <Input
                  {...field}
                  id="res-login-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="email@morador.com"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={formLogin.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="res-login-password">Senha</FieldLabel>
                <Input
                  {...field}
                  id="res-login-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="******"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
