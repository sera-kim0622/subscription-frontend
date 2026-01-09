import styles from "./PurchaseConfirmModal.module.css";

interface PurchaseConfirmModalProps {
  isOpen: boolean;
  planName: string;
  priceLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const PurchaseConfirmModal = ({
  isOpen,
  planName,
  priceLabel,
  onConfirm,
  onCancel,
}: PurchaseConfirmModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles["overlay"]}>
      <div className={styles["modal"]}>
        <h3 className={styles["title"]}>결제 확인</h3>
        <p className={styles["description"]}>아래 구독권으로 결제를 진행하시겠습니까?</p>
      </div>

      <div className={styles["summary"]}>
        <span className={styles["product-name"]}>{planName}</span>
        <span className={styles["product-price"]}>{priceLabel}</span>
      </div>

      <div className={styles["button-row"]}>
        <button className={styles["confirm-button"]} onClick={onConfirm}>
          결제하기
        </button>
        <button className={styles["cancel-button"]} onClick={onCancel}>
          취소
        </button>
      </div>
    </div>
  );
};
