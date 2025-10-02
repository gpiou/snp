import Image from 'next/image';
import { Metadata } from 'next';
import PWAInstallButton from '../components/PWAInstallButton';

export const metadata: Metadata = {
  title: "Descargar Videos e Imágenes de Instagram Gratis - Snaptube Instagram Downloader",
  description: "Descarga videos, fotos, stories e IGTV de Instagram gratis. Guarda contenido de Instagram en alta calidad directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos instagram, instagram downloader, bajar fotos instagram, descargar stories instagram",
  openGraph: {
    title: "Descargar Videos e Imágenes de Instagram Gratis",
    description: "Descarga videos, fotos y stories de Instagram gratis con Snaptube. Guarda contenido de Instagram en alta calidad.",
    type: "website",
  },
};

export default function DescargarInstagramPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos e Imágenes de Instagram
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda posts, stories, reels e IGTV de Instagram en alta calidad. 
              Funciona con cualquier contenido público de Instagram.
            </p>
            <a 
              href="/" 
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar de Instagram Ahora
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
                Instagram está lleno de contenido increíble: fotos espectaculares, videos divertidos, 
                tutoriales útiles y momentos que no quieres olvidar. Pero la app no te deja guardar 
                nada directamente en tu galería, lo cual es súper molesto cuando encuentras algo 
                que realmente quieres conservar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/instagram-media-saver" className="text-purple-600 hover:text-purple-800 font-medium">descargador de Instagram</a> soluciona este problema de una vez por todas. 
                Puedes guardar cualquier foto, video, reel o story de Instagram directamente en tu 
                dispositivo, manteniendo la calidad original del contenido.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que quieras guardar recetas de cocina, outfits que te gustaron, memes 
                divertidos, o simplemente hacer backup de tus propias publicaciones, nuestro 
                descargador hace todo el trabajo pesado por ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Instagram?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📷</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fotos</h3>
                <p className="text-gray-700 text-sm">
                  Descarga cualquier foto de Instagram en su resolución original, perfecta para guardar o reimprimir.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos</h3>
                <p className="text-gray-700 text-sm">
                  Guarda videos de posts normales en la mejor calidad disponible, con audio incluido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reels</h3>
                <p className="text-gray-700 text-sm">
                  Descarga los reels más virales y divertidos para verlos cuando quieras, sin conexión.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stories</h3>
                <p className="text-gray-700 text-sm">
                  Guarda stories antes de que desaparezcan, incluyendo fotos y videos de 24 horas.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar contenido de Instagram?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Ve al post de Instagram que quieres descargar y toca los tres puntos para copiar el enlace.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y analiza</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente detectamos el tipo de contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu contenido en la máxima calidad disponible, listo para guardar en tu galería.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué elegir nuestro descargador de Instagram?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">📱 Funciona en cualquier dispositivo</h3>
                <p className="text-gray-700">
                  No necesitas instalar apps raras o complicadas. Funciona desde cualquier navegador 
                  web, tanto en móvil como en computadora.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🔒 Privacidad garantizada</h3>
                <p className="text-gray-700">
                  No guardamos tu información personal ni los enlaces que procesas. Todo se maneja 
                  de forma anónima y segura.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibent text-purple-900 mb-4">⚡ Velocidad increíble</h3>
                <p className="text-gray-700">
                  Procesamos el contenido en segundos, no en minutos. Nuestros servidores están 
                  optimizados para máxima velocidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🎯 Calidad original</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad exacta del contenido original. Sin compresión adicional 
                  ni pérdida de resolución.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Usos más populares</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">👗 Guardar outfits e inspiración</h3>
                <p className="text-gray-700">
                  Muchas personas usan nuestro descargador para guardar looks que les gustan, 
                  ideas de decoración, o inspiración para proyectos creativos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🍳 Recetas y tutoriales</h3>
                <p className="text-gray-700">
                  Guarda recetas de cocina, tutoriales de maquillaje, ejercicios, y cualquier 
                  contenido educativo que quieras consultar después.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💾 Backup personal</h3>
                <p className="text-gray-700">
                  Muchos usuarios descargan sus propias publicaciones como respaldo, especialmente 
                  fotos importantes o videos que no quieren perder.
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
                  Si descargas contenido de Instagram frecuentemente desde tu móvil, Snaptube 
                  puede ser una excelente opción. Es una app que te permite descargar de Instagram 
                  y muchas otras redes sociales desde una sola aplicación.
                </p>
                <PWAInstallButton className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                  Descargar Snaptube
                </PWAInstallButton>
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
                    <p className="text-sm opacity-75">Descargador multiredes</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Redes sociales:</span>
                    <span className="font-medium">Instagram, TikTok, YouTube...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tipos de contenido:</span>
                    <span className="font-medium text-green-300">Fotos, videos, stories</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Gratis siempre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Instagram</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Nuestro descargador solo puede acceder a contenido público de Instagram. 
                  Si el perfil es privado, necesitarás seguir a la cuenta primero.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⏰ Stories tienen límite de tiempo</h3>
                <p className="text-gray-700">
                  Recuerda que las stories desaparecen después de 24 horas, así que si quieres 
                  guardar alguna, hazlo antes de que expire.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función de "Guardar" de la app oficial de 
                  <a href="https://instagram.com" className="text-purple-600 hover:text-purple-800 font-medium"> Instagram</a>, aunque solo guarda en tu perfil, no en tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga contenido de Instagram ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Únete a miles de usuarios que ya guardan su contenido favorito de Instagram. 
              Es gratis, rápido y funciona con cualquier tipo de publicación.
            </p>
            <a 
              href="/" 
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
