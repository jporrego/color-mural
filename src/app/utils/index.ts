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
  location?: ContactLocation,
  navigateTo?: string
) {
  if (typeof window === 'undefined') return;

  let hasNavigated = false;
  const navigate = () => {
    if (!navigateTo || hasNavigated) return;

    hasNavigated = true;
    window.location.href = navigateTo;
  };

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { method, location });
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-1009360898/yIFVCIC4mugcEILApuED',
      contact_method: method,
      contact_location: location,
      ...(navigateTo
        ? {
            event_callback: navigate,
            event_timeout: 1000,
          }
        : {}),
    });

    if (navigateTo) window.setTimeout(navigate, 1000);
    return;
  }

  navigate();
}

export function trackOutbound(
  destination: 'instagram',
  location?: ContactLocation
) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'OutboundClick', { destination, location });
  }
}
