'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { Product } from "@prisma/client";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
    product: ProductWithTotalPrice;
}

const ProductInfo = ({product}: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1)

    const { addProductToCart } = useContext(CartContext)

    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1))
    }

    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1)
    }

    const handleAddToCartClick = () => {
        addProductToCart({ ...product, quantity })
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-lg">{product.name}</h2>
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">R${product.totalPrice.toFixed(2)}</h1>
                {product.discountPercentage > 0 && (
                    <DiscountBadge>
                        {product.discountPercentage}
                    </DiscountBadge>
                )}
            </div>
            {product.discountPercentage > 0 && (
                <p className="opacity-75 line-through">R$ {Number(product.basePrice).toFixed(2)}</p>
            )}
            <div className="flex items-center gap-2 mt-4">
                <Button size="icon" variant='outline' onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon />
                </Button>
                <span>{quantity}</span>
                <Button size="icon" variant='outline' onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon />
                </Button>
            </div>
            <div className="mt-8 flex flex-col gap-3">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-sm opacity-60 text-justify">{product.description}</p>
            </div>
            <Button className="mt-8 uppercase font-bold" onClick={handleAddToCartClick}>
                Adicionar ao carrinho
            </Button>

            <div className="bg-accent flex items-center px-5 py-2 justify-between mt-5 rounded-lg">
                <div className="flex items-center gap-3">
                    <TruckIcon />
                    <div className="flex flex-col">
                        <p className="text-xs">Entrega via <span className="font-bold">Magnos Packet </span></p>
                        <p className="text-[#8162FF] text-xs">Envio para <span className="font-bold"> todo Brasil</span></p>
                    </div>
                </div>
                <p className="font-bold text-xs">Frete Grátis</p>
            </div>
        </div>

    );
}

export default ProductInfo;