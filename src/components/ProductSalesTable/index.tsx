import { Card, Typography } from "@material-tailwind/react";
import { IProductSales } from "../../model/Product";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { numberToCommaFormat } from "../../helpers/visualization";

const PRODUCT_SALES_FIELDNAMES = [
  "WEEK ENDING",
  "RETAIL SAILS",
  "WHOLESALE SAILS",
  "UNITS SOLD",
  "RETAIL MARGIN",
];

interface IProductSalesTableProps {
  records?: IProductSales[];
}

export function ProductSalesTable(props: IProductSalesTableProps) {
  return (
    <Card className="h-full w-full my-10">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {PRODUCT_SALES_FIELDNAMES.map((head) => (
              <th
                key={head}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  {head}
                  <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.records?.map((sale: IProductSales, index: number) => (
            <tr key={index}>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {sale.weekEnding}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  ${numberToCommaFormat(sale.retailSales)}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  ${numberToCommaFormat(sale.wholesaleSales)}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {sale.unitsSold}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  ${numberToCommaFormat(sale.retailerMargin)}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
