import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Weibo Gratis - Snaptube Weibo Downloader",
  description: "Descarga videos de Weibo gratis en alta calidad. Guarda contenido de la red social china Weibo directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos weibo, weibo downloader, bajar videos weibo, weibo china",
  openGraph: {
    title: "Descargar Videos de Weibo Gratis",
    description: "Descarga videos de Weibo gratis en alta calidad con Snaptube. Guarda contenido de Weibo.",
    type: "website",
  },
};

export default function DescargarWeiboPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Weibo Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos de Weibo, la red social más grande de China. 
              Descarga contenido único de la plataforma social china directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Weibo
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
                Weibo es el Twitter de China, pero mucho más: una plataforma social masiva donde 
                más de 500 millones de usuarios chinos comparten su vida diaria, noticias, 
                entretenimiento, y cultura. Es la ventana más auténtica a la sociedad china 
                contemporánea, donde celebridades, políticos, y ciudadanos comunes interactúan 
                en tiempo real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/weibo-video-saver" className="text-red-600 hover:text-red-800 font-medium">descargador de Weibo</a> te permite acceder y guardar todo este 
                contenido único directamente en tu dispositivo. Perfecto para explorar la 
                cultura china, seguir tendencias que nacen en China, o simplemente tener 
                acceso a una perspectiva diferente del mundo a través de los ojos chinos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que te interese la cultura pop china, noticias desde una perspectiva 
                diferente, o simplemente quieras entender mejor la sociedad china moderna, 
                Weibo ofrece contenido auténtico y sin filtros occidentales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Weibo?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Celebridades chinas</h3>
                <p className="text-gray-700 text-sm">
                  Contenido exclusivo de estrellas del K-pop, actores, y celebridades chinas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Noticias desde China</h3>
                <p className="text-gray-700 text-sm">
                  Perspectivas únicas de eventos mundiales desde el punto de vista chino.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultura tradicional</h3>
                <p className="text-gray-700 text-sm">
                  Festivales, tradiciones, y expresiones culturales auténticas de China.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Vida urbana china</h3>
                <p className="text-gray-700 text-sm">
                  Cómo viven los chinos en ciudades modernas como Shanghai, Beijing, y Shenzhen.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Música y entretenimiento</h3>
                <p className="text-gray-700 text-sm">
                  C-pop, shows de variedades, y entretenimiento que define la cultura china actual.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovación tecnológica</h3>
                <p className="text-gray-700 text-sm">
                  Avances tecnológicos, startups, y la revolución digital china en tiempo real.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Weibo?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el post</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video o post de Weibo que quieres descargar y copia el enlace del contenido.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga cultural</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu contenido en alta calidad, preservando la auténtica perspectiva china.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Weibo?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🌏 Perspectiva única</h3>
                <p className="text-gray-700">
                  Accede a contenido que no está disponible en redes sociales occidentales, 
                  ofreciendo una perspectiva auténtica de la sociedad china.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🏮 Cultura auténtica</h3>
                <p className="text-gray-700">
                  Descubre la verdadera cultura china contemporánea, sin filtros 
                  occidentales ni interpretaciones de terceros.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">📱 Acceso sin restricciones</h3>
                <p className="text-gray-700">
                  Weibo puede no estar disponible en todos los países. Nuestro 
                  descargador te permite acceder al contenido sin limitaciones geográficas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🚀 Tendencias emergentes</h3>
                <p className="text-gray-700">
                  Muchas tendencias globales nacen en China. Mantente al día con 
                  lo que está sucediendo en el mercado más grande del mundo.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Weibo?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Investigación cultural</h3>
                <p className="text-gray-700">
                  Académicos y estudiosos descargan contenido de Weibo para investigar 
                  la sociedad china contemporánea, tendencias sociales, y cambios culturales en tiempo real.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Análisis de mercado</h3>
                <p className="text-gray-700">
                  Empresarios y analistas de mercado estudian contenido de Weibo para entender 
                  el comportamiento del consumidor chino y identificar oportunidades de negocio.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌏 Entusiastas de la cultura china</h3>
                <p className="text-gray-700">
                  Personas fascinadas por China descargan contenido para aprender el idioma, 
                  entender la cultura, y mantenerse conectados con la sociedad china moderna.
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
                <h2 className="text-3xl font-bold mb-6">¿Te interesa la cultura china?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si quieres entender mejor China y su cultura, y constantemente encuentras 
                  contenido fascinante en Weibo, Snaptube puede ayudarte a organizar 
                  todo tu contenido cultural desde múltiples plataformas chinas.
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
                    <p className="text-sm opacity-75">Descargador cultural chino</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Weibo, Douyin, Xiaohongshu...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Cultura china auténtica</span>
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
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Weibo</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌏 Contenido en chino</h3>
                <p className="text-gray-700">
                  La mayoría del contenido de Weibo está en chino simplificado. 
                  Considera usar traductores para entender mejor el contexto.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏮 Respeta la cultura</h3>
                <p className="text-gray-700">
                  El contenido de Weibo refleja la cultura y valores chinos. 
                  Úsalo con respeto y considera el contexto cultural apropiado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes acceder a <a href="https://weibo.com" className="text-red-600 hover:text-red-800 font-medium">Weibo</a> directamente, 
                  aunque puede requerir registro y verificación con número chino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Weibo ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Explora la auténtica cultura china y conecta con la sociedad más grande del mundo. 
              Construye tu biblioteca personal de contenido cultural único de Weibo.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Weibo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
