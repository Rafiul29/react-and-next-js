import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import  { useState } from "react";

const AddProductForm = () => {

  const queryClient = useQueryClient()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    thumbnail: "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


 const mutation = useMutation({
    mutationFn:(newProduct)=>axios.post('http://localhost:3000/products',newProduct),
  onSuccess:(data,variables,context)=>{
    console.log(context)
    queryClient.invalidateQueries(['products'])
  },
  onMutate:(variables)=>{
    return {greeting:'Say Hello'}
  }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    // Handle form submission (e.g., send data to backend)
    const newData={...formData,id:crypto.randomUUID().toString()};
    mutation.mutate(newData)
  };


  if(mutation.isLoading){
    return <span>Submitting</span>
  }

  if(mutation.isError){
    return <span> Error: {mutation.error.message}</span>
  }

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      {mutation.isSuccess && <span>Product Added</span>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="block font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="block font-medium">Rating</label>
          <input
            type="number"
            step="0.01"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-3 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
