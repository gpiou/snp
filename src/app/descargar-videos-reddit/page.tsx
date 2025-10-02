import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Descargar Videos de Reddit Gratis - Snaptube Reddit Downloader",
  description: "Descarga videos y GIFs de Reddit gratis. Guarda contenido viral de Reddit directamente a tu dispositivo con Snaptube.",
  keywords: "descargar videos reddit, reddit downloader, bajar gifs reddit, reddit video download",
  openGraph: {
    title: "Descargar Videos de Reddit Gratis",
    description: "Descarga videos y GIFs de Reddit gratis con Snaptube. Guarda contenido viral de Reddit.",
    type: "website",
  },
};

export default function DescargarRedditPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descargar Videos de Reddit Gratis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guarda videos virales y GIFs de Reddit. 
              Descarga el mejor contenido de la front page del internet.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Descargar Videos de Reddit
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
                Reddit es el hogar del contenido viral: desde GIFs divertidísimos hasta videos 
                increíbles que se vuelven tendencia mundial. Es donde nacen los memes, donde se 
                comparten los videos más locos, y donde encuentras contenido que no verás en 
                ningún otro lugar del internet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro <a href="https://fsmvid.com" className="text-orange-600 hover:text-orange-800 font-medium">descargador de Reddit</a> te permite guardar todo este contenido único 
                directamente en tu dispositivo. Perfecto para cuando encuentras ese GIF perfecto, 
                ese video que te hace reír hasta llorar, o contenido que quieres compartir 
                con tus amigos más tarde.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya sea contenido de r/funny, r/aww, r/nextlevel, o cualquier subreddit que 
                sigas, ahora puedes tener los mejores videos y GIFs guardados en tu galería 
                personal para disfrutar cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué puedes descargar de Reddit?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">😂</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos divertidos</h3>
                <p className="text-gray-700 text-sm">
                  Los videos más graciosos de r/funny, r/unexpected y otros subreddits de humor.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">GIFs virales</h3>
                <p className="text-gray-700 text-sm">
                  GIFs que se vuelven memes, reacciones perfectas y momentos épicos en formato GIF.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🐱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Videos de animales</h3>
                <p className="text-gray-700 text-sm">
                  Contenido adorable de r/aww, r/cats, r/dogs y otros subreddits de mascotas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🤯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido increíble</h3>
                <p className="text-gray-700 text-sm">
                  Videos alucinantes de r/nextfuckinglevel, r/interestingasfuck y similares.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gaming clips</h3>
                <p className="text-gray-700 text-sm">
                  Jugadas épicas, fails divertidos y momentos increíbles de videojuegos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contenido educativo</h3>
                <p className="text-gray-700 text-sm">
                  Videos informativos, experimentos y contenido que te enseña algo nuevo.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo descargar videos de Reddit?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Encuentra el post</h3>
                <p className="text-gray-700 text-sm">
                  Ve al post de Reddit con el video que quieres descargar y copia el enlace del post.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pega el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Pega el enlace en nuestro descargador y automáticamente extraemos el video.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descarga gratis</h3>
                <p className="text-gray-700 text-sm">
                  Obtén tu video o GIF en la mejor calidad disponible, listo para compartir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué usar nuestro descargador de Reddit?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🎯 Detecta automáticamente</h3>
                <p className="text-gray-700">
                  Automáticamente detectamos si el contenido es un video, GIF, o imagen 
                  y lo procesamos en el formato correcto.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">⚡ Súper rápido</h3>
                <p className="text-gray-700">
                  Procesamos contenido de Reddit en segundos, perfecto para descargar 
                  contenido viral antes de que se elimine.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">📱 Optimizado para móviles</h3>
                <p className="text-gray-700">
                  Funciona perfectamente en la app de Reddit móvil y en navegadores, 
                  donde más se consume contenido de Reddit.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🔒 Sin registro</h3>
                <p className="text-gray-700">
                  No necesitas cuenta de Reddit ni proporcionar credenciales. 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Para qué descargan videos de Reddit?</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">😂 Crear colecciones de memes</h3>
                <p className="text-gray-700">
                  Muchos usuarios crean bibliotecas personales de los mejores memes y videos 
                  divertidos de Reddit para compartir en WhatsApp, Telegram, o redes sociales.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎬 Guardar contenido viral</h3>
                <p className="text-gray-700">
                  El contenido viral de Reddit puede desaparecer rápidamente. Descargarlo 
                  permite conservar esos momentos únicos que se vuelven parte de la cultura internet.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Compartir en otras redes</h3>
                <p className="text-gray-700">
                  Muchas personas descargan contenido de Reddit para compartirlo en Instagram, 
                  TikTok, o Facebook, llevando los mejores momentos a otras plataformas.
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
                <h2 className="text-3xl font-bold mb-6">¿Eres adicto a Reddit?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Si pasas horas navegando Reddit y constantemente encuentras contenido 
                  que quieres guardar, Snaptube puede ser perfecto para ti. Funciona con 
                  Reddit y muchas otras plataformas desde una sola app.
                </p>
                <a 
                  href="https://fsmvid.com" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
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
                    <p className="text-sm opacity-75">Descargador viral</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Plataformas:</span>
                    <span className="font-medium">Reddit, 9GAG, Imgur...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contenido:</span>
                    <span className="font-medium text-green-300">Videos, GIFs, memes</span>
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
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para descargar de Reddit</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔓 Solo posts públicos</h3>
                <p className="text-gray-700">
                  Solo podemos procesar posts públicos de Reddit. Los subreddits privados 
                  o contenido restringido no puede ser descargado.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⏰ Descarga rápido</h3>
                <p className="text-gray-700">
                  El contenido viral puede ser eliminado por moderadores o usuarios. 
                  Si encuentras algo que te gusta, descárgalo pronto.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🤝 Alternativa oficial</h3>
                <p className="text-gray-700">
                  También puedes usar la función "Guardar" de <a href="https://reddit.com" className="text-orange-600 hover:text-orange-800 font-medium">Reddit</a> para guardar 
                  posts en tu perfil, aunque esto no descarga el contenido a tu dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Descarga videos de Reddit ahora</h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              No pierdas más contenido viral de Reddit. Guarda los mejores videos, 
              GIFs y memes antes de que desaparezcan para siempre.
            </p>
            <a 
              href="https://fsmvid.com" 
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Probar Descargador de Reddit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
