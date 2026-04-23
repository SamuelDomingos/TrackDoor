"use client"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const GroupItems = ({
  navItems,
}: {
  navItems: { label: string; href: string; icon: React.ElementType }[]
}) => {
  const pathname = usePathname()

  return (
    <div className="p-4">
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton
              asChild
              tooltip={item.label}
              isActive={pathname === item.href}
              className={cn(
                "transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <Link href={item.href}>
                <item.icon className="size-5" />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  )
}

export default GroupItems
