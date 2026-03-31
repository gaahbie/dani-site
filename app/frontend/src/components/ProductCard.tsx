import { Link } from "react-router-dom";
import { Ruler, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  "area-e-lazer": "bg-emerald-100 text-emerald-700",
  revestimento: "bg-teal-100 text-teal-700",
  "elemento-vazado": "bg-cyan-100 text-cyan-700",
  acabamento: "bg-amber-100 text-amber-700",
  "construcao-civil": "bg-slate-100 text-slate-700",
};

const ProductCard = ({ product }: ProductCardProps) => {
  const colorClass = categoryColors[product.categorySlug] || "bg-gray-100 text-gray-700";

  return (
    <Link
      to={`/produto/${product.id}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Product Image */}
      <div className="h-44 sm:h-52 relative overflow-hidden bg-white flex items-center justify-center p-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 border-t border-gray-50">
        <h3 className="font-bold text-[#1a2f4e] text-sm sm:text-base leading-snug mb-2 group-hover:text-[#2a9d8f] transition-colors line-clamp-2">
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
          <span className="text-[#2a9d8f] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Ver mais <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;