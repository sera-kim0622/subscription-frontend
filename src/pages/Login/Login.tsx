import AuthInput from "../../components/auth/AuthInput/AuthInput";
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";
import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <>
      <AuthLayout
        title={"로그인"}
        footer={
          <>
            아직 계정이 없으신가요? <a href="/signup">회원가입</a>
          </>
        }>
        <AuthInput value={email} placeHolder="이메일" onChange={e => setEmail(e.target.value)} />

        <AuthInput
          value={password}
          type="password"
          placeHolder="비밀번호"
          onChange={e => setPassword(e.target.value)}
        />

        <button className={styles.button}>로그인</button>
      </AuthLayout>
    </>
  );
}

export default Login;
