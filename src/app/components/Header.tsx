'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-2xl border-b border-blue-700/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <Image
                src="/snaplogo.png"
                alt="Snaptube Logo"
                width={48}
                height={48}
                className="relative rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Snaptube</span>
              <span className="text-xs text-blue-200 font-medium">Video Downloader</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Inicio</Link>
            <Link href="/snaptube-original" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Original</Link>
            <Link href="/descargar-snaptube-para-pc" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Para PC</Link>
            <Link href="/snaptube-instalar" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Instalar</Link>
            <Link href="/snaptube-amarillo" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Amarillo</Link>
            <Link href="/snaptube-premium-apk" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Premium</Link>
            <Link href="/descarga-snaptube" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Descarga</Link>
            <Link href="/esnapt" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm">Esnapt</Link>
            
            {/* Desktop Platforms Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm flex items-center">
                Plataformas
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-2"></span>
                      Plataformas Populares
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                  <Link href="/descargar-videos-youtube" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>YouTube</span>
                  </Link>
                  <Link href="/descargar-videos-tiktok" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-black rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>TikTok</span>
                  </Link>
                  <Link href="/descargar-videos-instagram" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Instagram</span>
                  </Link>
                  <Link href="/descargar-videos-facebook" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Facebook</span>
                  </Link>
                  <Link href="/descargar-videos-twitter" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Twitter</span>
                  </Link>
                  <Link href="/descargar-imagenes-pinterest" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Pinterest</span>
                  </Link>
                  <Link href="/descargar-videos-vimeo" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Vimeo</span>
                  </Link>
                  <Link href="/descargar-videos-dailymotion" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Dailymotion</span>
                  </Link>
                  <Link href="/descargar-musica-soundcloud" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>SoundCloud</span>
                  </Link>
                  <Link href="/descargar-videos-reddit" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-orange-700 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Reddit</span>
                  </Link>
                  <Link href="/descargar-videos-telegram" className="flex items-center space-x-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 py-2 rounded-lg transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Telegram</span>
                  </Link>
                  <div className="col-span-3 text-center py-3 border-t border-gray-200 mt-2">
                    <Link href="/plataformas" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200">
                      <span>Ver todas las plataformas</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className={`w-6 h-6 text-white transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/20">
            <nav className="flex flex-col space-y-1 mt-6">
              <Link href="/" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link href="/snaptube-original" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Original</Link>
              <Link href="/descargar-snaptube-para-pc" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Para PC</Link>
              <Link href="/snaptube-instalar" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Instalar</Link>
              <Link href="/snaptube-amarillo" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Amarillo</Link>
              <Link href="/snaptube-premium-apk" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Premium</Link>
              <Link href="/descarga-snaptube" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Descarga</Link>
              <Link href="/esnapt" className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Esnapt</Link>
              
              {/* Mobile Platforms Section */}
              <div className="border-t border-white/20 pt-4 mt-4">
                <button
                  className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between w-full"
                  onClick={() => setIsPlatformsOpen(!isPlatformsOpen)}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-3"></span>
                    Plataformas
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-200 ${isPlatformsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isPlatformsOpen && (
                  <div className="mt-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                    <Link href="/descargar-videos-youtube" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span>YouTube</span>
                    </Link>
                    <Link href="/descargar-videos-tiktok" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      <span>TikTok</span>
                    </Link>
                    <Link href="/descargar-videos-instagram" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                      <span>Instagram</span>
                    </Link>
                    <Link href="/descargar-videos-facebook" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      <span>Facebook</span>
                    </Link>
                    <Link href="/descargar-videos-twitter" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                      <span>Twitter</span>
                    </Link>
                    <Link href="/descargar-imagenes-pinterest" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                      <span>Pinterest</span>
                    </Link>
                    <Link href="/descargar-videos-vimeo" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>Vimeo</span>
                    </Link>
                    <Link href="/descargar-videos-dailymotion" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      <span>Dailymotion</span>
                    </Link>
                    <Link href="/descargar-musica-soundcloud" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                      <span>SoundCloud</span>
                    </Link>
                    <Link href="/descargar-videos-reddit" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-orange-700 rounded-full"></span>
                      <span>Reddit</span>
                    </Link>
                    <Link href="/descargar-videos-telegram" className="flex items-center space-x-2 text-sm text-white/80 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>Telegram</span>
                    </Link>
                    <div className="col-span-2 text-center py-3">
                      <Link href="/plataformas" className="inline-flex items-center text-sm text-blue-300 hover:text-white font-medium hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        <span>Ver todas las plataformas</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
