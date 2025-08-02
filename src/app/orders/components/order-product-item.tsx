import { computeProductTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductsItemProps {
    orderProduct: Prisma.OrderProductGetPayload<{
        include: {
            product: true;
        }
    }>
}

const OrderProductItem = ({ orderProduct }: OrderProductsItemProps) => {
    const productWithTotalPrice = computeProductTotalPrice(orderProduct.product)
    return (
        <div className="flex items-center gap-4" >
            <div className="bg-accent rounded-lg w-[77px] h-[77px] flex items-center justify-center">
                <Image
                    src={orderProduct.product.imageUrls[0]}
                    width={0}
                    height={0}
                    alt={orderProduct.product.name}
                    sizes="100vw"
                    className="w-auto h-auto max-h-[80%] max-w-[80%] object-contain "
                />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex bg-accent rounded-lg py-1 items-center gap-1 ">
                    <p className="text-[10px] px-2">
                        Vendido e entregue por {""} TechStore
                    </p>
                </div>
                <p className="text-xs">{orderProduct.product.name}</p>
                <div className="flex justify-between items-center gap-1">
                    <div className="flex items-center gap-1">
                        <p className="text-sm font-bold">R$ {productWithTotalPrice.totalPrice.toFixed(2)}</p>
                        {productWithTotalPrice.discountPercentage > 0 && (
                            <p className="text-xs line-through opacity-60">R$ {productWithTotalPrice.basePrice.toFixed(2)}</p>
                        )}
                    </div>
                    <p className="text-xs line-through opacity-60">Quantidade: {orderProduct.quantity}</p>
                </div>
            </div>
        </div >
    );
}

export default OrderProductItem;