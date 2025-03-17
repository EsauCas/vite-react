import React, { useState, useEffect } from "react";
import Themes from "./Themes";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  logo: string; // Texto o ruta de la imagen del logo
  links: { label: string; to: string; icon?: React.ReactNode }[]; // Enlaces con iconos opcionales
  isLogoImage?: boolean; // Indica si el logo es una imagen
  ctaButton?: { label: string; to: string; variant?: string }; // Botón de llamada a la acción
}

const Header: React.FC<HeaderProps> = ({
  logo,
  links,
  isLogoImage = false,
  ctaButton,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Efecto para detectar scroll y cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Verifica si el enlace corresponde a la ruta actual
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Franja superior con gradiente, visible solo cuando no hay scroll */}
      {!isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-40 h-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
      )}

      <div
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-base-300/95 backdrop-blur-md shadow-lg py-1"
            : "bg-transparent py-2"
        }`}
      >
        {/* Logo y menú hamburguesa */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-white lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon cuando está abierto
                      : "M4 6h16M4 12h8m-8 6h16" // Hamburguesa cuando está cerrado
                  }
                />
              </svg>
            </label>

            {/* Menú móvil con animación */}
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-6 p-4 shadow bg-base-300 rounded-box w-60 transition-all duration-200 ${
                isMobileMenuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`hover:bg-base-100 text-white ${
                      isActiveLink(link.to)
                        ? "font-bold bg-primary/20 text-primary-content"
                        : ""
                    }`}
                  >
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo (texto o imagen) */}
          <Link to="/" className="flex items-center gap-2">
            {isLogoImage ? (
              <img src={logo} alt="Logo" className="h-10 max-w-full" />
            ) : (
              <span className="text-2xl font-bold pl-2 transition-all text-white hover:text-primary drop-shadow-md">
                {logo}
              </span>
            )}
          </Link>
        </div>

        {/* Enlaces de navegación (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`hover:bg-base-100/30 px-4 transition-all duration-200 text-white font-medium drop-shadow-md
                    ${
                      isActiveLink(link.to)
                        ? "font-bold border-b-2 border-primary"
                        : "hover:translate-y-[-2px]"
                    }`}
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botones de acción (Derecha) */}
        <div className="navbar-end gap-2">
          <Themes />

          {/* Botón CTA opcional */}
          {ctaButton && (
            <Link
              to={ctaButton.to}
              className={`btn ${
                ctaButton.variant || "btn-primary"
              } btn-sm md:btn-md transition-all duration-200 hover:scale-105`}
            >
              {ctaButton.label}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
