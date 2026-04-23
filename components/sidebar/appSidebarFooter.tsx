"use client"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { IconLogout } from "@tabler/icons-react"
import { signOut } from "next-auth/react"

const AppSidebarFooter = () => {
  return (
    <div>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => signOut({ callbackUrl: "/auth" })}
            className="text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <IconLogout className="size-5" />
            <span>Sair</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  )
}

export default AppSidebarFooter
