"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { PackageList } from "./_components/package-list"

export default function ResidentPackagesPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<{
    resident: any
    packages: any[]
  } | null>(null)

  useEffect(() => {
    async function loadData() {
      const residentId = localStorage.getItem("resident_id")

      if (!residentId) {
        router.push("/resident")
        return
      }

      try {
        const resProfile = await fetch(`/api/resident/profile?id=${residentId}`)
        const resPackages = await fetch(`/api/resident/packages?id=${residentId}`)

        if (!resProfile.ok || !resPackages.ok) {
          // Use mock data if API fails for testing purposes
          const mockResident = {
            name: "Morador de Teste",
            email: "teste@gmail.com",
            apartmentId: "apt-123"
          }
          const mockPackages = [
            {
              id: "pkg-1",
              status: "DELIVERED",
              createdAt: new Date().toISOString(),
              images: [{ id: "img-1", url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400", type: "IMAGE" }],
              logs: [{ id: "log-1", action: "DELIVERED", metadata: { details: "Entregue na portaria" }, createdAt: new Date().toISOString() }]
            },
            {
              id: "pkg-2",
              status: "PENDING",
              createdAt: new Date().toISOString(),
              images: [],
              logs: [{ id: "log-2", action: "CREATED", metadata: { details: "Pacote registrado" }, createdAt: new Date().toISOString() }]
            },
            {
              id: "pkg-3",
              status: "DELIVERED",
              createdAt: new Date().toISOString(),
              images: [{ id: "img-3", url: "https://images.unsplash.com/photo-1549465220-1a8f777e9897?w=400", type: "IMAGE" }],
              logs: [{ id: "log-3", action: "DELIVERED", metadata: { details: "Entregue por transportadora" }, createdAt: new Date().toISOString() }]
            }
          ]
          setData({ resident: mockResident, packages: mockPackages })
          console.log("Using mock data for testing")
          return
        }

        const profile = await resProfile.json()
        const packages = await resPackages.json()

        if (packages.length === 0) {
          // Also use mock data if no packages are found to see the layout
          const mockPackages = [
            {
              id: "pkg-1",
              status: "DELIVERED",
              createdAt: new Date().toISOString(),
              images: [{ id: "img-1", url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400", type: "IMAGE" }],
              logs: [{ id: "log-1", action: "DELIVERED", metadata: { details: "Entregue na portaria" }, createdAt: new Date().toISOString() }]
            },
            {
              id: "pkg-2",
              status: "PENDING",
              createdAt: new Date().toISOString(),
              images: [],
              logs: [{ id: "log-2", action: "CREATED", metadata: { details: "Pacote registrado" }, createdAt: new Date().toISOString() }]
            }
          ]
          setData({ resident: profile, packages: mockPackages })
        } else {
          setData({ resident: profile, packages })
        }
      } catch (error) {
        console.error("Error loading data, using mocks:", error)
        setData({
          resident: { name: "Morador de Teste" },
          packages: [] // Add mocks here if needed
        })
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="flex min-h-screen flex-col bg-background p-6">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Minhas Encomendas
          </h1>
          <p className="text-muted-foreground">
            Olá, {data.resident?.name}. Veja o que chegou para você.
          </p>
        </div>
      </header>

      <PackageList initialPackages={data.packages} />
    </div>
  )
}
