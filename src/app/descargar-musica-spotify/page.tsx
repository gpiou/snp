import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Música de Spotify Gratis - Snaptube Spotify Downloader",
  description: "Descarga música de Spotify gratis en MP3. Guarda canciones y playlists de Spotify directamente a tu dispositivo con Snaptube.",
  keywords: "descargar musica spotify, spotify downloader, bajar canciones spotify, spotify mp3",
  openGraph: {
    title: "Descargar Música de Spotify Gratis",
    description: "Descarga música de Spotify gratis en MP3 con Snaptube. Guarda canciones de Spotify.",
    type: "website",
  },
};

export default function DescargarSpotifyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Música de Spotify Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda canciones y playlists de Spotify en MP3. 
              Descarga tu música favorita para escuchar sin conexión y sin límites.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Música de Spotify
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
                Spotify tiene la biblioteca musical más grande del mundo: desde los últimos hits 
                hasta clásicos atemporales, música independiente, podcasts exclusivos, y playlists 
                curadas perfectamente. Es donde descubres nueva música, donde sigues a tus artistas 
                favoritos, y donde la música cobra vida con recomendaciones personalizadas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-green-600 hover:text-green-800 font-medium">descargador de Spotify</a> te permite guardar toda esta música 
                directamente en tu dispositivo en formato MP3. Perfecto para cuando encuentras 
                esa canción perfecta, esa playlist que necesitas para el gym, o música que 
                quieres escuchar sin depender de conexión a internet o suscripciones.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea para crear tu biblioteca musical personal, tener música para viajes 
                largos sin internet, o simplemente disfrutar de tus canciones favoritas 
                sin interrupciones publicitarias, ahora es posible tener todo en tu dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Spotify?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Canciones individuales</h3>
                <p className="text-gray-700 text-sm">
                  Descarga tracks específicos de tus artistas favoritos en alta calidad MP3.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Playlists completas</h3>
                <p className="text-gray-700 text-sm">
                  Guarda playlists enteras, desde Discover Weekly hasta tus propias creaciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💿</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Álbumes completos</h3>
                <p className="text-gray-700 text-sm">
                  Descarga álbumes enteros de tus artistas favoritos para escuchar sin interrupciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎙️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Podcasts exclusivos</h3>
                <p className="text-gray-700 text-sm">
                  Guarda episodios de podcasts y contenido de audio exclusivo de Spotify.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Música trending</h3>
                <p className="text-gray-700 text-sm">
                  Descarga los hits del momento y música que está en las listas de popularidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎶</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Música independiente</h3>
                <p className="text-gray-700 text-sm">
                  Encuentra y descarga música de artistas independientes y géneros de nicho.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar música de Spotify?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Ve a la canción o playlist de Spotify que quieres descargar y copia el enlace de Spotify.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y convierte</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente convertimos a MP3 de alta calidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga en MP3</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu música en formato MP3, lista para tu biblioteca personal y reproductores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Spotify?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">🎵 Calidad de audio superior</h3>
                <p className="text-gray-700">
                  Convertimos la música de Spotify manteniendo la mejor calidad de audio posible, 
                  perfecta para audiófilos y amantes de la música.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">📱 Sin suscripciones necesarias</h3>
                <p className="text-gray-700">
                  No necesitas Spotify Premium ni suscripciones pagas. Descarga música 
                  directamente sin limitaciones de cuenta.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">🔄 Formato universal MP3</h3>
                <p className="text-gray-700">
                  Convertimos todo a MP3, el formato más compatible que funciona en cualquier 
                  dispositivo y reproductor de música.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">⚡ Procesamiento rápido</h3>
                <p className="text-gray-700">
                  Convertimos y procesamos música de Spotify en segundos, no en minutos. 
                  Descarga tu música favorita al instante.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan música de Spotify?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎧 Biblioteca musical personal</h3>
                <p className="text-gray-700">
                  Muchos melómanos crean bibliotecas personales con su música favorita de Spotify 
                  para tener acceso completo sin depender de conexión a internet o suscripciones mensuales.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✈️ Música para viajes</h3>
                <p className="text-gray-700">
                  Viajeros descargan playlists completas de Spotify para tener entretenimiento 
                  durante vuelos largos, viajes por carretera, o lugares con conexión limitada a internet.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏋️ Música para ejercicio</h3>
                <p className="text-gray-700">
                  Deportistas y fitness enthusiasts descargan playlists motivacionales de Spotify 
                  para usar en el gym, corriendo, o haciendo ejercicio sin interrupciones publicitarias.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres melómano empedernido?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si vives y respiras música, y constantemente descubres nuevas canciones 
                  en Spotify que quieres guardar, Snaptube puede ser la herramienta perfecta 
                  para construir tu biblioteca musical definitiva.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador musical</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Spotify, SoundCloud, YouTube...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Formato:</span>
                    <span className="font-medium text-green-300">MP3 alta calidad</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Totalmente gratis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Spotify</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido disponible públicamente</h3>
                <p className="text-gray-700">
                  Solo podemos procesar música que esté disponible públicamente en Spotify. 
                  Las playlists privadas no pueden ser accedidas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta a los artistas</h3>
                <p className="text-gray-700">
                  Usa las descargas para disfrute personal. Considera apoyar a tus artistas 
                  favoritos comprando su música oficial o asistiendo a sus conciertos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎵 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar Spotify Premium para descargas oficiales, aunque estas 
                  solo funcionan dentro de la app de <a href="https://spotify.com" className="text-green-600 hover:text-green-800 font-medium">Spotify</a> y requieren suscripción mensual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga música de Spotify ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Construye tu biblioteca musical definitiva con la mejor música de Spotify. 
              Disfruta de tus canciones favoritas sin límites, sin conexión, y sin interrupciones.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Spotify
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
