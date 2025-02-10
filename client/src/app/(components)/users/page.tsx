import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728e356g2f",
      Uline_name: "Corrugated Box",
      PackagingPrice_name: "Corrugated Box",
      Uline_price: "50",
      PackagingPrice_price: "48",
      Price_Gap: "-2",
    },
    {
      id: "193g5d5g2f",
      Uline_name: "Box",
      PackagingPrice_name: "Boxes",
      Uline_price: "35",
      PackagingPrice_price: "40",
      Price_Gap: "5",
    },
    {
      id: "7209h45g2f",
      Uline_name: "Anti-Static Bubble",
      PackagingPrice_name: "Anti-Static Bubble",
      Uline_price: "20",
      PackagingPrice_price: "18",
      Price_Gap: "-2",
    },
    {
      id: "728ekk56",
      Uline_name: "Ballot Box",
      PackagingPrice_name: "Boxes",
      Uline_price: "15",
      PackagingPrice_price: "17",
      Price_Gap: "2",
    },
    {
      id: "72abd55g2f",
      Uline_name: "Corrugated Carrying Cases",
      PackagingPrice_name: "Cases",
      Uline_price: "12",
      PackagingPrice_price: "10",
      Price_Gap: "-2",
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
