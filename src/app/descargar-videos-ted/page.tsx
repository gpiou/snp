import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de TED Talks Gratis - Snaptube TED Downloader",
  description: "Descarga charlas TED gratis en alta calidad. Guarda conferencias educativas y inspiradoras de TED directamente a tu dispositivo.",
  keywords: "descargar videos ted, ted talks downloader, bajar charlas ted, ted conferencias",
  openGraph: {
    title: "Descargar Videos de TED Talks Gratis",
    description: "Descarga charlas TED gratis en alta calidad con Snaptube. Guarda conferencias inspiradoras de TED.",
    type: "website",
  },
};

export default function DescargarTEDPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de TED Talks Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda charlas inspiradoras y educativas de TED. 
              Descarga conferencias de los mejores pensadores del mundo directamente a tu dispositivo.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Charlas TED
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
                TED (Technology, Entertainment, Design) es la plataforma definitiva para ideas que 
                cambian el mundo. Aquí encuentras las mentes más brillantes compartiendo 
                descubrimientos revolucionarios, perspectivas inspiradoras, y conocimientos que 
                pueden transformar tu forma de ver la vida, el trabajo, y el futuro.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-red-600 hover:text-red-800 font-medium">descargador de TED</a> te permite guardar estas charlas 
                invaluables directamente en tu dispositivo. Perfecto para crear tu biblioteca 
                personal de conocimiento, tener acceso offline a conferencias inspiradoras, 
                o simplemente conservar esas ideas que pueden cambiar tu perspectiva.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea para desarrollo personal, investigación académica, o simplemente para 
                alimentar tu curiosidad intelectual, ahora puedes tener las mejores ideas 
                del mundo disponibles en cualquier momento y lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de TED?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ciencia y tecnología</h3>
                <p className="text-gray-700 text-sm">
                  Descubrimientos científicos, avances tecnológicos y visiones del futuro por expertos mundiales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovación y creatividad</h3>
                <p className="text-gray-700 text-sm">
                  Ideas revolucionarias, procesos creativos y metodologías innovadoras de líderes visionarios.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Problemas globales</h3>
                <p className="text-gray-700 text-sm">
                  Soluciones a desafíos mundiales como cambio climático, pobreza y desigualdad social.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Arte y diseño</h3>
                <p className="text-gray-700 text-sm">
                  Charlas sobre creatividad, diseño innovador y expresión artística que inspira.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Liderazgo y negocios</h3>
                <p className="text-gray-700 text-sm">
                  Estrategias de liderazgo, emprendimiento y gestión por CEOs y líderes exitosos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bienestar y psicología</h3>
                <p className="text-gray-700 text-sm">
                  Insights sobre felicidad, salud mental, relaciones y desarrollo personal.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar charlas TED?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra la charla</h3>
                <p className="text-gray-700 text-sm">
                  Ve a la charla TED que quieres descargar y copia el enlace del video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega y procesa</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos la conferencia.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Inspírate offline</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu charla TED en alta calidad, lista para inspirarte en cualquier momento.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de TED?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🎓 Calidad educativa premium</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad HD original de las charlas TED, perfecta para 
                  uso educativo y presentaciones profesionales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">📚 Biblioteca personal de conocimiento</h3>
                <p className="text-gray-700">
                  Crea tu colección personal de las mejores ideas del mundo, 
                  organizadas por temas de tu interés.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">✈️ Acceso sin conexión</h3>
                <p className="text-gray-700">
                  Perfecto para viajes largos, estudios offline, o cuando necesitas 
                  inspiración sin depender de conexión a internet.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">🎯 Procesamiento especializado</h3>
                <p className="text-gray-700">
                  Optimizado específicamente para el contenido educativo de TED, 
                  preservando subtítulos y calidad de audio.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan charlas TED?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Educación y formación</h3>
                <p className="text-gray-700">
                  Profesores, estudiantes y profesionales descargan charlas TED para usar en 
                  clases, presentaciones y programas de formación, aprovechando el conocimiento de expertos mundiales.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Desarrollo personal</h3>
                <p className="text-gray-700">
                  Personas comprometidas con su crecimiento personal crean bibliotecas de charlas 
                  inspiradoras para motivación diaria, desarrollo de habilidades y expansión de perspectivas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔬 Investigación académica</h3>
                <p className="text-gray-700">
                  Investigadores y académicos descargan charlas TED como fuentes de referencia, 
                  para análisis de tendencias y como inspiración para sus propias investigaciones.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres un eterno aprendiz?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si constantemente buscas inspiración y conocimiento de los mejores pensadores 
                  del mundo, Snaptube puede ayudarte a crear tu universidad personal con 
                  contenido de TED y otras plataformas educativas.
                </p>
                <a 
                  href="https://fsmvid.com" 
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
                    <p className="text-sm opacity-75">Descargador educativo</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">TED, Coursera, Khan Academy...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Educativo, inspirador</span>
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
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de TED</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo charlas públicas</h3>
                <p className="text-gray-700">
                  Solo podemos procesar charlas TED que están disponibles públicamente. 
                  El contenido premium o restringido no puede ser descargado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📝 Incluye subtítulos</h3>
                <p className="text-gray-700">
                  Muchas charlas TED incluyen subtítulos en múltiples idiomas. 
                  Nuestro descargador preserva esta información cuando está disponible.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la app oficial de <a href="https://ted.com" className="text-red-600 hover:text-red-800 font-medium">TED</a> para guardar charlas 
                  en tu lista personal, aunque esto requiere conexión para verlas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-500 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga charlas TED ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Construye tu biblioteca personal de las mejores ideas del mundo. 
              Inspírate con el conocimiento de los pensadores más brillantes de nuestra época.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de TED
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
