import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./components/product-list"


export default async function Home() {
    const deals = await prismaClient.product.findMany({
        where:{
            discountPercentage:{
                gt:0,
            },
        },
    })
    return (
        <div>
            <Image alt="Até 55% de deconto esse mês" className="h-auto w-full px-5 mt-4" sizes="100vh" src="/banner1.png" height={0} width={0} />
            <div className="my-4 px-5">
                <Categories />
            </div>
            <div>
                <ProductList products={deals}/>
            </div>
        </div>
    )
}