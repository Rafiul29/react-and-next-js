import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrrieveProduct = async ({queryKey}) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}/${queryKey[1]}`);
  return response.data;
};

const ProductDetails = ({id}) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products",id], // cache key indentifire
    queryFn: retrrieveProduct,
    retry:false,
    // staleTime:5000,
    // refetchInterval:1000,
  });

  if (isLoading) {
    return <div>Fetching products.......</div>;
  }

  if (error) {
    return <div>An error occured :{error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-items-center items-center w-4/5 mx-auto">

      <ul className="flex flex-wrap justify-items-center items-center gap-2">
       
            <li key={product.id} className="flex flex-col items-center m-2 border rounded-sm">
              <img className="object-cover h-64 w-96" src={product.thumbnail} alt={product.title} />
              <p className="text-xl py-1">{product.title}</p>
              <p className="text-xl py-1">{product.description}</p>
              <p className="text-xl py-1">Price {product.price}USD</p>
              <p className="text-xl py-1">Rating {product.rating}</p>
            </li>
      </ul>
    </div>
  );
};

export default ProductDetails;
