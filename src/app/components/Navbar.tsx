// src/app/components/Navbar.tsx

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import yellammaImg from "../../assets/yalammada_devi.jpeg";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
  };
  return (
    <nav className="bg-orange-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={yellammaImg}
            alt="Yellamma Devi"
            className="w-10 h-10 rounded-full object-cover border border-white/70"
          />
          <h1 className="text-lg font-semibold">SHRI VISHWAS VASANT VAIDYA</h1>
        </div>

        <div className="flex gap-6 text-sm">
          
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/leadership"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Leadership
          </NavLink>

          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Activities
          </NavLink>

          <NavLink
            to="/videos"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Videos
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Gallery
          </NavLink>

        </div>
        <div className="flex items-center gap-3">
                    {user ? (
                      <>
                        <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                        <button
                          onClick={() => navigate("/admin")}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          Admin Panel
                        </button>
                        <button
                          onClick={handleLogout}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => navigate("/login")}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        Admin Login
                      </button>
                    )}
                  </div>
      </div>
    </nav>
  );
}
