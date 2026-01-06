import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>회원가입</h1>
          <div className={styles.form}>
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

            <div className={styles.footer}>
              아직 회원이 아니신가요?
              <a href="/signup">회원가입</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
