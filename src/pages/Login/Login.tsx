import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";
import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <>
      <AuthLayout
        title={"회원가입"}
        footer={
          <>
            아직 계정이 없으신가요? <a href="/signup">회원가입</a>
          </>
        }>
        <div className={styles.field}>
          <input
            value={email}
            type="text"
            placeholder="이메일"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <input
            value={password}
            type="password"
            placeholder="비밀번호"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.field}>{/* 에러 메시지 자리 */}</div>

        <button className={styles.button}>로그인</button>
      </AuthLayout>
    </>
  );
}

export default Login;
