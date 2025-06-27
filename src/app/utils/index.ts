export function trackContact(
  method: 'phone' | 'email' | 'whatsapp' | 'instagram'
) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { method });
  }
}
