import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  title: string;
  children?: React.ReactNode;
  buttonText: string;
  buttonOnClick: () => void;
  footer: React.ReactNode;
}

function AuthLayout({ title, children, buttonText, buttonOnClick, footer }: AuthLayoutProps) {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.form}>{children}</div>
          <button className={styles.button} onClick={buttonOnClick}>
            {buttonText}
          </button>
          <div className={styles.footer}>{footer}</div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
