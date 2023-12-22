interface IProductReviews {
  customer: string;
  review: string;
  score: number;
}

export interface IProductSales {
  weekEnding: string; // date?
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface IProduct {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: IProductReviews[];
  retailer: string; // enum ?
  details: string[];
  tags: string[];
  sales: IProductSales[];
}
