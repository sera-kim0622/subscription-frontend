import styles from "./PurchaseResult.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PurchaseOutputDto, PurchaseResultStatus } from "../../api/purchase.api";

const PurchaseResult = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { result?: PurchaseOutputDto };

  const [status, setStatus] = useState<PurchaseResultStatus | null>(null);
  const [result, setResult] = useState<PurchaseOutputDto | null>(null);

  useEffect(() => {
    if (!state?.result) {
      navigate("/products", { replace: true });
      return;
    }

    const { payment, subscription } = state.result;

    if (payment.status === "FAIL") {
      setStatus(PurchaseResultStatus.PAYMENT_FAILED);
    } else if (!subscription) {
      setStatus(PurchaseResultStatus.SUBSCRIPTION_FAILED);
    } else {
      setStatus(PurchaseResultStatus.SUCCESS);
    }

    setResult(state.result);
  }, [state, navigate]);

  if (!status || !result) return null;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {status === PurchaseResultStatus.SUCCESS && (
          <>
            <h2 className={styles.title}>✅ 결제가 완료되었습니다</h2>
            <p className={styles.description}>구독이 정상적으로 시작되었습니다.</p>

            <div className={styles.section}>
              <p>상품명: {result.order.name}</p>
              <p>구독 만료일: {new Date(result.subscription!.expiredAt).toLocaleDateString()}</p>
            </div>
          </>
        )}

        {status === PurchaseResultStatus.SUBSCRIPTION_FAILED && (
          <>
            <h2 className={styles.title}>⚠️ 결제는 완료되었습니다</h2>
            <p className={styles.description}>
              결제는 성공했으나 구독권 발급에 실패했습니다. 고객센터에 문의해주세요.
            </p>

            <div className={styles.section}>
              <p>결제 금액: {result.payment?.amount.toLocaleString()}원</p>
            </div>
          </>
        )}

        {status === PurchaseResultStatus.PAYMENT_FAILED && (
          <>
            <h2 className={styles.title}>❌ 결제에 실패했습니다</h2>
            <p className={styles.description}>결제가 정상적으로 처리되지 않았습니다.</p>

            {result.payment.failReason && (
              <div className={styles.section}>
                <p>실패 사유: {result.payment.failReason}</p>
              </div>
            )}
          </>
        )}

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
