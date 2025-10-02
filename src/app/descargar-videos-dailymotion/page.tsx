import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Dailymotion Gratis - Snaptube Dailymotion Downloader",
  description: "Descarga videos de Dailymotion gratis en alta calidad. Guarda contenido de Dailymotion directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos dailymotion, dailymotion downloader, bajar videos dailymotion",
  openGraph: {
    title: "Descargar Videos de Dailymotion Gratis",
    description: "Descarga videos de Dailymotion gratis en alta calidad con Snaptube.",
    type: "website",
  },
};

export default function DescargarDailymotionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Dailymotion Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos de Dailymotion en alta calidad. 
              Descarga contenido europeo y internacional directamente a tu dispositivo.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Dailymotion
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dailymotion es una plataforma francesa que ofrece contenido único que no encuentras 
                en otras plataformas de video. Es especialmente popular en Europa y tiene una gran 
                variedad de contenido internacional, documentales, noticias, y videos que han sido 
                censurados o eliminados de otras plataformas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-blue-600 hover:text-blue-800 font-medium">descargador de Dailymotion</a> te permite guardar todo este contenido único 
                directamente en tu dispositivo. Perfecto para cuando encuentras documentales 
                interesantes, noticias internacionales, o contenido que podría no estar disponible 
                en tu región por mucho tiempo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea contenido educativo, entretenimiento europeo, o videos que simplemente 
                no quieres perder, nuestro descargador hace que sea fácil tener acceso offline 
                a toda la diversidad de contenido que ofrece Dailymotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Dailymotion?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video de Dailymotion que quieres descargar y copia la URL del video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video en la calidad que prefieras, listo para ver offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ventajas de nuestro descargador</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🌍 Contenido internacional</h3>
                <p className="text-gray-700">
                  Accede a videos de diferentes países y culturas que Dailymotion aloja 
                  y que no están disponibles en otras plataformas.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">⚡ Descarga rápida</h3>
                <p className="text-gray-700">
                  Procesamos videos de Dailymotion en segundos, sin esperas largas 
                  ni procesos complicados.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🎯 Múltiples calidades</h3>
                <p className="text-gray-700">
                  Elige entre diferentes calidades de video según tu espacio disponible 
                  y necesidades de visualización.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🔒 Completamente seguro</h3>
                <p className="text-gray-700">
                  Sin malware, sin virus, sin información personal requerida. 
                  Descarga de forma segura y anónima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Alternative */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">¿Necesitas una app móvil?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si descargas videos de Dailymotion frecuentemente, Snaptube puede ser 
                  la solución perfecta. Funciona con Dailymotion y muchas otras plataformas 
                  de video desde una sola aplicación.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
                >
                  Descargar Snaptube
                </a>
              </div>
              <div className="bg-white/20 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Image 
                    src="/snaplogo.png" 
                    alt="Snaptube" 
                    width={48} 
                    height={48} 
                    className="rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Snaptube</h3>
                    <p className="text-sm opacity-75">Descargador internacional</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Dailymotion, Vimeo, YouTube...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Videos internacionales</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Gratis siempre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Dailymotion</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Videos públicos únicamente</h3>
                <p className="text-gray-700">
                  Solo podemos procesar videos públicos de Dailymotion. Los videos privados 
                  o con restricciones geográficas no pueden ser descargados.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta los derechos de autor</h3>
                <p className="text-gray-700">
                  Usa las descargas solo para uso personal. Respeta los derechos de los 
                  creadores de contenido y las leyes de tu país.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Ver más tarde" de <a href="https://dailymotion.com" className="text-blue-600 hover:text-blue-800 font-medium">Dailymotion</a> para 
                  guardar videos en tu cuenta, aunque requiere conexión para verlos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Dailymotion ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Accede a contenido internacional único de Dailymotion. Descarga videos 
              que no encuentras en otras plataformas y disfrútalos offline.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Dailymotion
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
