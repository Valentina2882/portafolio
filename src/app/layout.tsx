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
  title: "Zarella Burbano Vallejo | Ingeniera de Software",
  description: "Portafolio profesional de Zarella Burbano Vallejo, Ingeniera de Software Full Stack. Experiencia en React, Next.js, Flutter, Django, APIs y bases de datos relacionales.",
  keywords: ["ingeniera de software", "full stack", "react", "nextjs", "flutter", "django", "portafolio"],
  authors: [{ name: "Zarella Burbano Vallejo" }],
  creator: "Zarella Burbano Vallejo",
  openGraph: {
    title: "Zarella Burbano Vallejo | Ingeniera de Software",
    description: "Portafolio profesional de Ingeniera de Software Full Stack",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarella Burbano Vallejo | Ingeniera de Software",
    description: "Portafolio profesional de Ingeniera de Software Full Stack",
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
