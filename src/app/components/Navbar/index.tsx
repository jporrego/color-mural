'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { trackContact } from '../../utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [solid, setSolid] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setSolid(y > 150);

      if (y < 350 || y < lastScroll.current) setShow(true);
      else setShow(false);

      lastScroll.current = y;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#sobre', label: 'Sobre nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* Main bar — placed absolute so the hero video sits behind it */}
      <header
        className={`pointer-events-auto fixed inset-x-0 top-0 z-40 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} ${solid ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'} `}
      >
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 py-6 text-white">
          <div className="flex items-center gap-4">
            <div className="relative w-[20px]">
            <img
              src="/images/colormural_icon.svg"
              alt="Color Mural logo"
              width={536}
              height={412}
              className="h-auto w-full"
              loading="eager"
              />

            </div>
            <div className="hidden gap-4 text-[10px] leading-snug lg:flex">
              <p className="flex flex-col gap-1 text-xs">
                Contacto:
                <a
                  href="mailto:info@colormural.cl"
                  className="hover:text-highlight underline"
                  onMouseDown={() => trackContact('email')}
                >
                  hola@colormural.cl
                </a>
              </p>
              <p className="mr-4 flex flex-col gap-1 text-xs">
                Instagram:
                <a
                  href="https://www.instagram.com/colormuralchile/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-highlight underline"
                  onMouseDown={() => trackContact('instagram')}
                >
                  @colormuralchile
                </a>
              </p>
            </div>
          </div>

          {/* Centre: nav links (desktop) */}
          <nav className="hidden items-center gap-3 text-xs tracking-wide uppercase md:flex">
            {links.map((link, i) => (
              <div key={link.href} className="flex items-center gap-3">
                <a
                  href={link.href}
                  className="transition-colors hover:underline"
                >
                  {link.label}
                </a>
                {i < links.length - 1 && (
                  <span className="text-sm select-none">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* Right: burger (mobile) + CTA (desktop) */}
          <div className="ml-auto flex items-center gap-4 md:ml-0">
            {/* CTA — hidden on < md so the burger stays visible */}
            <a
              href="#contacto"
              className="hidden rounded-full bg-[#2343FF] px-6 py-2 text-xs font-semibold text-white uppercase transition-colors hover:bg-[#1232f5] md:inline-block"
            >
              Agenda tu proyecto
            </a>

            {/* Burger */}
            <button
              className="block p-2 md:hidden"
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile menu via portal ───────────────────── */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] flex items-center justify-center"
          >
            {/* dark veil */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* sheet */}
            <div className="relative z-10 w-full max-w-xs rounded-2xl bg-black p-8 text-white shadow-xl">
              <nav className="flex flex-col items-center gap-6 text-base tracking-wide uppercase">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-large font-bold hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="#contacto"
                className="mt-8 block rounded-full bg-[#2343FF] px-6 py-3 text-center text-sm font-semibold text-white uppercase"
                onClick={() => setOpen(false)}
              >
                Agenda tu proyecto
              </a>

              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="hover:bg-primary absolute top-4 right-4 rounded-full p-2"
              >
                <X className="size-6" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
