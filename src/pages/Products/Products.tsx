import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import styles from "./Products.module.css";
import { getProducts } from "../../api/auth.api";
import { Product } from "../../api/auth.api";

const Products = () => {
  const [selectedType, setSelectedType] = useState<"MONTHLY" | "YEARLY">("MONTHLY");

  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProductId(product.id);
  };

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts({}).then(setProducts);
  }, [selectedType]);

  console.log(products);

  return (
    <div className={styles["products-page"]}>
      <header className={styles["products-header"]}>
        <h1 className={styles["products-title"]}>요금제 선택</h1>
      </header>
      <div className={styles["type-toggle"]}>
        <button
          className={`${styles["toggle-button"]} ${
            selectedType === "MONTHLY" ? styles["active"] : ""
          }`}
          onClick={() => setSelectedType("MONTHLY")}>
          월간
        </button>

        <button
          className={`${styles["toggle-button"]} ${
            selectedType === "YEARLY" ? styles["active"] : ""
          }`}
          onClick={() => setSelectedType("YEARLY")}>
          연간
        </button>
      </div>
      <section className={styles["products-section"]}>
        <div className={styles["products-grid"]}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleSelectProduct}
              isSelected={product.id === selectedProductId}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
