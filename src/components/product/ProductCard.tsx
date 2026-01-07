import { Product } from "../../pages/Products/mockProducts";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  return (
    <div className={styles["product-card"]}>
      <h2 className={styles["product-name"]}>{product.name}</h2>
      <p className={styles["product-price"]}>{product.price}</p>
      <p className={styles["product-type"]}>{product.type}</p>
      <button className={styles["product-select"]} onClick={() => onSelect(product)}>
        선택하기
      </button>
    </div>
  );
};

export default ProductCard;
