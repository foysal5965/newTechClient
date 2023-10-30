"use client"

import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

/* eslint-disable react/jsx-key */


const PcBuilderComponentsCard = ({ product}) => {
  const{product: componet, addProduct} = useContext(ProductContext)
  // console.log(componet)
  const handleProduct= ()=>{
    addProduct({product_name,price, category})

    localStorage.setItem('productObj', JSON.stringify({product_name, category, price}))
  }
  const { details, image, price, product_name , category} = product;

 
  return (
    <div className="flex justify-between items-center shadow-md mt-5 rounded-md mx-24 my-6 p-6">
      <div className="flex">
        <img src={image} alt="pc components" />
        <section className="mx-2">
          <p className="font-bold">{product_name}</p>
          {details.map((detail) => (
            <li className="text-gray-400 text-sm mt-3">{detail}</li>
          ))}
        </section>
      </div>
      <section>
        <p className="text-center font-bold">{price}TK</p>
        <button
          
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          data-rounded="rounded-md"
          data-primary="blue-600"
          data-primary-reset="{}"
       onClick={()=>handleProduct()}
        >
          Add
        </button>
        
      </section>
    </div>
  );
};

export default PcBuilderComponentsCard;
