import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./components/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerification from "./pages/OTPVerification";
import ResetPassword from "./pages/ResetPassword";
import Properties from "./pages/Properties";
import Content from "./pages/contact";
import Requests from "./pages/Requests";
import Users from "./pages/Users";
import SupportSystem from "./pages/SupportSystem";



const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/content" element={<Content />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/users" element={<Users />} />
      <Route path="/support-system" element={<SupportSystem />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;