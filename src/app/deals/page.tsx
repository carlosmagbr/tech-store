import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
    const deals = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
    })
    return (
        <div className="p-5 flex flex-col gap-8">
            <Badge className="gap-1 w-fit border-primary px-3 text-base uppercase py-[0.375rem] rounded-full" variant='outline'>
                <PercentIcon size={16} />
                Ofertas
            </Badge>
            <div className="grid grid-cols-2 gap-8">
                {deals.map((product) => (
                    <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
                ))}
            </div>
        </div>
    );
}

export default DealsPage;