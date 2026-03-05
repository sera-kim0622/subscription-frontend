import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  title: string;
  children?: React.ReactNode;
  buttonText: string;
  buttonOnClick: (e: React.FormEvent<HTMLFormElement>) => void;
  footer: React.ReactNode;
}

function AuthLayout({ title, children, buttonText, buttonOnClick, footer }: AuthLayoutProps) {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          <form className={styles.form} onSubmit={buttonOnClick}>
            {children}
            <button className={styles.button} type="submit">
              {buttonText}
            </button>
          </form>

          <div className={styles.footer}>{footer}</div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
