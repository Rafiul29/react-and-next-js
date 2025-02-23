import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";

const Product = ({product}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <img
            src={product.thumbnail}
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>
            {product.description}
          </CardDescription>
          
          <Button>Buy Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
