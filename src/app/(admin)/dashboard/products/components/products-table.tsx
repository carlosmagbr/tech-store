import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProductWithTotalPrice } from "@/helpers/product";

interface ProductsTableProps {
    products: ProductWithTotalPrice[]
}

const ProductsTable = ({ products }: ProductsTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Preço Total</TableHead>
                    <TableHead>Preço base</TableHead>
                    <TableHead>Vendidos</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map(product=>
                    <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>Categoria</TableCell>
                        <TableCell>R$ {product.totalPrice.toFixed(2)}</TableCell>
                        <TableCell>R$ {product.basePrice.toFixed(2)}</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default ProductsTable;