import AuthInput from "../../components/auth/AuthInput/AuthInput";
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";
import styles from "./Signup.module.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [nickname, setNickname] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    nickname?: string;
    global?: string;
  }>({});

  const handleSubmit = () => {
    const newError: typeof errors = {};

    if (!email.trim()) {
      newError.email = "이메일을 입력해주세요.";
    }

    if (!password.trim()) {
      newError.password = "비밀번호를 입력해주세요.";
    }

    if (!nickname.trim()) {
      newError.nickname = "닉네임을 입력해주세요.";
    }

    if (Object.values(newError).length > 0) {
      setErrors(newError);
      return;
    }

    setErrors({});
  };

  return (
    <>
      <AuthLayout
        title={"회원가입"}
        footer={
          <>
            이미 계정이 있으신가요? <a href="/login">로그인</a>
          </>
        }>
        <AuthInput
          value={email}
          placeHolder="이메일"
          onChange={e => setEmail(e.target.value)}
          error={errors.email}
        />

        <AuthInput
          value={password}
          type="password"
          placeHolder="비밀번호"
          onChange={e => setPassword(e.target.value)}
          error={errors.password}
        />

        <AuthInput
          value={nickname}
          placeHolder="닉네임"
          onChange={e => setNickname(e.target.value)}
          error={errors.nickname}
        />

        <button className={styles.button} onClick={handleSubmit}>
          회원가입
        </button>
      </AuthLayout>
    </>
  );
}

export default Signup;
