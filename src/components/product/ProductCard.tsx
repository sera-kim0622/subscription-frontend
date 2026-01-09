import { Product } from "../../api/product.api";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onPurchase: (product: Product) => void;
  isSelected: boolean;
}

const ProductCard = ({ product, isSelected, onSelect, onPurchase }: ProductCardProps) => {
  return (
    <div
      className={`${styles["product-card"]} ${isSelected ? styles["selected"] : ""}`}
      onClick={() => onSelect}>
      <h2 className={styles["product-name"]}>{product.name}</h2>
      <p className={styles["product-price"]}>{product.price.toLocaleString()}</p>
      <p className={styles["product-type"]}>{product.type}</p>
      <button
        className={styles["product-button"]}
        onClick={e => {
          e.stopPropagation();
          onPurchase(product);
        }}>
        결제하기
      </button>
    </div>
  );
};

export default ProductCard;
