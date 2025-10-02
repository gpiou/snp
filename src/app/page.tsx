import Link from "next/link";
import Image from "next/image";
import PWAInstallButton from "./components/PWAInstallButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Descargar Snaptube APK – Gratis Para Android
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              SnapTube es una aplicación para dispositivos móviles, como teléfonos inteligentes y tabletas, 
              que permite a los usuarios <Link href="https://fsmvid.com" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">descargar videos</Link> y música de plataformas en línea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PWAInstallButton className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg">
                Descargar Snaptube
              </PWAInstallButton>
              <a href="#caracteristicas" className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                Ver Características
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Es especialmente conocida por su capacidad para <Link href="https://fsmvid.com" className="text-blue-600 hover:text-blue-800 underline font-semibold">descargar contenido de YouTube</Link> de forma rápida y sencilla.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Con SnapTube, los usuarios pueden buscar y reproducir videos o canciones directamente desde la aplicación. 
                Además, también brinda la opción de descargar ese contenido en diferentes formatos y resoluciones, 
                lo que permite a los usuarios guardar los archivos en sus dispositivos y acceder a ellos sin conexión a Internet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SnapTube ofrece una interfaz fácil de usar y cuenta con una amplia gama de características y opciones de personalización. 
                Los usuarios pueden elegir la calidad de descarga, gestionar sus descargas y explorar diversas categorías para descubrir nuevos contenidos. 
                Además de YouTube, la aplicación también es compatible con otras plataformas populares como Facebook, Instagram, Twitter y SoundCloud.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-gray-800">
                  <strong>Importante:</strong> Es fundamental utilizar SnapTube y otras aplicaciones similares de manera responsable 
                  y respetar los derechos de los creadores de contenido.
                </p>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Descargar Snaptube Última Versión</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Snaptube oficial</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-600 mb-4">Snaptube</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Nombre de la aplicación:</span>
                        <span className="text-gray-600">Snaptube</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Tamaño:</span>
                        <span className="text-gray-600">33 MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Tipo de archivo:</span>
                        <span className="text-gray-600">.apk</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Versión:</span>
                        <span className="text-gray-600">7.22.0.72250110</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Requiere Android:</span>
                        <span className="text-gray-600">5.1 o superior</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Instalaciones:</span>
                        <span className="text-gray-600">100M+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Categoría:</span>
                        <span className="text-gray-600">Descargador de video y reproductores</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Desarrolladora:</span>
                        <span className="text-gray-600">SnapTube Inc.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Licencia:</span>
                        <span className="text-green-600 font-bold">Gratis</span>
                      </div>
                    </div>
                    <PWAInstallButton className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-6">
                      Descargar Snaptube
                    </PWAInstallButton>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
          <Image
                        src="/snaplogo.png"
                        alt="Snaptube Logo"
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-gray-600">Icono de la aplicación</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is SnapTube */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es SnapTube?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SnapTube es una aplicación diseñada para dispositivos móviles que permite <Link href="https://fsmvid.com" className="text-blue-600 hover:text-blue-800 underline font-semibold">descargar videos</Link> y audios de diversas plataformas en línea, 
                como YouTube, Facebook, Instagram y muchas más.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con SnapTube, puedes descargar fácilmente tus videos favoritos y canciones en alta calidad para verlos o escucharlos más tarde sin preocuparte por la disponibilidad de conexión a Internet.
              </p>
            </div>
          </section>

          {/* Features */}
          <section id="caracteristicas" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Características y funcionalidades de SnapTube</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Descarga de videos y música</h3>
                      <p className="text-gray-600">Descarga videos en varias resoluciones, incluyendo HD, y también descarga solo el audio en formato MP3.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Soporte para múltiples plataformas</h3>
                      <p className="text-gray-600">Compatible con YouTube, Facebook, Instagram, Twitter, Vimeo, Dailymotion y muchos más.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Descarga en diferentes resoluciones</h3>
                      <p className="text-gray-600">Elige la resolución desde 144p hasta HD (720p y 1080p) y diferentes formatos como MP4 y FLV.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Administrador de descargas</h3>
                      <p className="text-gray-600">Pausa, reanuda o cancela las descargas en cualquier momento con el administrador incorporado.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Convertidor de video a MP3</h3>
                      <p className="text-gray-600">Extrae solo el audio de los videos y conviértelos a formato MP3 fácilmente.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Navegador integrado</h3>
                      <p className="text-gray-600">Busca y explora diferentes sitios web de video sin salir de la aplicación.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes (FAQs)</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">¿SnapTube está disponible para dispositivos iOS?</h3>
                  <p className="text-gray-600">No, actualmente SnapTube solo está disponible para dispositivos Android. No se ha lanzado una versión oficial de SnapTube para iOS.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Es legal descargar videos con SnapTube?</h3>
                  <p className="text-gray-600">La descarga de contenido protegido por derechos de autor puede infringir las leyes de propiedad intelectual en algunos países. Es importante usar SnapTube de manera responsable y asegurarse de no violar ninguna ley.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">¿SnapTube es seguro de usar?</h3>
                  <p className="text-gray-600">SnapTube es una aplicación segura y confiable. Sin embargo, al descargar e instalar la aplicación desde fuentes externas, debes asegurarte de obtener el archivo APK de sitios confiables para evitar malware o aplicaciones falsas.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Puedo usar SnapTube para descargar videos de YouTube?</h3>
                  <p className="text-gray-600">Sí, SnapTube permite descargar videos de YouTube y muchas otras plataformas populares en línea. Sin embargo, debes tener en cuenta que descargar contenido de YouTube puede violar los términos de servicio de la plataforma.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">¿SnapTube es gratuito?</h3>
                  <p className="text-gray-600">Sí, SnapTube es una aplicación gratuita. Puedes descargarla e instalarla en tu dispositivo Android sin costo alguno.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Conclusión</h2>
              <p className="text-lg leading-relaxed mb-6">
                SnapTube es una poderosa herramienta que simplifica el proceso de <Link href="https://fsmvid.com" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">descargar videos</Link> de diversas plataformas en línea. 
                Con su interfaz fácil de usar, descargas de alta calidad y características adicionales como la extracción de audio y descargas por lotes, 
                SnapTube se ha convertido en el favorito de los entusiastas de los videos.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Sin embargo, es crucial utilizar la aplicación de manera responsable y respetar las leyes de derechos de autor. 
                ¿Entonces, por qué esperar? ¡Mejora tu experiencia de visualización de videos descargando SnapTube hoy mismo!
              </p>
              <a href="https://fsmvid.com" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block">
                Descargar SnapTube Ahora
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
