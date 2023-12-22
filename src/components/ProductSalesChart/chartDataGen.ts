import { IProductSales } from "../../model/Product";

export enum SalesTypes {
  wholesale,
  retail,
  retailerMargin,
}

export const SALE_DATA_NAMES = {
  [SalesTypes.wholesale]: "Wholesale Sales",
  [SalesTypes.retail]: "Retail Sales",
  [SalesTypes.retailerMargin]: "Retail Margin",
};

export const SALE_DATA_EXTRACTORS = {
  [SalesTypes.wholesale]: (entryPoint: IProductSales) =>
    entryPoint.wholesaleSales,
  [SalesTypes.retail]: (entryPoint: IProductSales) => entryPoint.retailSales,
  [SalesTypes.retailerMargin]: (entryPoint: IProductSales) =>
    entryPoint.retailerMargin,
};

export const SALE_DATA_COLORS = {
  [SalesTypes.wholesale]: "#44a7f6",
  [SalesTypes.retail]: "#9ba6bf",
  [SalesTypes.retailerMargin]: "#000000",
};

export type ChartData = {
  name: string;
  data: {
    y: number;
    x: string;
  }[];
};

export const getChartData = (
  dataEntries: SalesTypes[],
  sales?: IProductSales[]
): ChartData[] => {
  if (sales === undefined) {
    return [];
  }

  const result = [];
  for (const saleType of dataEntries) {
    result.push({
      name: SALE_DATA_NAMES[saleType],
      data: sales.map((salesRecord: IProductSales) => ({
        y: SALE_DATA_EXTRACTORS[saleType](salesRecord),
        x: salesRecord.weekEnding,
      })),
    });
  }

  return result;
};

export const getDataColors = (dataEntries: SalesTypes[]) =>
  dataEntries.map((saleType: SalesTypes) => SALE_DATA_COLORS[saleType]);
