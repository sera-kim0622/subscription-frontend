import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AppLayout />}>
        <Route path="/products" element={<Products />} />
        {/* 이 밑으로 사이드바가 필요한 페이지 넣기*/}
      </Route>
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
}

export default App;
