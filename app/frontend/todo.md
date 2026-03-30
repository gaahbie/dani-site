# Alfa Soluções em Concreto - Catálogo Digital

## Design Guidelines

### Design References
- **Style**: Industrial Modern + Clean Minimalism
- Premium concrete/construction aesthetic with warm, earthy tones

### Color Palette
- Primary: #1C1C1C (Dark Charcoal - headers/text)
- Secondary: #F5F0EB (Warm Cream - background)
- Accent: #C4956A (Warm Bronze/Terracotta - CTAs and highlights)
- Surface: #FFFFFF (White - cards)
- Muted: #8C8C8C (Gray - secondary text)
- WhatsApp: #25D366 (WhatsApp green - contact button)

### Typography
- Headings: Inter, font-weight 700
- Body: Inter, font-weight 400
- Navigation: Inter, font-weight 600

### Key Component Styles
- **Cards**: White bg, subtle shadow, 12px rounded, hover lift effect
- **Buttons**: Bronze accent bg, white text, 8px rounded
- **WhatsApp Button**: Fixed bottom-right, green, circular with icon
- **Category Filters**: Pill-shaped, outline style, active = filled

### Layout
- Hero: Full width with overlay text
- Product Grid: 4 cols desktop, 2 cols tablet, 1 col mobile, 20px gaps
- Section padding: 60px vertical

### Images to Generate
1. **hero-concrete-products.jpg** - Elegant display of concrete products in an outdoor garden setting, warm lighting, premium feel (1024x576)
2. **category-area-lazer.jpg** - Concrete benches and tables in a beautiful garden/patio area (1024x576)
3. **category-revestimento.jpg** - Modern wall with decorative concrete cladding panels, architectural photography (1024x576)
4. **category-elemento-vazado.jpg** - Decorative concrete hollow blocks creating beautiful light patterns (1024x576)

---

## Products Data (from PDF catalog)

### Categories:
1. Área e Lazer (Tables, Benches, Ping Pong, etc.)
2. Revestimento (Wall cladding panels)
3. Elemento Vazado (Hollow decorative blocks)
4. Acabamento em Concreto (Finishing: tiles, curbs, drains)
5. Construção Civil (Construction: gas houses, stairs, etc.)

---

## Development Tasks

### Files to create (max 8):
1. **src/data/products.ts** - All product data organized by category
2. **src/pages/Index.tsx** - Homepage with hero, categories, featured products
3. **src/pages/ProductDetail.tsx** - Product detail page
4. **src/components/ProductCard.tsx** - Product card component for grid
5. **src/components/Header.tsx** - Navigation header
6. **src/components/Footer.tsx** - Footer with contact info
7. **src/components/WhatsAppButton.tsx** - Fixed WhatsApp floating button
8. **src/App.tsx** - Router setup