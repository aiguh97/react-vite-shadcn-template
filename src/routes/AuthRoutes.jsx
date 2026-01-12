import { Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/authentication/LoginPage";
import { RegisterPage } from "@/pages/authentication/RegisterPage";
import { ForgotPasswordPage } from "@/pages/authentication/ForgotPasswordPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
};
