'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
    products: Pick<
        ProductWithTotalPrice,
        "basePrice"
        | 'totalPrice'
        | 'discountPercentage'
        | 'description'
        | 'name'
    >
}

const ProductInfo = ({ products: { name, basePrice, totalPrice, description, discountPercentage } }: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1)
    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1))
    }

    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1)
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-lg">{name}</h2>
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">R${totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 && (
                    <Badge className="px-2 py-[2px]">
                        <ArrowDownIcon size={14} />{discountPercentage}%
                    </Badge>
                )}
            </div>
            {discountPercentage > 0 && (
                <p className="opacity-75 line-through">R$ {Number(basePrice).toFixed(2)}</p>
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
                <p className="text-sm opacity-60 text-justify">{description}</p>
            </div>
            <Button className="mt-8 uppercase font-bold">
                Adicionar ao carrinho
            </Button>

            <div className="bg-accent flex items-center px-5 py-2 justify-between mt-5 rounded-lg">
                <div className="flex items-center gap-3">
                    <TruckIcon />
                    <div className="flex flex-col">
                        <p className="text-xs">Entrega via <span className="font-bold">FSPacket </span></p>
                        <p className="text-[#8162FF] text-xs">Envio para <span className="font-bold"> todo Brasil</span></p>
                    </div>
                </div>
                <p className="font-bold text-xs">Frete Grátis</p>
            </div>
        </div>

    );
}

export default ProductInfo;