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
        <div className="py-5">
            <PromoBanner alt="Até 55% de deconto esse mês" src="/banner1.png" />
            <div className="container flex flex-col gap-5 py-5">
                <div className="px-5">
                    <Categories />
                </div>

                <div>
                    <SectionTitle>Ofertas</SectionTitle>
                    <ProductList products={deals} />
                </div>
                <div className="md:flex hidden gap-12">
                    <PromoBanner alt="Até 55% de deconto esse mês" className="w-1/2" src="/banner3.png"/>
                    <PromoBanner alt="Até 55% de deconto esse mês" className="w-1/2" src="/banner2.png"/>
                </div>
                <PromoBanner className="md:0" alt="Até 55% de deconto esse mês" src="/banner2.png" />
                <div>
                    <SectionTitle>Teclados</SectionTitle>
                    <ProductList products={keyboards} />
                </div>
                <PromoBanner className="md:0" alt="Até 55% de deconto esse mês" src="/banner3.png" />
                <PromoBanner  alt="Até 55% de deconto esse mês" src="/banner3.png" />
                <div>
                    <SectionTitle>Mouses</SectionTitle>
                    <ProductList products={mouses} />
                </div>
            </div>
        </div>
    )
}