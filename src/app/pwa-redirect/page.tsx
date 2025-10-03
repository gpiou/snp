'use client';

import { useEffect } from 'react';

export default function PWARedirectPage() {
  useEffect(() => {
    // Client-side redirect for static export
    window.location.href = 'https://fsmvid.com';
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-sm">Redirigiendo...</p>
      </div>
    </div>
  );
}
