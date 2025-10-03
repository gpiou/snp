import { redirect } from 'next/navigation';

export default function PWARedirectPage() {
  // Server-side redirect - happens immediately
  redirect('https://fsmvid.com');
}
