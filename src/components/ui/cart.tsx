import { ArrowLeftIcon, ArrowRightIcon, ShoppingCartIcon, Table } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { Button } from "./button";
import { Separator } from "./separator";

const Cart = () => {
    const { products, subtotal, total, totalDiscount } = useContext(CartContext)
    return (
        <div className="flex flex-col gap-5">
            <Badge className="gap-1 w-fit border-primary px-3 text-base uppercase py-[0.375rem] rounded-full" variant='outline'>
                <ShoppingCartIcon size={16} />
                Carrinho
            </Badge>

            <div className="flex flex-col gap-5">
                {products.length > 0 ? (
                    products.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-center font-semibold">Seu carrinho está vazio !</p>
                )}
            </div>
            <div className="flex flex-col gap-3">
                <Separator />
                <div className="flex items-center justify-between text-sm">
                    <p>Subtotal</p>
                    <p>R${subtotal.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-sn">
                    <p>Entrega</p>
                    <p>Grátis</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-sn">
                    <p>Descontos</p>
                    <p>R$ {totalDiscount.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between font-bold">
                    <p>Total</p>
                    <p>R$ {total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart;