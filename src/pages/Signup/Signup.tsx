import AuthInput from "../../components/auth/AuthInput/AuthInput";
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
        <AuthInput value={email} placeHolder="이메일" onChange={e => setEmail(e.target.value)} />

        <AuthInput
          value={password}
          type="password"
          placeHolder="비밀번호"
          onChange={e => setPassword(e.target.value)}
        />

        <AuthInput
          value={nickname}
          placeHolder="닉네임"
          onChange={e => setNickname(e.target.value)}
        />

        <button className={styles.button}>회원가입</button>
      </AuthLayout>
    </>
  );
}

export default Signup;
