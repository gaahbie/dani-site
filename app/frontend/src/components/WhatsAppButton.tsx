import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

interface WhatsAppButtonProps {
  productName?: string;
}

const WhatsAppButton = ({ productName }: WhatsAppButtonProps) => {
  const message = productName
    ? `Olá! Gostaria de saber mais sobre o produto: ${productName}`
    : "Olá! Gostaria de saber mais sobre os produtos da Alfa Soluções em Concreto.";

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  );
};

export default WhatsAppButton;