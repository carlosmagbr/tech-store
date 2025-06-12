import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
    product: ProductWithTotalPrice;

}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <div className="flex flex-col gap-4 ">
                <div className="bg-accent rounded-lg h-[170px]  flex justify-center items-center relative">
                    <Image src={product.imageUrls[0]} height={0} width={0} sizes="100vh" className="h-auto w-auto max-w-[80%] max-h-[70%] object-contain " alt={product.name} />
                    {product.discountPercentage > 0 && (
                        <DiscountBadge className="absolute top-3 left-3">
                            {product.discountPercentage}
                        </DiscountBadge>
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
        </Link>
    );
}

export default ProductItem;