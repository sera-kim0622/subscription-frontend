import { useEffect, useState } from "react";
import { profile, UserProfile } from "../../api/profile.api";
import styles from "./Profile.module.css";

const Profile = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    profile()
      .then(res => {
        if (!mounted) return;
        setUser(res);
        setErrorMessage(null);
      })
      .catch(err => {
        console.error("프로필 정보 가져오는 중 에러 발생", err);
        if (!mounted) return;
        setErrorMessage("프로필 데이터를 불러오지 못했습니다.");
      })
      .finally(() => {
        if (!mounted) return;
        setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (errorMessage) return <div>{errorMessage}</div>;
  if (!user) return <div>프로필 데이터가 비어 있습니다.</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>

      {/* Account Information */}
      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>계정 정보</h2>

        <div className={styles.infoRow}>
          <span>ID:</span>
          <span>{user.email}</span>
        </div>

        <div className={styles.infoRow}>
          <span>PLAN:</span>
          <span>
            {user.subscriptions.find(p => p.id === user.activeSubscriptionId)?.productName}
          </span>
        </div>
      </section>

      {/* Current Subscription */}
      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>구독 내역</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>만료일</th>
            </tr>
          </thead>

          <tbody>
            {user.subscriptions.map(sub => (
              <tr key={sub.id}>
                <td>{sub.productName}</td>
                <td>₩{sub.price.toLocaleString()}</td>
                <td>{new Date(sub.expiredAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Payments */}
      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>결제 내역</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>결제 일자</th>
              <th>결제 금액</th>
              <th>결제 결과</th>
            </tr>
          </thead>

          <tbody>
            {user.payments?.map(payment => (
              <tr key={payment.id}>
                <td>{new Date(payment.paymentDate).toLocaleDateString()}</td>
                <td>{payment.amount.toLocaleString()}원</td>
                <td className={styles.success}>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Profile;
