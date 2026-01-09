import styles from "./PurchaseResult.module.css";
import { useNavigate } from "react-router-dom";

const PurchaseResult = () => {
  const navigate = useNavigate();

  const result = {
    order: {
      productId: 1,
      name: "BASIC",
      type: "MONTHLY",
      price: 15000,
    },
    payment: {
      id: 23,
      pgPaymentId: "29a547c5-b63e-4741-909d-9f44220e6b6b",
      status: "SUCCESS",
      amount: 15000,
      paymentDate: "2026-01-09T12:47:28.662Z",
      issuedSubscription: true,
      createdAt: "2026-01-09T03:47:28.670Z",
    },
    subscription: {
      expiredAt: "2026-02-09T12:47:28.715Z",
      updatedAt: "2026-01-09T03:47:28.717Z",
      id: "7",
      createdAt: "2026-01-09T03:47:28.717Z",
      deletedAt: null,
    },
    resultMessage: "결제 완료 후 구독권 발급에 성공하였습니다.",
    pgPaymentResult: {
      pgPaymentId: "29a547c5-b63e-4741-909d-9f44220e6b6b",
      status: "SUCCESS",
      paidAt: "2026-01-09T12:47:28.662Z",
    },
  };

  return (
    <div className={styles["page"]}>
      <div className={styles["card"]}>
        <div className={styles["status"]}>✅ 결제가 완료되었습니다</div>

        <div className={styles["section"]}>
          <strong>{result.order.name}</strong>
          <p>{result.payment.amount}</p>
          <p>구독 만료일 : {result.subscription.expiredAt}</p>
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
