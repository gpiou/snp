import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Imágenes de Pinterest Gratis - Snaptube Pinterest Downloader",
  description: "Descarga imágenes de Pinterest en alta calidad gratis. Guarda fotos, ideas y pins de Pinterest directamente a tu dispositivo con Snaptube.",
  keywords: "descargar imagenes pinterest, pinterest downloader, bajar fotos pinterest, descargar pins pinterest",
  openGraph: {
    title: "Descargar Imágenes de Pinterest Gratis",
    description: "Descarga imágenes de Pinterest en alta calidad gratis con Snaptube. Guarda fotos e ideas de Pinterest.",
    type: "website",
  },
};

export default function DescargarPinterestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Imágenes de Pinterest Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda fotos, ideas y pins de Pinterest en calidad completa. 
              Descarga inspiración directamente a tu galería personal.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar de Pinterest Ahora
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
                Pinterest es el paraíso de la inspiración visual: recetas increíbles, ideas de 
                decoración, outfits perfectos, tutoriales de manualidades y millones de imágenes 
                que despiertan tu creatividad. Pero cuando encuentras esa imagen perfecta, 
                Pinterest solo te deja guardarla en tus tableros, no en tu dispositivo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/pinterest-media-saver" className="text-red-600 hover:text-red-800 font-medium">descargador de Pinterest</a> cambia eso completamente. Ahora puedes 
                descargar cualquier imagen de Pinterest en su calidad original, perfecta para 
                imprimir, usar como fondo de pantalla, o tener disponible sin conexión a internet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que estés planeando una boda, redecorando tu casa, buscando recetas 
                nuevas, o simplemente coleccionando imágenes hermosas, ahora puedes tener 
                todo guardado directamente en tu galería personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Pinterest?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideas de decoración</h3>
                <p className="text-gray-700 text-sm">
                  Fotos de interiores, muebles, colores y estilos para inspirar tu hogar perfecto.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Moda y outfits</h3>
                <p className="text-gray-700 text-sm">
                  Looks completos, combinaciones de ropa y tendencias de moda para inspirarte.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🍳</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recetas de cocina</h3>
                <p className="text-gray-700 text-sm">
                  Fotos de platos deliciosos, recetas paso a paso y presentaciones gastronómicas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Arte y manualidades</h3>
                <p className="text-gray-700 text-sm">
                  Proyectos DIY, tutoriales de arte y ideas creativas para hacer con tus manos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideas para bodas</h3>
                <p className="text-gray-700 text-sm">
                  Decoraciones, vestidos, centros de mesa y todo lo necesario para tu boda soñada.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌸</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fondos de pantalla</h3>
                <p className="text-gray-700 text-sm">
                  Imágenes hermosas para personalizar tu teléfono, tablet o computadora.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar imágenes de Pinterest?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra tu pin</h3>
                <p className="text-gray-700 text-sm">
                  Ve a la imagen de Pinterest que quieres descargar y copia el enlace del pin.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente obtenemos la imagen original.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu imagen en la máxima resolución disponible, lista para usar como quieras.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Pinterest?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🖼️ Calidad original completa</h3>
                <p className="text-gray-700">
                  Descargamos la imagen en su resolución original, perfecta para imprimir 
                  en alta calidad o usar como fondo de pantalla HD.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">📱 Sin apps complicadas</h3>
                <p className="text-gray-700">
                  Funciona directamente desde tu navegador web, sin necesidad de instalar 
                  aplicaciones adicionales o extensiones raras.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">⚡ Descarga instantánea</h3>
                <p className="text-gray-700">
                  Procesamos las imágenes de Pinterest en segundos. No hay esperas largas 
                  ni procesos complicados que seguir.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🔒 Completamente seguro</h3>
                <p className="text-gray-700">
                  No guardamos tus búsquedas ni las imágenes que descargas. Todo el proceso 
                  es anónimo y respeta tu privacidad.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan imágenes de Pinterest?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏡 Proyectos de decoración</h3>
                <p className="text-gray-700">
                  Muchas personas crean carpetas locales con ideas de decoración para mostrar 
                  a decoradores, arquitectos, o simplemente para tener inspiración offline.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Fondos de pantalla personalizados</h3>
                <p className="text-gray-700">
                  Pinterest tiene las imágenes más hermosas para fondos de pantalla. Descargarlas 
                  permite tener una colección personal sin depender de la conexión a internet.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Referencias para artistas</h3>
                <p className="text-gray-700">
                  Artistas y diseñadores descargan imágenes como referencias visuales para sus 
                  proyectos, creando bibliotecas de inspiración organizadas por temas.
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
                  Si descargas contenido de Pinterest frecuentemente desde tu móvil, Snaptube 
                  puede ser una excelente opción. Funciona con Pinterest y muchas otras 
                  plataformas desde una sola aplicación.
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
                    <p className="text-sm opacity-75">Descargador visual</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Pinterest, Instagram, TikTok...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Imágenes, videos, GIFs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Gratis para siempre</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Pinterest</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Busca la fuente original</h3>
                <p className="text-gray-700">
                  Muchas imágenes en Pinterest son repins. Si necesitas la máxima calidad, 
                  intenta encontrar el pin original que suele tener mejor resolución.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta los derechos de autor</h3>
                <p className="text-gray-700">
                  Las imágenes de Pinterest tienen derechos de autor. Úsalas solo para 
                  inspiración personal, no para uso comercial sin permiso del autor original.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📌 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar los tableros de <a href="https://pinterest.com" className="text-red-600 hover:text-red-800 font-medium">Pinterest</a> para organizar tus pins, 
                  aunque esto no descarga las imágenes a tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga imágenes de Pinterest ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Convierte tu inspiración de Pinterest en una colección personal. Descarga 
              imágenes en calidad original para tus proyectos, decoración y creatividad.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Pinterest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
