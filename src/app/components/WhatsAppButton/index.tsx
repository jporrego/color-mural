export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56912345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
    </a>
  );
}
