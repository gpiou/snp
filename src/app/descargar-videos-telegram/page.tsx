import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Telegram Gratis - Snaptube Telegram Downloader",
  description: "Descarga videos y archivos multimedia de Telegram gratis. Guarda contenido de canales y chats de Telegram directamente a tu dispositivo.",
  keywords: "descargar videos telegram, telegram downloader, bajar archivos telegram",
  openGraph: {
    title: "Descargar Videos de Telegram Gratis",
    description: "Descarga videos y archivos de Telegram gratis con Snaptube.",
    type: "website",
  },
};

export default function DescargarTelegramPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Telegram Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos y archivos multimedia de Telegram. 
              Descarga contenido de canales y chats directamente a tu dispositivo.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar de Telegram Ahora
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
                Telegram se ha convertido en una plataforma donde se comparte contenido único: 
                desde canales informativos con videos exclusivos hasta grupos donde circulan 
                archivos multimedia que no encuentras en otras redes sociales. La app permite 
                enviar archivos grandes y videos de alta calidad que otras plataformas comprimen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-blue-600 hover:text-blue-800 font-medium">descargador de Telegram</a> te permite guardar todo este contenido 
                directamente en tu dispositivo. Perfecto para cuando encuentras videos 
                informativos, documentales, o contenido multimedia que quieres conservar 
                fuera de la aplicación de Telegram.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea contenido de canales de noticias, grupos educativos, o simplemente 
                videos divertidos que se comparten en tus chats, ahora puedes tener todo 
                organizado en tu galería personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Telegram?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de canales</h3>
                <p className="text-gray-700 text-sm">
                  Contenido de canales informativos, educativos y de entretenimiento en Telegram.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de chats</h3>
                <p className="text-gray-700 text-sm">
                  Videos compartidos en grupos y chats privados de Telegram.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Archivos de audio</h3>
                <p className="text-gray-700 text-sm">
                  Música, podcasts y archivos de audio compartidos en Telegram.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentos multimedia</h3>
                <p className="text-gray-700 text-sm">
                  Archivos multimedia enviados como documentos en alta calidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">GIFs y stickers</h3>
                <p className="text-gray-700 text-sm">
                  GIFs animados y stickers únicos compartidos en conversaciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fotos y imágenes</h3>
                <p className="text-gray-700 text-sm">
                  Imágenes compartidas en canales y grupos de Telegram.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar contenido de Telegram?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Copia el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Ve al mensaje de Telegram con el contenido que quieres descargar y copia el enlace.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el archivo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu archivo en la calidad original, manteniendo la calidad de Telegram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Telegram?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📱 Calidad original</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad original de los archivos de Telegram, sin compresión 
                  adicional ni pérdida de resolución.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">⚡ Procesamiento rápido</h3>
                <p className="text-gray-700">
                  Procesamos archivos de Telegram en segundos, incluso archivos grandes 
                  que la plataforma permite compartir.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🔒 Privacidad respetada</h3>
                <p className="text-gray-700">
                  No guardamos ni accedemos al contenido de tus chats privados. 
                  Solo procesamos enlaces públicos compartidos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📂 Múltiples formatos</h3>
                <p className="text-gray-700">
                  Soportamos todos los tipos de archivos multimedia que Telegram permite: 
                  videos, audio, imágenes y documentos.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan contenido de Telegram?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Archivar contenido educativo</h3>
                <p className="text-gray-700">
                  Muchos usuarios descargan videos educativos, documentales y material 
                  informativo de canales de Telegram para crear su biblioteca personal de aprendizaje.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💾 Respaldo de archivos importantes</h3>
                <p className="text-gray-700">
                  Usuarios descargan archivos importantes compartidos en grupos de trabajo 
                  o estudio para tener copias locales y no depender de la disponibilidad en Telegram.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎵 Coleccionar música exclusiva</h3>
                <p className="text-gray-700">
                  Muchos canales de Telegram comparten música difícil de encontrar. Los usuarios 
                  descargan estos archivos para crear colecciones personales únicas.
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
                <h2 className="text-3xl font-bold mb-6">¿Usas Telegram frecuentemente?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si eres usuario activo de Telegram y constantemente encuentras contenido 
                  que quieres guardar, Snaptube puede ser la solución perfecta. Funciona 
                  con Telegram y muchas otras plataformas de mensajería.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador multimedia</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Telegram, WhatsApp, Discord...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Archivos:</span>
                    <span className="font-medium text-green-300">Videos, audio, documentos</span>
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
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Telegram</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar enlaces públicos de Telegram. El contenido de chats 
                  privados no puede ser accedido por razones de privacidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Respeta la privacidad</h3>
                <p className="text-gray-700">
                  Usa las descargas responsablemente. No redistribuyas contenido privado 
                  o personal sin el consentimiento del autor original.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💬 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Guardar en mensajes guardados" de 
                  <a href="https://telegram.org" className="text-blue-600 hover:text-blue-800 font-medium"> Telegram</a> para guardar contenido en tu cuenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga contenido de Telegram ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Guarda el mejor contenido de Telegram en tu dispositivo. Crea tu biblioteca 
              personal de videos, audio y archivos multimedia únicos.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
