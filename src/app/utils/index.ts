type ContactMethod = 'phone' | 'email' | 'whatsapp';
type ContactLocation =
  | 'navbar'
  | 'footer'
  | 'hero'
  | 'contact_section'
  | 'floating_button'
  | 'mobile_menu';

export function trackContact(
  method: ContactMethod,
  location?: ContactLocation
) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { method, location });
  }
}

export function trackOutbound(
  destination: 'instagram',
  location?: ContactLocation
) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'OutboundClick', { destination, location });
  }
}
