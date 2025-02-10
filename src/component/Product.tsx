import React from "react";

interface ProductProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  description,
  price,
  imageUrl,
}) => {
  console.log(name, description, price, imageUrl);

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid black",
        margin: "20px",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        maxWidth: "250px",
      }}
    >
      <img
        src={imageUrl}
        alt={`${name} image`}
        className="product-image"
        width={150}
        height={150}
        style={{ borderRadius: "10px" }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p style={{ fontWeight: "bold" }}>Price: {price}</p>
    </div>
  );
};

export default Product;
