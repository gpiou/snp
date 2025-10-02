import Link from "next/link";
import Image from "next/image";
// import PWAInstallButton from "./PWAInstallButton";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/snaplogo.png"
                alt="Snaptube Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Snaptube</span>
            </div>
            <p className="text-gray-400">
              La mejor aplicación para descargar videos de YouTube y otras plataformas de forma gratuita.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
              <li><Link href="/snaptube-original" className="text-gray-400 hover:text-white">Snaptube Original</Link></li>
              <li><Link href="/descargar-snaptube-para-pc" className="text-gray-400 hover:text-white">Para PC</Link></li>
              <li><Link href="/snaptube-instalar" className="text-gray-400 hover:text-white">Instalar</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Plataformas Populares</h3>
            <ul className="space-y-2">
              <li><Link href="/descargar-videos-youtube" className="text-gray-400 hover:text-white">YouTube</Link></li>
              <li><Link href="/descargar-videos-tiktok" className="text-gray-400 hover:text-white">TikTok</Link></li>
              <li><Link href="/descargar-videos-instagram" className="text-gray-400 hover:text-white">Instagram</Link></li>
              <li><Link href="/descargar-videos-facebook" className="text-gray-400 hover:text-white">Facebook</Link></li>
            </ul>
          </div>
          
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Descargar</h3>
                    <a 
                      href="https://fsmvid.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
                    >
                      Descargar Snaptube
                    </a>
                    <p className="text-gray-400 text-sm mt-2">
                      Versión oficial 7.22.0
                    </p>
                  </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Snaptube. Todos los derechos reservados. | 
            <a href="https://fsmvid.com" className="text-blue-400 hover:text-blue-300 ml-1">Descargar desde fuente oficial</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
