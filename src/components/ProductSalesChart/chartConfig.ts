import { Props as ChartProps } from "react-apexcharts";

// eslint-disable-next-line prefer-const
export let chartConfig: ChartProps = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: true,
    },
    labels: {
      show: true,

      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
    overwriteCategories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "dark",
  },
};
