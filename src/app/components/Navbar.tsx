// src/app/components/Navbar.tsx

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import yellammaImg from "../../assets/yalammada_devi.jpeg";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [user, setUser] = useState<any>(null);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-orange-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src={yellammaImg}
              alt="Yellamma Devi"
              className="w-10 h-10 rounded-full object-cover border border-white/70"
            />
            <h1 className="text-lg font-semibold">SHRI VISHWAS VASANT VAIDYA</h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {t("nav.about")}
            </NavLink>

            <NavLink
              to="/leadership"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {t("nav.leadership")}
            </NavLink>

            <NavLink
              to="/activities"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {t("nav.activities")}
            </NavLink>

            <NavLink
              to="/schemes"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {t("nav.schemes")}
            </NavLink>

            <NavLink
              to="/development"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {t("nav.development")}
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {t("nav.gallery")}
            </NavLink>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 transition ${language === "en" ? "bg-white text-orange-600" : "text-white hover:text-yellow-300"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("kn")}
              className={`rounded-full px-3 py-1 transition ${language === "kn" ? "bg-white text-orange-600" : "text-white hover:text-yellow-300"}`}
            >
              ಕನ್ನಡ
            </button>
          </div>

          {user ? (
            <>
              <span className="text-sm text-gray-100">{t("nav.welcome")}, {user.name}</span>
              <button
                onClick={() => navigate("/admin")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                {t("nav.adminPanel")}
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                {t("nav.logout")}
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              {t("nav.adminLogin")}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
