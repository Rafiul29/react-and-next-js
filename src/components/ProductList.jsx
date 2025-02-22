import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const retrrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}?_page=${queryKey[1].page}&_per_page=2`
  );
  return response.data;
};

const ProductList = ({ onSetProductId }) => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient()

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }], // cache key indentifire
    queryFn: retrrieveProducts,
    retry: false,
    // staleTime:5000,
    // refetchInterval:1000,
  });



  const mutation = useMutation({
    mutationFn:(id)=>axios.delete(`http://localhost:3000/products/${id}`),
  onSuccess:(data,variables,context)=>{
    console.log(context)
    queryClient.invalidateQueries(['products'])
  },
  onMutate:(variables)=>{
    return {greeting:'Say Hello'}
  }
  })
  const handleDelete = (id, e) => {
    e.stopPropagation(); // Prevent event bubbling
    console.log("Deleting item with ID:", id);
    mutation.mutate(id)
  };

  if (isLoading) {
    return <div>Fetching products.......</div>;
  }

  if (error) {
    return <div>An error occured :{error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-items-center items-center w-4/5 mx-auto">
      <h2 className="text-3xl my-2">Product List</h2>

      <ul className="flex flex-wrap justify-items-center items-center gap-2">
        {products?.data &&
          products.data.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border rounded-sm"
              onClick={() => onSetProductId(product.id)}
            >
              <img
                className="object-cover h-64 w-96"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl py-1">{product.title}</p>
              <button onClick={(e)=>handleDelete(product.id,e)}>delete</button>
            </li>
          ))}
      </ul>
      <div className="flex">
        {products.prev && (
          <button
            className="p-1 mx-1 bg-purple-300"
            onClick={() => setPage(products.prev)}
          >
            {" "}
            Prev
          </button>
        )}

        {products.next && (
          <button
            className="p-1 mx-1 bg-purple-300"
            onClick={() => setPage(products.next)}
          >
            {" "}
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
