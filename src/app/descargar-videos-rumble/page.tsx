import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Rumble Gratis - Snaptube Rumble Downloader",
  description: "Descarga videos de Rumble gratis en alta calidad. Guarda contenido alternativo y libre de censura de Rumble directamente a tu dispositivo.",
  keywords: "descargar videos rumble, rumble downloader, bajar videos rumble, rumble video download",
  openGraph: {
    title: "Descargar Videos de Rumble Gratis",
    description: "Descarga videos de Rumble gratis en alta calidad con Snaptube. Guarda contenido alternativo de Rumble.",
    type: "website",
  },
};

export default function DescargarRumblePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Rumble Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda contenido alternativo y libre de censura de Rumble. 
              Descarga videos únicos que no encuentras en otras plataformas.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Rumble
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
                Rumble se ha posicionado como la plataforma alternativa para creadores que buscan 
                libertad de expresión sin las restricciones de las grandes plataformas. Es donde 
                encuentras contenido que ha sido censurado en otros lugares, perspectivas alternativas, 
                y voces independientes que no siguen la narrativa mainstream.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-emerald-600 hover:text-emerald-800 font-medium">descargador de Rumble</a> te permite guardar todo este contenido 
                alternativo directamente en tu dispositivo. Perfecto para conservar información 
                valiosa, documentales independientes, o simplemente contenido que podría no estar 
                disponible en otras plataformas por mucho tiempo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea contenido político alternativo, documentales independientes, o perspectivas 
                que desafían el status quo, ahora puedes tener acceso offline a toda esta 
                información sin depender de la disponibilidad en la plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Rumble?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🗣️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido alternativo</h3>
                <p className="text-gray-700 text-sm">
                  Perspectivas y opiniones que no encuentras en las plataformas mainstream tradicionales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentales independientes</h3>
                <p className="text-gray-700 text-sm">
                  Documentales y reportajes investigativos producidos de forma independiente.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎙️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Podcasts y entrevistas</h3>
                <p className="text-gray-700 text-sm">
                  Conversaciones largas y entrevistas profundas sin las restricciones de tiempo típicas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Noticias alternativas</h3>
                <p className="text-gray-700 text-sm">
                  Reportajes y análisis de noticias desde perspectivas no convencionales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido educativo</h3>
                <p className="text-gray-700 text-sm">
                  Material educativo y tutoriales que abordan temas desde ángulos únicos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entretenimiento libre</h3>
                <p className="text-gray-700 text-sm">
                  Contenido de entretenimiento sin las restricciones de contenido de otras plataformas.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Rumble?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video de Rumble que quieres descargar y copia la URL del video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga libre</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video en alta calidad, libre de restricciones y listo para ver offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Rumble?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">🔓 Acceso sin restricciones</h3>
                <p className="text-gray-700">
                  Descarga contenido que podría no estar disponible en otras plataformas 
                  debido a políticas de contenido más restrictivas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">📚 Preserva información valiosa</h3>
                <p className="text-gray-700">
                  Guarda documentales, reportajes y contenido educativo que podría 
                  desaparecer o ser censurado en el futuro.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">⚡ Procesamiento eficiente</h3>
                <p className="text-gray-700">
                  Nuestros servidores están optimizados para manejar el contenido de 
                  Rumble de manera rápida y eficiente.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">🔒 Privacidad garantizada</h3>
                <p className="text-gray-700">
                  No rastreamos qué contenido descargas ni guardamos información 
                  sobre tus preferencias de contenido.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Rumble?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Archivar información alternativa</h3>
                <p className="text-gray-700">
                  Investigadores y periodistas independientes descargan contenido de Rumble 
                  para crear archivos de información que podría no estar disponible en fuentes mainstream.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Material educativo alternativo</h3>
                <p className="text-gray-700">
                  Educadores y estudiantes descargan documentales y contenido educativo 
                  que presenta perspectivas diferentes a las encontradas en fuentes académicas tradicionales.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💾 Respaldo de contenido valioso</h3>
                <p className="text-gray-700">
                  Usuarios preocupados por la censura descargan contenido importante 
                  como respaldo en caso de que sea eliminado de las plataformas digitales.
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
                <h2 className="text-3xl font-bold mb-6">¿Valoras la libertad de información?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si buscas contenido alternativo y valoras el acceso a perspectivas diversas, 
                  Snaptube puede ayudarte a crear tu biblioteca personal de contenido libre 
                  de censura desde múltiples plataformas.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador libre</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Rumble, BitChute, Odysee...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Alternativo, sin censura</span>
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
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Rumble</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar videos públicos de Rumble. El contenido privado 
                  o con restricciones de acceso no puede ser descargado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Uso responsable</h3>
                <p className="text-gray-700">
                  Usa las descargas para investigación personal y educativa. Respeta 
                  los derechos de los creadores de contenido independientes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes crear listas de reproducción en <a href="https://rumble.com" className="text-emerald-600 hover:text-emerald-800 font-medium">Rumble</a> para 
                  organizar contenido, aunque esto requiere conexión para verlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Rumble ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Construye tu biblioteca personal de contenido alternativo y libre de censura. 
              Accede a perspectivas diversas y información valiosa sin restricciones.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Rumble
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
