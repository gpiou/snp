import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Vimeo Gratis - Snaptube Vimeo Downloader",
  description: "Descarga videos de Vimeo gratis en alta calidad. Guarda videos profesionales de Vimeo directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos vimeo, vimeo downloader, bajar videos vimeo, vimeo video download",
  openGraph: {
    title: "Descargar Videos de Vimeo Gratis",
    description: "Descarga videos de Vimeo gratis en alta calidad con Snaptube. Guarda contenido profesional de Vimeo.",
    type: "website",
  },
};

export default function DescargarVimeoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Vimeo Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos profesionales de Vimeo en alta calidad. 
              Descarga contenido creativo y documentales directamente a tu dispositivo.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Vimeo
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
                Vimeo es conocido por alojar contenido de alta calidad: documentales profesionales, 
                cortometrajes artísticos, videos corporativos y contenido creativo que no encuentras 
                en otras plataformas. La diferencia es que Vimeo se enfoca en la calidad sobre 
                la cantidad, lo que hace que cada video sea especial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-teal-600 hover:text-teal-800 font-medium">descargador de Vimeo</a> te permite guardar estos videos únicos directamente 
                en tu dispositivo, manteniendo la calidad profesional que caracteriza a la plataforma. 
                Perfecto para cuando encuentras contenido educativo, artístico o profesional que 
                quieres conservar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que necesites descargar un tutorial profesional, un cortometraje inspirador, 
                o documentación de trabajo, nuestro descargador hace que sea fácil tener acceso 
                offline a todo ese contenido valioso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué videos de Vimeo puedes descargar?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cortometrajes</h3>
                <p className="text-gray-700 text-sm">
                  Películas cortas independientes, animaciones y contenido artístico de alta calidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentales</h3>
                <p className="text-gray-700 text-sm">
                  Documentales profesionales, reportajes investigativos y contenido educativo profundo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos corporativos</h3>
                <p className="text-gray-700 text-sm">
                  Presentaciones empresariales, capacitaciones y contenido profesional de negocios.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Arte y creatividad</h3>
                <p className="text-gray-700 text-sm">
                  Videos artísticos, portfolios de creativos y contenido experimental único.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido educativo</h3>
                <p className="text-gray-700 text-sm">
                  Cursos profesionales, tutoriales especializados y material académico de calidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos musicales</h3>
                <p className="text-gray-700 text-sm">
                  Videoclips independientes, conciertos y performances musicales exclusivos.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Vimeo?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video de Vimeo que quieres descargar y copia la URL desde la barra de direcciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el video de Vimeo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga en HD</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video en la máxima calidad disponible, manteniendo la calidad profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Vimeo?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">🎯 Calidad profesional</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad HD original de Vimeo, perfecta para contenido profesional 
                  que necesitas conservar en su máxima resolución.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">⚡ Procesamiento rápido</h3>
                <p className="text-gray-700">
                  Nuestros servidores están optimizados para manejar los archivos de alta calidad 
                  de Vimeo sin demoras ni timeouts.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">🔒 Sin registro necesario</h3>
                <p className="text-gray-700">
                  No necesitas crear cuentas adicionales ni proporcionar credenciales de Vimeo. 
                  Solo pega el enlace y descarga.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">📱 Compatible universal</h3>
                <p className="text-gray-700">
                  Funciona en cualquier dispositivo y navegador, perfecto para profesionales 
                  que trabajan desde diferentes plataformas.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Vimeo?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Uso educativo y profesional</h3>
                <p className="text-gray-700">
                  Profesores, estudiantes y trabajadores descargan contenido educativo de Vimeo 
                  para usar en presentaciones, clases, o como material de referencia offline.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-100 to-teal-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Archivo personal de arte</h3>
                <p className="text-gray-700">
                  Artistas y creativos crean bibliotecas personales de cortometrajes, documentales 
                  y contenido artístico que les sirve de inspiración para sus proyectos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Respaldo corporativo</h3>
                <p className="text-gray-700">
                  Empresas descargan sus propios videos corporativos, capacitaciones y 
                  presentaciones alojadas en Vimeo como respaldo local.
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
                <h2 className="text-3xl font-bold mb-6">¿Necesitas una app móvil?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si trabajas frecuentemente con contenido de Vimeo desde tu móvil, Snaptube 
                  puede ser la solución perfecta. Funciona con Vimeo y muchas otras plataformas 
                  profesionales desde una sola aplicación.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador profesional</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Vimeo, YouTube, Dailymotion...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calidad:</span>
                    <span className="font-medium text-green-300">HD profesional</span>
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
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Vimeo</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo videos públicos</h3>
                <p className="text-gray-700">
                  Nuestro descargador solo funciona con videos públicos de Vimeo. Los videos 
                  privados o con contraseña no pueden ser procesados.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta los derechos profesionales</h3>
                <p className="text-gray-700">
                  Vimeo aloja mucho contenido profesional protegido. Usa las descargas solo 
                  para uso personal o educativo, respetando los derechos del creador.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Ver más tarde" de <a href="https://vimeo.com" className="text-teal-600 hover:text-teal-800 font-medium">Vimeo</a> para guardar 
                  videos en tu cuenta, aunque esto requiere conexión para verlos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Vimeo ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Guarda contenido profesional y artístico de Vimeo en tu dispositivo. 
              Perfecto para profesionales, educadores y amantes del contenido de calidad.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Vimeo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
