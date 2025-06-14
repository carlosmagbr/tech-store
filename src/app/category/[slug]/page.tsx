import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icons";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";

const CategoryProducts = async ({ params }: any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true
        }
    })

    if(!category){
        return null;
    }

    return (
        <div className="p-5 gap-8 flex flex-col">
            <Badge className="gap-1 w-fit border-primary px-3 text-base uppercase py-[0.375rem] rounded-full" variant='outline'>
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name}
            </Badge>
            <div className="grid grid-cols-2 gap-8">
                {category.products.map((product) => (
                    <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
                ))}
            </div>
        </div>
    );
}

export default CategoryProducts;