import React from "react";
import Product from "./Product";

const ProductList: React.FC = () => {
  const products: product[] = [
    {
      name: "laptop",
      description: "high-performance laptop",
      price: "$1000",
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "book",
      description: "test book",
      price: "$10",
      imageUrl:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "phone",
      description: "solid phone",
      price: "$1000",
      imageUrl:
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "bag",
      description: "small bag",
      price: "$1000",
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <h1>Product List</h1>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </>
  );
};

export default ProductList;
