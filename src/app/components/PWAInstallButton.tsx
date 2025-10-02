'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface PWAInstallButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function PWAInstallButton({ 
  className = "", 
  children = "Instalar Snaptube", 
  variant = 'primary' 
}: PWAInstallButtonProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      if (typeof window === 'undefined') return;
      
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isInWebAppiOS = (window.navigator as any).standalone === true;
      const isInstalled = isStandalone || isInWebAppiOS;
      setIsInstalled(isInstalled);
    };

    checkInstalled();

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('PWA Button: beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setCanInstall(true);
    };

    // Handle app installed
    const handleAppInstalled = () => {
      console.log('PWA Button: appinstalled event fired');
      setIsInstalled(true);
      setCanInstall(false);
      setDeferredPrompt(null);
      localStorage.setItem('pwa-installed', 'true');
    };

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    
    console.log('PWA Button: Event listeners added');

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    console.log('PWA Button: Install button clicked');
    console.log('PWA Button: deferredPrompt available:', !!deferredPrompt);
    console.log('PWA Button: canInstall:', canInstall);
    console.log('PWA Button: isInstalled:', isInstalled);
    
    if (!deferredPrompt) {
      // Check browser and platform
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const isChrome = /Chrome/.test(navigator.userAgent);
      
      console.log('PWA Button: No deferred prompt. iOS:', isIOS, 'Safari:', isSafari, 'Chrome:', isChrome);
      
      if (isIOS && isSafari) {
        alert('Para instalar Snaptube en iOS:\n\n1. Toca el botón "Compartir" (📤) en Safari\n2. Selecciona "Añadir a pantalla de inicio"\n3. Confirma tocando "Añadir"');
        return;
      }
      
      // For browsers that don't support PWA install, redirect to FSMVid.com
      console.log('PWA Button: Browser does not support install prompt, redirecting to FSMVid.com');
      window.open('https://fsmvid.com', '_blank');
      return;
    }

    try {
      console.log('PWA Button: Showing install prompt');
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      console.log('PWA Button: User choice:', outcome);
      
      if (outcome === 'accepted') {
        console.log('PWA: User accepted the install prompt from button');
        setCanInstall(false);
        setDeferredPrompt(null);
        localStorage.setItem('pwa-installed', 'true');
      } else {
        console.log('PWA: User dismissed the install prompt from button');
      }
    } catch (error) {
      console.error('PWA: Install prompt failed', error);
      // Fallback to FSMVid.com
      console.log('PWA Button: Falling back to FSMVid.com');
      window.open('https://fsmvid.com', '_blank');
    }
  };

  // If already installed, show "Abrir App" button
  if (isInstalled) {
    const baseClasses = variant === 'primary' 
      ? "bg-green-600 hover:bg-green-700 text-white" 
      : "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white";
    
    return (
      <button
        onClick={() => window.location.href = '/pwa-redirect'}
        className={`${baseClasses} px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 ${className}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>App Instalada - Abrir</span>
      </button>
    );
  }

  // Show install button
  const baseClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" 
    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";

  return (
    <button
      onClick={handleInstallClick}
      className={`${baseClasses} px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>{children}</span>
    </button>
  );
}
