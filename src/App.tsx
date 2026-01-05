import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
