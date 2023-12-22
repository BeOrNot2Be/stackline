import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { IProduct } from "../../model/Product";

interface IProductInfoSidebarProps {
  product?: IProduct;
}

export const ProductInfoSidebar = (props: IProductInfoSidebarProps) => {
  return (
    <Card className="my-10">
      <CardHeader color="blue-gray" className="relative ">
        <img
          className="object-cover object-center w-full"
          src={props.product?.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.product?.title}
        </Typography>
        <Typography>{props.product?.subtitle}</Typography>
        <br />
        <div className="flex gap-2 flex-wrap">
          {props.product!.tags?.map((tag: string) => (
            <Chip key={tag} variant="outlined" value={tag} />
          ))}
        </div>
        <br />
      </CardBody>
    </Card>
  );
};
