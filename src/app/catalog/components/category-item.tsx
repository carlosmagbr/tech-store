import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <Link href={`/category/${category.slug}`}>
            <div className="flex flex-col">
                <div className="w-full h-[150px] flex justify-center items-center bg-category-item-gradient rounded-t-lg">
                    <Image src={category.imageUrl} alt={category.name} width={0} height={0} sizes="100vw" className="w-auto h-auto max-h-[70%] max-w-[80%] object-contain" />
                </div>
                <div className="bg-accent py-3 rounded-b-lg">
                    <p className="text-center text-sm font-semibold">
                        {category.name}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default CategoryItem;