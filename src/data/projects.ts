export interface ProjectView {
  id: string;
  label: string;
  image: string;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  browserUrl: string;
  status: "En Producción" | "Online" | "API Activa";
  links: {
    demo?: string | null;
    repoFrontend?: string | null;
    repoBackend?: string | null;
  };
  views: ProjectView[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Inventario Full Stack",
    tagline: "Gestión de Stock & Operaciones en Tiempo Real",
    category: "Full Stack Web Application",
    description: "Plataforma empresarial para el control de inventario y operaciones de almacén en tiempo real. Desarrollada con arquitectura cliente-servidor desacoplada (React + Node.js/Express sobre PostgreSQL), integra autenticación JWT con control de roles (RBAC), control granular por SKU y subida multimedia a Cloudinary.",
    highlights: [
      "Autenticación JWT y control de acceso basado en roles (Admin vs Operador)",
      "Persistencia en PostgreSQL con transacciones para integridad atómica de stock",
      "Pipeline de subida y optimización de imágenes en la nube con Cloudinary",
      "Catálogo interactivo con filtrado en tiempo real, búsqueda por SKU y paginación"
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "JWT", "Cloudinary"],
    browserUrl: "https://inventario-frontend-react-vite.vercel.app",
    status: "En Producción",
    links: {
      demo: "https://inventario-frontend-react-vite.vercel.app/",
      repoFrontend: "https://github.com/diegopresent/inventario-frontend-react-vite",
      repoBackend: "https://github.com/diegopresent/inventario-backend-node"
    },
    views: [
      {
        id: "dashboard",
        label: "Dashboard",
        image: "/images/inventario-dashboard.png",
        description: "Dashboard ejecutivo con métricas de stock, conteo de ítems y categorías activas."
      },
      {
        id: "products",
        label: "Inventario",
        image: "/images/inventario-productos.png",
        description: "Catálogo interactivo con control de unidades, ajuste rápido de existencias y SKU."
      },
      {
        id: "categories",
        label: "Categorías",
        image: "/images/inventario-categorias.png",
        description: "Gestión interactiva de categorías con búsqueda dinámica y control de catálogo."
      },
      {
        id: "modal",
        label: "Nuevo Producto",
        image: "/images/inventario-modal.png",
        description: "Formulario de alta con validación de inputs y carga multimedia directa a Cloudinary."
      }
    ],
    featured: true
  },
  {
    id: 2,
    title: "APEXBET PRO AI — Sports Platform",
    tagline: "Inteligencia Predictiva Deportiva & Modelado Cuantitativo",
    category: "Full Stack & Quantitative Analytics",
    description: "Plataforma analítica para predicción deportiva y modelado cuantitativo de fútbol en tiempo real. Desarrollada con Next.js 16 y Prisma ORM sobre Neon Postgres, integra cálculo probabilístico Poisson/xG, ficha técnica 360° y gestión algorítmica de capital con Smart Cache distribuido para API-Football.",
    highlights: [
      "Motor probabilístico cuantitativo propio: Poisson, xG y factores de racha",
      "Ficha técnica 360° por partido con distribución 1X2, H2H y reporte de ausencias",
      "Laboratorio IA (Auto-Bankroll Manager): gestión algorítmica y control de riesgo",
      "Arquitectura de alto rendimiento con Next.js 16, Prisma ORM y Smart Cache"
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "Tailwind CSS", "Gemini AI", "API-Football"],
    browserUrl: "https://apexfutbol.vercel.app",
    status: "En Producción",
    links: {
      demo: "https://apexfutbol.vercel.app/",
      repoFrontend: "https://github.com/diegopresent/apex-football",
      repoBackend: null
    },
    views: [
      {
        id: "dashboard",
        label: "Cartelera",
        image: "/images/apex-football-dashboard.png",
        description: "Feed de encuentros con Top 3 sucesos más probables, cuotas implícitas e índice de fiabilidad."
      },
      {
        id: "analysis",
        label: "Análisis 360°",
        image: "/images/apex-football-modal.png",
        description: "Ficha técnica por encuentro con distribución 1X2 segmentada, H2H y probabilidades multi-mercado."
      },
      {
        id: "bankroll",
        label: "Laboratorio IA",
        image: "/images/apex-football-ai.png",
        description: "AI Auto-Bankroll Manager con gestión cuantitativa de capital, metas y control defensivo de riesgo."
      }
    ],
    featured: true
  }
];
