export interface Product {
  id: string;
  name: string;
  description: string;
  dimensions: string;
  category: string;
  categorySlug: string;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: "Área e Lazer",
    slug: "area-e-lazer",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1073975/2026-03-30/5c13b411-0cb8-4dd5-842f-c5fb82d99555.png",
    description: "Mesas, bancos, lixeiras e muito mais para seu espaço de lazer",
  },
  {
    name: "Revestimento",
    slug: "revestimento",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1073975/2026-03-30/27de9cff-f2cb-47db-84a6-5ddfa8ca6b25.png",
    description: "Revestimentos decorativos em concreto para paredes e fachadas",
  },
  {
    name: "Elemento Vazado",
    slug: "elemento-vazado",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1073975/2026-03-30/9203078c-ac71-454b-b4dc-9b145c739461.png",
    description: "Cobogós e elementos vazados para ventilação e decoração",
  },
  {
    name: "Acabamento em Concreto",
    slug: "acabamento",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1073975/2026-03-30/27de9cff-f2cb-47db-84a6-5ddfa8ca6b25.png",
    description: "Pisos, guias, pingadeiras e acabamentos diversos",
  },
  {
    name: "Construção Civil",
    slug: "construcao-civil",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1073975/2026-03-30/42457c48-e370-4eb9-abf2-15a6b16adac0.png",
    description: "Soluções em concreto para construção civil",
  },
];

export const products: Product[] = [
  // Área e Lazer
  {
    id: "mesa-1m-diametro",
    name: "Mesa 1 Metro Diâmetro",
    description:
      "Produzido em concreto de alta qualidade, é perfeito para jardins, varandas, praças e áreas gourmet. Ideal para áreas externas, resistente, funcional e com design moderno.",
    dimensions: "1 metro de diâmetro",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "mesa-080-diametro",
    name: "Mesa 0,80 Metro Diâmetro",
    description:
      "Perfeita para áreas externas, varandas e ambientes de convivência, unindo durabilidade, praticidade e design funcional.",
    dimensions: "0,80 metro de diâmetro",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "mesa-080x080",
    name: "Mesa 0,80 x 0,80",
    description:
      "Com design funcional e moderno, é perfeito para jardins, varandas, áreas gourmet e ambientes comerciais.",
    dimensions: "0,80 x 0,80",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "mesa-sob-medida",
    name: "Mesa Sob Medida",
    description:
      "Produzido em concreto de alta qualidade, é perfeito para jardins, varandas, praças e áreas gourmet, fácil manutenção e longa vida útil.",
    dimensions: "Sob medida",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "banco-reto-200x045",
    name: "Banco Reto 2,00 x 0,45",
    description:
      "Ideal para projetos que exigem aproveitamento inteligente do espaço sem abrir mão da estética e da praticidade.",
    dimensions: "2,00 x 0,45",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "banco-u-130x040",
    name: 'Banco "U" 1,30 x 0,40',
    description:
      'Com design moderno e linhas minimalistas, o Banco "U" é a escolha ideal para quem busca sofisticação, resistência e versatilidade.',
    dimensions: "1,30 x 0,40",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "banco-reto-140x030",
    name: "Banco Reto 1,40 x 0,30",
    description:
      "Fabricado em concreto de alta qualidade, suporta as ações do tempo, não exige manutenção frequente e garante longa vida útil.",
    dimensions: "1,40 x 0,30",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "banco-encosto-colonial",
    name: "Banco de Encosto Estilo Colonial",
    description:
      "O Banco com Encosto Estilo Colonial é a escolha ideal para quem busca conforto aliado a um design elegante.",
    dimensions: "1,50 x 0,90 | 1,30 x 0,90",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "banco-reto-150x045",
    name: "Banco Reto 1,50 x 0,45",
    description:
      "Desenvolvido para oferecer resistência, funcionalidade e design atemporal.",
    dimensions: "1,50 x 0,45",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "banco-pes-u",
    name: "Banco Pés U",
    description:
      "O Banco Pés U é uma peça em concreto que combina resistência estrutural com um design moderno e funcional.",
    dimensions: "2,00 x 0,45",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "lixeira-concreto-fino",
    name: "Lixeira em Concreto Fino",
    description:
      "Lixeira em concreto fino com acabamento refinado, desenvolvida para unir resistência, durabilidade e estética.",
    dimensions: "1,30 x 0,80 x 0,40",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "pergolado-concreto",
    name: "Pergolado em Concreto",
    description:
      "Ideal para compor áreas externas com charme e funcionalidade. O pergolado em concreto pré-moldado oferece alta durabilidade, resistência às intempéries e baixa manutenção.",
    dimensions: "Sob medida",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "cuba-artesanal",
    name: "Cuba Artesanal",
    description:
      "Produzida manualmente, a cuba artesanal de concreto carrega em cada detalhe a autenticidade do feito à mão.",
    dimensions: "50 x 35 x 13",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "cuba-bless",
    name: "Cuba Bless",
    description:
      "A Cuba Bless é a escolha ideal para quem busca sofisticação e funcionalidade em ambientes como banheiros e lavabos.",
    dimensions: "50 x 35 x 13",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "cuba-oval-terrazzo",
    name: "Cuba Oval Terrazzo",
    description:
      "Produzida em concreto com acabamento terrazzo, apresenta fragmentos aparentes que criam um efeito único e contemporâneo.",
    dimensions: "50 x 35 x 13",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "piso-floral",
    name: "Piso Floral Antiderrapante 4cm",
    description:
      "O Piso Floral Antiderrapante 4 cm é uma peça de concreto desenvolvida para unir segurança, funcionalidade e um acabamento decorativo diferenciado.",
    dimensions: "Sob medida",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "piso-trevo",
    name: "Piso Trevo 6cm",
    description:
      "Peça de concreto intertravado que combina resistência, durabilidade e um design diferenciado em formato de trevo.",
    dimensions: "Sob medida",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "mesa-ping-pong",
    name: "Mesa de Ping Pong",
    description:
      "A Mesa de Ping Pong em concreto é projetada para oferecer lazer com máxima durabilidade e resistência. Em concreto pré-moldado, desenvolvida para áreas externas com alta resistência e durabilidade. Ideal para praças, condomínios, escolas e espaços de lazer.",
    dimensions: "Tamanho oficial",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "mesa-futmesa",
    name: "Mesa de Futmesa",
    description:
      "A Mesa de Futmesa é uma peça em concreto desenvolvida para unir lazer, resistência e durabilidade em um único produto.",
    dimensions: "Tamanho oficial",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  {
    id: "bate-rodas",
    name: "Bate Rodas",
    description:
      "O Bate-Rodas é um limitador de concreto projetado para organizar e proteger vagas de estacionamento.",
    dimensions: "Sob medida",
    category: "Área e Lazer",
    categorySlug: "area-e-lazer",
  },
  // Revestimento
  {
    id: "revestimento-abstrata",
    name: "Abstrata",
    description:
      "Revestimento Abstrata: formas modernas e textura marcante que transformam paredes em verdadeiros elementos de destaque na arquitetura.",
    dimensions: "Sob medida",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-ripado",
    name: "Ripado",
    description:
      "Traz linhas modernas que criam um efeito de profundidade e elegância nas paredes. Ideal para fachadas e ambientes decorativos, une estética contemporânea, resistência e durabilidade.",
    dimensions: "0,50 x 0,50",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-trapezio-3l",
    name: "Trapézio 3L",
    description:
      "Ideal para compor áreas externas com charme e funcionalidade. Oferece alta durabilidade, resistência às intempéries e baixa manutenção.",
    dimensions: "0,50 x 0,25",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-tsunami",
    name: "Tsunami",
    description:
      "Possui um design com ondas marcantes que criam movimento e destaque nas paredes.",
    dimensions: "0,39 x 0,19",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-zeus",
    name: "Zeus",
    description:
      "Design imponente e marcante, ideal para destacar paredes e fachadas.",
    dimensions: "1,00 x 0,50",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-canjiquinha",
    name: "Canjiquinha",
    description:
      "Traz a aparência rústica das pedras naturais, criando um efeito elegante e acolhedor nas paredes. Ideal para fachadas e áreas decorativas, une beleza, resistência e durabilidade.",
    dimensions: "0,50 x 0,20",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-mini-origame",
    name: "Mini Origame",
    description:
      "Apresenta um design geométrico inspirado nas dobraduras do origami, criando um efeito moderno e sofisticado nas paredes.",
    dimensions: "0,40 x 0,40",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-origame",
    name: "Origame",
    description:
      "Ideal para fachadas e ambientes decorativos, une criatividade, resistência e durabilidade.",
    dimensions: "0,50 x 0,20",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-mosaico",
    name: "Mosaico",
    description:
      "Traz um conjunto de formas que criam um efeito visual moderno e harmonioso nas paredes.",
    dimensions: "Sob medida",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-mosaico-liso",
    name: "Mosaico Liso",
    description:
      "Apresenta um design equilibrado e acabamento uniforme, criando um visual moderno e elegante nas paredes. Ideal para fachadas e ambientes decorativos.",
    dimensions: "0,80 x 0,40",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-multplus",
    name: "Multplus",
    description:
      "Pré-moldado possui um design versátil e moderno, que valoriza paredes e fachadas com textura. Ideal para composições arquitetônicas contemporâneas.",
    dimensions: "1,00 x 0,50",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-escaleno",
    name: "Escaleno",
    description:
      "Formas geométricas assimétricas que criam um efeito visual moderno e dinâmico nas paredes. Ideal para fachadas e ambientes decorativos.",
    dimensions: "0,50 x 0,50",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-estrutural",
    name: "Estrutural",
    description:
      "Oferece um visual robusto e moderno, ideal para quem busca resistência e praticidade. Além de valorizar paredes e fachadas.",
    dimensions: "0,40 x 0,40",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-ripa-cimenticia",
    name: "Ripa Cimentícia",
    description:
      "Traz um efeito ripado moderno que valoriza paredes e fachadas com elegância e textura. Ideal para composições arquitetônicas contemporâneas.",
    dimensions: "100 x 0,87",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-filete",
    name: "Filete",
    description:
      "Reproduz o visual das pedras naturais em filetes, criando um efeito rústico e elegante nas paredes. Ideal para fachadas e áreas decorativas.",
    dimensions: "100 x 0,87",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-kit-4-mosaico",
    name: "KIT 4 Mosaico",
    description:
      "Composto por peças que formam uma composição geométrica moderna e harmoniosa.",
    dimensions: "0,30 x 0,30 | 0,50 x 0,50",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  {
    id: "revestimento-floral",
    name: "Floral",
    description:
      "Design delicado inspirado em formas florais, criando um efeito decorativo elegante nas paredes. Ideal para fachadas e ambientes decorativos.",
    dimensions: "0,30 x 0,30",
    category: "Revestimento",
    categorySlug: "revestimento",
  },
  // Elemento Vazado
  {
    id: "elemento-arabela",
    name: "Arabela",
    description:
      "Elemento vazado pré-moldado com desenho delicado e ornamental, ideal para criar painéis decorativos cheios de personalidade.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-margarida",
    name: "Margarida",
    description:
      "Elemento vazado pré-moldado com design inspirado na forma de margarida, trazendo leveza e um toque decorativo ao ambiente.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-16-furos",
    name: "16 Furos",
    description:
      "Elemento vazado pré-moldado com 16 aberturas que garantem excelente ventilação e entrada de luz natural.",
    dimensions: "30 x 30 x 7",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-triangulo",
    name: "Triângulo",
    description:
      "Elemento vazado pré-moldado com design geométrico em triângulos que cria um efeito visual moderno e dinâmico.",
    dimensions: "40 x 44 x 7",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-quadriculado",
    name: "Quadriculado",
    description:
      "Elemento vazado pré-moldado com desenho quadriculado que combina ventilação, iluminação natural e estética arquitetônica.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-mandala",
    name: "Mandala",
    description:
      "Com um desenho inspirado nas formas da mandala, ele cria um efeito visual marcante, transformando paredes, fachadas e divisórias em verdadeiros destaques arquitetônicos.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-arabe",
    name: "Árabe",
    description:
      "Além do apelo estético, permite a passagem de luz e ventilação natural, contribuindo para ambientes mais frescos e bem iluminados, sem abrir mão da privacidade.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-taco-chines",
    name: "Taco Chinês",
    description:
      "Seu formato facilita o encaixe e permite diferentes paginações, criando um acabamento uniforme e esteticamente agradável.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-flor",
    name: "Flor",
    description:
      "Com um design delicado, ele permite a passagem de luz e ventilação natural, criando ambientes mais agradáveis, iluminados e sofisticados.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  {
    id: "elemento-anti-chuva",
    name: "Anti Chuva",
    description:
      "Permite a circulação de ar e entrada de luz natural, ao mesmo tempo em que reduz a incidência direta da chuva, mantendo o ambiente mais seco e confortável.",
    dimensions: "0,39 x 0,39 x 0,07",
    category: "Elemento Vazado",
    categorySlug: "elemento-vazado",
  },
  // Acabamento em Concreto
  {
    id: "ralo-concreto",
    name: "Ralo em Concreto",
    description:
      "Peça pré-moldada desenvolvida para auxiliar no escoamento da água, garantindo mais eficiência na drenagem de áreas externas.",
    dimensions: "0,30 x 0,30 | 0,49 x 0,49",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "chapeu-pilar",
    name: "Chapéu de Pilar",
    description:
      "Elemento pré-moldado que garante excelente acabamento e proteção para pilares.",
    dimensions: "Sob medida",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "capa-muro",
    name: "Capa de Muro",
    description:
      "Peça pré-moldada utilizada para o acabamento e proteção do topo de muros. Além de valorizar o visual da construção.",
    dimensions: "0,17 x 0,80 | 0,19 x 0,80 | 0,23 x 0,80",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "pingadeira-reta",
    name: "Pingadeira Reta",
    description:
      "Peça pré-moldada desenvolvida para direcionar a água da chuva e proteger muros e paredes contra infiltrações.",
    dimensions: "0,50 x 0,32 x 0,05",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "piso-calcada",
    name: "Piso de Calçada",
    description:
      "Peça pré-moldada desenvolvida para pavimentação de calçadas e áreas externas. Produzido em concreto resistente, oferece durabilidade e segurança.",
    dimensions: "0,74 x 0,30 x 0,04",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "lajota-sextavada",
    name: "Lajota Sextavada",
    description:
      "Peça pré-moldada com formato hexagonal, ideal para pavimentação de calçadas, garagens, pátios e áreas externas.",
    dimensions: "0,25 x 0,25 x 0,08",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "lajota-quadrada",
    name: "Lajota Quadrada",
    description:
      "Peça pré-moldada versátil e resistente, ideal para pavimentação de áreas externas como calçadas, quintais e jardins.",
    dimensions: "0,30 x 0,30 x 0,05 a 0,60 x 0,60 x 0,05",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "pisante-dormente",
    name: "Pisante Dormente",
    description:
      "Peça pré-moldada inspirada no formato de dormente ferroviário, ideal para compor caminhos e passagens em jardins.",
    dimensions: "0,60 x 0,15 x 0,05",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "piso-calcada-copacabana",
    name: "Piso de Calçada Copacabana",
    description:
      "Peça pré-moldada inspirada no clássico desenho das calçadas de Copacabana, trazendo um visual elegante.",
    dimensions: "0,50 x 0,50 x 0,2",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "piso-podotátil",
    name: "Piso Podotátil Alerta",
    description:
      "Peça pré-moldada desenvolvida para sinalização tátil de alerta, auxiliando na orientação e segurança de pessoas com deficiência visual.",
    dimensions: "25 x 25 x 2,5 | 40 x 40 x 2,5",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "piso-intertravados",
    name: "Piso Intertravados",
    description:
      "Peça pré-moldada desenvolvida para pavimentação de áreas externas com alta resistência e durabilidade.",
    dimensions: "0,20 x 0,10 (1,5cm a 6cm)",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "concregrama",
    name: "Concregrama",
    description:
      "Peça pré-moldada vazada ideal para pavimentação de áreas externas que necessitam de drenagem e contato com o solo.",
    dimensions: "30 x 50 x 5",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "guia-jardim-ondulada",
    name: "Guia de Jardim Ondulada",
    description:
      "Peça pré-moldada utilizada para delimitar e organizar canteiros, jardins e áreas de paisagismo.",
    dimensions: "0,80 x 0,20 x 0,04",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "pisao-jardim",
    name: "Pisão de Jardim",
    description:
      "Peça pré-moldada ideal para a criação de caminhos em jardins, gramados e áreas externas.",
    dimensions: "43 x 33 x 7",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  {
    id: "guia",
    name: "Guia",
    description:
      "Peça pré-moldada utilizada para delimitar e dar acabamento a calçadas, ruas, jardins e áreas pavimentadas. Além de organizar o espaço, auxilia na contenção do piso e no direcionamento da água.",
    dimensions: "Sob medida",
    category: "Acabamento em Concreto",
    categorySlug: "acabamento",
  },
  // Construção Civil
  {
    id: "casa-gas-2-botijao",
    name: "Casa de Gás 2 Botijão",
    description:
      "Estrutura pré-moldada em concreto projetada para o armazenamento seguro de dois botijões de gás.",
    dimensions: "90 x 105",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
  {
    id: "casa-gas-1-botijao",
    name: "Casa de Gás 1 Botijão",
    description:
      "Estrutura pré-moldada em concreto desenvolvida para o armazenamento seguro de um botijão de gás.",
    dimensions: "90 x 70",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
  {
    id: "armario-concreto",
    name: "Armário de Concreto",
    description:
      "Peça pré-moldada resistente e funcional, ideal para organização e armazenamento em áreas externas ou ambientes que exigem maior durabilidade.",
    dimensions: "Sob medida",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
  {
    id: "placa-concreto",
    name: "Placa de Concreto",
    description:
      "Peça pré-moldada versátil e resistente, utilizada em diversas aplicações na construção civil.",
    dimensions: "Sob medida",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
  {
    id: "meia-cana",
    name: "Meia Cana de Concreto",
    description:
      "Peça pré-moldada utilizada para condução e escoamento de água em sistemas de drenagem.",
    dimensions: "Sob medida",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
  {
    id: "cocho",
    name: "Cocho",
    description:
      "Peça pré-moldada em concreto utilizada para alimentação de animais. Resistente e durável, é ideal para propriedades rurais.",
    dimensions: "60 x 100 | 40 x 100",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
  {
    id: "degraus-escada",
    name: "Degraus para Escada",
    description:
      "Peças pré-moldadas em concreto desenvolvidas para a construção de escadas com praticidade e resistência.",
    dimensions: "100 x 60",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
  {
    id: "caixa-passagem-eletrica",
    name: "Caixa de Passagem Elétrica c/ Tampa",
    description:
      "Peça pré-moldada em concreto utilizada para proteção e organização de conexões e passagem de cabos elétricos subterrâneos.",
    dimensions: "45 x 45 x 30",
    category: "Construção Civil",
    categorySlug: "construcao-civil",
  },
];

export const WHATSAPP_NUMBER = "5518997603980";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os produtos da Alfa Soluções em Concreto.";
export const COMPANY_ADDRESS = "Rua Antônio Afonso de Toledo, 369 - Jardim Sumaré, Araçatuba-SP";
export const COMPANY_PHONES = ["(18) 99760-3980", "(18) 99676-9650"];