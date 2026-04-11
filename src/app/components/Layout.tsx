import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { LanguageProvider } from "./LanguageContext";

export default function Layout() {
  return (
    <LanguageProvider>
      <Navbar />
      <Outlet />
    </LanguageProvider>
  );
}