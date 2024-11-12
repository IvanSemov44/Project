import { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
    const [products, setProduct] = useState<string[]>([]);

    useEffect(() => {
        console.log("fetching product in " + category);
        setProduct(["Clothing", "Household"])
    }, [category]);

    return (
        <div>ProductList</div>
    )
}

export default ProductList