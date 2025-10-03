import Image from 'next/image';
import { Metadata } from 'next';
import PWAInstallButton from '../components/PWAInstallButton';

export const metadata: Metadata = {
  title: "Snaptube Original - Descargar APK Oficial Gratis | Snaptube",
  description: "Descarga Snaptube Original APK gratis para Android. La versión oficial y auténtica de Snaptube para descargar videos de YouTube, Facebook, Instagram y más plataformas.",
  keywords: "snaptube original, snaptube oficial, descargar snaptube, snaptube apk, descargar videos youtube",
  openGraph: {
    title: "Snaptube Original - Descargar APK Oficial Gratis",
    description: "Descarga Snaptube Original APK gratis para Android. La versión oficial y auténtica de Snaptube.",
    type: "website",
  },
};

export default function SnaptubeOriginalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/snaplogo.png"
                alt="Snaptube Original Logo"
                width={100}
                height={100}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Snaptube Original
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              La versión oficial y auténtica de Snaptube para descargar videos de YouTube, 
              Facebook, Instagram y más de 33 plataformas diferentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PWAInstallButton className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Descargar Snaptube Original
              </PWAInstallButton>
              <a
                href="https://fsmvid.com"
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
              >
                Ver en FSMVid.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              ¿Por qué elegir Snaptube Original?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">100% Oficial</h3>
                <p className="text-gray-600">
                  Versión auténtica y verificada directamente de los desarrolladores oficiales de Snaptube.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Seguro y Confiable</h3>
                <p className="text-gray-600">
                  Sin malware, virus o código malicioso. Descarga con total confianza y seguridad.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Actualizaciones Automáticas</h3>
                <p className="text-gray-600">
                  Recibe las últimas mejoras y correcciones de errores automáticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Información de la Aplicación
            </h2>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Detalles Técnicos</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Versión:</span>
                      <span className="text-gray-600">7.22.0.72250110</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Tamaño:</span>
                      <span className="text-gray-600">33 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Android:</span>
                      <span className="text-gray-600">5.1 o superior</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Instalaciones:</span>
                      <span className="text-gray-600">100M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Categoría:</span>
                      <span className="text-gray-600">Descargador de video</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Características Principales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">Descarga de 33+ plataformas</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">Calidad hasta 4K</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">Conversión a MP3</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">Interfaz intuitiva</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">100% Gratis</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">Sin anuncios molestos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para Descargar Snaptube Original?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Obtén la versión oficial y auténtica de Snaptube ahora mismo. 
            Descarga videos de todas tus plataformas favoritas de forma segura.
          </p>
          <PWAInstallButton className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Descargar Ahora - 100% Gratis
          </PWAInstallButton>
        </div>
      </section>
    </div>
  );
}
