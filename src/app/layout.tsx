import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Diego | Full Stack Developer",
  description: "Portafolio profesional de Luis Diego, Ingeniero de Sistemas especializado en desarrollo web Full Stack.",
  keywords: ["Full Stack Developer", "Ingeniero de Sistemas", "React", "Node.js", "Santa Cruz", "Bolivia", "Software Engineer"],
  authors: [{ name: "Luis Diego CF" }],
  openGraph: {
    title: "Luis Diego | Full Stack Developer",
    description: "Portafolio profesional de Ingeniería de Sistemas y Desarrollo Web.",
    url: "https://tudominio.com", // Deberías actualizar esto cuando hagas el deploy
    siteName: "Luis Diego Portafolio",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
