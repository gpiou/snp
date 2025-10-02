import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Threads Gratis - Snaptube Threads Downloader",
  description: "Descarga videos e imágenes de Threads gratis. Guarda contenido de la nueva red social de Meta directamente a tu dispositivo.",
  keywords: "descargar videos threads, threads downloader, bajar contenido threads, threads meta",
  openGraph: {
    title: "Descargar Videos de Threads Gratis",
    description: "Descarga videos e imágenes de Threads gratis con Snaptube. Guarda contenido de Threads.",
    type: "website",
  },
};

export default function DescargarThreadsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Threads Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos e imágenes de Threads, la nueva red social de Meta. 
              Descarga contenido de la plataforma que está revolucionando las conversaciones online.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Threads
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
                Threads es la nueva apuesta de Meta para revolucionar las conversaciones online, 
                combinando lo mejor de Instagram con un enfoque en el diálogo y la comunidad. 
                Es donde las conversaciones fluyen naturalmente, donde se comparten momentos 
                auténticos, y donde nacen las nuevas tendencias de conversación digital.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-gray-800 hover:text-black font-medium">descargador de Threads</a> te permite guardar todo este contenido 
                emergente directamente en tu dispositivo. Perfecto para conservar conversaciones 
                importantes, momentos virales, o simplemente contenido que quieres preservar 
                de esta nueva plataforma que está definiendo el futuro de las redes sociales.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea contenido de influencers que están migrando a Threads, conversaciones 
                que están marcando tendencia, o simplemente momentos que no quieres que se 
                pierdan en el feed, ahora puedes tener todo guardado en tu galería personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Threads?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Conversaciones virales</h3>
                <p className="text-gray-700 text-sm">
                  Hilos de conversación que se vuelven tendencia y definen el momento cultural.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de influencers</h3>
                <p className="text-gray-700 text-sm">
                  Contenido de creadores que están construyendo su presencia en la nueva plataforma.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Momentos auténticos</h3>
                <p className="text-gray-700 text-sm">
                  Fotos y videos que capturan la espontaneidad y autenticidad de Threads.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido trending</h3>
                <p className="text-gray-700 text-sm">
                  Posts que están marcando tendencia en la nueva era de las redes sociales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Primeros momentos</h3>
                <p className="text-gray-700 text-sm">
                  Contenido histórico de los primeros días de esta nueva plataforma social.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Debates y opiniones</h3>
                <p className="text-gray-700 text-sm">
                  Discusiones importantes y opiniones que están dando forma a la conversación pública.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar contenido de Threads?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-800">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el post</h3>
                <p className="text-gray-700 text-sm">
                  Ve al post de Threads que quieres descargar y copia el enlace del contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-800">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido de Threads.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-800">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Guarda el momento</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu contenido de Threads en alta calidad, preservado para la posteridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Threads?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🆕 Plataforma emergente</h3>
                <p className="text-gray-700">
                  Sé de los primeros en preservar contenido de Threads, la nueva plataforma 
                  que está redefiniendo las conversaciones online.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💬 Preserva conversaciones</h3>
                <p className="text-gray-700">
                  Guarda hilos de conversación completos y momentos importantes que están 
                  marcando la historia de esta nueva era social.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ Tecnología adaptativa</h3>
                <p className="text-gray-700">
                  Nuestro descargador se adapta constantemente a los cambios y actualizaciones 
                  de Threads para mantener la compatibilidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔒 Privacidad Meta-compatible</h3>
                <p className="text-gray-700">
                  Respetamos las políticas de privacidad de Meta, procesando solo 
                  contenido público disponible en Threads.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan contenido de Threads?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Documentar historia digital</h3>
                <p className="text-gray-700">
                  Early adopters y investigadores digitales descargan contenido de Threads 
                  para documentar los primeros momentos de esta nueva plataforma social que está haciendo historia.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Análisis de tendencias</h3>
                <p className="text-gray-700">
                  Marketers y analistas de redes sociales guardan contenido viral de Threads 
                  para estudiar las nuevas dinámicas de engagement y comportamiento de usuarios.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Crear contenido sobre Threads</h3>
                <p className="text-gray-700">
                  Creadores de contenido descargan posts de Threads para crear videos explicativos, 
                  reacciones, y análisis sobre esta nueva plataforma en YouTube, TikTok, e Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Alternative */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">¿Eres early adopter de Threads?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si estás explorando Threads y otras nuevas plataformas sociales, Snaptube 
                  puede ayudarte a preservar contenido de múltiples redes emergentes desde 
                  una sola aplicación.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador de nuevas redes</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Threads, Instagram, TikTok...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Emergente, viral</span>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Threads</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo posts públicos</h3>
                <p className="text-gray-700">
                  Solo podemos procesar posts públicos de Threads. El contenido de cuentas 
                  privadas no puede ser accedido por razones de privacidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🆕 Plataforma en evolución</h3>
                <p className="text-gray-700">
                  Threads está en constante evolución. Nuestro descargador se actualiza 
                  regularmente para mantener compatibilidad con las nuevas funciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🧵 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar las funciones nativas de <a href="https://threads.net" className="text-gray-800 hover:text-black font-medium">Threads</a> para 
                  guardar posts, aunque esto no los descarga a tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga contenido de Threads ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Sé parte de la historia digital preservando contenido de la nueva era de las redes sociales. 
              Guarda los momentos que están definiendo el futuro de las conversaciones online.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Threads
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
