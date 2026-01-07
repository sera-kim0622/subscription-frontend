import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles["products-page"]}>
      {/* Header */}
      <header className={styles["products-header"]}>
        <h1 className={styles["products-title"]}>요금제 선택</h1>
        <p className={styles["products-subtitle"]}>나에게 맞는 구독 상품을 선택하세요</p>
      </header>

      {/* Products */}
      <section className={styles["products-section"]}>
        <div className={styles["products-grid"]}>
          {/* Product Card */}
          <div className={styles["product-card"]}>
            <h2 className={styles["product-name"]}>Basic</h2>
            <p className={styles["product-price"]}>₩10,000 / 월</p>
            <ul className={styles["product-features"]}>
              <li>기본 기능 제공</li>
              <li>월간 결제</li>
            </ul>
            <button className={styles["product-button"]}>선택하기</button>
          </div>

          <div className={styles["product-card"]}>
            <h2 className={styles["product-name"]}>Pro</h2>
            <p className={styles["product-price"]}>₩30,000 / 월</p>
            <ul className={styles["product-features"]}>
              <li>모든 기능 제공</li>
              <li>우선 지원</li>
            </ul>
            <button className={styles["product-button"]}>선택하기</button>
          </div>

          <div className={styles["product-card"]}>
            <h2 className={styles["product-name"]}>Enterprise</h2>
            <p className={styles["product-price"]}>문의</p>
            <ul className={styles["product-features"]}>
              <li>커스텀 상품</li>
              <li>전담 지원</li>
            </ul>
            <button className={styles["product-button"]}>문의하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
