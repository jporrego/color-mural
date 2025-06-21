export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1000px] items-center justify-between px-6 py-4 text-xs tracking-wide uppercase md:px-10 md:text-sm">
      <nav className="flex flex-wrap items-center gap-2 md:gap-4">
        <a href="#inicio" className="hover:underline">
          Inicio
        </a>
        <span className="hidden sm:inline">/</span>
        <a href="#portafolio" className="hover:underline">
          Portafolio
        </a>
        <span className="hidden sm:inline">/</span>
        <a href="#proceso" className="hover:underline">
          Proceso
        </a>
        <span className="hidden sm:inline">/</span>
        <a href="#sobre" className="hover:underline">
          Sobre&nbsp;nosotros
        </a>
        <span className="hidden sm:inline">/</span>
        <a href="#contacto" className="hover:underline">
          Contacto
        </a>
      </nav>

      {/* Decorative arrow icon */}
      <div className="hidden rotate-45 text-3xl text-[#ff5e00] select-none md:block">
        ↗
      </div>
    </header>
  );
}
