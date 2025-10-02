import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de iFunny Gratis - Snaptube iFunny Downloader",
  description: "Descarga videos de iFunny gratis en alta calidad. Guarda memes y contenido divertido de iFunny directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos ifunny, ifunny downloader, bajar memes ifunny, ifunny videos",
  openGraph: {
    title: "Descargar Videos de iFunny Gratis",
    description: "Descarga videos de iFunny gratis en alta calidad con Snaptube. Guarda memes de iFunny.",
    type: "website",
  },
};

export default function DescargariFunnyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de iFunny Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda memes y videos divertidos de iFunny en alta calidad. 
              Descarga el mejor contenido de humor directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de iFunny
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
                iFunny es el reino del humor en internet: donde nacen los memes más divertidos, 
                se comparten los videos más absurdos, y la comunidad más creativa del humor 
                digital se reúne para hacer reír al mundo. Es la plataforma donde el humor 
                no tiene límites y donde cada día encuentras contenido que te hace llorar de risa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/ifunny-video-saver" className="text-orange-600 hover:text-orange-800 font-medium">descargador de iFunny</a> te permite guardar todo este contenido 
                hilarante directamente en tu dispositivo. Perfecto para crear tu colección 
                personal de memes, tener humor disponible offline, o simplemente conservar 
                esos videos que te hacen reír cada vez que los ves.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que busques memes clásicos, videos absurdos, humor negro, o simplemente 
                contenido que te alegre el día, iFunny tiene la dosis perfecta de humor 
                que necesitas para cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de iFunny?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">😂</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Memes virales</h3>
                <p className="text-gray-700 text-sm">
                  Los memes más divertidos que se vuelven virales y definen el humor de internet.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🤪</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos absurdos</h3>
                <p className="text-gray-700 text-sm">
                  Contenido tan absurdo que es divertido, videos random que no tienen sentido pero te hacen reír.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Humor negro</h3>
                <p className="text-gray-700 text-sm">
                  Humor más atrevido y sarcástico que caracteriza a la comunidad de iFunny.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🐱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Memes de animales</h3>
                <p className="text-gray-700 text-sm">
                  Videos divertidos de mascotas, animales haciendo cosas graciosas, y memes de gatos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Humor gaming</h3>
                <p className="text-gray-700 text-sm">
                  Memes de videojuegos, fails épicos, y humor que solo los gamers entienden.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Humor de redes sociales</h3>
                <p className="text-gray-700 text-sm">
                  Parodias de otras redes sociales, humor sobre la vida digital, y memes de internet.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de iFunny?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el meme</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video o meme de iFunny que quieres descargar y copia el enlace del contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido divertido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga divertida</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu meme en alta calidad, listo para compartir risas en cualquier momento.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de iFunny?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">😂 Humor sin límites</h3>
                <p className="text-gray-700">
                  Accede al humor más libre y creativo de internet, donde la comunidad 
                  de iFunny crea contenido sin restricciones corporativas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">📱 Memes para compartir</h3>
                <p className="text-gray-700">
                  Crea tu biblioteca personal de memes para compartir en otras redes 
                  sociales o simplemente alegrar el día de tus amigos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🎭 Diversidad de humor</h3>
                <p className="text-gray-700">
                  Desde humor inocente hasta sarcasmo inteligente, iFunny tiene 
                  todos los tipos de humor que existen en internet.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">⚡ Descarga rápida de risas</h3>
                <p className="text-gray-700">
                  Los memes son contenido corto, perfecto para descargas rápidas 
                  y tener humor instantáneo disponible siempre.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de iFunny?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">😂 Coleccionar memes favoritos</h3>
                <p className="text-gray-700">
                  Amantes del humor descargan sus memes favoritos de iFunny para crear colecciones 
                  personales, tener humor disponible offline, y compartir risas en cualquier momento.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Creadores de contenido</h3>
                <p className="text-gray-700">
                  Influencers y creadores descargan memes de iFunny para crear reacciones, compilaciones, 
                  y contenido de humor para sus propias audiencias en otras plataformas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Terapia de humor</h3>
                <p className="text-gray-700">
                  Personas que usan el humor como terapia descargan contenido divertido de iFunny 
                  para tener una dosis de risas disponible cuando necesitan alegrar su día.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres adicto a los memes?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si vives del humor de internet y constantemente encuentras memes 
                  increíbles en iFunny que quieres guardar, Snaptube puede ayudarte 
                  a organizar todo tu contenido de humor desde múltiples plataformas.
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
                    <p className="text-sm opacity-75">Descargador de humor</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">iFunny, 9GAG, Reddit...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Memes, humor, videos</span>
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
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de iFunny</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">😂 Humor para todos</h3>
                <p className="text-gray-700">
                  iFunny tiene humor de todos los tipos. Encuentra el contenido que se adapte 
                  a tu sentido del humor y respeta que otros tengan gustos diferentes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Comparte responsablemente</h3>
                <p className="text-gray-700">
                  Al compartir memes descargados, considera el contexto y la audiencia. 
                  No todo el humor es apropiado para todas las situaciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función de favoritos de <a href="https://ifunny.co" className="text-orange-600 hover:text-orange-800 font-medium">iFunny</a> para 
                  guardar memes, aunque esto requiere tener la app instalada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de iFunny ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Llena tu vida de risas con el mejor humor de internet. Construye tu biblioteca 
              personal de memes y contenido divertido para alegrar cualquier momento.
            </p>
            <a 
              href="/" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de iFunny
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
