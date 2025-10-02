import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Bluesky Gratis - Snaptube Bluesky Downloader",
  description: "Descarga videos de Bluesky gratis en alta calidad. Guarda contenido de la nueva red social descentralizada Bluesky directamente a tu dispositivo.",
  keywords: "descargar videos bluesky, bluesky downloader, bajar videos bluesky, bluesky social network",
  openGraph: {
    title: "Descargar Videos de Bluesky Gratis",
    description: "Descarga videos de Bluesky gratis en alta calidad con Snaptube. Guarda contenido de Bluesky.",
    type: "website",
  },
};

export default function DescargarBlueskyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 to-sky-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Bluesky Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos de Bluesky, la nueva red social descentralizada. 
              Descarga contenido de la alternativa libre a Twitter directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Bluesky
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
                Bluesky representa el futuro de las redes sociales: una plataforma descentralizada 
                que devuelve el control a los usuarios, libre de algoritmos manipulativos y 
                censura corporativa. Creada por el co-fundador de Twitter, Bluesky ofrece una 
                experiencia social más auténtica, donde las conversaciones fluyen naturalmente 
                y el contenido se comparte sin restricciones artificiales.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/bluesky-video-saver" className="text-blue-600 hover:text-blue-800 font-medium">descargador de Bluesky</a> te permite preservar todo este contenido 
                auténtico directamente en tu dispositivo. Perfecto para guardar conversaciones 
                importantes, videos únicos que se comparten en esta nueva plataforma, o 
                simplemente tener acceso offline a contenido de la red social del futuro.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que estés siguiendo debates intelectuales, descubriendo nuevos creadores, 
                o simplemente disfrutando de una experiencia social más humana y menos 
                algorítmica, Bluesky ofrece una alternativa refrescante a las redes tradicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Bluesky?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🗣️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Conversaciones auténticas</h3>
                <p className="text-gray-700 text-sm">
                  Debates reales, discusiones profundas, y conversaciones sin algoritmos manipulativos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🆕</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido pionero</h3>
                <p className="text-gray-700 text-sm">
                  Videos y posts de early adopters que están construyendo la nueva red social.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔓</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido libre</h3>
                <p className="text-gray-700 text-sm">
                  Posts y videos sin censura corporativa ni restricciones algorítmicas artificiales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido intelectual</h3>
                <p className="text-gray-700 text-sm">
                  Discusiones académicas, análisis profundos, y contenido de alta calidad intelectual.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Comunidades nicho</h3>
                <p className="text-gray-700 text-sm">
                  Contenido de comunidades especializadas que migran a plataformas más libres.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Noticias alternativas</h3>
                <p className="text-gray-700 text-sm">
                  Periodismo independiente y perspectivas que no encuentras en medios tradicionales.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Bluesky?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el post</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video o post de Bluesky que quieres descargar y copia el enlace del contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido descentralizado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga libre</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu contenido en alta calidad, preservando la libertad digital del futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Bluesky?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🌐 Futuro descentralizado</h3>
                <p className="text-gray-700">
                  Preserva contenido de la nueva generación de redes sociales descentralizadas 
                  que representan el futuro de la comunicación digital.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🔓 Libertad de expresión</h3>
                <p className="text-gray-700">
                  Guarda contenido que representa la verdadera libertad de expresión, 
                  sin censura corporativa ni manipulación algorítmica.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🆕 Early adopter advantage</h3>
                <p className="text-gray-700">
                  Sé de los primeros en preservar contenido de la plataforma que está 
                  redefiniendo cómo funcionan las redes sociales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🧠 Calidad intelectual</h3>
                <p className="text-gray-700">
                  Accede a conversaciones de mayor calidad y contenido más reflexivo 
                  que caracteriza a las comunidades de Bluesky.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Bluesky?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 to-sky-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔬 Investigación de redes sociales</h3>
                <p className="text-gray-700">
                  Investigadores y académicos descargan contenido de Bluesky para estudiar 
                  la evolución de las redes sociales descentralizadas y nuevos modelos de comunicación digital.
                </p>
              </div>

              <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Preservar conversaciones importantes</h3>
                <p className="text-gray-700">
                  Usuarios comprometidos con la libertad digital preservan debates importantes, 
                  análisis profundos, y conversaciones que representan el futuro de la comunicación libre.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-sky-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Documentar la migración digital</h3>
                <p className="text-gray-700">
                  Early adopters documentan la migración hacia plataformas descentralizadas, 
                  preservando momentos históricos de la transición hacia redes sociales más libres.
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
                <h2 className="text-3xl font-bold mb-6">¿Crees en las redes descentralizadas?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si valoras la libertad digital y estás explorando alternativas a las redes 
                  sociales tradicionales, Snaptube puede ayudarte a preservar contenido 
                  de múltiples plataformas descentralizadas desde una sola aplicación.
                </p>
                <a 
                  href="/" 
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
                    <p className="text-sm opacity-75">Descargador del futuro</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Bluesky, Mastodon, Diaspora...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Filosofía:</span>
                    <span className="font-medium text-green-300">Libertad digital</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Completamente gratis</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Bluesky</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar posts públicos de Bluesky. El contenido privado 
                  o con restricciones no puede ser descargado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Apoya la descentralización</h3>
                <p className="text-gray-700">
                  Considera contribuir al ecosistema descentralizado apoyando desarrolladores 
                  y proyectos que construyen el futuro de las redes sociales libres.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🦋 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar las funciones nativas de <a href="https://bsky.social" className="text-blue-600 hover:text-blue-800 font-medium">Bluesky</a> para 
                  guardar posts y crear listas, aunque esto requiere conexión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-400 to-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Bluesky ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Sé parte del futuro de las redes sociales preservando contenido de Bluesky. 
              Construye tu biblioteca personal de comunicación libre y descentralizada.
            </p>
            <a 
              href="/" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Bluesky
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
