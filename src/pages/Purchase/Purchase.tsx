import styles from "./Purchase.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { purchase } from "../../api/purchase.api";
import { getProducts, Product } from "../../api/product.api";
import { useEffect, useState } from "react";

const Purchase = () => {
  const { productId } = useParams<{ productId: string }>();

  console.log("렌더확인", productId);

  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProducts({}).then(products => {
      const found = products.find(p => Number(p.id) === Number(productId));
      console.log("found", found);
      if (!found) {
        navigate("/products", { replace: true });
        return;
      }

      setProduct(prev => {
        // ⭐ 이미 같은 상품이면 state 업데이트 안 함
        if (prev && Number(prev.id) === Number(found.id)) {
          return prev;
        }
        return found;
      });
    });
  }, [product, navigate]);

  if (!product) return null;

  const handlePurchase = async () => {
    try {
      await purchase({ productId: product.id, simulate: "success" });

      alert("구매가 완료되었습니다.");
      navigate("./products");
    } catch (err) {
      console.log(err);
      alert("구매에 실패하였습니다.");
    }
  };

  return (
    <div className={styles["page"]}>
      <h1 className={styles["title"]}>결제하기</h1>

      <div className={styles["product-box"]}>
        <div className={styles["product-name"]}>{product.name}</div>
        <div className={styles["product-price"]}>₩{product.price.toLocaleString()}</div>
      </div>

      <div className={styles["payment-box"]}>
        <h2 className={styles["section-title"]}>결제 수단</h2>

        <label className={styles["radio"]}>
          <input type="radio" checked readOnly />
          Credit Card
        </label>

        <div className={styles["card-form"]}>
          <input placeholder="카드번호" disabled />
          <div className={styles["row"]}>
            <input placeholder="MM/YY" disabled />
            <input placeholder="CVC" disabled />
          </div>
        </div>

        <button className={styles["purchase-button"]} onClick={handlePurchase}>
          결제하기
        </button>
      </div>
    </div>
  );
};

export default Purchase;
