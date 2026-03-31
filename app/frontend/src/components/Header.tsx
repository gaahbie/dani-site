import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1E3A5F] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2563EB] rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl">
              A
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">Alfa Soluções</h1>
              <p className="text-xs text-[#60A5FA] leading-tight">em Concreto</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-bold leading-tight">Alfa</h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-[#60A5FA] transition-colors">
              Início
            </Link>
            <a href="#categorias" className="text-sm font-medium hover:text-[#60A5FA] transition-colors">
              Categorias
            </a>
            <a href="#produtos" className="text-sm font-medium hover:text-[#60A5FA] transition-colors">
              Produtos
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-[#60A5FA] transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors py-2"
              >
                Início
              </Link>
              <a
                href="#categorias"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors py-2"
              >
                Categorias
              </a>
              <a
                href="#produtos"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors py-2"
              >
                Produtos
              </a>
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors py-2"
              >
                Contato
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors w-fit mt-2"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;