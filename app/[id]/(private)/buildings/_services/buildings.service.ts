export async function getBuildings(condominiumId: string) {
  const buildings = [
    {
      id: "build-1",
      name: "Torre A",
      condominiumId,
      apartments: [
        { id: "apt-1", number: "101", _count: { packages: 2 } },
        { id: "apt-2", number: "102", _count: { packages: 0 } },
        { id: "apt-3", number: "201", _count: { packages: 1 } },
      ],
    },
    {
      id: "build-2",
      name: "Torre B",
      condominiumId,
      apartments: [
        { id: "apt-4", number: "101", _count: { packages: 0 } },
        { id: "apt-5", number: "102", _count: { packages: 5 } },
      ],
    },
  ]

  const totalTowers = buildings.length
  const totalApts = buildings.reduce(
    (acc, b) => acc + (b.apartments?.length || 0),
    0
  )
  const totalPending = buildings.reduce(
    (acc, b) =>
      acc +
      (b.apartments?.filter((a: any) => a._count.packages > 0).length || 0),
    0
  )

  return { buildings, totalTowers, totalApts, totalPending }
}
