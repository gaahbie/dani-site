import { Link } from "react-router-dom";
import { ArrowRight, Ruler } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  "area-e-lazer": "bg-emerald-100 text-emerald-700",
  revestimento: "bg-amber-100 text-amber-700",
  "elemento-vazado": "bg-sky-100 text-sky-700",
  acabamento: "bg-violet-100 text-violet-700",
  "construcao-civil": "bg-rose-100 text-rose-700",
};

const categoryIcons: Record<string, string> = {
  "area-e-lazer": "🏡",
  revestimento: "🧱",
  "elemento-vazado": "🔲",
  acabamento: "🏗️",
  "construcao-civil": "🏠",
};

const ProductCard = ({ product }: ProductCardProps) => {
  const colorClass = categoryColors[product.categorySlug] || "bg-gray-100 text-gray-700";
  const icon = categoryIcons[product.categorySlug] || "📦";

  return (
    <Link
      to={`/produto/${product.id}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Visual Header */}
      <div className="h-40 sm:h-48 bg-gradient-to-br from-[#F5F0EB] to-[#E8E0D8] flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl sm:text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[#1C1C1C] text-sm sm:text-base leading-snug mb-2 group-hover:text-[#C4956A] transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-center gap-1.5 text-gray-400">
            <Ruler className="w-3.5 h-3.5" />
            <span className="text-[10px] sm:text-xs font-medium">{product.dimensions}</span>
          </div>
          <span className="text-[#C4956A] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Ver mais <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;