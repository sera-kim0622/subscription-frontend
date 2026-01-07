function Products() {
  return (
    <>
      <div className="products-page">
        <header className="products-header">
          <h1 className="products-title">요금제 선택</h1>
        </header>

        <div className="products-section">
          <div className="products-grid">
            <div className="product-card">
              <h2 className="product-name">Basic</h2>
              <p className="product-price">₩10,000 / 월</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
