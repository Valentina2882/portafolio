import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Portafolio | Desarrollador Full Stack",
  description: "Portafolio profesional de desarrollador Full Stack. Especializado en React, Next.js, TypeScript y tecnologías modernas.",
  keywords: ["desarrollador", "full stack", "react", "nextjs", "typescript", "portafolio"],
  authors: [{ name: "Zarella" }],
  creator: "Zarella",
  openGraph: {
    title: "Mi Portafolio | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador Full Stack",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portafolio | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador Full Stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
