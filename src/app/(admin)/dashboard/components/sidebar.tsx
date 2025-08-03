'use client'

import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, ListOrderedIcon, PackageIcon, PackageSearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const path = usePathname()
    return (
        <div className="flex flex-col min-w-[300px] border-r border-solid border-accent bg-background p-8 gap-8 items-center">
            <Link href='/dashboard'>
                <h1 className="text-lg font-semibold">
                    <span className="text-primary">Tech</span> Store
                </h1>
            </Link>
            <div className="flex flex-col gap-3 w-full">
                <Button variant='outline' className="justify-start gap-2">
                    <LayoutDashboardIcon size={16} />
                    Dashboard
                </Button>
                <Button asChild variant='outline' className={`justify-start gap-2 ${path.includes("/products") && "bg-primary text-white hover:bg-primary"}`}>
                    <Link href='/dashboard/products'>
                        <PackageIcon size={16} />
                        Produtos
                    </Link>
                </Button>
                <Button asChild variant='outline' className={`justify-start gap-2 ${path.includes("/categories") && "bg-primary text-white hover:bg-primary"}`}>
                    <Link href='/dashboard/categories'>
                    <ListOrderedIcon scale={16} />
                    Categorias
                    </Link>
                </Button>
                <Button variant='outline' className="justify-start gap-2">
                    <PackageSearchIcon size={16} />
                    Pedidos
                </Button>
            </div>
        </div >
    );
}

export default Sidebar;