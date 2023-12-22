import { IProduct } from "../model/Product";
import { Optional } from "../helpers/types";

export const getProductById = async (
  productId: string
): Promise<Optional<IProduct>> => {
  const response = await fetch(`../${productId}.json`);
  const product: Optional<IProduct> = await response.json();
  return product;
};
