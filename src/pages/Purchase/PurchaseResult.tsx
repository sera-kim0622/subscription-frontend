import { useEffect } from "react";
import { PurchaseOutputDto } from "../../api/purchase.api";
import styles from "./PurchaseResult.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const PurchaseResult = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location?.state as { result: PurchaseOutputDto };

  useEffect(() => {
    if (!state?.result) {
      navigate("/products", { replace: true });
    }
  }, [state, location]);

  const { result } = state;

  return (
    <div className={styles["page"]}>
      <div className={styles["card"]}>
        <div className={styles["status"]}>✅ 결제가 완료되었습니다</div>

        <div className={styles["section"]}>
          <strong>{result.order.name}</strong>
          <p>{result.payment.amount}</p>
          <p>
            구독 만료일 :{" "}
            {result.subscription?.expiredAt &&
              new Date(result.subscription.expiredAt).toLocaleDateString()}
          </p>
        </div>

        <hr className={styles["divider"]} />

        <div className={styles["section"]}>
          <p>결제 일시 : {result.pgPaymentResult.paidAt}</p>
          <p>주문 번호 : {result.pgPaymentResult.pgPaymentId}</p>
        </div>

        <p className={styles.hint}>결제 내역은 마이페이지 &gt; 주문 내역에서 확인할 수 있습니다.</p>

        <button
          type="button"
          className={styles["confirm-button"]}
          onClick={() => navigate("/products")}>
          확인
        </button>
      </div>
    </div>
  );
};

export default PurchaseResult;
