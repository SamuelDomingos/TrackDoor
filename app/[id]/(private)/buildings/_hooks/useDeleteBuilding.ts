import { deleteBuilding } from "@/lib/api/building"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

const useDeleteBuilding = ({
  buildingId,
  onOpenChange,
}: {
  buildingId: string
  onOpenChange: (open: boolean) => void
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    setIsLoading(true)
    try {
      const result = await deleteBuilding(buildingId)

      if (!result.success) {
        throw new Error(result.error || "Erro ao deletar torre")
      }

      toast.success("Torre deletada com sucesso!")
      onOpenChange(false)
      router.refresh()
    } catch (error: any) {
      toast.error("Erro ao deletar torre", {
        description: error.message || "Ocorreu um erro inesperado",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, handleDelete }
}

export default useDeleteBuilding
