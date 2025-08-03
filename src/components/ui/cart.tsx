import { ArrowLeftIcon, ArrowRightIcon, ShoppingCartIcon, Table } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { Button } from "./button";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from "@/actions/order";
import { useSession } from "next-auth/react";
import { computeProductTotalPrice } from "@/helpers/product";


const Cart = () => {
    const {data} = useSession()
    const { products, subtotal, total, totalDiscount } = useContext(CartContext)

    const handleFinishPurchaseCick = async () => {
        if(!data?.user){
            return
        }
        const order = await createOrder(products, (data?.user as any).id)
        
        const checkout = await createCheckout(products, order.id)

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

        stripe?.redirectToCheckout({
            sessionId: checkout.id
        })
    }

    return (
        <div className="flex flex-col gap-5 h-full">
            <Badge className="gap-1 w-fit border-primary px-3 text-base uppercase py-[0.375rem] rounded-full" variant='outline'>
                <ShoppingCartIcon size={16} />
                Carrinho
            </Badge>
            <ScrollArea className="h-full">
                <div className="flex flex-col h-full gap-5">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <CartItem key={product.id} product={{...product,totalPrice:computeProductTotalPrice(product)}} />
                        ))
                    ) : (
                        <p className="text-center font-semibold">Seu carrinho está vazio !</p>
                    )}
                </div>
            </ScrollArea>
            {products.length > 0 && (
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
                    <Separator />
                    <div className="flex items-center justify-between font-bold">
                        <p>Total</p>
                        <p>R$ {total.toFixed(2)}</p>
                    </div>
                    <Button className="uppercase font-bold mt-7" onClick={handleFinishPurchaseCick}>
                        Finalizar compra
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Cart;