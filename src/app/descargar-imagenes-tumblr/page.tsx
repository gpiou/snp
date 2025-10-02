import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Imágenes y Videos de Tumblr Gratis - Snaptube Tumblr Downloader",
  description: "Descarga fotos y videos de Tumblr gratis. Guarda contenido artístico y creativo de Tumblr directamente a tu dispositivo con Snaptube.",
  keywords: "descargar imagenes tumblr, tumblr downloader, bajar fotos tumblr, descargar videos tumblr",
  openGraph: {
    title: "Descargar Imágenes y Videos de Tumblr Gratis",
    description: "Descarga fotos y videos de Tumblr gratis con Snaptube. Guarda contenido artístico de Tumblr.",
    type: "website",
  },
};

export default function DescargarTumblrPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Imágenes y Videos de Tumblr
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda contenido artístico y creativo de Tumblr. 
              Descarga fotos, GIFs y videos únicos directamente a tu galería.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar de Tumblr Ahora
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
                Tumblr es el hogar de la creatividad digital: arte único, fotografía artística, 
                GIFs estéticos, y contenido visual que no encuentras en ninguna otra plataforma. 
                Es donde los artistas comparten su trabajo original, donde nacen las tendencias 
                visuales, y donde se crea contenido verdaderamente único.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-indigo-600 hover:text-indigo-800 font-medium">descargador de Tumblr</a> te permite guardar todo este contenido 
                artístico directamente en tu dispositivo. Perfecto para cuando encuentras 
                ese arte digital perfecto, esas fotos estéticas que te inspiran, o esos 
                GIFs únicos que quieres conservar para siempre.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea arte digital, fotografía alternativa, contenido vintage, o simplemente 
                imágenes que resuenan contigo, ahora puedes tener toda esa inspiración visual 
                guardada en tu galería personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Tumblr?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Arte digital</h3>
                <p className="text-gray-700 text-sm">
                  Ilustraciones originales, arte conceptual y creaciones digitales únicas de artistas independientes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fotografía artística</h3>
                <p className="text-gray-700 text-sm">
                  Fotos estéticas, fotografía alternativa y imágenes con filtros únicos de Tumblr.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">GIFs estéticos</h3>
                <p className="text-gray-700 text-sm">
                  GIFs artísticos, animaciones suaves y contenido visual hipnotizante único de Tumblr.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido vintage</h3>
                <p className="text-gray-700 text-sm">
                  Imágenes retro, arte vintage y contenido nostálgico que caracteriza a Tumblr.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fondos de pantalla</h3>
                <p className="text-gray-700 text-sm">
                  Wallpapers únicos, fondos estéticos y imágenes perfectas para personalizar dispositivos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Arte de fandoms</h3>
                <p className="text-gray-700 text-sm">
                  Fan art, ilustraciones de personajes y arte inspirado en series, películas y libros.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar contenido de Tumblr?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el post</h3>
                <p className="text-gray-700 text-sm">
                  Ve al post de Tumblr con el contenido que quieres descargar y copia el enlace del post.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente detectamos el contenido multimedia.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu imagen, GIF o video en la calidad original, listo para tu colección personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Tumblr?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">🎨 Preserva la calidad artística</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad original del arte y fotografías de Tumblr, 
                  perfecta para apreciar todos los detalles del trabajo creativo.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">✨ Detecta automáticamente</h3>
                <p className="text-gray-700">
                  Automáticamente identificamos si el contenido es una imagen, GIF, o video 
                  y lo procesamos en el formato correcto.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">📱 Optimizado para móviles</h3>
                <p className="text-gray-700">
                  Funciona perfectamente en dispositivos móviles, donde más se consume 
                  contenido visual de Tumblr.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">🔒 Respeta la privacidad</h3>
                <p className="text-gray-700">
                  No guardamos tu historial de descargas ni accedemos a tu cuenta de Tumblr. 
                  Todo el proceso es anónimo y seguro.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan contenido de Tumblr?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Crear bibliotecas de inspiración</h3>
                <p className="text-gray-700">
                  Artistas y diseñadores descargan contenido de Tumblr para crear colecciones 
                  de referencia visual, moodboards y bibliotecas de inspiración para sus proyectos creativos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Personalizar dispositivos</h3>
                <p className="text-gray-700">
                  Muchos usuarios descargan fondos de pantalla únicos y contenido estético 
                  de Tumblr para personalizar sus teléfonos, tablets y computadoras con estilo único.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💫 Archivar arte favorito</h3>
                <p className="text-gray-700">
                  Los amantes del arte digital descargan obras de sus artistas favoritos 
                  para crear colecciones personales, especialmente arte que podría desaparecer de la plataforma.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres fanático del arte digital?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si pasas horas navegando Tumblr en busca de inspiración visual y arte único, 
                  Snaptube puede ser perfecto para ti. Funciona con Tumblr y muchas otras 
                  plataformas creativas desde una sola aplicación.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador artístico</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Tumblr, Pinterest, Instagram...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Arte, fotos, GIFs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-medium text-green-300">Siempre gratis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Tumblr</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo posts públicos</h3>
                <p className="text-gray-700">
                  Solo podemos procesar posts públicos de Tumblr. Los blogs privados 
                  o contenido con acceso restringido no puede ser descargado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Respeta a los artistas</h3>
                <p className="text-gray-700">
                  Tumblr está lleno de artistas independientes. Si usas su arte, siempre 
                  da crédito al creador original y respeta sus derechos de autor.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💜 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Me gusta" de <a href="https://tumblr.com" className="text-indigo-600 hover:text-indigo-800 font-medium">Tumblr</a> para guardar 
                  posts en tu perfil, aunque esto no los descarga a tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga contenido de Tumblr ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Construye tu colección personal de arte digital y contenido estético de Tumblr. 
              Guarda la inspiración visual que necesitas para tus proyectos creativos.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Tumblr
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
