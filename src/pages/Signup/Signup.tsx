import styles from "./Signup.module.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [nickname, setNickname] = useState("");

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

            <div className={styles.footer}>
              이미 회원가입을 하셨나요?
              <a href="/signin">로그인</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
