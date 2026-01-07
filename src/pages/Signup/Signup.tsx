import { useNavigate } from "react-router-dom";
import { signup, UserRole } from "../../api/auth.api";
import AuthInput from "../../components/auth/AuthInput/AuthInput";
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";
import { ErrorCode } from "../../constants/errorCode";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    role?: string;
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

    if (!role.trim()) {
      newError.role = "회원유형을 입력해주세요.";
    }

    if (Object.values(newError).length > 0) {
      setErrors(newError);
      return;
    }

    try {
      setErrors({});

      await signup({ email, password, role: UserRole.USER });

      alert("회원가입이 완료되었습니다.");

      navigate("/login");
    } catch (err: any) {
      const data = err?.response?.data;

      if (data?.type === "VALIDATION_ERROR") {
        setErrors(data.errors);
        return;
      } else if (data?.code === ErrorCode.USER_EMAIL_DUPLICATED) {
        setErrors({ email: data?.message });
        return;
      } else {
        setErrors({ global: data?.message });
        return;
      }
    }
  };

  return (
    <>
      <AuthLayout
        title={"회원가입"}
        buttonText="회원가입"
        buttonOnClick={handleSubmit}
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
          value={role}
          placeHolder="회원유형"
          onChange={e => setRole(e.target.value)}
          error={errors.role}
        />
      </AuthLayout>
    </>
  );
}

export default Signup;
