'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function PWARedirectPage() {
  useEffect(() => {
    // Redirect to fsmvid.com after a short delay
    const timer = setTimeout(() => {
      window.location.href = 'https://fsmvid.com';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
      <div className="text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-75 animate-pulse"></div>
            <Image
              src="/snaplogo.png"
              alt="Snaptube Logo"
              width={120}
              height={120}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Snaptube
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Descargador de Videos
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center mb-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>

        {/* Status Text */}
        <p className="text-blue-200 mb-4">
          Redirigiendo a FSMVid.com...
        </p>

        {/* Manual Link */}
        <div className="space-y-4">
          <a
            href="https://fsmvid.com"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-[-4px]"
          >
            Ir a FSMVid.com
          </a>
          
          <p className="text-sm text-blue-300">
            Si no eres redirigido automáticamente, haz clic en el botón de arriba
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-2xl mb-2">🎥</div>
            <div className="text-sm font-medium">Videos HD</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm font-medium">Descarga Rápida</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-2xl mb-2">🆓</div>
            <div className="text-sm font-medium">100% Gratis</div>
          </div>
        </div>
      </div>
    </div>
  );
}
