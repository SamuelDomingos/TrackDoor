import { DashboardHeader } from "@/app/[id]/(private)/dashboard/_component/dashboard-header"
import { StatCard } from "@/app/[id]/(private)/dashboard/_component/stat-card"
import { ActivityTable } from "@/app/[id]/(private)/dashboard/_component/activity-table"
import { QuickActions } from "@/app/[id]/(private)/dashboard/_component/quick-actions"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader title="Resumo do Dia" />

      <div className="grid w-full grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Pacotes Recebidos"
          value="42"
          iconName="Package"
          subtext="+12% em relação a ontem"
          subtextColor="text-muted-foreground"
          strokeColor="border-border"
        />
        <StatCard
          title="Pendentes de Retirada"
          value="18"
          iconName="PackageX"
          subtext="Requerem atenção imediata"
          subtextColor="text-destructive"
          strokeColor="border-destructive"
        />
        <StatCard
          title="Entregues Hoje"
          value="24"
          iconName="PackageCheck"
          subtext="85% de eficiência"
          subtextColor="text-green-500"
          strokeColor="border-green-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityTable />
        </div>
        <div className="lg:col-span-1">
          <QuickActions />
        </div>
      </div>
    </div>
  )
}
