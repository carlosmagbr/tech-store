import { ArrowLeftIcon, ArrowRightIcon, ShoppingCartIcon, Table } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { Button } from "./button";

const Cart = () => {
    const { products } = useContext(CartContext)
    return (
        <div className="flex flex-col gap-5">
            <Badge className="gap-1 w-fit border-primary px-3 text-base uppercase py-[0.375rem] rounded-full" variant='outline'>
                <ShoppingCartIcon size={16} />
                Carrinho
            </Badge>

            <div className="flex flex-col gap-5">
                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}

export default Cart;