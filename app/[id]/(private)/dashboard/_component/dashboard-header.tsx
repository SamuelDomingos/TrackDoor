import { Button } from "@/components/ui/button"

export function DashboardHeader({title}: { title: string}) {
  return (
    <div className="mb-8 flex w-full flex-row items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-[28px] font-bold tracking-tight text-white">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="hidden gap-2 border-[#333333] text-white hover:bg-[#333333] md:flex"
        >
          Exportar
        </Button>
      </div>
    </div>
  )
}
