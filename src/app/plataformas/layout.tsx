import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todas las Plataformas - Descargar Videos de 33+ Sitios Web | Snaptube",
  description: "Descarga videos y música de más de 33 plataformas diferentes incluyendo YouTube, TikTok, Instagram, Facebook, Twitter y muchas más con Snaptube.",
  keywords: "descargar videos, plataformas, youtube, tiktok, instagram, facebook, twitter, snaptube, descargador videos",
  openGraph: {
    title: "Todas las Plataformas - Descargar Videos de 33+ Sitios Web",
    description: "Descarga videos y música de más de 33 plataformas diferentes con Snaptube.",
    type: "website",
  },
};

export default function PlataformasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
