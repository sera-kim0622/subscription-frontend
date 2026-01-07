function Products() {
  return (
    <>
      <div className="products-page">
        <header className="products-header">
          <h1 className="products-title">요금제 선택</h1>
        </header>

        <section className="products-section">
          <div className="products-grid">
            <div className="product-card">
              <h2 className="product-name">Basic</h2>
              <p className="product-price">₩10,000 / 월</p>
              <ul className="product-features">
                <li>기본 기능 제공</li>
                <li>월간 결제</li>
              </ul>
              <button className="product-button">선택하기</button>
            </div>

            {/* product line */}
            <div className="product-card">
              <h2 className="product-name">Pro</h2>
              <p className="product-price">₩30,000 / 월</p>
              <ul className="product-features">
                <li>모든 기능 제공</li>
                <li>우선 지원</li>
              </ul>
              <button className="product-button">선택하기</button>
            </div>

            {/* product line */}
            <div className="product-card">
              <h2 className="product-name">Enterprise</h2>
              <p className="product-price">문의</p>
              <ul className="product-features">
                <li>커스텀 플랜</li>
                <li>전담 지원</li>
              </ul>
              <button className="product-button">문의하기</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
