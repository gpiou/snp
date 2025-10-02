import Image from 'next/image';
import { Metadata } from 'next';
import PWAInstallButton from '../components/PWAInstallButton';

export const metadata: Metadata = {
  title: "Descargar Videos de TikTok Sin Marca de Agua - Snaptube TikTok Downloader",
  description: "Descarga videos de TikTok sin marca de agua gratis. Guarda tus TikToks favoritos en alta calidad directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos tiktok, tiktok downloader, tiktok sin marca de agua, bajar videos tiktok",
  openGraph: {
    title: "Descargar Videos de TikTok Sin Marca de Agua",
    description: "Descarga videos de TikTok sin marca de agua gratis con Snaptube. Guarda tus TikToks favoritos en alta calidad.",
    type: "website",
  },
};

export default function DescargarTikTokPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de TikTok Sin Marca de Agua
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda tus TikToks favoritos sin la marca de agua molesta. 
              Descarga en alta calidad y comparte como quieras.
            </p>
            <a 
              href="/" 
              className="bg-white text-pink-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar TikToks Ahora
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
                Seguramente te ha pasado: encuentras un TikTok súper gracioso, una receta increíble, 
                o un baile que quieres aprender, pero cuando intentas guardarlo, aparece esa marca 
                de agua gigante que arruina todo el video. Es súper frustrante, especialmente 
                cuando quieres compartir el contenido en otras redes sociales.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Por eso desarrollamos nuestro <a href="https://fsmvid.com/tiktok-video-saver" className="text-pink-600 hover:text-pink-800 font-medium">descargador de TikTok</a> que elimina automáticamente 
                la marca de agua. Ahora puedes guardar cualquier TikTok en su calidad original, 
                sin esas marcas molestas que aparecen en la pantalla.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Funciona con cualquier video público de TikTok, sin importar si tiene música, 
                efectos especiales, o filtros. El resultado siempre es un video limpio y 
                profesional que puedes usar como quieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar TikToks sin marca de agua?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra tu TikTok</h3>
                <p className="text-gray-700 text-sm">
                  Ve al TikTok que quieres descargar y toca el botón "Compartir" para copiar el enlace.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador. Automáticamente eliminamos la marca de agua.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga limpio</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video sin marca de agua en la misma calidad que el original.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué nuestro descargador es el mejor?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">✨ Sin marca de agua garantizado</h3>
                <p className="text-gray-700">
                  Nuestro algoritmo avanzado elimina completamente la marca de agua de TikTok 
                  sin afectar la calidad del video original.
                </p>
              </div>

              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">🎵 Audio original incluido</h3>
                <p className="text-gray-700">
                  Mantenemos la música y efectos de sonido originales, incluyendo las canciones 
                  más populares de TikTok.
                </p>
              </div>

              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">📱 Optimizado para móviles</h3>
                <p className="text-gray-700">
                  Funciona perfectamente en cualquier dispositivo móvil, sin necesidad de apps 
                  adicionales complicadas.
                </p>
              </div>

              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">⚡ Procesamiento instantáneo</h3>
                <p className="text-gray-700">
                  No esperes minutos eternos. Nuestros servidores procesan los TikToks en 
                  segundos, no en minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Uses */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué usan TikTok downloader?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Crear compilaciones</h3>
                <p className="text-gray-700 text-sm">
                  Guarda tus TikToks favoritos para crear compilaciones personalizadas y 
                  compartirlas en otras plataformas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💾</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Backup personal</h3>
                <p className="text-gray-700 text-sm">
                  Respalda tus propios TikToks por si acaso se eliminan accidentalmente 
                  o pierdes tu cuenta.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido educativo</h3>
                <p className="text-gray-700 text-sm">
                  Guarda tutoriales, recetas y tips que quieres consultar más tarde 
                  sin conexión a internet.
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
                <h2 className="text-3xl font-bold mb-6">¿Descargas TikToks seguido?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si eres de los que descarga videos de TikTok constantemente, considera usar 
                  Snaptube en tu móvil. Es una app especializada que te permite descargar de 
                  TikTok y muchas otras plataformas desde una sola aplicación.
                </p>
                <PWAInstallButton className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
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
                    <p className="text-sm opacity-75">Descargador todo en uno</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">TikTok, YouTube, Instagram...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marca de agua:</span>
                    <span className="font-medium text-green-300">Removida automáticamente</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Costo:</span>
                    <span className="font-medium text-green-300">Completamente gratis</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de TikTok</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔐 Solo videos públicos</h3>
                <p className="text-gray-700">
                  Nuestro descargador solo funciona con TikToks públicos. Si el video está privado 
                  o el perfil es privado, no podremos acceder al contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta al creador</h3>
                <p className="text-gray-700">
                  Aunque eliminemos la marca de agua, siempre da crédito al creador original cuando 
                  compartas el contenido. Es importante respetar su trabajo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Alternativa oficial</h3>
                <p className="text-gray-700">
                  Recuerda que también puedes usar la función "Guardar video" de la app oficial de 
                  <a href="https://tiktok.com" className="text-pink-600 hover:text-pink-800 font-medium"> TikTok</a>, aunque incluirá la marca de agua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga TikToks sin marca de agua ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Únete a los creadores de contenido que ya usan nuestro descargador para obtener 
              videos limpios y profesionales. Es gratis y funciona al instante.
            </p>
            <a 
              href="/" 
              className="bg-white text-pink-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
