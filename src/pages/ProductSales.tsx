import { useState } from "react";
import { getProductById } from "../api/getProductById";
import { IProduct } from "../model/Product";
import useEffectAsync from "../helpers/hooks";
import { ProductInfoSidebar } from "../components/ProductInfoSidebar";
import { ProductSalesChart } from "../components/ProductSalesChart";
import { ProductSalesTable } from "../components/ProductSalesTable";
import { isEmpty } from "lodash";
import { Spinner } from "@material-tailwind/react";

export interface IProductSalesProps {
  readonly productId: string;
}

export const ProductSales = (props: IProductSalesProps) => {
  const [product, setProduct] = useState({} as IProduct);

  useEffectAsync(async () => {
    try {
      const data = await getProductById(props.productId);
      if (data !== undefined) {
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
      {isEmpty(product) ? (
        <div className="h-max w-max">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      ) : (
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="lg:sticky top-0 h-max lg:w-2/6 mx-5 ">
            <ProductInfoSidebar product={product} />
          </div>
          <div className="h-max mx-5 lg:w-4/6">
            <ProductSalesChart chartData={product.sales} />
            <ProductSalesTable records={product.sales} />
          </div>
        </div>
      )}
    </div>
  );
};
