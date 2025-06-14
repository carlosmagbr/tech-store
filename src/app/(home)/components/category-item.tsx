import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icons";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {

    return (
        <Link href={`/category/${category.slug}`}>
            <Badge variant="outline" className="p-3 flex gap-2">
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="text-xs font-bold">{category.name}</span>
            </Badge>
        </Link>
    );
}

export default CategoryItem;