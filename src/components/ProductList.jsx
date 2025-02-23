import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import Product from "./Product";
const productPerPage = 10;
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productPerPage}&skip=${
          page * productPerPage
        }`
      );

      const data = await response.json();
      console.log(data.products)
      if (data.products.length == 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onInterSection = (entries) => {
      const loaderItem = entries[0];
      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts(); 
      }
    };

    const observer = new IntersectionObserver(onInterSection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) {
        console.log("disconnentwd");
        observer.disconnect();
      }
    };
  }, [hasMore,page]);

  console.log(products);

  return (
    <div>
      <h2>Product Lists</h2>

     <div  className="grid grid-cols-5 gap-5">
     {products.map(product=><Product key={product.id} product={product}/>)}

     </div>
     {hasMore &&  <div ref={loaderRef}>Loading more products.....</div>}
    </div>
  );
};

export default ProductList;
