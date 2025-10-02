import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Snapchat Gratis - Snaptube Snapchat Downloader",
  description: "Descarga videos y stories de Snapchat gratis. Guarda contenido de Snapchat directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos snapchat, snapchat downloader, bajar stories snapchat",
  openGraph: {
    title: "Descargar Videos de Snapchat Gratis",
    description: "Descarga videos y stories de Snapchat gratis con Snaptube.",
    type: "website",
  },
};

export default function DescargarSnapchatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Snapchat Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos y stories de Snapchat antes de que desaparezcan. 
              Descarga momentos únicos directamente a tu galería personal.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-yellow-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Snapchat
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
                Snapchat es la plataforma de los momentos efímeros: stories que desaparecen en 24 horas, 
                videos divertidos con filtros únicos, y contenido espontáneo que captura la vida real 
                de tus amigos y celebridades favoritas. La magia de Snapchat está en su naturaleza 
                temporal, pero a veces encuentras contenido que no quieres que desaparezca.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-yellow-600 hover:text-yellow-800 font-medium">descargador de Snapchat</a> te permite guardar esos momentos especiales 
                antes de que se desvanezcan para siempre. Perfecto para conservar recuerdos, 
                guardar contenido divertido, o simplemente tener esos videos únicos que solo 
                aparecen en Snapchat.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea contenido de tus amigos, stories de celebridades, o videos con esos 
                filtros increíbles que solo Snapchat tiene, ahora puedes conservar todo en 
                tu galería personal sin depender de la naturaleza temporal de la plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Snapchat?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stories públicas</h3>
                <p className="text-gray-700 text-sm">
                  Guarda stories de celebridades, influencers y cuentas públicas antes de que expiren.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos con filtros</h3>
                <p className="text-gray-700 text-sm">
                  Descarga videos con los filtros únicos y efectos especiales exclusivos de Snapchat.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido Discover</h3>
                <p className="text-gray-700 text-sm">
                  Guarda videos de la sección Discover con contenido de medios y creadores.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Momentos temporales</h3>
                <p className="text-gray-700 text-sm">
                  Conserva esos momentos únicos que solo duran 24 horas en la plataforma.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido de celebridades</h3>
                <p className="text-gray-700 text-sm">
                  Descarga contenido exclusivo de tus celebridades e influencers favoritos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Eventos especiales</h3>
                <p className="text-gray-700 text-sm">
                  Guarda contenido de eventos, conciertos y momentos especiales compartidos en Snapchat.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Snapchat?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el snap</h3>
                <p className="text-gray-700 text-sm">
                  Ve al video o story de Snapchat que quieres descargar y copia el enlace si está disponible.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el contenido de Snapchat.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Guarda para siempre</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video permanentemente en tu dispositivo, sin límites de tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Snapchat?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">⏰ Salva contenido temporal</h3>
                <p className="text-gray-700">
                  Rescata contenido antes de que desaparezca para siempre. Perfecto para 
                  conservar momentos especiales que solo duran 24 horas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">🎭 Preserva filtros únicos</h3>
                <p className="text-gray-700">
                  Mantiene los efectos y filtros especiales de Snapchat en el video descargado, 
                  conservando la magia visual original.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">📱 Acceso sin app</h3>
                <p className="text-gray-700">
                  Una vez descargado, puedes ver el contenido sin necesidad de tener 
                  la app de Snapchat instalada.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">🔒 Privacidad respetada</h3>
                <p className="text-gray-700">
                  Solo procesamos contenido público disponible. No accedemos a chats 
                  privados ni contenido personal.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Snapchat?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💫 Conservar recuerdos especiales</h3>
                <p className="text-gray-700">
                  Muchos usuarios descargan momentos especiales de amigos, familiares o celebridades 
                  que quieren conservar como recuerdos permanentes más allá de las 24 horas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Crear contenido para otras redes</h3>
                <p className="text-gray-700">
                  Creadores de contenido descargan videos con filtros únicos de Snapchat 
                  para usar en Instagram, TikTok, o YouTube, aprovechando los efectos exclusivos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Archivar contenido de celebridades</h3>
                <p className="text-gray-700">
                  Fans descargan contenido exclusivo de sus celebridades favoritas que solo 
                  comparten en Snapchat, creando archivos personales de momentos únicos.
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
                <h2 className="text-3xl font-bold mb-6">¿Usas Snapchat frecuentemente?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si eres usuario activo de Snapchat y constantemente encuentras contenido 
                  que no quieres que desaparezca, Snaptube puede ser la solución perfecta 
                  para conservar esos momentos especiales.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador de momentos</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Snapchat, Instagram, TikTok...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Stories, videos, filtros</span>
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
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Snapchat</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar contenido público de Snapchat como stories de celebridades 
                  y contenido de Discover. Los snaps privados no pueden ser accedidos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⏰ Actúa rápido</h3>
                <p className="text-gray-700">
                  El contenido de Snapchat desaparece rápidamente. Si encuentras algo que 
                  quieres guardar, descárgalo lo antes posible antes de que expire.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">👻 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Guardar en Recuerdos" de <a href="https://snapchat.com" className="text-yellow-600 hover:text-yellow-800 font-medium">Snapchat</a> para 
                  tus propios snaps, aunque esto solo funciona con contenido que tú creas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Snapchat ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              No dejes que esos momentos especiales desaparezcan para siempre. 
              Guarda el mejor contenido de Snapchat antes de que se desvanezca en el tiempo.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-yellow-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Snapchat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
