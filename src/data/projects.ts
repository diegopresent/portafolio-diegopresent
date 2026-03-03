export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  links: {
    demo?: string | null;
    repoFrontend?: string | null;
    repoBackend?: string | null;
  };
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Inventario Full Stack",
    description: "Solución integral para gestión de stock. Incluye autenticación segura (JWT), panel administrativo, control de roles y reportes en tiempo real. Utiliza arquitectura limpia para escalabilidad.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind", "Cloudinary"],
    links: {
      demo: "https://inventario-frontend-react-vite.vercel.app/",
      repoFrontend: "https://github.com/diegopresent/inventario-frontend-react-vite",
      repoBackend: "https://github.com/diegopresent/inventario-backend-node"
    },
    image: "/images/inventario-preview.png",
    featured: true
  }
];
