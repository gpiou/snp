import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snaptube - Redirigiendo a FSMVid.com",
  description: "Accediendo a la plataforma principal de descarga de videos FSMVid.com",
  robots: "noindex, nofollow", // Don't index this redirect page
};

export default function PWARedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
