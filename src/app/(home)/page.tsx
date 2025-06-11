import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "../../components/ui/product-list"
import SectionTitle from "../../components/ui/section-title"
import PromoBanner from "./components/promo-banner"


export default async function Home() {
    const deals = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
    })

    const keyboards = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "keyboards",
            }
        }
    })
    
    const mouses = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "mouses",
            }
        }
    })
    return (
        <div className="flex flex-col gap-5 py-5">
            <PromoBanner alt="Até 55% de deconto esse mês" src="/banner1.png" /> 
            <div className="px-5">
                <Categories />
            </div>
            <div>
                <SectionTitle>Ofertas</SectionTitle>
                <ProductList products={deals} />
            </div>
            <PromoBanner alt="Até 55% de deconto esse mês" src="/banner2.png" />
            <div>
                <SectionTitle>Teclados</SectionTitle>
                <ProductList products={keyboards} />
            </div>
            <PromoBanner alt="Até 55% de deconto esse mês" src="/banner3.png" />
            <div>
                <SectionTitle>Teclados</SectionTitle>
                <ProductList products={mouses} />
            </div>
        </div>
    )
}