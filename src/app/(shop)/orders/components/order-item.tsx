import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format, sub } from "date-fns";
import OrderProductItem from "./order-product-item";
import { Separator } from "@/components/ui/separator";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product";
import { getOrderStatus } from "./helpers/status";


interface OrderItemProps {
    order: Prisma.OrderGetPayload<{
        include: {
            orderProducts: { include: { product: true } };
        }
    }>
}


const OrderItem = ({ order }: OrderItemProps) => {
    const subtotal = useMemo(() => {
        return order.orderProducts.reduce((total, orderProduct) => {
            return total + Number(orderProduct.product.basePrice) * orderProduct.quantity;
        }, 0);
    }, [order.orderProducts]);

    const total = useMemo(() => {
        return order.orderProducts.reduce((total, orderProduct) => {
            const productTotalPrice = computeProductTotalPrice(orderProduct.product);
            return total + productTotalPrice * orderProduct.quantity;
        }, 0);
    }, [order.orderProducts]);

    const discount = subtotal - total;
    return (
        <Card className="px-5 my-5">
            <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value={order.id}>
                    <AccordionTrigger>
                        <div className="flex flex-col gap-1 text-left">
                            Pedido com {order.orderProducts.length} produto(s)
                        <span className="opacity-60">
                            Feito em {format(new Date(order.createdAt), 'd/MM/y')}
                        </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="font-bold">
                                    <p>Status</p>
                                    <p className="text-[#8162FF]">{getOrderStatus(order.status)}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Pagamento</p>
                                    <p className="opacity-60">
                                        Cartão
                                    </p>
                                </div>
                            </div>
                            {order.orderProducts.map((orderProduct) => (
                                <OrderProductItem orderProduct={orderProduct} key={orderProduct.id} />
                            ))}

                            <div className="flex w-full flex-col gap-1 text-sm">
                                <Separator />

                                <div className="flex w-full justify-between py-3">
                                    <p>Subtotal</p>
                                    <p>R$ {subtotal.toFixed(2)}</p>
                                </div>

                                <Separator />

                                <div className="flex w-full justify-between py-3">
                                    <p>Entrega</p>
                                    <p>Grátis</p>
                                </div>

                                <Separator />

                                <div className="flex w-full justify-between py-3">
                                    <p>Descontos</p>
                                    <p>- R$ {discount.toFixed(2)}</p>
                                </div>

                                <Separator />

                                <div className="flex w-full justify-between py-3">
                                    <p>Total</p>
                                    <p>R$ {total.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    );
}

export default OrderItem;