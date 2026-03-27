import type {
  FooterLinkGroup,
  NavItem,
  ReasonItem,
  ServiceCard,
  SocialLink,
  TrustLogo,
} from "@/src/types/nebula";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Soluciones", href: "#servicios" },
  { label: "Clientes", href: "https://nebula.uy/proyectos-y-productos/" },
  { label: "Blog", href: "https://nebula.uy/blog/" },
];

export const services: ServiceCard[] = [
  {
    title: "Sitio Web Básico",
    description:
      "Este es el plan perfecto para crear un sitio rápido y con todo lo necesario. Ideal para eventos, productos únicos o esa gran idea que no puede esperar más. Comienza con un sitio básico, siempre hay tiempo para crecer.",
    image: "/sites/5/2026/03/sitio-web-basico.webp",
    imageAlt: "sitio web básico",
    href: "https://nebula.uy/sitio-web-basico/",
    cta: "Ver un sitio básico",
  },
  {
    title: "Sitio Web Custom",
    description:
      "Personalizado, flexible y todoterreno. Este es el sitio preferido de startups, pequeñas empresas e instituciones que buscan destacar. ¡Con optimización SEO y animaciones que atraen usuarios!",
    image: "/sites/5/2026/03/sitios-web-custom.webp",
    imageAlt: "sitio web custom",
    href: "https://nebula.uy/sitio-web-custom/",
    cta: "Ver un sitio custom",
  },
  {
    title: "E-Commerce",
    description:
      "La solución que vende sola. Un e-commerce personalizable para tiendas online de cualquier tipo. La manera más fácil de que tus clientes compren en tu negocio y vos gestiones facturación y stock.",
    image: "/sites/5/2026/03/ecommerce.webp",
    imageAlt: "ecommerce",
    href: "https://nebula.uy/e-commerce/",
    cta: "Ver un e-commerce",
  },
  {
    title: "Integraciones con IA",
    description:
      "Conectamos inteligencia artificial a tus sistemas actuales para mejorar respuestas, análisis y decisiones, sin cambiar lo que ya funciona. Vos seguís al mando; la tecnología hace el trabajo pesado.",
    image: "/sites/5/2026/03/integraciones-ia.webp",
    imageAlt: "integraciones con ia",
    href: "https://nebula.uy/ia-para-negocios/",
    cta: "Ver integraciones con IA",
  },
  {
    title: "Software a medida",
    description:
      "Desarrollamos herramientas digitales adaptadas a tus procesos. Sistemas simples, eficientes y pensados para resolver necesidades reales de tu empresa. Un software liviano, fácil de entender y más barato que nunca.",
    image: "/sites/5/2026/03/soft-liviano.webp",
    imageAlt: "software a medida",
    href: "https://nebula.uy/desarrollo-de-software-a-medida-para-empresas/",
    cta: "Qué es el software liviano",
  },
  {
    title: "Diseño UX",
    description:
      "Definimos y validamos tu producto antes de desarrollarlo. Realizamos product discovery y prototipos en baja y alta definición para probar ideas, optimizar flujos y reducir errores desde el inicio.",
    image: "/sites/5/2026/03/ux-ui.webp",
    imageAlt: "diseño ux",
    href: "https://nebula.uy/diseno-ux/",
    cta: "Qué es el diseño UX",
  },
];

export const reasons: ReasonItem[] = [
  {
    icon: "💡",
    title: "Sencillez ante todo",
    description:
      "Nos gusta hacerlo fácil: tu sitio web queda listo rápido, sin complicaciones y acorde a tu presupuesto.",
  },
  {
    icon: "🎨",
    title: "Diseños irresistibles",
    description:
      "Creamos websites atractivos y modernos que reflejan la personalidad de tu negocio.",
  },
  {
    icon: "🤝",
    title: "Soporte de verdad",
    description:
      "Sin bots ni respuestas genéricas. Acá encontrás ayuda real de personas reales.",
  },
  {
    icon: "📱",
    title: "100% responsivo",
    description:
      "La mayoría navega en el teléfono, por eso diseñamos sitios que lucen espléndidos en cualquier dispositivo.",
  },
  {
    icon: "⚡",
    title: "Rápido y optimizado",
    description:
      "Páginas web de carga ágil, que ayudan a convertir visitantes en clientes satisfechos.",
  },
];

export const trustLogos: TrustLogo[] = [
  { alt: "grupo fiancar", src: "/sites/5/2025/04/Logo-fiancar.png" },
  { alt: "ingenio", src: "/sites/5/2025/11/ingeino-logo.webp" },
  { alt: "nelson sobrero", src: "/sites/5/2025/11/NS-logo.webp" },
  { alt: "clinkky", src: "/sites/5/2025/04/logo-clinkky.png" },
  { alt: "romy", src: "/sites/5/2025/11/logo_romy-white-60.webp" },
  { alt: "inu", src: "/sites/5/2025/04/logo-inu.png" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nebula.web",
    icon: "/sites/5/2025/04/instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bits-kingdom",
    icon: "/sites/5/2025/04/linkedin.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/bitskingdom",
    icon: "/sites/5/2025/04/facebook.svg",
  },
  {
    label: "X",
    href: "https://x.com/bitskingdom",
    icon: "/sites/5/2025/04/X-1.svg",
  },
  {
    label: "Wellfound",
    href: "https://wellfound.com/company/bits-kingdom-llc",
    icon: "/sites/5/2025/04/angel-list.svg",
  },
  {
    label: "Product Hunt",
    href: "https://www.producthunt.com/posts/bee-8f95d09c-28fb-4094-b3a0-eb54dd0f0df8",
    icon: "/sites/5/2025/04/product-hunt.svg",
  },
  {
    label: "Medium",
    href: "https://medium.com/laboratorio-nebula",
    icon: "/sites/5/2025/11/medium-fill-full.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@bitskingdom",
    icon: "/sites/5/2025/04/youtube-icon-footer.svg",
  },
];

export const footerGroups: FooterLinkGroup[] = [
  {
    title: "Enlaces utiles",
    links: [
      {
        label: "Desarrollo liviano",
        href: "https://nebula.uy/desarrollo-de-software-liviano-para-empresas/",
      },
      {
        label: "Integraciones con IA",
        href: "https://nebula.uy/ia-para-negocios",
      },
      { label: "Diseño UX", href: "https://nebula.uy/diseno-ux" },
      {
        label: "Comparar sitios",
        href: "https://nebula.uy/precios-sitios-web/",
      },
      { label: "Clientes", href: "https://nebula.uy/proyectos-y-productos" },
      { label: "Sobre nosotros", href: "https://nebula.uy/sobre-nosotros/" },
      { label: "Blog", href: "https://nebula.uy/blog/" },
      { label: "Glosario", href: "https://nebula.uy/glosario/" },
    ],
  },
];
