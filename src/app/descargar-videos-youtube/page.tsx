import Image from 'next/image';
import { Metadata } from 'next';
import PWAInstallButton from '../components/PWAInstallButton';

export const metadata: Metadata = {
  title: "Descargar Videos de YouTube Gratis - Snaptube YouTube Downloader",
  description: "Descarga videos de YouTube gratis en alta calidad con Snaptube. Guarda tus videos favoritos de YouTube en MP4 y MP3 para verlos sin conexión.",
  keywords: "descargar videos youtube, youtube downloader, snaptube youtube, bajar videos youtube",
  openGraph: {
    title: "Descargar Videos de YouTube Gratis - Snaptube YouTube Downloader",
    description: "Descarga videos de YouTube gratis en alta calidad con Snaptube. Guarda tus videos favoritos para verlos sin conexión.",
    type: "website",
  },
};

export default function DescargarYouTubePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de YouTube Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              La forma más fácil y rápida de descargar videos de YouTube en alta calidad. 
              Compatible con todos los formatos y resoluciones.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos Ahora
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
                Todos sabemos lo frustrante que puede ser encontrar un video increíble en YouTube 
                y no poder guardarlo para verlo más tarde sin internet. Ya sea que hayas encontrado 
                un tutorial que necesitas consultar frecuentemente, un video musical que quieres 
                escuchar en el metro, o simplemente contenido que no quieres perder si se elimina.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Por eso hemos perfeccionado nuestro <a href="https://fsmvid.com/youtube-video-saver" className="text-red-600 hover:text-red-800 font-medium">descargador de YouTube</a> para que puedas 
                guardar cualquier video de forma rápida y sencilla. No importa si es un video de 
                10 segundos o una conferencia de 3 horas, nuestro sistema funciona perfectamente.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lo mejor de todo es que puedes elegir exactamente la calidad que necesitas, 
                desde 144p para ahorrar espacio hasta 4K para la mejor experiencia visual posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de YouTube?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video de YouTube que quieres descargar y copia la URL desde la barra de direcciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y espera unos segundos mientras procesamos el video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Elige la calidad que prefieras y descarga tu video directamente a tu dispositivo.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de YouTube?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🎥 Todas las calidades disponibles</h3>
                <p className="text-gray-700">
                  Desde 144p hasta 4K, incluyendo 720p y 1080p. Tú decides qué calidad necesitas 
                  según tu espacio disponible y uso.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🎵 Audio MP3 incluido</h3>
                <p className="text-gray-700">
                  ¿Solo necesitas el audio? Puedes descargar únicamente la pista de audio en formato 
                  MP3 de alta calidad.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">⚡ Velocidad increíble</h3>
                <p className="text-gray-700">
                  Nuestros servidores están optimizados para darte la máxima velocidad de descarga 
                  posible sin límites molestos.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🔒 100% seguro</h3>
                <p className="text-gray-700">
                  Sin malware, sin virus, sin información personal requerida. Solo pega el enlace 
                  y descarga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">¿Prefieres una app móvil?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si descargas videos de YouTube frecuentemente desde tu móvil, te recomendamos 
                  usar Snaptube. Es la aplicación más popular para descargar videos directamente 
                  desde tu teléfono Android.
                </p>
                <PWAInstallButton className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
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
                    <p className="text-sm opacity-75">Descargador móvil</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Compatibilidad:</span>
                    <span className="font-medium">YouTube, Facebook, Instagram...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Descargas:</span>
                    <span className="font-medium text-green-300">100M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Gratis</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de YouTube</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Elige la calidad adecuada</h3>
                <p className="text-gray-700">
                  Para videos que vas a ver en el móvil, 720p es perfecto. Para proyectar en TV o monitor grande, 
                  usa 1080p o 4K. Para tutoriales que solo necesitas escuchar, el audio MP3 te ahorrará mucho espacio.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ Respeta los derechos de autor</h3>
                <p className="text-gray-700">
                  Recuerda que este servicio es para uso personal. No redistribuyas contenido protegido por 
                  derechos de autor. Siempre respeta el trabajo de los creadores de contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Descarga desde el móvil</h3>
                <p className="text-gray-700">
                  Si usas Android, puedes ir directamente a <a href="https://youtube.com" className="text-red-600 hover:text-red-800 font-medium">YouTube</a> desde tu navegador móvil, 
                  copiar el enlace y usar nuestro descargador web sin necesidad de instalar apps adicionales.
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
            <h2 className="text-3xl font-bold mb-6">Comienza a descargar videos de YouTube ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Únete a millones de usuarios que ya disfrutan de sus videos favoritos sin conexión. 
              Es gratis, rápido y funciona en cualquier dispositivo.
            </p>
            <a 
              href="/" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
