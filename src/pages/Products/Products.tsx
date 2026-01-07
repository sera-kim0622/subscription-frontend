import styles from "./Products.module.css";

function Products() {
  return (
    <>
      <div className={styles.productsPage}>
        <header className={styles.productsHeader}>
          <h1 className={styles.productsTitle}>요금제 선택</h1>
        </header>

        <section className={styles.plansSection}>
          <div className={styles.plansGrid}>
            <div className={styles.planCard}>
              <h2 className={styles.planName}>Basic</h2>
              <p className={styles.planPrice}>₩10,000 / 월</p>
              <ul className={styles.planFeatures}>
                <li>기본 기능 제공</li>
                <li>월간 결제</li>
              </ul>
              <button className={styles.planButton}>선택하기</button>
            </div>

            {/* product line */}
            <div className={styles.planCard}>
              <h2 className={styles.planName}>Pro</h2>
              <p className={styles.planPrice}>₩30,000 / 월</p>
              <ul className={styles.planFeatures}>
                <li>모든 기능 제공</li>
                <li>우선 지원</li>
              </ul>
              <button className={styles.planButton}>선택하기</button>
            </div>

            {/* product line */}
            <div className={styles.planCard}>
              <h2 className={styles.planName}>Enterprise</h2>
              <p className={styles.planPrice}>문의</p>
              <ul className={styles.planFeatures}>
                <li>커스텀 기능 제공</li>
                <li>전담 지원</li>
              </ul>
              <button className={styles.planButton}>문의하기</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
