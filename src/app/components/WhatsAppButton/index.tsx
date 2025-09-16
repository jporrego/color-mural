import Image from 'next/image';
import { trackContact } from '../../utils';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56995767606"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        right: 'clamp(1.5rem, calc((100vw - 1920px) / 2 + 1.5rem), 100vw)',
      }}
      className="fixed bottom-20 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
      onMouseDown={() => trackContact('whatsapp')}
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
    </a>
  );
}
