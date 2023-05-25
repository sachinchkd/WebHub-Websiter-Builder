import React from "react";
import { useState } from "react";

const WebProducts = () => {
  const [ProductsResult, setProductsResult] = useState([]);
  const displayProducts = async () => {
    try {
      console.log("FETCHING DOCUMENTS");
      const shopname = JSON.parse(localStorage.getItem("response"));
      console.log(shopname);
      const fetchedProduct = await fetch(
        // `/api/ProductsAPI?shopname=${shopname}`
        `/api/ProductsAPI`
      ).then((res) => res.json());
      console.log("FETCHED DOCUMENTS");
      setProductsResult(fetchedProduct);
      console.log(ProductsResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={displayProducts}> Display user Data</button>
      <div>
                        
        {ProductsResult.fetchedProduct &&
          ProductsResult.fetchedProduct.length > 0 && (
            <ul>
                                  
              {ProductsResult.fetchedProduct.map((product) => (
                <li key={product._id}>
                                        <p>{product.name}</p>
                                        <p>({product.color})</p>
                                        <p>({product.category})</p>
                                        <p>({product.price})</p>
                                      
                </li>
              ))}
                              
            </ul>
          )}
                    
      </div>
    </div>
  );
};

export default WebProducts;
