import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  title: string;
  children?: React.ReactNode;
  footer: React.ReactNode;
}

function AuthLayout({ title, children, footer }: AuthLayoutProps) {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.form}>{children}</div>
          <div className={styles.footer}>{footer}</div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
