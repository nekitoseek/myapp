import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const API_URL = "/api/products";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.ID} >
            <img
                src={product.Image}
                alt={product.Name} 
            />
            <h2 className="text-lg font-bold mt-2">{product.Name}</h2>
            <p className="text-sm text-gray-600">{product.Description}</p>
            <p className="mt-2 font-semibold">В наличии: {product.Count}</p>
            </div>
    ))}
    </div>
  );
};

export default ProductList;
