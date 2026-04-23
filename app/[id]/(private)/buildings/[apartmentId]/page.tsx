import { ApartmentHeader } from "./_component/apartment-header"
import { PackagesSection } from "./_component/packages"
import ResidentsSection from "./_component/residents"
import { getApartmentDetails } from "./_service/apartment.service"

export default async function ApartmentDetailsPage({
  params,
}: {
  params: Promise<{ apartmentId: string }>
}) {
  const { apartmentId } = await params

  const { apartment, residents, packages } =
    await getApartmentDetails(apartmentId)

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-background p-10 text-white">
      <ApartmentHeader apartmentNumber={apartment?.number} />

      <div className="flex flex-col gap-12">
        <PackagesSection packages={packages} />
        <ResidentsSection residents={residents} apartmentId={apartmentId} />
      </div>
    </div>
  )
}
