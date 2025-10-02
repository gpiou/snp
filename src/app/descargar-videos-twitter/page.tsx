import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Twitter/X Gratis - Snaptube Twitter Downloader",
  description: "Descarga videos y GIFs de Twitter/X gratis en alta calidad. Guarda tweets con videos directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos twitter, twitter downloader, bajar videos twitter, descargar gifs twitter",
  openGraph: {
    title: "Descargar Videos de Twitter/X Gratis",
    description: "Descarga videos y GIFs de Twitter/X gratis en alta calidad con Snaptube.",
    type: "website",
  },
};

export default function DescargarTwitterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Twitter/X Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos y GIFs de Twitter/X en alta calidad. 
              Funciona con cualquier tweet público que contenga video.
            </p>
            <a 
              href="/" 
              className="bg-white text-sky-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Twitter
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
                Twitter (ahora X) es una mina de oro para videos cortos, GIFs divertidos, y clips 
                virales que aparecen y desaparecen rápidamente. El problema es que la plataforma 
                no te permite descargar estos videos directamente, lo cual es súper frustrante 
                cuando encuentras algo que quieres guardar para siempre.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/twitter-video-saver" className="text-sky-600 hover:text-sky-800 font-medium">descargador de Twitter</a> soluciona este problema de una vez por todas. 
                Puedes guardar cualquier video o GIF de Twitter en tu dispositivo, manteniendo 
                la calidad original y sin perder esos momentos únicos que solo aparecen en Twitter.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde videos de noticias de último momento hasta memes que se vuelven virales, 
                ahora puedes tener todo guardado en tu galería para compartir cuando quieras 
                o simplemente para no perder esos momentos especiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Twitter/X?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos nativos</h3>
                <p className="text-gray-700 text-sm">
                  Videos subidos directamente a Twitter, desde clips cortos hasta videos más largos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">GIFs animados</h3>
                <p className="text-gray-700 text-sm">
                  GIFs divertidos y memes animados que se comparten constantemente en Twitter.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de noticias</h3>
                <p className="text-gray-700 text-sm">
                  Clips informativos y reportajes que comparten medios de comunicación y periodistas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido viral</h3>
                <p className="text-gray-700 text-sm">
                  Videos que se vuelven tendencia y que quieres guardar antes de que desaparezcan.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Twitter/X?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sky-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el tweet</h3>
                <p className="text-gray-700 text-sm">
                  Ve al tweet con el video que quieres descargar y copia el enlace del tweet completo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sky-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente extraemos el video del tweet.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sky-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video en la mejor calidad disponible, listo para guardar en tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Twitter?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-4">⚡ Procesamiento instantáneo</h3>
                <p className="text-gray-700">
                  Procesamos tweets en segundos, no en minutos. Perfecto para cuando necesitas 
                  descargar contenido viral antes de que se elimine.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-4">🎯 Calidad original</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad exacta del video original de Twitter, sin compresión 
                  adicional ni pérdida de resolución.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-4">🔒 Sin registro</h3>
                <p className="text-gray-700">
                  No necesitas crear cuentas de Twitter adicionales ni proporcionar credenciales. 
                  Solo pega el enlace y descarga.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-4">📱 Funciona en móviles</h3>
                <p className="text-gray-700">
                  Optimizado para funcionar perfectamente en dispositivos móviles, donde más 
                  se consume contenido de Twitter.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Twitter?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📰 Guardar noticias importantes</h3>
                <p className="text-gray-700">
                  Muchas noticias de último momento aparecen primero en Twitter. Los usuarios 
                  descargan estos videos para tener evidencia o para compartir información importante.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-sky-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">😂 Coleccionar memes</h3>
                <p className="text-gray-700">
                  Los memes y videos divertidos de Twitter se vuelven virales rápidamente. 
                  Descargarlos permite crear colecciones personales para compartir después.
                </p>
              </div>

              <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Crear contenido</h3>
                <p className="text-gray-700">
                  Creadores de contenido descargan videos de Twitter para crear compilaciones, 
                  reacciones, o usar como material de referencia en sus propios videos.
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
                <h2 className="text-3xl font-bold mb-6">¿Usas Twitter frecuentemente?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si descargas videos de Twitter regularmente, considera usar Snaptube en tu móvil. 
                  Es una app que funciona con Twitter y muchas otras redes sociales, perfecta 
                  para usuarios activos de redes sociales.
                </p>
                <a 
                  href="/" 
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador social</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Redes sociales:</span>
                    <span className="font-medium">Twitter, TikTok, YouTube...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Videos, GIFs, audio</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Costo:</span>
                    <span className="font-medium text-green-300">Siempre gratis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Twitter/X</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo tweets públicos</h3>
                <p className="text-gray-700">
                  Nuestro descargador solo funciona con tweets públicos. Si la cuenta está 
                  protegida o el tweet es privado, no podremos acceder al contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⏰ Actúa rápido</h3>
                <p className="text-gray-700">
                  Los tweets pueden eliminarse en cualquier momento. Si encuentras un video 
                  que quieres guardar, descárgalo pronto antes de que desaparezca.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🐦 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar los marcadores de <a href="https://twitter.com" className="text-sky-600 hover:text-sky-800 font-medium">Twitter/X</a> para guardar tweets, 
                  aunque esto no descarga el video a tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Twitter/X ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              No pierdas más contenido viral de Twitter. Guarda videos y GIFs antes de que 
              desaparezcan para siempre. Es gratis y funciona al instante.
            </p>
            <a 
              href="/" 
              className="bg-white text-sky-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
