import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct
}

const CartItem = ({ product }: CartItemProps) => {
    const {decreaseProductQuantity, increaseProductQuantity, removeProductFromCart} = useContext(CartContext)

    const handleDrecreaseQuantity = () => {
        decreaseProductQuantity(product.id)
    }
    
    const handleIncreaseQuantity = () => {
        increaseProductQuantity(product.id)
    }

    const handleRemoveProduct = () =>{
        removeProductFromCart(product.id)
    }


    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-accent h-[80px] w-[80px]">
                    <Image src={product.imageUrls[0]} width={0} height={0} sizes="100vw" alt={product.name} className="h-auto w-auto max-h-[70%] max-w-[90%]" />

                </div>
                <div className="fex flex-col">
                    <p className="text-xs">{product.name}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold">
                            R$ {product.totalPrice.toFixed(2)}
                        </p>
                        {product.discountPercentage > 0 && (
                            <p className="text-xs line-through opacity-75">
                                R$ {Number(product.basePrice).toFixed(2)}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-1 mt-4">
                        <Button size="icon" variant='outline' className="w-8 h-8" onClick={handleDrecreaseQuantity} >
                            <ArrowLeftIcon size={16} />
                        </Button>
                        <span className="text-xs">{product.quantity}</span>
                        <Button size="icon" variant='outline' className="w-8 h-8" onClick={handleIncreaseQuantity}>
                            <ArrowRightIcon size={16}/>
                        </Button>
                    </div>
                </div>
            </div>
            <Button variant='outline' onClick={handleRemoveProduct}>
                <TrashIcon size={16}/>
            </Button>
        </div>
    );
}

export default CartItem;