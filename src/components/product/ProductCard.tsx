import { Product } from "../../pages/Products/mockProducts";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isSelected: boolean;
}

const ProductCard = ({ product, onSelect, isSelected }: ProductCardProps) => {
  return (
    <div
      className={`${styles["product-card"]} ${isSelected ? styles["selected"] : ""}`}
      onClick={() => onSelect(product)}>
      <h2 className={styles["product-name"]}>{product.name}</h2>
      <p className={styles["product-price"]}>{product.price}</p>
      <p className={styles["product-type"]}>{product.type}</p>
      <button className={styles["product-button"]} onClick={() => onSelect(product)}>
        선택하기
      </button>
    </div>
  );
};

export default ProductCard;
