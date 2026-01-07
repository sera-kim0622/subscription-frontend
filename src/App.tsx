import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
