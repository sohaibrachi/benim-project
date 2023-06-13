import React from "react";
import { PRODUCTS } from "../../helpers/MenuList";
import { Product } from "../../components/menuItem/MenuItem";


export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Benim </h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product,key) =>{
          return (
          
            <Product
            key={key}
            data={product}
             />
          )
        })}
      </div>
    </div>
  );
};