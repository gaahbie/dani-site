import { MapPin, Phone, Clock } from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_PHONES, WHATSAPP_NUMBER } from "@/data/products";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#1a2f4e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/1073975/2026-03-31/4786e753-63a6-4242-90d0-24213cce2377.png"
                alt="Alfa Soluções em Concreto"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Soluções em concreto pré-moldado de alta qualidade para sua obra, jardim e projeto arquitetônico.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2a9d8f] mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#2a9d8f] shrink-0" />
                <p className="text-sm text-gray-300">{COMPANY_ADDRESS}</p>
              </div>
              {COMPANY_PHONES.map((phone) => (
                <div key={phone} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2a9d8f] shrink-0" />
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-[#2a9d8f] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#2a9d8f] shrink-0" />
                <p className="text-sm text-gray-300">Seg - Sex: 7h às 17h</p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2a9d8f] mb-4">
              Categorias
            </h4>
            <ul className="space-y-2">
              {["Área e Lazer", "Revestimento", "Elemento Vazado", "Acabamento em Concreto", "Construção Civil"].map(
                (cat) => (
                  <li key={cat}>
                    <a href="#produtos" className="text-sm text-gray-300 hover:text-[#2a9d8f] transition-colors">
                      {cat}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © 2026 Alfa Soluções em Concreto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;