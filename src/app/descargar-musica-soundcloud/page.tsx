import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Música de SoundCloud Gratis - Snaptube SoundCloud Downloader",
  description: "Descarga música de SoundCloud gratis en MP3. Guarda tracks, podcasts y audio de SoundCloud directamente a tu dispositivo con Snaptube.",
  keywords: "descargar musica soundcloud, soundcloud downloader, bajar audio soundcloud, soundcloud mp3",
  openGraph: {
    title: "Descargar Música de SoundCloud Gratis",
    description: "Descarga música de SoundCloud gratis en MP3 con Snaptube. Guarda tracks y podcasts de SoundCloud.",
    type: "website",
  },
};

export default function DescargarSoundCloudPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Música de SoundCloud Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda tracks, podcasts y audio de SoundCloud en MP3. 
              Descarga música independiente y contenido exclusivo directamente a tu dispositivo.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar de SoundCloud Ahora
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
                SoundCloud es el hogar de la música independiente: artistas emergentes, remixes únicos, 
                podcasts exclusivos, y tracks que no encuentras en ninguna otra plataforma. Es donde 
                los músicos suben sus creaciones originales antes de llegar a las grandes plataformas, 
                lo que lo convierte en una mina de oro musical.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-orange-600 hover:text-orange-800 font-medium">descargador de SoundCloud</a> te permite guardar toda esta música única 
                directamente en tu dispositivo en formato MP3. Perfecto para cuando encuentras esa 
                canción perfecta de un artista independiente o ese podcast que quieres escuchar 
                sin conexión durante tus viajes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea música electrónica underground, covers acústicos únicos, o podcasts de nicho 
                que solo existen en SoundCloud, ahora puedes tener todo en tu biblioteca personal 
                para escuchar cuando y donde quieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de SoundCloud?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Música independiente</h3>
                <p className="text-gray-700 text-sm">
                  Tracks originales de artistas emergentes, música que no está en Spotify o Apple Music.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎧</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Remixes y bootlegs</h3>
                <p className="text-gray-700 text-sm">
                  Versiones únicas, remixes no oficiales y bootlegs que solo existen en SoundCloud.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎙️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Podcasts exclusivos</h3>
                <p className="text-gray-700 text-sm">
                  Podcasts independientes, entrevistas y contenido de audio que no está en otras apps.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎹</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Demos y versiones beta</h3>
                <p className="text-gray-700 text-sm">
                  Versiones tempranas de canciones, demos exclusivos y material no publicado oficialmente.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎼</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sets de DJ</h3>
                <p className="text-gray-700 text-sm">
                  Mezclas completas de DJs, sets en vivo y compilaciones musicales únicas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Covers acústicos</h3>
                <p className="text-gray-700 text-sm">
                  Versiones acústicas únicas, covers caseros y interpretaciones personales de canciones.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar música de SoundCloud?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra tu track</h3>
                <p className="text-gray-700 text-sm">
                  Ve al track de SoundCloud que quieres descargar y copia el enlace de la canción.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el audio.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga en MP3</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu música en formato MP3 de alta calidad, listo para tu biblioteca personal.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de SoundCloud?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🎵 Calidad de audio óptima</h3>
                <p className="text-gray-700">
                  Descargamos en la mejor calidad disponible del track original, manteniendo 
                  la fidelidad del audio que el artista subió a SoundCloud.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">⚡ Procesamiento instantáneo</h3>
                <p className="text-gray-700">
                  Convertimos el audio de SoundCloud a MP3 en segundos, sin esperas largas 
                  ni procesos complicados que seguir.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">📱 Compatible con móviles</h3>
                <p className="text-gray-700">
                  Funciona perfectamente en cualquier dispositivo móvil, ideal para descargar 
                  música mientras navegas SoundCloud en tu teléfono.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🔒 Sin registro necesario</h3>
                <p className="text-gray-700">
                  No necesitas crear cuentas adicionales ni proporcionar credenciales de 
                  SoundCloud. Solo pega el enlace y descarga.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan música de SoundCloud?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎧 Descubrir música nueva</h3>
                <p className="text-gray-700">
                  Muchos melómanos usan SoundCloud para descubrir artistas emergentes y música 
                  independiente. Descargar les permite crear playlists personales con estos hallazgos únicos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎵 Coleccionar remixes exclusivos</h3>
                <p className="text-gray-700">
                  Los fanáticos de la música electrónica descargan remixes y bootlegs que solo 
                  existen en SoundCloud, creando colecciones únicas que no pueden encontrar en otras plataformas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎙️ Archivar podcasts independientes</h3>
                <p className="text-gray-700">
                  Oyentes de podcasts descargan episodios de shows independientes para escuchar 
                  offline, especialmente contenido que podría desaparecer de la plataforma.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres fanático de la música independiente?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si descargas música de SoundCloud frecuentemente, Snaptube puede ser perfecto 
                  para ti. Es una app que funciona con SoundCloud y muchas otras plataformas 
                  musicales desde una sola aplicación móvil.
                </p>
                <a 
                  href="https://fsmvid.com" 
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
                    <p className="text-sm opacity-75">Descargador musical</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">SoundCloud, YouTube, Spotify...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Formato:</span>
                    <span className="font-medium text-green-300">MP3 alta calidad</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de SoundCloud</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo tracks públicos</h3>
                <p className="text-gray-700">
                  Nuestro descargador solo funciona con tracks públicos de SoundCloud. Los tracks 
                  privados o con acceso restringido no pueden ser procesados.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Apoya a los artistas</h3>
                <p className="text-gray-700">
                  SoundCloud es vital para artistas independientes. Si te gusta su música, 
                  considera seguirlos, darles like, o apoyarlos comprando su música oficial.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎵 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Me gusta" de <a href="https://soundcloud.com" className="text-orange-600 hover:text-orange-800 font-medium">SoundCloud</a> para guardar 
                  tracks en tu perfil, aunque necesitarás conexión para escucharlos.
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
            <h2 className="text-3xl font-bold mb-6">Descarga música de SoundCloud ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Construye tu biblioteca personal con la mejor música independiente de SoundCloud. 
              Descubre, descarga y disfruta de música única que no encuentras en ningún otro lugar.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de SoundCloud
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
