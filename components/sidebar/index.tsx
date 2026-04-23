import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  IconLayoutDashboard,
  IconBuildingCommunity,
  IconSettings,
  IconPackage as IconLogo,
} from "@tabler/icons-react"
import AppSidebarFooter from "./appSidebarFooter"
import GroupItems from "./groupItems"

const navItems = [
  { label: "Dashboard", href: "dashboard", icon: IconLayoutDashboard },
  { label: "Torres", href: "buildings", icon: IconBuildingCommunity },
  { label: "Configurações", href: "settings", icon: IconSettings },
]

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="border-r border-border"
    >
      <SidebarHeader className="flex h-16 items-center justify-center border-b border-border px-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <IconLogo className="size-5" />
          </div>
          <span className="truncate text-lg font-bold tracking-tight text-white">
            TrackDoor
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-card text-white">
        <GroupItems navItems={navItems} />
      </SidebarContent>

      <SidebarFooter className="border-t border-border bg-card p-4">
        <AppSidebarFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
