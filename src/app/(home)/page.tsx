import Image from "next/image"
import Categories from "./components/categories"


export default function Home() {
    return (
        <div className="p-5">
            <Image alt="Até 55% de deconto esse mês" className="h-auto w-full" sizes="100vh" src="/banner1.png" height={0} width={0} />
            <div className="my-4">
                <Categories />
            </div>
        </div>
    )
}