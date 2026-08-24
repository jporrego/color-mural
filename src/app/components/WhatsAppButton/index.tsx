import { trackContact } from '../../utils';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56941675960"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        right: 'clamp(1.5rem, calc((100vw - 1920px) / 2 + 1.5rem), 100vw)',
      }}
      className="fixed bottom-20 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
      onClick={() => trackContact('whatsapp', 'floating_button')}
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
    </a>
  );
}
