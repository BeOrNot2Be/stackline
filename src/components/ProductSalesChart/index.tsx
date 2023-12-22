import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { IProductSales } from "../../model/Product";
import { chartConfig } from "./chartConfig";
import Chart from "react-apexcharts";
import { SalesTypes, getChartData, getDataColors } from "./chartDataGen";

const CHART_TITLE = "Retail Sales";

interface IProductSalesChart {
  chartData?: IProductSales[];
}

export const ProductSalesChart = (props: IProductSalesChart) => {
  const chartDataTopics = [
    SalesTypes.wholesale,
    SalesTypes.retail,
    SalesTypes.retailerMargin,
  ];

  const chartData = getChartData(chartDataTopics, props.chartData);
  chartConfig.colors = getDataColors(chartDataTopics);

  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center my-10"
      >
        <Typography variant="h6" color="gray">
          {CHART_TITLE}
        </Typography>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart options={chartConfig} type={"line"} series={chartData} />
      </CardBody>
    </Card>
  );
};
