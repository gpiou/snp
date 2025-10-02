import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Mixcloud Gratis - Snaptube Mixcloud Downloader",
  description: "Descarga sets de DJ y música de Mixcloud gratis en alta calidad. Guarda mixes y podcasts de Mixcloud directamente a tu dispositivo.",
  keywords: "descargar mixcloud, mixcloud downloader, bajar sets dj mixcloud, mixcloud mixes",
  openGraph: {
    title: "Descargar Videos de Mixcloud Gratis",
    description: "Descarga sets de DJ y música de Mixcloud gratis con Snaptube. Guarda mixes de Mixcloud.",
    type: "website",
  },
};

export default function DescargarMixcloudPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Mixcloud Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda sets de DJ y mixes de Mixcloud en alta calidad. 
              Descarga podcasts y música de DJ directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Mixcloud
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
                Mixcloud es el hogar de la cultura DJ y la música electrónica: donde los mejores 
                DJs del mundo comparten sus sets exclusivos, donde descubres nuevos géneros 
                musicales, y donde la música underground se encuentra con los grandes nombres 
                de la escena electrónica. Es la plataforma donde cada mix cuenta una historia 
                musical única.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/mixcloud-mp3-saver" className="text-orange-600 hover:text-orange-800 font-medium">descargador de Mixcloud</a> te permite guardar todos estos sets 
                exclusivos directamente en tu dispositivo. Perfecto para tener música de DJ 
                disponible offline, crear tu biblioteca personal de sets, o simplemente 
                disfrutar de mixes únicos sin depender de conexión a internet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea house, techno, drum & bass, o cualquier género electrónico que los DJs 
                están mezclando en Mixcloud, ahora puedes tener toda esta riqueza musical 
                disponible las 24 horas en tu biblioteca personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Mixcloud?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎧</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sets de DJ profesionales</h3>
                <p className="text-gray-700 text-sm">
                  Mixes exclusivos de DJs reconocidos mundialmente y artistas underground.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Géneros electrónicos</h3>
                <p className="text-gray-700 text-sm">
                  House, techno, trance, drum & bass, dubstep y todos los subgéneros electrónicos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📻</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Radio shows</h3>
                <p className="text-gray-700 text-sm">
                  Programas de radio especializados en música electrónica y cultura DJ.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎪</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sets de festivales</h3>
                <p className="text-gray-700 text-sm">
                  Grabaciones de sets en vivo de los mejores festivales de música electrónica.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Underground mixes</h3>
                <p className="text-gray-700 text-sm">
                  Música underground y experimental de DJs emergentes y sellos independientes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Podcasts musicales</h3>
                <p className="text-gray-700 text-sm">
                  Podcasts sobre cultura musical, entrevistas con artistas y análisis de géneros.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Mixcloud?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el mix</h3>
                <p className="text-gray-700 text-sm">
                  Ve al set o podcast de Mixcloud que quieres descargar y copia el enlace.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido de DJ.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga el set</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu mix en alta calidad de audio, perfecto para disfrutar la música de DJ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Mixcloud?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🎵 Calidad de audio premium</h3>
                <p className="text-gray-700">
                  Preservamos la calidad de audio original de los sets, perfecta para 
                  apreciar todos los matices de la mezcla profesional de DJ.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🎧 Biblioteca de sets offline</h3>
                <p className="text-gray-700">
                  Crea tu colección personal de sets de DJ para escuchar sin conexión, 
                  perfecto para fiestas, entrenamientos, o momentos de relajación.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🌍 Descubre nueva música</h3>
                <p className="text-gray-700">
                  Accede a DJs de todo el mundo y géneros que no escucharías en 
                  radio tradicional o plataformas mainstream.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">⚡ Descarga rápida de mixes largos</h3>
                <p className="text-gray-700">
                  Optimizado para descargar sets completos de 1-2 horas de duración 
                  de forma eficiente y sin interrupciones.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Mixcloud?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎧 DJs y productores</h3>
                <p className="text-gray-700">
                  DJs profesionales y productores descargan sets de Mixcloud para estudiar técnicas 
                  de mezcla, encontrar inspiración, y mantenerse al día con las tendencias de la escena electrónica.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💃 Amantes de la música electrónica</h3>
                <p className="text-gray-700">
                  Fanáticos de la música electrónica crean bibliotecas personales de sus DJs favoritos 
                  para tener música de alta calidad disponible en fiestas, entrenamientos, y momentos de relax.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎪 Organizadores de eventos</h3>
                <p className="text-gray-700">
                  Organizadores de fiestas y eventos descargan sets de calidad para usar como música 
                  de fondo, warm-up, o para estudiar el estilo de DJs que quieren contratar.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres fanático de la música electrónica?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si vives y respiras música electrónica y constantemente descubres nuevos 
                  DJs y sets en Mixcloud, Snaptube puede ayudarte a organizar toda tu 
                  colección de música electrónica desde múltiples plataformas.
                </p>
                <a 
                  href="/" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador de música DJ</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Mixcloud, SoundCloud, Spotify...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Sets DJ, mixes, podcasts</span>
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
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Mixcloud</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎧 Respeta a los DJs</h3>
                <p className="text-gray-700">
                  Los sets de Mixcloud representan horas de trabajo de DJs profesionales. 
                  Usa las descargas para disfrute personal y considera apoyar a los artistas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⏰ Sets largos requieren paciencia</h3>
                <p className="text-gray-700">
                  Los sets de DJ pueden durar 1-2 horas. Ten paciencia durante la descarga 
                  de archivos largos para obtener la mejor calidad de audio.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎵 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes seguir a DJs en <a href="https://mixcloud.com" className="text-orange-600 hover:text-orange-800 font-medium">Mixcloud</a> y crear 
                  playlists, aunque esto requiere conexión para escuchar los sets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Mixcloud ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Sumérgete en el mundo de la música electrónica con los mejores sets de DJ. 
              Construye tu biblioteca personal de música electrónica de alta calidad.
            </p>
            <a 
              href="/" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Mixcloud
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}