import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PWAInstaller from "./components/PWAInstaller";
import PWAInstallNotification from "./components/PWAInstallNotification";
import NoSSR from "./components/NoSSR";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Descargar Snaptube APK - Gratis Para Android | Snaptube Oficial",
  description: "Descarga Snaptube APK gratis para Android. Descarga videos de YouTube, Facebook, Instagram y más plataformas. Versión oficial 7.22.0 con 100M+ descargas.",
  keywords: "snaptube, descargar snaptube, snaptube apk, descargar videos youtube, descargar musica",
  manifest: "/manifest.json",
  themeColor: "#1e40af",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Snaptube"
  },
  openGraph: {
    title: "Descargar Snaptube APK - Gratis Para Android",
    description: "Descarga Snaptube APK gratis para Android. Descarga videos de YouTube, Facebook, Instagram y más plataformas.",
    type: "website",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Snaptube",
    "application-name": "Snaptube",
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml"
  }
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
        suppressHydrationWarning={true}
      >
        <NoSSR>
          <PWAInstallNotification />
        </NoSSR>
        <Header />
        <main>{children}</main>
        <Footer />
        <NoSSR>
          <PWAInstaller />
        </NoSSR>
      </body>
    </html>
  );
}