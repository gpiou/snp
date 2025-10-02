import Image from 'next/image';
import { Metadata } from 'next';
import PWAInstallButton from '../components/PWAInstallButton';

export const metadata: Metadata = {
  title: "Descargar Videos de Facebook Gratis - Snaptube Facebook Downloader",
  description: "Descarga videos de Facebook gratis en alta calidad. Guarda videos de Facebook, Facebook Watch y páginas públicas directamente a tu dispositivo.",
  keywords: "descargar videos facebook, facebook downloader, bajar videos facebook, facebook watch downloader",
  openGraph: {
    title: "Descargar Videos de Facebook Gratis",
    description: "Descarga videos de Facebook gratis en alta calidad con Snaptube. Guarda videos de Facebook Watch y páginas públicas.",
    type: "website",
  },
};

export default function DescargarFacebookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Facebook Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos de Facebook, Facebook Watch y páginas públicas en alta calidad. 
              Funciona con cualquier video público de Facebook.
            </p>
            <a 
              href="https://fsmvid.com/facebook-media-grabber" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Facebook
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
                Facebook está lleno de videos increíbles: desde clips divertidos que comparten 
                tus amigos hasta documentales completos en Facebook Watch. El problema es que 
                Facebook no te deja descargar estos videos directamente, lo cual es frustrante 
                cuando encuentras algo que realmente quieres guardar para ver más tarde.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com/facebook-media-grabber" className="text-blue-600 hover:text-blue-800 font-medium">descargador de Facebook</a> resuelve este problema de manera simple y efectiva. 
                Puedes descargar cualquier video público de Facebook en la calidad original, 
                sin complicaciones ni software adicional que instalar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea que quieras guardar un video gracioso para compartir después, un tutorial 
                útil, o contenido de tus páginas favoritas, nuestro descargador hace que sea 
                súper fácil tener todo en tu dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué videos de Facebook puedes descargar?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de amigos</h3>
                <p className="text-gray-700 text-sm">
                  Descarga videos que comparten tus amigos en sus perfiles, siempre que sean públicos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Facebook Watch</h3>
                <p className="text-gray-700 text-sm">
                  Guarda episodios completos, documentales y series originales de Facebook Watch.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de páginas</h3>
                <p className="text-gray-700 text-sm">
                  Descarga contenido de páginas públicas, marcas, influencers y creadores de contenido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de grupos</h3>
                <p className="text-gray-700 text-sm">
                  Guarda videos compartidos en grupos públicos de Facebook de los que formas parte.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos en vivo</h3>
                <p className="text-gray-700 text-sm">
                  Descarga transmisiones en vivo que ya terminaron y están guardadas como video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de noticias</h3>
                <p className="text-gray-700 text-sm">
                  Guarda reportajes, noticias y contenido informativo de medios de comunicación.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Facebook?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el video</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video de Facebook que quieres descargar y haz clic derecho para copiar el enlace del video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el video de Facebook.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Elige la calidad que prefieras y descarga tu video de Facebook directamente.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Facebook?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🎯 Múltiples calidades</h3>
                <p className="text-gray-700">
                  Descarga en HD, calidad estándar, o calidad móvil según tus necesidades de 
                  espacio y uso. Tú decides qué funciona mejor para ti.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🔒 Sin registro necesario</h3>
                <p className="text-gray-700">
                  No necesitas crear cuentas ni proporcionar información personal. Solo pega 
                  el enlace y descarga inmediatamente.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">⚡ Procesamiento rápido</h3>
                <p className="text-gray-700">
                  Nuestros servidores están optimizados para procesar videos de Facebook en 
                  segundos, sin esperas largas ni timeouts.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📱 Compatible con móviles</h3>
                <p className="text-gray-700">
                  Funciona perfectamente en cualquier dispositivo móvil, tablet o computadora 
                  sin necesidad de apps adicionales.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Facebook?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">😂 Compartir contenido divertido</h3>
                <p className="text-gray-700">
                  Muchas personas descargan videos graciosos o memes para compartirlos en otras 
                  redes sociales o enviarlos por WhatsApp a sus amigos y familia.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Guardar contenido educativo</h3>
                <p className="text-gray-700">
                  Videos educativos, tutoriales, recetas de cocina, y contenido informativo que 
                  quieren consultar más tarde sin depender de la conexión a internet.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Uso profesional</h3>
                <p className="text-gray-700">
                  Profesionales que necesitan guardar contenido de referencia, presentaciones, 
                  o material de trabajo que aparece en páginas de Facebook de su industria.
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
                <h2 className="text-3xl font-bold mb-6">¿Prefieres una app móvil?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si descargas videos de Facebook frecuentemente desde tu móvil, Snaptube 
                  puede ser la solución perfecta. Es una app que funciona con Facebook y 
                  muchas otras redes sociales desde una sola aplicación.
                </p>
                <PWAInstallButton className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
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
                    <p className="text-sm opacity-75">Descargador universal</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Facebook, YouTube, Instagram...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calidades:</span>
                    <span className="font-medium text-green-300">HD, SD, Mobile</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Totalmente gratis</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Facebook</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo videos públicos</h3>
                <p className="text-gray-700">
                  Nuestro descargador solo puede acceder a videos públicos de Facebook. Si el 
                  video está en un perfil privado, no podremos procesarlo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Cómo copiar enlaces en móvil</h3>
                <p className="text-gray-700">
                  En la app de Facebook móvil, toca los tres puntos del video y selecciona 
                  "Copiar enlace". En el navegador móvil, mantén presionado el video y copia la URL.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Guardar" de <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 font-medium">Facebook</a> para guardar videos 
                  en tu lista de guardados, aunque no los descarga a tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Facebook ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Únete a miles de usuarios que ya guardan sus videos favoritos de Facebook. 
              Es gratis, rápido y funciona con cualquier video público.
            </p>
              <PWAInstallButton className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100">
                Descargar Snaptube
              </PWAInstallButton>
          </div>
        </div>
      </section>
    </div>
  );
}
