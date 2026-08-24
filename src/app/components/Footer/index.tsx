import { trackContact, trackOutbound } from '../../utils';

export default function Footer() {
  return (
    <footer className="bg-black py-6 text-xs text-[#f7f5f2] md:text-sm">
      <div className="mx-auto flex max-w-[1000px] flex-wrap justify-between gap-4 px-6 md:px-10">
        <p>
          © {new Date().getFullYear()} Color Mural. Todos los derechos
          reservados.
        </p>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/colormuralchile/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
            onClick={() => trackOutbound('instagram', 'footer')}
          >
            Instagram
          </a>
          <a
            href="https://wa.me/56941675960"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            onClick={() => trackContact('whatsapp', 'footer')}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
