import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de IMDb Gratis - Snaptube IMDb Downloader",
  description: "Descarga trailers y videos de IMDb gratis en alta calidad. Guarda trailers de películas y contenido cinematográfico de IMDb directamente a tu dispositivo.",
  keywords: "descargar videos imdb, imdb downloader, bajar trailers imdb, imdb peliculas",
  openGraph: {
    title: "Descargar Videos de IMDb Gratis",
    description: "Descarga trailers y videos de IMDb gratis en alta calidad con Snaptube. Guarda contenido de IMDb.",
    type: "website",
  },
};

export default function DescargarIMDbPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de IMDb Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda trailers y contenido cinematográfico de IMDb en alta calidad. 
              Descarga la mejor información de películas y series directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-yellow-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de IMDb
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
                IMDb es la biblia del cine y la televisión: la base de datos más completa del mundo 
                del entretenimiento, donde encuentras información detallada sobre cualquier película, 
                serie, actor o director que puedas imaginar. Desde trailers exclusivos hasta 
                entrevistas con estrellas de Hollywood, IMDb es el lugar donde los cinéfilos 
                van a descubrir y explorar el mundo del entretenimiento.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/imdb-video-saver" className="text-yellow-600 hover:text-yellow-800 font-medium">descargador de IMDb</a> te permite guardar todo este contenido 
                cinematográfico directamente en tu dispositivo. Perfecto para conservar trailers 
                de películas que esperas con ansias, entrevistas exclusivas con tus actores 
                favoritos, o contenido behind-the-scenes que no quieres perder.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que seas un cinéfilo empedernido, un estudiante de cine, o simplemente 
                alguien que ama las películas y series, IMDb ofrece una riqueza de contenido 
                visual que ahora puedes tener disponible offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de IMDb?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Trailers oficiales</h3>
                <p className="text-gray-700 text-sm">
                  Trailers exclusivos de películas próximas a estrenar y clásicos del cine.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entrevistas con actores</h3>
                <p className="text-gray-700 text-sm">
                  Conversaciones exclusivas con estrellas de Hollywood y directores famosos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Behind the scenes</h3>
                <p className="text-gray-700 text-sm">
                  Contenido exclusivo del proceso de filmación y producción de películas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Clips de series</h3>
                <p className="text-gray-700 text-sm">
                  Avances y clips exclusivos de las series más populares y esperadas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Momentos de premios</h3>
                <p className="text-gray-700 text-sm">
                  Clips de ceremonias de premios, discursos memorables, y momentos históricos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎞️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentales de cine</h3>
                <p className="text-gray-700 text-sm">
                  Mini documentales sobre la historia del cine y biografías de leyendas cinematográficas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de IMDb?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el trailer</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video o trailer de IMDb que quieres descargar y copia el enlace del contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido cinematográfico.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga cinematográfica</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu contenido de cine en alta calidad, perfecto para los amantes del séptimo arte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de IMDb?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">🎬 Calidad cinematográfica</h3>
                <p className="text-gray-700">
                  Preservamos la calidad HD de los trailers y contenido de IMDb, 
                  perfecta para apreciar cada detalle visual y cinematográfico.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">🏆 Contenido exclusivo</h3>
                <p className="text-gray-700">
                  Accede a entrevistas exclusivas, behind-the-scenes, y contenido 
                  que solo IMDb puede ofrecer con su acceso privilegiado a Hollywood.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">🎞️ Biblioteca cinematográfica</h3>
                <p className="text-gray-700">
                  Crea tu colección personal de trailers y contenido cinematográfico 
                  para tener disponible sin conexión cuando quieras.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">⭐ Información autorizada</h3>
                <p className="text-gray-700">
                  IMDb es la fuente más confiable de información cinematográfica, 
                  garantizando contenido oficial y verificado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Uses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de IMDb?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Cinéfilos y coleccionistas</h3>
                <p className="text-gray-700">
                  Amantes del cine descargan trailers de IMDb para crear colecciones personales, 
                  especialmente de películas clásicas, estrenos esperados, y directores favoritos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Estudiantes de cine</h3>
                <p className="text-gray-700">
                  Estudiantes y profesores de cine descargan contenido educativo de IMDb para 
                  análisis cinematográficos, estudios de caso, y material de referencia académica.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Creadores de contenido cinematográfico</h3>
                <p className="text-gray-700">
                  YouTubers y bloggers de cine descargan trailers y clips de IMDb para crear 
                  reseñas, análisis, y contenido educativo sobre películas y series.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres un cinéfilo apasionado?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si vives y respiras cine y constantemente descubres contenido increíble 
                  en IMDb que quieres guardar, Snaptube puede ayudarte a organizar 
                  todo tu contenido cinematográfico desde múltiples fuentes.
                </p>
                <a 
                  href="/" 
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador cinematográfico</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">IMDb, YouTube Movies, Netflix...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Trailers, entrevistas, cine</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Siempre gratis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de IMDb</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar trailers y videos públicos de IMDb. El contenido 
                  premium o con suscripción requiere acceso oficial a IMDb Pro.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta los derechos cinematográficos</h3>
                <p className="text-gray-700">
                  Los trailers y contenido cinematográfico tienen derechos estrictos. 
                  Usa las descargas para disfrute personal y respeta los derechos de autor.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes crear listas de seguimiento en <a href="https://imdb.com" className="text-yellow-600 hover:text-yellow-800 font-medium">IMDb</a> para 
                  organizar películas y series, aunque esto no descarga el contenido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de IMDb ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Sumérgete en el mundo del cine con la autoridad cinematográfica mundial. 
              Construye tu biblioteca personal de trailers y contenido cinematográfico de calidad.
            </p>
            <a 
              href="/" 
              className="bg-white text-yellow-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de IMDb
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
