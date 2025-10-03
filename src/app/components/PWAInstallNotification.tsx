'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallNotification() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isInWebAppiOS = (window.navigator as any).standalone === true;
      return isStandalone || isInWebAppiOS;
    };

    // Check if notification was dismissed recently
    const checkDismissed = () => {
      const dismissed = localStorage.getItem('pwa-notification-dismissed');
      if (dismissed) {
        const dismissedTime = parseInt(dismissed);
        const now = Date.now();
        const hoursPassed = (now - dismissedTime) / (1000 * 60 * 60);
        return hoursPassed < 24; // Don't show for 24 hours after dismiss
      }
      return false;
    };

    // Check if user has seen notification before
    const hasSeenNotification = localStorage.getItem('pwa-notification-seen') === 'true';

    if (checkInstalled()) {
      setIsInstalled(true);
      return;
    }

    if (checkDismissed()) {
      return;
    }

    // Show notification after a delay (3 seconds) if not seen before, or 10 seconds if seen
    const delay = hasSeenNotification ? 10000 : 3000;
    
    console.log('PWA Notification: Checking conditions...');
    console.log('PWA Notification: isInstalled:', checkInstalled());
    console.log('PWA Notification: checkDismissed:', checkDismissed());
    console.log('PWA Notification: hasSeenNotification:', hasSeenNotification);
    console.log('PWA Notification: delay:', delay);
    
    const timer = setTimeout(() => {
      if (!checkInstalled() && !checkDismissed()) {
        setShowNotification(true);
        setIsVisible(true);
        localStorage.setItem('pwa-notification-seen', 'true');
      }
    }, delay);

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('PWA Notification: beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    // Handle app installed
    const handleAppInstalled = () => {
      console.log('PWA Notification: appinstalled event fired');
      setIsInstalled(true);
      setShowNotification(false);
      setIsVisible(false);
      setDeferredPrompt(null);
      localStorage.setItem('pwa-installed', 'true');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    
    console.log('PWA Notification: Event listeners added, will show notification in', delay, 'ms');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    console.log('PWA Notification: Install button clicked');
    console.log('PWA Notification: deferredPrompt available:', !!deferredPrompt);
    
    if (!deferredPrompt) {
      // Check if it's iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      console.log('PWA Notification: No deferred prompt. iOS:', isIOS, 'Safari:', isSafari);
      
      if (isIOS && isSafari) {
        setShowNotification(false);
        setIsVisible(false);
        // Show iOS install instructions
        alert('Para instalar Snaptube en iOS:\n\n1. Toca el botón "Compartir" (📤) en Safari\n2. Selecciona "Añadir a pantalla de inicio"\n3. Confirma tocando "Añadir"');
        return;
      }
      
      // For other browsers without install prompt, hide notification
      console.log('PWA Notification: Browser does not support install prompt');
      handleDismiss();
      return;
    }

    try {
      console.log('PWA Notification: Showing install prompt');
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      console.log('PWA Notification: User choice:', outcome);
      
      if (outcome === 'accepted') {
        console.log('PWA: User accepted the install prompt from notification');
        setShowNotification(false);
        setIsVisible(false);
        localStorage.setItem('pwa-installed', 'true');
      } else {
        console.log('PWA: User dismissed the install prompt from notification');
        handleDismiss();
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.error('PWA: Install prompt failed', error);
      // Fallback: hide notification
      handleDismiss();
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowNotification(false);
    }, 300); // Wait for animation to complete
    
    localStorage.setItem('pwa-notification-dismissed', Date.now().toString());
  };

  const handleLater = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowNotification(false);
    }, 300);
    
    // Don't show again for 4 hours
    const fourHoursFromNow = Date.now() + (4 * 60 * 60 * 1000);
    localStorage.setItem('pwa-notification-dismissed', fourHoursFromNow.toString());
  };

  if (!showNotification || isInstalled) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-2xl border-t border-blue-700/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* App Icon with Glow Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-75"></div>
                <Image
                  src="/snaplogo.png"
                  alt="Snaptube"
                  width={40}
                  height={40}
                  className="relative rounded-xl shadow-lg"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                  <div>
                    <h3 className="font-bold text-lg text-white">¡Instala Snaptube!</h3>
                    <p className="text-blue-100 text-sm">Acceso rápido y descargas offline</p>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-blue-200">
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>100% Gratis</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>Sin Anuncios</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Offline</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleInstallClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                📱 Instalar App
              </button>
              
              <button
                onClick={handleLater}
                className="text-blue-200 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10"
              >
                Más tarde
              </button>
              
              <button
                onClick={handleDismiss}
                className="text-blue-300 hover:text-white p-2 rounded-lg transition-colors hover:bg-white/10"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
