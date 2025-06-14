import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { Table } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
    const categories = await prismaClient.category.findMany({})
    return (
        <div className="p-5 gap-8 flex flex-col">
            <Badge className="gap-1 w-fit border-primary px-3 text-base uppercase py-[0.375rem] rounded-full" variant='outline'>
                <Table size={16} />
                Catálogo
            </Badge>
            <div className="grid grid-cols-2 gap-8">
                {categories.map((category) => (
                        <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

export default CatalogPage;