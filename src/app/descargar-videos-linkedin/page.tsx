import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de LinkedIn Gratis - Snaptube LinkedIn Downloader",
  description: "Descarga videos profesionales de LinkedIn gratis. Guarda contenido educativo y corporativo de LinkedIn directamente a tu dispositivo.",
  keywords: "descargar videos linkedin, linkedin downloader, bajar videos linkedin profesionales",
  openGraph: {
    title: "Descargar Videos de LinkedIn Gratis",
    description: "Descarga videos profesionales de LinkedIn gratis con Snaptube.",
    type: "website",
  },
};

export default function DescargarLinkedInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de LinkedIn Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda contenido profesional y educativo de LinkedIn. 
              Descarga videos corporativos y de desarrollo profesional directamente a tu dispositivo.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de LinkedIn
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
                LinkedIn se ha convertido en una plataforma clave para el contenido profesional: 
                desde webinars educativos hasta presentaciones corporativas, entrevistas con 
                líderes de la industria, y contenido de desarrollo profesional que no encuentras 
                en otras redes sociales. Es el lugar donde los profesionales comparten conocimiento valioso.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-blue-700 hover:text-blue-900 font-medium">descargador de LinkedIn</a> te permite guardar todo este contenido 
                profesional directamente en tu dispositivo. Perfecto para cuando encuentras 
                conferencias valiosas, tutoriales de habilidades, o presentaciones que quieres 
                revisar más tarde sin conexión.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea para tu desarrollo profesional, investigación de mercado, o simplemente 
                para conservar contenido educativo valioso, ahora puedes tener toda esa 
                información organizada en tu biblioteca personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de LinkedIn?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido educativo</h3>
                <p className="text-gray-700 text-sm">
                  Webinars, cursos, tutoriales y contenido de desarrollo profesional y habilidades.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos corporativos</h3>
                <p className="text-gray-700 text-sm">
                  Presentaciones de empresas, anuncios corporativos y contenido de marca profesional.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entrevistas y charlas</h3>
                <p className="text-gray-700 text-sm">
                  Entrevistas con líderes de la industria, charlas TED y conferencias profesionales.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Análisis de mercado</h3>
                <p className="text-gray-700 text-sm">
                  Videos de análisis de tendencias, estudios de mercado y insights de la industria.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Emprendimiento</h3>
                <p className="text-gray-700 text-sm">
                  Contenido sobre startups, emprendimiento y consejos para el crecimiento empresarial.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Desarrollo de carrera</h3>
                <p className="text-gray-700 text-sm">
                  Tips para entrevistas, consejos de networking y estrategias de crecimiento profesional.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de LinkedIn?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el video</h3>
                <p className="text-gray-700 text-sm">
                  Ve al post de LinkedIn con el video que quieres descargar y copia el enlace del post.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente procesamos el video profesional.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga profesional</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video en calidad profesional, perfecto para presentaciones y referencia.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de LinkedIn?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">💼 Calidad profesional</h3>
                <p className="text-gray-700">
                  Mantenemos la calidad profesional de los videos de LinkedIn, perfecta 
                  para uso en presentaciones y material de referencia.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🎯 Contenido especializado</h3>
                <p className="text-gray-700">
                  Procesamos específicamente contenido profesional y educativo que es 
                  valioso para el desarrollo de carrera y negocios.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🔒 Privacidad respetada</h3>
                <p className="text-gray-700">
                  No accedemos a tu perfil profesional ni guardamos información de tu 
                  red de contactos. Todo es anónimo y seguro.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📱 Acceso offline</h3>
                <p className="text-gray-700">
                  Perfecto para profesionales que viajan y necesitan acceso a contenido 
                  educativo sin depender de conexión a internet.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de LinkedIn?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Desarrollo profesional</h3>
                <p className="text-gray-700">
                  Profesionales descargan webinars, cursos y conferencias para crear su 
                  biblioteca personal de desarrollo de habilidades y conocimiento de la industria.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Investigación empresarial</h3>
                <p className="text-gray-700">
                  Empresarios y analistas guardan presentaciones corporativas, análisis de mercado 
                  y contenido de competidores para investigación y análisis estratégico.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Material educativo</h3>
                <p className="text-gray-700">
                  Educadores y estudiantes descargan contenido profesional para usar en 
                  clases, presentaciones y como material de estudio complementario.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres un profesional activo?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si usas LinkedIn frecuentemente para tu desarrollo profesional y 
                  constantemente encuentras contenido valioso que quieres guardar, 
                  Snaptube puede ser la herramienta perfecta para ti.
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
                    <p className="text-sm opacity-75">Descargador profesional</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">LinkedIn, Vimeo, YouTube...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Profesional, educativo</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de LinkedIn</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo contenido público</h3>
                <p className="text-gray-700">
                  Solo podemos procesar videos públicos de LinkedIn. El contenido de 
                  conexiones privadas o grupos cerrados no puede ser accedido.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Uso profesional responsable</h3>
                <p className="text-gray-700">
                  Usa las descargas para desarrollo personal y profesional. Respeta los 
                  derechos de autor y no redistribuyas contenido corporativo sin permiso.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Guardar" de <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900 font-medium">LinkedIn</a> para guardar 
                  posts en tu perfil, aunque esto no descarga el video a tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de LinkedIn ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Construye tu biblioteca personal de contenido profesional y educativo. 
              Acelera tu desarrollo de carrera con el mejor contenido de LinkedIn.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
