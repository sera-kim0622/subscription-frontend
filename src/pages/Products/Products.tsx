import ProductCard from "../../components/product/ProductCard";
import { mockProducts, Product } from "./mockProducts";
import styles from "./Products.module.css";

const Products = () => {
  const handleSelectProduct = (product: Product) => {
    console.log(product);
  };

  return (
    <div className={styles["products-page"]}>
      <header className={styles["products-header"]}>
        <h1 className={styles["products-title"]}>요금제 선택</h1>
      </header>

      <section className={styles["products-section"]}>
        <div className={styles["products-grid"]}>
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} onSelect={handleSelectProduct} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
