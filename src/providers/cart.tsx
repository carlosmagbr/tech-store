'use client'

import { Product } from "@prisma/client";
import { createContext, ReactNode } from "react";

interface CartProduct extends Product {
    quantity: number;
}


interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    CartTotalDiscount: number;
}

const CartContext = createContext({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    CartTotalDiscount: 0,
})

const CartProvider = ({ children }:{children:ReactNode}) => {
    return (
        <CartContext.Provider value={{
            products: [],
            cartTotalPrice:0,
            cartBasePrice:0,
            CartTotalDiscount:0,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;