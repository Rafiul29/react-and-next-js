import { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {

  const [productId,setProductId]=useState("")

  return (
    <div className="grid grid-cols-5 justify-between">
    <div className="col-span-1">
    <AddProduct/>
    </div>
    <div className="col-span-3">
    <ProductList onSetProductId={setProductId}/>

    </div>
     <div className="col-span-1">
     <ProductDetails id={productId}/>
     </div>
    </div>
  );
}

export default App;
