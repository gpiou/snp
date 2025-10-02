import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Douyin Gratis - Snaptube Douyin Downloader",
  description: "Descarga videos de Douyin gratis en alta calidad. Guarda contenido de Douyin (TikTok China) directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos douyin, douyin downloader, bajar videos douyin, douyin china tiktok",
  openGraph: {
    title: "Descargar Videos de Douyin Gratis",
    description: "Descarga videos de Douyin gratis en alta calidad con Snaptube. Guarda contenido de Douyin.",
    type: "website",
  },
};

export default function DescargarDouyinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Douyin Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos de Douyin (TikTok China) en alta calidad. 
              Descarga contenido único de la plataforma china directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Douyin
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
                Douyin es la versión china original de TikTok, y es donde nacen muchas de las 
                tendencias que luego se vuelven virales en todo el mundo. Con contenido único, 
                creadores increíblemente talentosos, y una cultura digital diferente, Douyin 
                ofrece videos que no encontrarás en ninguna otra plataforma.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/douyin-video-saver" className="text-red-600 hover:text-red-800 font-medium">descargador de Douyin</a> te permite acceder y guardar todo este 
                contenido único directamente en tu dispositivo. Perfecto para descubrir 
                tendencias antes de que lleguen a otras plataformas, guardar contenido 
                creativo único, o simplemente explorar la rica cultura digital china.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que te interese la moda china, la comida tradicional, las últimas 
                tendencias de baile, o simplemente quieras ver contenido fresco y diferente, 
                Douyin ofrece una ventana única a la creatividad digital china.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Douyin?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🕺</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bailes originales</h3>
                <p className="text-gray-700 text-sm">
                  Coreografías que nacen en Douyin y luego se vuelven virales en TikTok mundial.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🍜</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Comida china auténtica</h3>
                <p className="text-gray-700 text-sm">
                  Recetas tradicionales, street food, y cultura gastronómica china auténtica.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Moda y estilo chino</h3>
                <p className="text-gray-700 text-sm">
                  Tendencias de moda únicas, hanfu tradicional, y estilos que definen la moda china.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Arte y cultura tradicional</h3>
                <p className="text-gray-700 text-sm">
                  Caligrafía, pintura tradicional, artes marciales, y expresiones culturales únicas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Festivales y tradiciones</h3>
                <p className="text-gray-700 text-sm">
                  Celebraciones del Año Nuevo Chino, festivales tradicionales, y costumbres locales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entretenimiento único</h3>
                <p className="text-gray-700 text-sm">
                  Comedia, sketches, y entretenimiento que refleja el humor y cultura china.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Douyin?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el video</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video de Douyin que quieres descargar y copia el enlace del contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido chino.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga única</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video de Douyin en alta calidad, preservando la cultura digital china.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Douyin?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🌏 Acceso a contenido único</h3>
                <p className="text-gray-700">
                  Douyin tiene contenido que no existe en TikTok internacional, 
                  ofreciendo una perspectiva única de la cultura digital china.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🔥 Tendencias antes que nadie</h3>
                <p className="text-gray-700">
                  Muchas tendencias virales nacen en Douyin antes de llegar a otras 
                  plataformas, permitiéndote estar siempre un paso adelante.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🎨 Diversidad cultural</h3>
                <p className="text-gray-700">
                  Accede a expresiones artísticas, tradiciones, y creatividad 
                  que refleja la rica cultura china contemporánea.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">📱 Calidad original preservada</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad HD del contenido de Douyin, preservando 
                  todos los detalles visuales y culturales únicos.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Douyin?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Investigación cultural</h3>
                <p className="text-gray-700">
                  Investigadores y estudiosos de cultura china descargan contenido de Douyin 
                  para estudiar tendencias sociales, expresiones culturales, y la evolución de la cultura digital china.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🕺 Creadores de tendencias</h3>
                <p className="text-gray-700">
                  Influencers y creadores de contenido descargan bailes y tendencias de Douyin 
                  para adaptarlas a sus audiencias internacionales, siendo los primeros en traer nuevas tendencias.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🍜 Entusiastas de la cultura china</h3>
                <p className="text-gray-700">
                  Personas interesadas en la cultura china descargan contenido sobre comida, tradiciones, 
                  y estilo de vida para aprender y conectar con la auténtica cultura china contemporánea.
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
                <h2 className="text-3xl font-bold mb-6">¿Te fascina la cultura china?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si te interesa la cultura china y quieres estar al día con las últimas 
                  tendencias que nacen en China, Snaptube puede ayudarte a organizar 
                  contenido de múltiples plataformas chinas desde una sola aplicación.
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
                    <p className="text-sm opacity-75">Descargador cultural</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Douyin, TikTok, Weibo...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Cultura china única</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Douyin</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌏 Contenido en chino</h3>
                <p className="text-gray-700">
                  La mayoría del contenido de Douyin está en chino. Considera usar 
                  traductores si no hablas el idioma pero te interesa el contenido visual.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Respeta la cultura</h3>
                <p className="text-gray-700">
                  El contenido de Douyin refleja la cultura china. Úsalo con respeto 
                  y considera el contexto cultural al compartir o adaptar el contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes acceder a <a href="https://douyin.com" className="text-red-600 hover:text-red-800 font-medium">Douyin</a> directamente, 
                  aunque puede requerir VPN en algunos países y registro con número chino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Douyin ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Explora la rica cultura digital china y descubre tendencias antes que nadie. 
              Construye tu biblioteca personal de contenido único de Douyin.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Douyin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
