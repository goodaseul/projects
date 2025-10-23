import Link from "next/link";
import styles from "@/styles/ProductList.module.css";

type Product = {
    id: string;
    name: string;
    imgUrl: string;
    price: number;
};

type ProductListProps = {
    products?: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
    return (
        <ul className={styles.productList}>
            {products.map((product) => (
                <li key={product.id}>
                    <Link className={styles.product} href={`/products/${product.id}`}>
                        <img src={product.imgUrl} width="300" height="300" alt={product.name} />
                        <span className={styles.productName}>{product.name}</span>
                        <br />
                        {product.price}원
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
