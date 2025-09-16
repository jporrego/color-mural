import { trackContact } from '../../utils';

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-xs text-[#f7f5f2] md:text-sm">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-start justify-between gap-6 px-6 md:px-10">
        <div className="max-w-sm space-y-2">
          <p className="font-semibold text-white">Color Mural</p>
          <p>
            Estudio de muralismo en Chile dirigido por Benjamín Contador.
            Pintamos murales para marcas, instituciones públicas y comunidades
            en todo el país.
          </p>
          <address className="text-[#f7f5f2]/70 not-italic">
            Av. Nueva Providencia 1881, oficina 1504, Providencia, Santiago
          </address>
        </div>

        <div className="flex flex-col gap-2 text-[#f7f5f2]/80">
          <span className="font-semibold text-white">Cobertura</span>
          <span>
            Santiago • Valparaíso • Concepción • Antofagasta • La Serena
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-white">Síguenos</span>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/colormuralchile/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              onMouseDown={() => trackContact('instagram')}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/56995767606"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              onMouseDown={() => trackContact('whatsapp')}
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="w-full text-xs text-[#f7f5f2]/60 md:text-sm">
          © {new Date().getFullYear()} Color Mural. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
