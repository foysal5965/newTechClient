"use client"
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";
import { useContext } from "react";

const PcBuilderPageCard = ({ featuredProduct }) => {
  const {product}= useContext(ProductContext)
  const component = product[0]
  // console.log(product)

 const storedObject = JSON.parse(localStorage.getItem('productObj'));
 
 console.log(storedObject)
  return (
    <div>
      <div className="h-[100px] mt-2 p-3">
        <div className="">
          <div className="flex">
            <img
              src={featuredProduct.image}
              alt=""
              className="w-[80px] h-[40px] rounded-md"
            />
            <div className="mx-2">
              <p className="text-sm font-bold">
                {featuredProduct.product_name}
              </p>
              <p className="bg-gray-400 text-white w-[50px] p-1 rounded-md text-[11px]">
                Required
              </p>
            </div>
          </div>
        </div>
       <div>
        {
          featuredProduct.category === component.category ? <>{storedObject.product_name}</>:''
        }
       </div>
        <div className="flex items-center justify-end">
          <Link href={`/protected/PcBuilderComponents/${featuredProduct?.category}`} className=" border-2 border-solid border-blue-500 rounded-md text-blue-500 font-semibold px-2 mb-10 transition hover:bg-blue-600 hover:text-white">
            Choose
          </Link>
        </div>
        <hr className="border-2 border-gray-00" />
      </div>
    </div>
  );
};

export default PcBuilderPageCard;
