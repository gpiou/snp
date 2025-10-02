import Link from "next/link";
import Image from "next/image";
import PWAInstallButton from "../components/PWAInstallButton";

export default function SnaptubeInstalarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ¿Cómo instalar Snaptube?
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              ¡Hola a todos! Si usted está tratando de <Link href="https://fsmvid.com" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">descargar videos</Link> y audio desde YouTube, 
              entonces Snaptube es la herramienta perfecta para que lo haga sin tener que lidiar con el tedioso proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PWAInstallButton className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg">
                Instalar Snaptube Ahora
              </PWAInstallButton>
              <a href="#guia-pasos" className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                Ver Guía Completa
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esta potente y gratuita aplicación ofrece una gran variedad de formatos en los cuales sus contenidos favoritos pueden ser descargados rápidamente, 
                almacenados y reproducidos donde sea que vaya.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Con sus fáciles interfaces e infinitas posibilidades de personalización, ¿Cómo instalar Snaptube? se ha convertido en uno de los principales métodos 
                disponibles para solucionar los problemas relacionados con la visualización o escucha audiovisual. ¡Aquí hay algunas sencillas direcciones sobre 
                cómo completar el proceso simplemente!
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <p className="text-gray-800">
                  <strong>¡Importante!</strong> Sigue esta guía paso a paso para instalar Snaptube de forma segura y correcta en tu dispositivo Android.
                </p>
              </div>
            </div>
          </section>

          {/* Step by Step Guide */}
          <section id="guia-pasos" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Guía Paso a Paso para Instalar Snaptube</h2>
              <p className="text-lg text-gray-700 mb-8">
                Comienza con esta completa Guía Paso a Paso sobre Cómo Instalar Snaptube. Y prepárate para explorar miles de opciones musicales y visualmente emocionantes.
              </p>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <h3 className="text-2xl font-semibold text-gray-800">Habilitar la Instalación de Aplicaciones de Orígenes Desconocidos</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Antes de poder instalar Snaptube, deberás permitir la instalación de aplicaciones de orígenes desconocidos en tu dispositivo Android. Así es cómo hacerlo:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>Ve a la Configuración de tu dispositivo.</li>
                      <li>Desliza hacia abajo y selecciona Seguridad o Privacidad.</li>
                      <li>Busca la opción «Instalar aplicaciones de orígenes desconocidos» y actívala.</li>
                      <li>Aparecerá un mensaje de advertencia; simplemente confirma tu elección.</li>
                    </ol>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <h3 className="text-2xl font-semibold text-gray-800">Descargar Snaptube desde https://snaptube.uno/</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Ahora que has habilitado la instalación desde orígenes desconocidos, puedes proceder a <Link href="https://fsmvid.com" className="text-blue-600 hover:text-blue-800 underline font-semibold">descargar Snaptube</Link>:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>Abre el navegador web de tu dispositivo.</li>
                      <li>Visita https://snaptube.uno/ – tu fuente de confianza.</li>
                      <li>En el sitio web, encontrarás un botón de descarga prominente. Toca sobre él.</li>
                      <li>El archivo APK de Snaptube comenzará a descargarse.</li>
                    </ol>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <h3 className="text-2xl font-semibold text-gray-800">Instalar Snaptube</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Una vez que la descarga esté completa, sigue estos pasos para instalar Snaptube:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>Abre el Administrador de archivos de tu dispositivo.</li>
                      <li>Navega hasta la carpeta donde se descargó el archivo APK de Snaptube (generalmente en la carpeta «Descargas»).</li>
                      <li>Toca el archivo APK para iniciar la instalación.</li>
                      <li>Es posible que se te pida confirmar la instalación. Haz clic en «Instalar.»</li>
                    </ol>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                    <h3 className="text-2xl font-semibold text-gray-800">Abrir Snaptube</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Después de unos segundos, Snaptube se habrá instalado en tu dispositivo. Así es cómo abrirlo:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>Regresa a la pantalla de inicio de tu dispositivo o al cajón de aplicaciones.</li>
                      <li>Busca el ícono de Snaptube, que se asemeja a un botón de reproducción rojo dentro de un círculo blanco.</li>
                      <li>Toca el ícono para abrir Snaptube.</li>
                    </ol>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4">5</div>
                    <h3 className="text-2xl font-semibold text-gray-800">Disfrutar de Snaptube</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    ¡Felicidades! Has instalado Snaptube con éxito desde la fuente de confianza https://snaptube.uno/. 
                    Ahora puedes explorar las características de la aplicación y comenzar a descargar tus videos y música favoritos desde varias plataformas en línea.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                    <p className="text-gray-800">
                      <strong>¡Éxito!</strong> Snaptube está ahora instalado y listo para usar. Puedes comenzar a descargar contenido inmediatamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Summary */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Snaptube Instalar</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Resumen de la Instalación</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Habilitar orígenes desconocidos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Descargar APK desde fuente oficial</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Instalar aplicación</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Abrir y configurar</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Image
                        src="/snaplogo.png"
                        alt="Snaptube Instalado"
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-gray-600">Snaptube Instalado</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Conclusión</h2>
              <p className="text-lg leading-relaxed mb-6">
                Como puedes ver, <Link href="https://fsmvid.com" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">instalar Snaptube</Link> es muy sencillo. 
                Todo lo que necesitas hacer es descargar el archivo APK de la fuente oficial de Snaptube, seguir los pasos simples y tendrás una excelente aplicación 
                para explorar contenido de vídeo sin coste alguno.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Ahora que tienes los recursos para ponerte en marcha con tu descarga gratuita, ¿por qué no intentas Instalar Snaptube ahora mismo? 
                Contarás con la capacidad de descargar cualquier vídeo que desees en cuestión de minutos.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Aprovecha mejor tu tiempo viendo vídeos en línea sin preocupaciones gracias a esta aplicación maravillosa. Entra en acción fácilmente y experimenta 
                los grandiosos beneficios que Snaptube le brinda a sus usuarios. Estamos seguros de que serás feliz con los resultados finales. ¡Ahora sigue adelante e instala Snaptube!
              </p>
              <PWAInstallButton className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg">
                Instalar Snaptube Ahora
              </PWAInstallButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

