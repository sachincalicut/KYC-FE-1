import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed5g2f",
      amount: 700,
      status: "failed",
      email: "z@example.com",
    },
    {
      id: "728ed52fe",
      amount: 900,
      status: "pending",
      email: "vk@example.com",
    },
    {
      id: "728ed52fw",
      amount: 600,
      status: "success",
      email: "gp@example.com",
    },
    {
      id: "728ed52ef",
      amount: 400,
      status: "success",
      email: "nl@example.com",
    },
    {
      id: "728ed5w2f",
      amount: 200,
      status: "pending",
      email: "p1@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
