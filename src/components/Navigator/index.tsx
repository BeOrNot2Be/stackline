import { Link, Route, Switch } from "wouter";
import { ProductSales } from "../../pages/ProductSales";
import { Button, Typography } from "@material-tailwind/react";

export const Navigator = () => {
  return (
    <Switch>
      <Route path="/product/:productId">
        {({ productId }) => <ProductSales productId={productId} />}
      </Route>
      <Route path="/:anything*">
        <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
          <Link href="/product/B007TIE0GQ">
            <Button variant="outlined">
              <Typography>.product/B007TIE0GQ</Typography>
            </Button>
          </Link>
        </div>
      </Route>
    </Switch>
  );
};
