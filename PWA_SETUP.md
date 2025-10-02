# PWA Setup Instructions

## Required Icons

You need to create the following icon files in the `public/icons/` directory:

### Main App Icons
- `icon-72x72.png` (72x72px)
- `icon-96x96.png` (96x96px)  
- `icon-128x128.png` (128x128px)
- `icon-144x144.png` (144x144px)
- `icon-152x152.png` (152x152px)
- `icon-192x192.png` (192x192px)
- `icon-384x384.png` (384x384px)
- `icon-512x512.png` (512x512px)

### Windows Tiles
- `icon-70x70.png` (70x70px)
- `icon-150x150.png` (150x150px)
- `icon-310x150.png` (310x150px)
- `icon-310x310.png` (310x310px)

### Shortcut Icons
- `youtube-shortcut.png` (96x96px)
- `tiktok-shortcut.png` (96x96px)
- `instagram-shortcut.png` (96x96px)
- `platforms-shortcut.png` (96x96px)

### Notification Icons
- `checkmark.png` (24x24px)
- `xmark.png` (24x24px)

## Quick Icon Generation

You can use your existing `snaplogo.png` as the base and resize it to create all required icons:

### Using ImageMagick (Command Line)
```bash
# Create icons directory
mkdir -p public/icons

# Generate all sizes from snaplogo.png
convert public/snaplogo.png -resize 72x72 public/icons/icon-72x72.png
convert public/snaplogo.png -resize 96x96 public/icons/icon-96x96.png
convert public/snaplogo.png -resize 128x128 public/icons/icon-128x128.png
convert public/snaplogo.png -resize 144x144 public/icons/icon-144x144.png
convert public/snaplogo.png -resize 152x152 public/icons/icon-152x152.png
convert public/snaplogo.png -resize 192x192 public/icons/icon-192x192.png
convert public/snaplogo.png -resize 384x384 public/icons/icon-384x384.png
convert public/snaplogo.png -resize 512x512 public/icons/icon-512x512.png

# Windows tiles
convert public/snaplogo.png -resize 70x70 public/icons/icon-70x70.png
convert public/snaplogo.png -resize 150x150 public/icons/icon-150x150.png
convert public/snaplogo.png -resize 310x150 public/icons/icon-310x150.png
convert public/snaplogo.png -resize 310x310 public/icons/icon-310x310.png

# Shortcuts (copy main icon for now)
cp public/icons/icon-96x96.png public/icons/youtube-shortcut.png
cp public/icons/icon-96x96.png public/icons/tiktok-shortcut.png
cp public/icons/icon-96x96.png public/icons/instagram-shortcut.png
cp public/icons/icon-96x96.png public/icons/platforms-shortcut.png
```

### Using Online Tools
1. Go to https://realfavicongenerator.net/
2. Upload your `snaplogo.png`
3. Download the generated package
4. Extract icons to `public/icons/`

## Screenshots (Optional)

Create these screenshots for better PWA experience:

- `public/screenshots/desktop-1.png` (1280x720px) - Desktop view
- `public/screenshots/mobile-1.png` (390x844px) - Mobile view

## Testing Your PWA

### Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to "Application" tab
3. Check "Manifest" section for errors
4. Check "Service Workers" section
5. Use "Lighthouse" tab to audit PWA score

### Installation Testing
1. **Desktop Chrome**: Look for install icon in address bar
2. **Mobile Chrome**: "Add to Home Screen" in menu
3. **iOS Safari**: Share button → "Add to Home Screen"

### PWA Features Included

✅ **Offline Support** - Pages cached for offline viewing
✅ **Install Prompt** - Smart install banner
✅ **App Shortcuts** - Quick access to popular platforms  
✅ **Push Notifications** - Ready for future updates
✅ **Background Sync** - Handles offline actions
✅ **Responsive Design** - Works on all devices
✅ **Fast Loading** - Optimized caching strategies
✅ **Native Feel** - Standalone app experience

### Browser Support

- ✅ Chrome (Android/Desktop)
- ✅ Edge (Windows/Desktop) 
- ✅ Safari (iOS) - Limited PWA features
- ✅ Firefox (Android/Desktop)
- ✅ Samsung Internet (Android)

## Deployment Notes

1. **HTTPS Required**: PWA only works on HTTPS domains
2. **Service Worker**: Must be served from root domain
3. **Manifest**: Must be accessible and valid JSON
4. **Icons**: All icon files must exist and be accessible

## Customization

### Colors
- Primary: `#1e40af` (Blue 700)
- Background: `#1e40af` 
- Theme: `#1e40af`

### App Shortcuts
Current shortcuts point to:
- YouTube downloader
- TikTok downloader  
- Instagram downloader
- All platforms page

You can modify these in `public/manifest.json`

## Troubleshooting

### Common Issues
1. **Icons not loading**: Check file paths and permissions
2. **Install prompt not showing**: Ensure HTTPS and valid manifest
3. **Service worker errors**: Check browser console
4. **iOS not working**: iOS has limited PWA support

### Debug Commands
```bash
# Check if service worker is registered
console.log('SW registered:', 'serviceWorker' in navigator);

# Check manifest
fetch('/manifest.json').then(r => r.json()).then(console.log);

# Check install prompt
window.addEventListener('beforeinstallprompt', e => console.log('Install prompt ready'));
```
