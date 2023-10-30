"use client"
import { createContext, useState } from "react"
export const ProductContext = createContext()
export const ProductProvider =({children})=>{
    const[product, setProduct] = useState([{product_name:'casing',price:'200', category:'asing'}])
    const addProduct =(newProduct)=>{
        // const setProductLocal = localStorage.setItem('productArray', JSON.stringify(myArray))

        // const storedProduct = JSON.parse(localStorage.getItem('productArray'));
        setProduct([ newProduct])
    }

    return(
<ProductContext.Provider value={({product, addProduct})}>
    <div>{children}</div>
</ProductContext.Provider>
    )
}