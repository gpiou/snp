import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de ESPN Gratis - Snaptube ESPN Downloader",
  description: "Descarga videos deportivos de ESPN gratis en alta calidad. Guarda highlights, análisis y contenido deportivo de ESPN directamente a tu dispositivo.",
  keywords: "descargar videos espn, espn downloader, bajar videos espn, espn deportes",
  openGraph: {
    title: "Descargar Videos de ESPN Gratis",
    description: "Descarga videos deportivos de ESPN gratis en alta calidad con Snaptube. Guarda contenido de ESPN.",
    type: "website",
  },
};

export default function DescargarESPNPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de ESPN Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda highlights deportivos y análisis de ESPN en alta calidad. 
              Descarga el mejor contenido deportivo directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de ESPN
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
                ESPN es la autoridad mundial en deportes: desde highlights de la NBA hasta 
                análisis de fútbol americano, cobertura de los Juegos Olímpicos, y documentales 
                deportivos que marcan historia. Es donde encuentras las mejores jugadas, 
                entrevistas exclusivas con atletas, y el análisis más profundo del mundo deportivo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/espn-video-saver" className="text-red-600 hover:text-red-800 font-medium">descargador de ESPN</a> te permite guardar todo este contenido 
                deportivo directamente en tu dispositivo. Perfecto para conservar highlights 
                épicos, análisis detallados, o documentales deportivos que quieres ver 
                una y otra vez sin depender de conexión a internet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que sigas la NFL, NBA, fútbol mundial, o cualquier deporte que ESPN 
                cubra, ahora puedes tener toda esta pasión deportiva disponible offline 
                en tu biblioteca personal de momentos deportivos legendarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de ESPN?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlights de NBA</h3>
                <p className="text-gray-700 text-sm">
                  Las mejores jugadas, dunks épicos, y momentos legendarios del baloncesto profesional.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">NFL y fútbol americano</h3>
                <p className="text-gray-700 text-sm">
                  Touchdowns espectaculares, análisis de jugadas, y cobertura completa de la NFL.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fútbol mundial</h3>
                <p className="text-gray-700 text-sm">
                  Goles increíbles, análisis de la Premier League, La Liga, y torneos internacionales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Juegos Olímpicos</h3>
                <p className="text-gray-700 text-sm">
                  Momentos olímpicos históricos, récords mundiales, y ceremonias memorables.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentales deportivos</h3>
                <p className="text-gray-700 text-sm">
                  30 for 30, biografías de atletas, y documentales que cuentan historias deportivas únicas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entrevistas exclusivas</h3>
                <p className="text-gray-700 text-sm">
                  Conversaciones íntimas con atletas legendarios y análisis de expertos deportivos.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de ESPN?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el highlight</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video deportivo de ESPN que quieres descargar y copia el enlace del contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido deportivo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga deportiva</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video deportivo en alta calidad, perfecto para revivir momentos épicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de ESPN?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🏆 Calidad deportiva premium</h3>
                <p className="text-gray-700">
                  Preservamos la calidad HD de ESPN, perfecta para apreciar cada detalle 
                  de las jugadas más espectaculares del deporte mundial.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">📺 Contenido exclusivo</h3>
                <p className="text-gray-700">
                  Accede a análisis profundos, documentales únicos, y cobertura 
                  que solo ESPN puede ofrecer con su experiencia deportiva.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🎬 Documentales legendarios</h3>
                <p className="text-gray-700">
                  Guarda documentales deportivos que cuentan historias inspiradoras 
                  y momentos que han marcado la historia del deporte.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">⚡ Highlights instantáneos</h3>
                <p className="text-gray-700">
                  Descarga rápidamente los mejores momentos deportivos para 
                  compartir con amigos o revivir cuando quieras.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de ESPN?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏆 Fanáticos deportivos</h3>
                <p className="text-gray-700">
                  Aficionados apasionados descargan highlights de sus equipos favoritos, jugadas legendarias, 
                  y momentos históricos para crear sus propias colecciones de momentos deportivos épicos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Entrenadores y analistas</h3>
                <p className="text-gray-700">
                  Entrenadores deportivos y analistas descargan contenido de ESPN para estudiar estrategias, 
                  analizar jugadas, y usar como material educativo en entrenamientos y presentaciones.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Creadores de contenido deportivo</h3>
                <p className="text-gray-700">
                  YouTubers y creadores deportivos descargan highlights para crear reacciones, análisis, 
                  y contenido educativo sobre deportes, siempre respetando los derechos de autor.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres fanático de los deportes?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si vives y respiras deportes y constantemente encuentras contenido 
                  increíble en ESPN que quieres guardar, Snaptube puede ayudarte 
                  a organizar todo tu contenido deportivo desde múltiples fuentes.
                </p>
                <a 
                  href="/" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador deportivo</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">ESPN, YouTube Sports, Fox Sports...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Deportes, highlights, análisis</span>
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
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de ESPN</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar videos públicos de ESPN. El contenido premium 
                  o con suscripción requiere acceso oficial a ESPN+.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta los derechos deportivos</h3>
                <p className="text-gray-700">
                  El contenido deportivo tiene derechos estrictos. Usa las descargas para 
                  disfrute personal y siempre respeta los derechos de transmisión de ESPN.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏆 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes suscribirte a <a href="https://espn.com" className="text-red-600 hover:text-red-800 font-medium">ESPN+</a> para 
                  acceso completo a contenido exclusivo y funciones de descarga oficiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de ESPN ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Vive la pasión deportiva sin límites. Construye tu biblioteca personal 
              de los mejores momentos deportivos y análisis de la autoridad mundial en deportes.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de ESPN
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
