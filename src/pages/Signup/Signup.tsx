import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";
import styles from "./Signup.module.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [nickname, setNickname] = useState("");

  return (
    <>
      <AuthLayout
        title={"회원가입"}
        footer={
          <>
            이미 계정이 있으신가요? <a href="/login">로그인</a>
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

        <div className={styles.field}>
          <input
            value={nickname}
            type="text"
            placeholder="닉네임"
            onChange={e => setNickname(e.target.value)}
          />
        </div>

        <div className={styles.field}>{/* 에러 메시지 자리 */}</div>

        <button className={styles.button}>회원가입</button>
      </AuthLayout>
    </>
  );
}

export default Signup;
