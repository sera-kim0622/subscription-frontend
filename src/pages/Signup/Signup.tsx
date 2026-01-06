import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [nickname, setNickname] = useState("");

  return (
    <>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <h2>회원가입</h2>
        <input
          value={email}
          type="text"
          placeholder="이메일"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          value={password}
          type="password"
          placeholder="비밀번호"
          onChange={e => setPassword(e.target.value)}
        />

        <input
          value={nickname}
          type="text"
          placeholder="닉네임"
          onChange={e => setNickname(e.target.value)}
        />
      </div>
    </>
  );
}

export default Signup;
