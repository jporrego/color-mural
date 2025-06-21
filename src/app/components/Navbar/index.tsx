import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';

/**
 * Navbar with inline dialog markup (no separate dialog components)
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#sobre', label: 'Sobre\u00a0nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* ────────────────────────────────────────── */}
      {/* Main navbar */}
      {/* ────────────────────────────────────────── */}
      <header className="bg-background sticky top-0 z-40 shadow-sm">
        <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between px-6 py-4 text-xs tracking-wide uppercase md:px-10 md:text-sm">
          {/* Desktop navigation */}
          <nav className="hidden gap-2 md:flex">
            {links.map((link, idx) => (
              <div key={link.href} className="flex gap-2">
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
                {idx < links.length - 1 && <span>/</span>}
              </div>
            ))}
          </nav>
          {/* Burger icon for mobile */}
          <button
            className="-mr-2 p-2 md:hidden" // expand hit area
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" />
          </button>
          <a
            href="#contacto"
            className="bg-block3 hover:bg-block4-hover self-center rounded-sm px-3 py-2 text-xs font-bold tracking-wider uppercase transition-colors"
          >
            Agenda tu proyecto
          </a>
        </div>
      </header>

      {/* ────────────────────────────────────────── */}
      {/* Modal menu rendered via portal */}
      {/* ────────────────────────────────────────── */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Modal content */}
            <div className="relative z-50 w-full max-w-xs rounded-2xl bg-white p-8 shadow-xl">
              {/* Links */}
              <nav className="flex flex-col items-start gap-6 text-base tracking-wide uppercase">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex items-center">
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="mx-auto cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-200"
                >
                  <X className="size-6" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
