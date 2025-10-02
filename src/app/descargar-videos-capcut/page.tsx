import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de CapCut Gratis - Snaptube CapCut Downloader",
  description: "Descarga videos de CapCut gratis en alta calidad. Guarda ediciones y videos de CapCut directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos capcut, capcut downloader, bajar videos capcut, capcut video editor",
  openGraph: {
    title: "Descargar Videos de CapCut Gratis",
    description: "Descarga videos de CapCut gratis en alta calidad con Snaptube. Guarda ediciones de CapCut.",
    type: "website",
  },
};

export default function DescargarCapCutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de CapCut Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos editados con CapCut en alta calidad. 
              Descarga ediciones profesionales y plantillas de CapCut directamente a tu dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de CapCut
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
                CapCut se ha convertido en la aplicación de edición de video más popular del mundo, 
                especialmente entre creadores de TikTok e Instagram. Con sus plantillas profesionales, 
                efectos increíbles, y herramientas de edición avanzadas, CapCut permite crear videos 
                que parecen hechos por profesionales, pero desde tu móvil.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/capcut-video-saver" className="text-gray-600 hover:text-gray-800 font-medium">descargador de CapCut</a> te permite guardar todos estos videos 
                editados directamente en tu dispositivo. Perfecto para conservar tus creaciones, 
                descargar plantillas que te gustan, o simplemente tener acceso offline a videos 
                editados profesionalmente que encuentras en CapCut.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que hayas creado un video increíble con efectos especiales, encontrado 
                una plantilla perfecta, o simplemente quieras guardar ediciones que te inspiran, 
                ahora puedes tener toda esta creatividad disponible sin conexión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de CapCut?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos editados profesionales</h3>
                <p className="text-gray-700 text-sm">
                  Ediciones completas con efectos, transiciones y música sincronizada perfectamente.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Plantillas virales</h3>
                <p className="text-gray-700 text-sm">
                  Templates populares que se usan para crear contenido viral en TikTok e Instagram.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Efectos especiales</h3>
                <p className="text-gray-700 text-sm">
                  Videos con efectos avanzados, filtros cinematográficos y transiciones suaves.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sincronización musical</h3>
                <p className="text-gray-700 text-sm">
                  Ediciones perfectamente sincronizadas con música trending y efectos de audio.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ediciones creativas</h3>
                <p className="text-gray-700 text-sm">
                  Contenido artístico con color grading, efectos de texto y animaciones únicas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido trending</h3>
                <p className="text-gray-700 text-sm">
                  Videos que siguen las últimas tendencias de edición y efectos populares.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de CapCut?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el video</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video de CapCut que quieres descargar y copia el enlace del contenido editado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos la edición profesional.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga profesional</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video editado en calidad HD, preservando todos los efectos y ediciones.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de CapCut?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎬 Calidad profesional preservada</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad HD de las ediciones de CapCut, preservando 
                  todos los efectos, transiciones y sincronización musical.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Optimizado para móviles</h3>
                <p className="text-gray-700">
                  Perfecto para descargar desde móviles, donde la mayoría de usuarios 
                  crean y consumen contenido editado con CapCut.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✨ Efectos intactos</h3>
                <p className="text-gray-700">
                  Todos los efectos especiales, filtros y animaciones se mantienen 
                  exactamente como fueron creados en CapCut.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Audio sincronizado</h3>
                <p className="text-gray-700">
                  La sincronización perfecta entre video y audio se preserva, 
                  manteniendo la calidad profesional de la edición.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de CapCut?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Creadores de contenido</h3>
                <p className="text-gray-700">
                  Influencers y creadores descargan sus ediciones de CapCut para tener respaldos 
                  de alta calidad, reutilizar contenido en diferentes plataformas, y crear portfolios de su trabajo.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Usuarios de redes sociales</h3>
                <p className="text-gray-700">
                  Personas que crean contenido personal descargan sus videos editados para compartir 
                  en múltiples plataformas o guardar recuerdos especiales con edición profesional.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Estudiantes de edición</h3>
                <p className="text-gray-700">
                  Estudiantes y aspirantes a editores descargan videos bien editados de CapCut 
                  para estudiar técnicas, analizar efectos, y aprender de ediciones exitosas.
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
                <h2 className="text-3xl font-bold mb-6">¿Editas videos frecuentemente?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si usas CapCut regularmente para crear contenido y quieres tener todas 
                  tus ediciones organizadas, Snaptube puede ayudarte a gestionar videos 
                  de múltiples plataformas de edición desde una sola aplicación.
                </p>
                <a 
                  href="/" 
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador de ediciones</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">CapCut, TikTok, Instagram...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calidad:</span>
                    <span className="font-medium text-green-300">HD con efectos</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de CapCut</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Calidad de exportación</h3>
                <p className="text-gray-700">
                  Para mejores resultados, asegúrate de que el video de CapCut esté 
                  exportado en la máxima calidad antes de descargarlo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta la creatividad</h3>
                <p className="text-gray-700">
                  Los videos de CapCut representan trabajo creativo. Usa las descargas 
                  para inspiración personal y siempre da crédito al creador original.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes exportar directamente desde <a href="https://capcut.com" className="text-gray-600 hover:text-gray-800 font-medium">CapCut</a> 
                  a tu galería, aunque esto requiere tener la app instalada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-black to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de CapCut ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Preserva tus ediciones profesionales y descubre nuevas técnicas de edición. 
              Construye tu biblioteca personal de contenido editado con calidad cinematográfica.
            </p>
            <a 
              href="/" 
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de CapCut
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
