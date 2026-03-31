import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, Ruler, Tag, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { products, WHATSAPP_NUMBER } from "@/data/products";

const categoryIcons: Record<string, string> = {
  "area-e-lazer": "🏡",
  revestimento: "🧱",
  "elemento-vazado": "🔲",
  acabamento: "🏗️",
  "construcao-civil": "🏠",
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F0F4F8]">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <p className="text-2xl font-bold text-[#1E3A5F] mb-4">Produto não encontrado</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao catálogo
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const icon = categoryIcons[product.categorySlug] || "📦";
  const whatsappMessage = `Olá! Gostaria de saber mais sobre o produto: ${product.name} (${product.dimensions})`;

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <Link to="/" className="hover:text-[#2563EB] transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-gray-400">{product.category}</span>
            <span>/</span>
            <span className="text-[#1E3A5F] font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2563EB] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao catálogo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl flex items-center justify-center h-72 sm:h-96 lg:h-[500px] shadow-inner">
              <span className="text-8xl sm:text-9xl opacity-50">{icon}</span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] px-3 py-1.5 rounded-full text-xs font-semibold w-fit mb-4">
                <Tag className="w-3.5 h-3.5" />
                {product.category}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3A5F] mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs */}
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-6">
                <h3 className="text-sm font-semibold text-[#1E3A5F] uppercase tracking-wider mb-4">
                  Especificações
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                      <Ruler className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Dimensões</p>
                      <p className="text-sm font-semibold text-[#1E3A5F]">{product.dimensions}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                      <Tag className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Material</p>
                      <p className="text-sm font-semibold text-[#1E3A5F]">Concreto Pré-Moldado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fazer Pedido via WhatsApp
                </a>
                <a
                  href={`tel:+5518997603980`}
                  className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Ligar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-8">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton productName={product.name} />
    </div>
  );
};

export default ProductDetail;