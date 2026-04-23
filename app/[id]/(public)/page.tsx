import { DeliveryService } from "./_services/delivery.service"
import { DeliverySelector } from "./_components/delivery-selector"

export default async function PublicDeliveryPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  // Comentando a chamada ao serviço para evitar o erro de autenticação do Prisma
  // const deliveryService = new DeliveryService()
  // const buildings = await deliveryService.getBuildingsForDelivery()

  // Exemplos mockados para visualização do layout
  const buildings = [
    {
      name: "Torre A",
      apartments: [
        { id: "1", number: "101" },
        { id: "2", number: "102" },
        { id: "3", number: "201" },
        { id: "4", number: "202" },
        { id: "5", number: "301" },
        { id: "6", number: "302" },
      ],
    },
    {
      name: "Torre B",
      apartments: [
        { id: "7", number: "101" },
        { id: "8", number: "102" },
        { id: "9", number: "201" },
        { id: "10", number: "202" },
        { id: "11", number: "301" },
        { id: "12", number: "302" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-6 text-foreground md:p-12">
      {/* Header Section */}
      <div className="mb-10 flex w-full max-w-2xl flex-col items-center gap-3 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Entrega de Encomenda
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Selecione a torre e o apartamento para finalizar a entrega
        </p>
      </div>

      {/* Client Component for Interaction */}
      <DeliverySelector buildings={buildings} condominiumId={id} />
    </div>
  )
}
