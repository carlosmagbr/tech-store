import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
    product: ProductWithTotalPrice;

}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="flex flex-col gap-4 max-w-[170px]">
            <div className="bg-accent rounded-lg w-[170px] h-[170px] flex justify-center items-center relative">
                <Image src={product.imageUrls[0]} height={0} width={0} sizes="100vh" className="h-auto w-auto max-w-[80%] object-contain " alt={product.name} />
                {product.discountPercentage > 0 &&(
                    <Badge className="absolute top-3 left-3 px-2 py-[2px]">
                        <ArrowDown size={14}/> {product.discountPercentage}%
                    </Badge>
                )}
            </div>

            <div>
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
                <div className="flex items-center  gap-2 overflow-hidden whitespace-nowrap text-ellipsis">
                    {product.discountPercentage > 0 ? (
                        <>
                            <p className="font-semibold ">R$ {product.totalPrice.toFixed(2)}</p>
                            <p className="opacity-75 line-through text-xs">R${Number(product.basePrice).toFixed(2)}</p>
                        </>
                    ) : (
                        <p className="font-semibold">R${Number(product.basePrice).toFixed(2)}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;