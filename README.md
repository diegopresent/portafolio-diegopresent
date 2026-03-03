# Mi Portafolio Profesional - Luis Diego Condori Flores

Este proyecto es un portafolio de alto impacto diseñado para mostrar mis habilidades como Ingeniero en Sistemas y Desarrollador de Software Full Stack. Ha sido construido utilizando las tecnologías más modernas del ecosistema web, con un enfoque riguroso en la **Arquitectura Limpia (Clean Architecture)** y los **Principios SOLID**.

---

## 🛠️ Stack Tecnológico

El proyecto utiliza un stack de vanguardia para garantizar rendimiento, escalabilidad y una experiencia de usuario fluida:

*   **Frontend Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
*   **Lenguaje:** [TypeScript](https://www.typescript.org/) (Tipado estático para robustez)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Diseño "Utility-first")
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/) (Interacciones fluidas y micro-interacciones)
*   **Iconografía:** [Lucide React](https://lucide.dev/) & Custom SVG Icons (para iconos de marca)
*   **Gestión de Formularios:** [Formspree](https://formspree.io/) (Integración serverless para contacto)
*   **Despliegue:** [Vercel](https://vercel.com/) (Optimización automática de assets y Edge Runtime)

---

## 🏗️ Arquitectura y Principios de Diseño

El proyecto ha sido refactorizado para cumplir con estándares de ingeniería de software senior:

### 1. Principio de Responsabilidad Única (SRP)
Se ha eliminado el "Componente Dios" (`page.tsx`) original. Ahora, cada sección del portafolio es un componente independiente ubicado en `src/components/`, facilitando el mantenimiento y la legibilidad.

### 2. Principio de Abierto/Cerrado (OCP)
La gestión de datos (como los proyectos) se ha extraído a archivos de configuración (`src/data/projects.ts`). Esto permite añadir nuevos proyectos sin modificar la lógica de renderizado de la interfaz.

### 3. Clean Code & DRY (Don't Repeat Yourself)
*   **Componentización:** Elementos repetitivos como las tarjetas de proyectos (`ProjectCard`) y los items de la rejilla (`BentoItem`) son componentes reutilizables.
*   **Tipado Estricto:** Se han definido interfaces para todos los objetos de datos, eliminando errores en tiempo de ejecución.
*   **Modernización de Iconos:** Se han reemplazado iconos de marca deprecados por componentes SVG optimizados en `src/components/Icons.tsx`.

---

## 📁 Estructura del Proyecto

```text
mi-portafolio/
├── public/              # Assets estáticos (Imágenes, CV, Favicon)
├── src/
│   ├── app/             # Rutas y Layouts (Next.js App Router)
│   │   ├── layout.tsx   # Configuración global de fuentes y metadatos
│   │   └── page.tsx     # Orquestador principal de la aplicación
│   ├── components/      # Componentes modulares y reutilizables
│   │   ├── Icons.tsx    # Iconos de marca personalizados (SVG)
│   │   ├── Hero.tsx     # Sección de presentación principal
│   │   ├── TechStack.tsx# Visualización de herramientas y habilidades
│   │   └── ...          # Otras secciones del portafolio
│   └── data/            # Archivos de configuración y contenido
│       └── projects.ts  # Datos de proyectos tipados
├── tailwind.config.ts   # Configuración personalizada de Tailwind
└── tsconfig.json        # Configuración de TypeScript
```

---

## 🚀 Guía de Desarrollo: Desde Cero hasta el Deploy

### 1. Inicialización del Proyecto
El proyecto se inició con el comando:
```bash
npx create-next-app@latest mi-portafolio --typescript --tailwind --eslint
```
Se seleccionó el **App Router** para aprovechar las capacidades de Server Components y optimización de rutas de Next.js.

### 2. Configuración de Componentes de UI
Se implementó un diseño oscuro ("Dark Mode" nativo) utilizando la paleta de colores `#050505` para el fondo y acentos en `blue-500`. Las animaciones de entrada se gestionan mediante `framer-motion` para dar una sensación de fluidez al hacer scroll.

### 3. Integración de Datos
Los proyectos se renderizan dinámicamente. Para añadir un nuevo proyecto, simplemente se edita `src/data/projects.ts`:
```typescript
{
  id: number;
  title: string;
  description: string;
  tech: string[];
  links: { demo, repoFrontend, repoBackend };
  image: string;
  featured: boolean;
}
```

### 4. Instalación de Dependencias
Para ejecutar el proyecto localmente:
```bash
# Clonar el repositorio
git clone https://github.com/diegopresent/mi-portafolio.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 5. Preparación para Producción
Antes del despliegue, se ejecuta un build de prueba para asegurar que no hay errores de tipado o de compilación:
```bash
npm run build
```

---

## 🌐 Despliegue (Deployment)

El portafolio está configurado para un despliegue continuo (CD) en **Vercel**:

1.  **Conexión con GitHub:** El repositorio está vinculado a Vercel.
2.  **Build Automático:** Cada `push` a la rama `main` dispara un proceso de construcción.
3.  **Optimización:** Vercel optimiza automáticamente las imágenes a través de `next/image` y sirve los assets mediante su CDN global.
4.  **Edge Network:** La aplicación se sirve desde el punto más cercano al usuario para minimizar la latencia.

---

## 📧 Contacto

Luis Diego Condori Flores
*   **Email:** luisdiego362@gmail.com
*   **LinkedIn:** [diegopresent](https://www.linkedin.com/in/diegopresent/)
*   **GitHub:** [diegopresent](https://github.com/diegopresent)

---
© 2026 Luis Diego Condori Flores • Santa Cruz, Bolivia
