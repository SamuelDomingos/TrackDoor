"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Stepper, Scoped } from "../_stepper/define"
import { Fragment } from "react/jsx-runtime"
import { Check, User, Building2, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Step1User from "./steps/step-1-user"
import Step2Condo from "./steps/step-2-condo"
import StepConfirmation from "./steps/step-confirmation"
import useRegistrationForm from "../_hooks/use-registration-form"

function RegistrationStepForm() {
  const { form, isLoading, onValid, stepper } = useRegistrationForm()

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <Stepper.List className="flex w-full flex-row items-center justify-between gap-2">
          {stepper.state.all.map((stepData, index) => {
            const currentIndex = stepper.state.current.index
            const status =
              index < currentIndex
                ? "success"
                : index === currentIndex
                  ? "active"
                  : "inactive"

            return (
              <Fragment key={stepData.id}>
                <Stepper.Item
                  step={stepData.id}
                  className="flex items-center gap-3"
                >
                  <Stepper.Trigger
                    render={(domProps) => (
                      <Button
                        className="shrink-0 rounded-full"
                        variant={
                          status === "inactive" ? "secondary" : "default"
                        }
                        size="icon"
                        {...domProps}
                      >
                        <Stepper.Indicator>
                          {status === "success" ? (
                            <Check className="h-4 w-4" />
                          ) : index === 0 ? (
                            <User className="h-4 w-4" />
                          ) : index === 1 ? (
                            <Building2 className="h-4 w-4" />
                          ) : (
                            <ClipboardCheck className="h-4 w-4" />
                          )}
                        </Stepper.Indicator>
                      </Button>
                    )}
                  />
                  <div className="flex flex-col items-start">
                    <Stepper.Title
                      render={(domProps) => (
                        <h4
                          className="text-sm font-medium whitespace-nowrap"
                          {...domProps}
                        >
                          {stepData.title}
                        </h4>
                      )}
                    />
                  </div>
                </Stepper.Item>
                {index !== stepper.state.all.length - 1 && (
                  <Stepper.Separator
                    orientation="horizontal"
                    data-status={status}
                    className="self-center bg-muted transition-all duration-300 ease-in-out data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:min-w-4 data-[orientation=horizontal]:flex-1 data-[status=success]:bg-primary"
                  />
                )}
              </Fragment>
            )
          })}
        </Stepper.List>
      </CardHeader>

      <form onSubmit={form.handleSubmit(onValid)}>
        <CardContent className="mt-8 min-h-[300px]">
          {stepper.flow.switch({
            "user-info": () => <Step1User form={form} />,
            "condo-info": () => <Step2Condo form={form} />,
            confirmation: () => <StepConfirmation form={form} />,
          })}
        </CardContent>

        <CardFooter className="flex justify-end gap-4 border-t pt-6">
          {!stepper.state.isFirst && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => stepper.navigation.prev()}
            >
              Voltar
            </Button>
          )}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...
              </>
            ) : stepper.state.isLast ? (
              "Finalizar Cadastro"
            ) : (
              "Continuar"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export const RegistrationProvider = () => (
  <Scoped>
    <RegistrationStepForm />
  </Scoped>
)
