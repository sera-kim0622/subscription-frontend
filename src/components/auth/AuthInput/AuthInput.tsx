import styles from "./AuthInput.module.css";

interface AuthInputProps {
  type?: string;
  value: string;
  placeHolder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AuthInput({ type = "text", value, placeHolder, error, onChange }: AuthInputProps) {
  return (
    <div className={styles.field}>
      <input type={type} value={value} placeholder={placeHolder} onChange={onChange} />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default AuthInput;
