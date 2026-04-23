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
import { useFormAuth } from "../_hooks/useFormAuth"
import { Controller } from "react-hook-form"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"

export function AuthForm() {
  const { formLogin, isLoading, handleLogin } = useFormAuth()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Entre com suas credenciais para acessar
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
                <FieldLabel htmlFor="login-email">E-mail</FieldLabel>
                <Input
                  {...field}
                  id="login-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="email@example.com"
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
                <FieldLabel htmlFor="login-password">Senha</FieldLabel>
                <Input
                  {...field}
                  id="login-password"
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
