import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, ListOrderedIcon, PackageIcon, PackageSearchIcon } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="flex flex-col min-w-[300px] border-r border-solid border-accent bg-background p-8 gap-8 items-center">
            <Link href=''>
                <h1 className="text-lg font-semibold">
                    <span className="text-primary">Tech</span> Store
                </h1>
            </Link>
            <div className="flex flex-col gap-3 w-full">
                <Button variant='outline' className="justify-start gap-2">
                    <LayoutDashboardIcon size={16}/>
                    Dashboard
                </Button>
                <Button variant='outline' className="justify-start gap-2">
                    <PackageIcon size={16}/>
                    Produtos
                </Button>
                <Button variant='outline' className="justify-start gap-2">
                    <ListOrderedIcon scale={16}/>
                    Categorias
                </Button>
                <Button variant='outline' className="justify-start gap-2">
                    <PackageSearchIcon size={16}/>
                    Pedidos
                </Button>
            </div>
        </div>
    );
}

export default Sidebar;