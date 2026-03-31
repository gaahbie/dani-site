import { useState, useMemo } from "react";
import { ArrowRight, Phone, Search, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { products, categories, WHATSAPP_NUMBER, HERO_IMAGE } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== "todos") {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Alfa Soluções em Concreto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 via-[#1E3A5F]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <div className="inline-block bg-[#2563EB]/20 backdrop-blur-sm border border-[#60A5FA]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#60A5FA] text-xs sm:text-sm font-medium">
                Catálogo 2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Soluções em{" "}
              <span className="text-[#60A5FA]">Concreto</span>{" "}
              de Alta Qualidade
            </h1>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              Produtos pré-moldados para sua obra, jardim e projeto arquitetônico. Durabilidade, design e resistência.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                Ver Catálogo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer um orçamento.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A5F] mb-3">
              Nossas Categorias
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
              Explore nosso catálogo completo de produtos em concreto pré-moldado
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setActiveCategory(cat.slug);
                  document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative rounded-xl overflow-hidden h-40 sm:h-48 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 via-[#1E3A5F]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-white font-bold text-xs sm:text-sm leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-white/70 text-[10px] sm:text-xs mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A5F] mb-3">
              Nossos Produtos
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
              Conheça toda nossa linha de produtos em concreto pré-moldado
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 bg-[#F0F4F8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory("todos")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === "todos"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "bg-[#F0F4F8] text-gray-600 hover:bg-blue-50"
                }`}
              >
                Todos ({products.length})
              </button>
              {categories.map((cat) => {
                const count = products.filter((p) => p.categorySlug === cat.slug).length;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      activeCategory === cat.slug
                        ? "bg-[#2563EB] text-white shadow-md"
                        : "bg-[#F0F4F8] text-gray-600 hover:bg-blue-50"
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-2">Nenhum produto encontrado</p>
              <p className="text-gray-400 text-sm">Tente outra busca ou categoria</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("todos");
                }}
                className="mt-4 text-[#2563EB] text-sm font-medium hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#1E3A5F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Gostou dos nossos produtos?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Entre em contato conosco pelo WhatsApp e solicite seu orçamento. Atendemos toda a região de Araçatuba e interior de SP.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer um orçamento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;