import styles from "./Purchase.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { purchase } from "../../api/purchase.api";
import { getProducts, Product } from "../../api/product.api";
import { useEffect, useState } from "react";
import { PurchaseConfirmModal } from "./PurchaseConfirmModal";

const Purchase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { productId } = useParams<{ productId: string }>();

  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProducts({}).then(products => {
      const found = products.find(p => Number(p.id) === Number(productId));

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

  // 실제 결제 호출하는 로직
  const handlePurchase = async () => {
    try {
      const result = await purchase({ productId: product.id, simulate: "success" });

      navigate("/purchase/result", { state: { result } });
    } catch (err) {
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

        <button className={styles["purchase-button"]} onClick={() => setIsModalOpen(true)}>
          결제하기
        </button>
      </div>

      <PurchaseConfirmModal
        isOpen={isModalOpen}
        planName="Pro 플랜"
        priceLabel="₩25,000 / 월"
        onCancel={() => setIsModalOpen(false)}
        onConfirm={() => handlePurchase()}
      />
    </div>
  );
};

export default Purchase;
