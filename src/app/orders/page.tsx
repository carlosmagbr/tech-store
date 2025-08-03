
import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";

import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";

export const dynamic = 'force-dynamic';

const OrderPage = async () => {
    const user = await getServerSession(authOptions)
    if (!user) {
        return (
            <div className="p-5 md:container">
                <p>Você precisa estar logado para acessar esta página.</p>
            </div>
        )
    }

    const orders = await prismaClient.order.findMany({
        where: {
            userId: (user as any).user.id,
        },
        include: {
            orderProducts: { include: { product: true } }
        }
    })
    return (
        <div className="p-5 md:container">
            <Badge className="gap-1 w-fit border-primary px-3 text-base uppercase py-[0.375rem] rounded-full" variant='outline'>
                <PackageSearchIcon size={16} />
                Meus pedidos
            </Badge>
            {
                orders.map((order) => (
                    <OrderItem order={order} key={order.id} />
                ))
            }
        </div>
    );
}

export default OrderPage;