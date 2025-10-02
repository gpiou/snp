'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import HydrationErrorBoundary from '../components/HydrationErrorBoundary';
import PWAInstallButton from '../components/PWAInstallButton';

// Metadata is handled by layout.tsx for client components

const platforms = [
  // Video Platforms
  {
    name: "YouTube",
    url: "/descargar-videos-youtube",
    description: "Descarga videos de YouTube en HD, 4K y extrae audio MP3",
    color: "bg-red-500",
    category: "Video",
    icon: "🎥"
  },
  {
    name: "TikTok", 
    url: "/descargar-videos-tiktok",
    description: "Guarda videos de TikTok sin marca de agua",
    color: "bg-black",
    category: "Video",
    icon: "🎵"
  },
  {
    name: "Instagram",
    url: "/descargar-videos-instagram", 
    description: "Descarga videos, fotos y stories de Instagram",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    category: "Social",
    icon: "📸"
  },
  {
    name: "Facebook",
    url: "/descargar-videos-facebook",
    description: "Guarda videos de Facebook y Facebook Watch",
    color: "bg-blue-600",
    category: "Social", 
    icon: "👥"
  },
  {
    name: "Twitter",
    url: "/descargar-videos-twitter",
    description: "Descarga videos y GIFs de Twitter/X",
    color: "bg-sky-500",
    category: "Social",
    icon: "🐦"
  },
  {
    name: "Vimeo",
    url: "/descargar-videos-vimeo",
    description: "Descarga videos de alta calidad de Vimeo",
    color: "bg-blue-500",
    category: "Video",
    icon: "🎬"
  },
  {
    name: "Dailymotion",
    url: "/descargar-videos-dailymotion", 
    description: "Guarda videos de Dailymotion en múltiples formatos",
    color: "bg-orange-500",
    category: "Video",
    icon: "📺"
  },
  {
    name: "Reddit",
    url: "/descargar-videos-reddit",
    description: "Descarga videos de Reddit y v.redd.it",
    color: "bg-orange-700",
    category: "Social",
    icon: "🔗"
  },
  {
    name: "Telegram",
    url: "/descargar-videos-telegram",
    description: "Guarda videos y archivos de Telegram",
    color: "bg-blue-500",
    category: "Messaging",
    icon: "✈️"
  },
  {
    name: "Threads",
    url: "/descargar-videos-threads",
    description: "Descarga videos de Threads by Instagram",
    color: "bg-black",
    category: "Social",
    icon: "🧵"
  },
  {
    name: "Snapchat",
    url: "/descargar-videos-snapchat",
    description: "Guarda videos de Snapchat Spotlight",
    color: "bg-yellow-400",
    category: "Social",
    icon: "👻"
  },
  {
    name: "LinkedIn",
    url: "/descargar-videos-linkedin",
    description: "Descarga videos profesionales de LinkedIn",
    color: "bg-blue-700",
    category: "Professional",
    icon: "💼"
  },
  {
    name: "9GAG",
    url: "/descargar-videos-9gag",
    description: "Guarda videos divertidos de 9GAG",
    color: "bg-gray-800",
    category: "Entertainment",
    icon: "😂"
  },
  {
    name: "Rumble",
    url: "/descargar-videos-rumble",
    description: "Descarga videos de Rumble",
    color: "bg-green-600",
    category: "Video",
    icon: "📢"
  },
  {
    name: "BitChute",
    url: "/descargar-videos-bitchute",
    description: "Guarda videos de BitChute",
    color: "bg-red-700",
    category: "Video",
    icon: "🎯"
  },
  {
    name: "TED",
    url: "/descargar-videos-ted",
    description: "Descarga charlas TED educativas",
    color: "bg-red-600",
    category: "Education",
    icon: "🎓"
  },
  {
    name: "Mixcloud",
    url: "/descargar-videos-mixcloud",
    description: "Guarda mixes y podcasts de Mixcloud",
    color: "bg-blue-400",
    category: "Music",
    icon: "🎧"
  },
  {
    name: "CapCut",
    url: "/descargar-videos-capcut",
    description: "Descarga videos editados con CapCut",
    color: "bg-black",
    category: "Video",
    icon: "✂️"
  },
  {
    name: "Douyin",
    url: "/descargar-videos-douyin",
    description: "Guarda videos de Douyin (TikTok China)",
    color: "bg-red-500",
    category: "Video",
    icon: "🇨🇳"
  },
  {
    name: "Bluesky",
    url: "/descargar-videos-bluesky",
    description: "Descarga contenido de Bluesky Social",
    color: "bg-sky-400",
    category: "Social",
    icon: "☁️"
  },
  {
    name: "ESPN",
    url: "/descargar-videos-espn",
    description: "Guarda highlights deportivos de ESPN",
    color: "bg-red-600",
    category: "Sports",
    icon: "⚽"
  },
  {
    name: "iFunny",
    url: "/descargar-videos-ifunny",
    description: "Descarga memes y videos de iFunny",
    color: "bg-orange-500",
    category: "Entertainment",
    icon: "🤣"
  },
  {
    name: "IMDb",
    url: "/descargar-videos-imdb",
    description: "Guarda trailers y clips de IMDb",
    color: "bg-yellow-500",
    category: "Entertainment",
    icon: "🎭"
  },
  {
    name: "Weibo",
    url: "/descargar-videos-weibo",
    description: "Descarga videos de Weibo",
    color: "bg-red-500",
    category: "Social",
    icon: "🇨🇳"
  },
  {
    name: "Xiaohongshu",
    url: "/descargar-videos-xiaohongshu",
    description: "Guarda contenido de Xiaohongshu (RedBook)",
    color: "bg-red-400",
    category: "Social",
    icon: "📖"
  },
  {
    name: "Kuaishou",
    url: "/descargar-videos-kuaishou",
    description: "Descarga videos de Kuaishou",
    color: "bg-orange-600",
    category: "Video",
    icon: "⚡"
  },
  {
    name: "Febspot",
    url: "/descargar-videos-febspot",
    description: "Guarda música y videos de Febspot",
    color: "bg-purple-600",
    category: "Music",
    icon: "🎵"
  },
  // Image Platforms
  {
    name: "Pinterest",
    url: "/descargar-imagenes-pinterest",
    description: "Descarga imágenes y videos de Pinterest",
    color: "bg-red-600",
    category: "Images",
    icon: "📌"
  },
  {
    name: "Tumblr",
    url: "/descargar-imagenes-tumblr",
    description: "Guarda imágenes y GIFs de Tumblr",
    color: "bg-indigo-600",
    category: "Images",
    icon: "📝"
  },
  {
    name: "Imgur",
    url: "/descargar-imagenes-imgur",
    description: "Descarga imágenes de Imgur",
    color: "bg-green-500",
    category: "Images",
    icon: "🖼️"
  },
  // Music Platforms
  {
    name: "SoundCloud",
    url: "/descargar-musica-soundcloud",
    description: "Descarga música y podcasts de SoundCloud",
    color: "bg-orange-600",
    category: "Music",
    icon: "🎵"
  },
  {
    name: "Spotify",
    url: "/descargar-musica-spotify",
    description: "Información sobre música de Spotify",
    color: "bg-green-500",
    category: "Music",
    icon: "🎶"
  },
  {
    name: "Zing MP3",
    url: "/descargar-musica-zingmp3",
    description: "Descarga música de Zing MP3",
    color: "bg-blue-600",
    category: "Music",
    icon: "🎼"
  }
];

const categories = [
  { name: "Video", icon: "🎥", color: "bg-red-100 text-red-800" },
  { name: "Social", icon: "👥", color: "bg-blue-100 text-blue-800" },
  { name: "Music", icon: "🎵", color: "bg-green-100 text-green-800" },
  { name: "Images", icon: "🖼️", color: "bg-purple-100 text-purple-800" },
  { name: "Entertainment", icon: "🎭", color: "bg-yellow-100 text-yellow-800" },
  { name: "Education", icon: "🎓", color: "bg-indigo-100 text-indigo-800" },
  { name: "Sports", icon: "⚽", color: "bg-orange-100 text-orange-800" },
  { name: "Professional", icon: "💼", color: "bg-gray-100 text-gray-800" },
  { name: "Messaging", icon: "✈️", color: "bg-cyan-100 text-cyan-800" }
];

export default function PlataformasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPlatforms = selectedCategory === 'All' 
    ? platforms 
    : platforms.filter(platform => platform.category === selectedCategory);

  return (
    <HydrationErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/snaplogo.png"
              alt="Snaptube Logo"
              width={80}
              height={80}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Todas las Plataformas Disponibles
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Descarga videos, música e imágenes de más de <span className="font-bold text-white">33 plataformas diferentes</span> con Snaptube. 
            Desde YouTube hasta TikTok, tenemos todo cubierto.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <span key={category.name} className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} bg-white/20 backdrop-blur-sm border border-white/30`}>
                {category.icon} {category.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explora Todas las Plataformas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Haz clic en cualquier plataforma para obtener información detallada sobre cómo descargar contenido de ese sitio web.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 border shadow-sm hover:shadow-md ${
                selectedCategory === 'All' 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              🌟 Todas
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 border shadow-sm hover:shadow-md ${
                  selectedCategory === category.name 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : `${category.color} border-gray-200 hover:shadow-md`
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Results Counter */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Mostrando <span className="font-bold text-blue-600">{filteredPlatforms.length}</span> plataformas
              {selectedCategory !== 'All' && (
                <span> en la categoría <span className="font-bold">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlatforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.url}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:translate-y-[-8px]"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {platform.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${categories.find(c => c.name === platform.category)?.color || 'bg-gray-100 text-gray-800'}`}>
                        {platform.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {platform.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    Ver más información
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">33+</div>
              <div className="text-blue-100">Plataformas Soportadas</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">100M+</div>
              <div className="text-blue-100">Descargas Realizadas</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">4K</div>
              <div className="text-blue-100">Calidad Máxima</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Gratis Siempre</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para Empezar a Descargar?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Descarga Snaptube ahora y comienza a guardar contenido de todas estas plataformas en tu dispositivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PWAInstallButton className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:translate-y-[-4px]">
              Descargar Snaptube Gratis
            </PWAInstallButton>
            <Link
              href="/"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
      </div>
    </HydrationErrorBoundary>
  );
}
