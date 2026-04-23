"use client"

import { ResidentForm } from "./residentForm"
import CardResident from "./cardResident"
import ResidentsActions from "./residents-actions"
import { useFormResident } from "../../_hooks/useFormResident"
import { Resident } from "@/app/generated/client"

const ResidentsSection = ({
  residents,
  apartmentId,
}: {
  residents: {
    id: string
    name: string
    email: string
    phone: string | null
  }[]
  apartmentId: string
}) => {
  const formResident = useFormResident(apartmentId)


  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">Moradores</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {residents.map((resident) => (
          <CardResident
            key={resident.id}
            resident={resident}
            openEditDialog={formResident.openEditDialog}
          />
        ))}

        <ResidentsActions openCreateDialog={formResident.openCreateDialog} />
      </div>

      <ResidentForm {...formResident} />
    </section>
  )
}

export default ResidentsSection
