"use client"

import React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AppSidebar } from "@/components/sidebar/index"

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden bg-background">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto relative">
            <div className="mx-auto w-full max-w-10xl p-6 lg:p-10">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}
