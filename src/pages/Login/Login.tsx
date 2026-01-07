import { login } from "../../api/auth.api";
import AuthInput from "../../components/auth/AuthInput/AuthInput";
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";
import { ErrorCode } from "../../constants/errorCode";
import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    global?: string;
  }>({});

  const handleSubmit = async () => {
    const newError: typeof errors = {};

    if (!email.trim()) {
      newError.email = "이메일을 입력해주세요.";
    }

    if (!password.trim()) {
      newError.password = "비밀번호를 입력해주세요.";
    }

    if (Object.values(newError).length > 0) {
      setErrors(newError);
      return;
    }

    try {
      setErrors({});

      await login({ email, password });
    } catch (err: any) {
      const data = err?.response?.data;

      if (data?.type === "VALIDATION_ERROR") {
        setErrors(data.errors);
        return;
      } else if (data?.code === ErrorCode.AUTH_INVALID_CREDENTIALS) {
        setErrors({ email: data?.message });
      } else {
        setErrors({ global: data?.message });
      }
    }
    setErrors({});
  };

  return (
    <>
      <AuthLayout
        title={"로그인"}
        footer={
          <>
            아직 계정이 없으신가요? <a href="/signup">회원가입</a>
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

        <button className={styles.button} onClick={handleSubmit}>
          로그인
        </button>
      </AuthLayout>
    </>
  );
}

export default Login;
