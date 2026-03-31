import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a2f4e] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/1073975/2026-03-31/1743ac6f-05a6-4f06-86c1-7cd44a59798d.png"
              alt="Alfa Soluções em Concreto"
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-[#2a9d8f] transition-colors">
              Início
            </Link>
            <a href="#categorias" className="text-sm font-medium hover:text-[#2a9d8f] transition-colors">
              Categorias
            </a>
            <a href="#produtos" className="text-sm font-medium hover:text-[#2a9d8f] transition-colors">
              Produtos
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-[#2a9d8f] transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2a9d8f] hover:bg-[#238b7e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
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
                className="text-sm font-medium hover:text-[#2a9d8f] transition-colors py-2"
              >
                Início
              </Link>
              <a
                href="#categorias"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-[#2a9d8f] transition-colors py-2"
              >
                Categorias
              </a>
              <a
                href="#produtos"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-[#2a9d8f] transition-colors py-2"
              >
                Produtos
              </a>
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-[#2a9d8f] transition-colors py-2"
              >
                Contato
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2a9d8f] hover:bg-[#238b7e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors w-fit mt-2"
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