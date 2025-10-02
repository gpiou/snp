import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Imágenes y GIFs de Imgur Gratis - Snaptube Imgur Downloader",
  description: "Descarga imágenes y GIFs de Imgur gratis. Guarda memes, GIFs virales y contenido de Imgur directamente a tu dispositivo con Snaptube.",
  keywords: "descargar imagenes imgur, imgur downloader, bajar gifs imgur, descargar memes imgur",
  openGraph: {
    title: "Descargar Imágenes y GIFs de Imgur Gratis",
    description: "Descarga imágenes y GIFs de Imgur gratis con Snaptube. Guarda memes y contenido viral de Imgur.",
    type: "website",
  },
};

export default function DescargarImgurPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Imágenes y GIFs de Imgur
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda memes, GIFs virales y contenido divertido de Imgur. 
              Descarga la mejor colección de humor de internet directamente a tu galería.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar de Imgur Ahora
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
                Imgur es la biblioteca más grande de memes, GIFs divertidos, y contenido viral 
                de internet. Es donde nacen los memes que luego ves en todas las redes sociales, 
                donde se almacenan los GIFs más graciosos, y donde la comunidad de internet 
                comparte los momentos más divertidos y creativos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-green-600 hover:text-green-800 font-medium">descargador de Imgur</a> te permite guardar todo este contenido 
                divertido directamente en tu dispositivo. Perfecto para cuando encuentras 
                ese meme perfecto, ese GIF que te hace reír hasta llorar, o esas imágenes 
                que quieres compartir con tus amigos más tarde.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea para crear tu propia colección de memes, guardar GIFs de reacción 
                para usar en chats, o simplemente conservar contenido divertido que no 
                quieres perder, nuestro descargador hace que sea súper fácil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Imgur?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">😂</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Memes virales</h3>
                <p className="text-gray-700 text-sm">
                  Los memes más divertidos y virales que se vuelven tendencia en toda la internet.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">GIFs de reacción</h3>
                <p className="text-gray-700 text-sm">
                  GIFs perfectos para expresar emociones y reacciones en chats y redes sociales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🖼️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Imágenes divertidas</h3>
                <p className="text-gray-700 text-sm">
                  Fotos graciosas, capturas de pantalla épicas y contenido visual que te hace reír.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido gaming</h3>
                <p className="text-gray-700 text-sm">
                  Memes de videojuegos, capturas épicas y contenido relacionado con gaming.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🐱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Animales adorables</h3>
                <p className="text-gray-700 text-sm">
                  GIFs y fotos de mascotas, animales graciosos y contenido que derrite corazones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🤯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido WTF</h3>
                <p className="text-gray-700 text-sm">
                  Imágenes y GIFs que te dejan sin palabras, contenido extraño y sorprendente.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar contenido de Imgur?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el contenido</h3>
                <p className="text-gray-700 text-sm">
                  Ve a la imagen o GIF de Imgur que quieres descargar y copia el enlace directo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente detectamos el tipo de archivo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu imagen o GIF en la calidad original, listo para compartir y guardar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Imgur?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">🎯 Detecta automáticamente</h3>
                <p className="text-gray-700">
                  Automáticamente identificamos si es una imagen, GIF animado, o álbum 
                  completo y procesamos todo el contenido correctamente.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">⚡ Descarga instantánea</h3>
                <p className="text-gray-700">
                  Procesamos contenido de Imgur en segundos, perfecto para descargar 
                  memes y GIFs rápidamente mientras navegas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">📱 Optimizado para móviles</h3>
                <p className="text-gray-700">
                  Funciona perfectamente en dispositivos móviles, donde más se consume 
                  y comparte contenido de Imgur.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">🔒 Sin registro</h3>
                <p className="text-gray-700">
                  No necesitas cuenta de Imgur ni proporcionar información personal. 
                  Solo pega el enlace y descarga inmediatamente.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan contenido de Imgur?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">😂 Crear colecciones de memes</h3>
                <p className="text-gray-700">
                  Muchos usuarios crean bibliotecas personales de los mejores memes de Imgur 
                  para compartir en WhatsApp, Telegram, o usar como stickers personalizados.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 GIFs de reacción personales</h3>
                <p className="text-gray-700">
                  Los GIFs de Imgur son perfectos para expresar emociones en chats. 
                  Descargarlos permite tener una colección personal de reacciones únicas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Contenido para redes sociales</h3>
                <p className="text-gray-700">
                  Creadores de contenido descargan memes y GIFs de Imgur para usar en sus 
                  publicaciones de Instagram, TikTok, y otras redes sociales.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres adicto a los memes?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si pasas horas navegando Imgur en busca de los mejores memes y GIFs, 
                  Snaptube puede ser perfecto para ti. Funciona con Imgur y muchas otras 
                  plataformas de entretenimiento desde una sola app.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador de memes</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Imgur, 9GAG, Reddit...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Memes, GIFs, imágenes</span>
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
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Imgur</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar imágenes y GIFs públicos de Imgur. El contenido 
                  privado o con acceso restringido no puede ser descargado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📁 Álbumes completos</h3>
                <p className="text-gray-700">
                  Si el enlace es de un álbum de Imgur, nuestro descargador puede procesar 
                  todas las imágenes del álbum de una vez.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes hacer clic derecho en las imágenes de <a href="https://imgur.com" className="text-green-600 hover:text-green-800 font-medium">Imgur</a> y seleccionar 
                  "Guardar imagen como", aunque esto no funciona con GIFs animados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga contenido de Imgur ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Construye tu colección personal de los mejores memes y GIFs de internet. 
              Nunca más pierdas ese contenido divertido que te hace reír.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Imgur
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
