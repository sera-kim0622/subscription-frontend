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

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Account Information</h2>

        <div className={styles.infoRow}>
          <span>Email:</span>
          <span>{user.email}</span>
        </div>

        <div className={styles.infoRow}>
          <span>Role:</span>
          <span>{user.role}</span>
        </div>

        <div className={styles.infoRow}>
          <span>Current Plan:</span>
          <span>
            {user.activeSubscriptionId
              ? `Subscription #${user.activeSubscriptionId}`
              : "No Active Plan"}
          </span>
        </div>
      </section>

      {/* Recent Payments */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Payments</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
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
