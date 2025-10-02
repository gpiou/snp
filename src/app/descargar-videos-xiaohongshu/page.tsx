import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Xiaohongshu Gratis - Snaptube Xiaohongshu Downloader",
  description: "Descarga videos de Xiaohongshu (Little Red Book) gratis en alta calidad. Guarda contenido de lifestyle y belleza china directamente a tu dispositivo.",
  keywords: "descargar videos xiaohongshu, xiaohongshu downloader, little red book, xiaohongshu china",
  openGraph: {
    title: "Descargar Videos de Xiaohongshu Gratis",
    description: "Descarga videos de Xiaohongshu gratis en alta calidad con Snaptube. Guarda contenido de Xiaohongshu.",
    type: "website",
  },
};

export default function DescargarXiaohongshuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Xiaohongshu Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos de Xiaohongshu (Little Red Book) en alta calidad. 
              Descarga contenido de lifestyle y belleza china directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-pink-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Xiaohongshu
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
                Xiaohongshu, conocido como "Little Red Book", es la plataforma de lifestyle 
                más influyente de China: donde las mujeres jóvenes chinas comparten sus rutinas 
                de belleza, outfits del día, reseñas de productos, y secretos de estilo de vida. 
                Es como Instagram y Pinterest combinados, pero con la auténtica perspectiva 
                del estilo de vida chino moderno.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/xiaohongshu-video-saver" className="text-pink-600 hover:text-pink-800 font-medium">descargador de Xiaohongshu</a> te permite guardar todo este contenido 
                de lifestyle directamente en tu dispositivo. Perfecto para descubrir tendencias 
                de belleza asiáticas, aprender rutinas de skincare coreanas y chinas, o 
                simplemente inspirarte con el estilo de vida de las influencers chinas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que te interese la moda asiática, productos de belleza K-beauty, 
                rutinas de cuidado personal, o simplemente quieras ver cómo viven las 
                mujeres jóvenes en las ciudades chinas modernas, Xiaohongshu es una 
                ventana única a este mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Xiaohongshu?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Rutinas de belleza</h3>
                <p className="text-gray-700 text-sm">
                  Tutoriales de maquillaje, skincare routines, y secretos de belleza asiática.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Outfits y moda</h3>
                <p className="text-gray-700 text-sm">
                  OOTD (Outfit of the Day), tendencias de moda china, y styling tips únicos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reseñas de productos</h3>
                <p className="text-gray-700 text-sm">
                  Reviews honestas de productos de belleza, moda, y lifestyle asiáticos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Decoración y hogar</h3>
                <p className="text-gray-700 text-sm">
                  Ideas de decoración, organización del hogar, y estilo de vida minimalista chino.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🍜</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Comida y recetas</h3>
                <p className="text-gray-700 text-sm">
                  Recetas caseras chinas, café shops aesthetic, y cultura gastronómica urbana.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Viajes y lifestyle</h3>
                <p className="text-gray-700 text-sm">
                  Destinos únicos en China, café culture, y el lifestyle de las ciudades chinas.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Xiaohongshu?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el contenido</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video o post de Xiaohongshu que quieres descargar y copia el enlace del contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido de lifestyle.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga inspiradora</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu contenido en alta calidad, perfecto para inspiración de belleza y lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Xiaohongshu?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">💄 Tendencias de belleza asiática</h3>
                <p className="text-gray-700">
                  Accede a las últimas tendencias de belleza y skincare que nacen en Asia 
                  antes de llegar a Occidente, directamente de las fuentes originales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">👗 Moda auténtica china</h3>
                <p className="text-gray-700">
                  Descubre cómo se viste realmente la juventud china moderna, 
                  sin filtros occidentales ni interpretaciones de terceros.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">🛍️ Productos únicos</h3>
                <p className="text-gray-700">
                  Encuentra reseñas de productos que no están disponibles en Occidente 
                  y descubre marcas asiáticas antes de que se vuelvan globales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">📱 Inspiración offline</h3>
                <p className="text-gray-700">
                  Crea tu biblioteca personal de inspiración de lifestyle para 
                  consultar sin conexión cuando necesites ideas frescas.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Xiaohongshu?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💄 Inspiración de belleza</h3>
                <p className="text-gray-700">
                  Influencers de belleza y entusiastas del skincare descargan tutoriales de Xiaohongshu 
                  para aprender técnicas asiáticas, descubrir productos únicos, y estar al día con las tendencias K-beauty.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">👗 Inspiración de moda</h3>
                <p className="text-gray-700">
                  Fashion bloggers y amantes de la moda descargan outfits y looks de Xiaohongshu 
                  para inspirarse con el estilo asiático único y crear contenido sobre moda internacional.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🛍️ Investigación de productos</h3>
                <p className="text-gray-700">
                  Empresarios y analistas de tendencias estudian contenido de Xiaohongshu para identificar 
                  productos emergentes, entender el comportamiento del consumidor asiático, y predecir tendencias globales.
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
                <h2 className="text-3xl font-bold mb-6">¿Te fascina el lifestyle asiático?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si te inspiras en la belleza y moda asiática y constantemente encuentras 
                  contenido increíble en Xiaohongshu, Snaptube puede ayudarte a organizar 
                  toda tu inspiración de lifestyle desde múltiples plataformas asiáticas.
                </p>
                <a 
                  href="/" 
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador de lifestyle</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Xiaohongshu, Douyin, Weibo...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Belleza, moda, lifestyle</span>
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
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Xiaohongshu</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌏 Contenido en chino</h3>
                <p className="text-gray-700">
                  La mayoría del contenido está en chino. Sin embargo, los tutoriales 
                  visuales de belleza y moda son fáciles de seguir sin entender el idioma.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💄 Respeta a las creadoras</h3>
                <p className="text-gray-700">
                  El contenido de Xiaohongshu representa el trabajo creativo de influencers. 
                  Usa las descargas para inspiración personal y siempre da crédito apropiado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función de favoritos de <a href="https://xiaohongshu.com" className="text-pink-600 hover:text-pink-800 font-medium">Xiaohongshu</a> para 
                  guardar posts, aunque esto requiere tener la app y registro chino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-pink-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Xiaohongshu ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Sumérgete en el mundo del lifestyle asiático auténtico. Construye tu biblioteca 
              personal de inspiración de belleza, moda, y estilo de vida directamente desde China.
            </p>
            <a 
              href="/" 
              className="bg-white text-pink-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Xiaohongshu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
