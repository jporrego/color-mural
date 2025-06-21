'use client';

import { useState } from 'react';
import Image from 'next/image';
import Gallery from './components/gallery';

export default function Home() {
  /* ───────────────────────────────────── modal state ───────────────────────────────────── */
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('/images/img1.png');
  const handleOpen = (src: string) => {
    setActiveImg(src);
    setOpen(true);
  };

  return (
    <div className="text-dark flex min-h-screen flex-col scroll-smooth font-sans">
      {/* ─────────────── Top Navigation ─────────────── */}
      <div className="relative isolate">
        {/* <div className="absolute inset-0 -z-10 bg-[url('/images/img1.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 -z-10 bg-black/40" /> */}
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
        {/* ─────────────── Hero Section ─────────────── */}
        <section
          id="inicio"
          className="mx-auto flex w-full max-w-[1000px] flex-col gap-10 pt-8"
        >
          {/* Headline block */}
          <div className="mt-4 flex items-start justify-between px-6 md:mt-24 md:px-10">
            <div className="mb-8 max-w-xl">
              <h1 className="mb-2 font-serif text-5xl leading-none md:text-7xl">
                COLOR MURAL
              </h1>
              <span className="my-2 block h-px w-full bg-[#3c2e23] md:my-4"></span>
              <h3 className="font-serif text-2xl leading-none md:text-4xl">
                Murales que transforman espacios
              </h3>
            </div>
            {/* CTA link */}
            <a
              href="#contacto"
              className="bg-block3 hover:bg-block4-hover hidden self-center rounded-sm px-3 py-2 text-xs font-bold tracking-wider uppercase transition-colors md:ml-4 md:inline-block md:text-sm"
            >
              Agenda tu proyecto
            </a>
          </div>
          {/* Featured project */}

          {/* <div className="px-6 md:px-10">
            <div className="mb-2 flex justify-between text-[11px] tracking-wider uppercase md:text-xs">
              <span>Último proyecto</span>
              <span>2024</span>
              <span>Restobar&nbsp;Santiago</span>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/img2.jpg"
                alt="Mural reciente pintado por Color Mural"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div> */}
        </section>
        <div className="mx-auto w-full max-w-[1024px] px-6 py-12 md:px-10">
          <Gallery />
        </div>
      </div>

      {/* ─────────────── Process Section ─────────────── */}
      <section id="proceso" className="bg-block1 mt-8">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 md:px-10">
          {/* Left: text */}
          <div>
            <h2 className="mb-6 font-serif text-2xl md:text-4xl">
              Así trabajamos
            </h2>
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 text-sm md:grid-cols-2 md:text-base">
              <div>
                <p className="font-bold">1. Visita inicial</p>
                <p>Conocemos el espacio y tu visión</p>
              </div>
              <div>
                <p className="font-bold">2. Propuesta y boceto</p>
                <p>Recibes un diseño conceptualizado y personalizado</p>
              </div>
              <div>
                <p className="font-bold">3. Aprobación y producción</p>
                <p>Se agenda y ejecuta el mural</p>
              </div>
              <div>
                <p className="font-bold">4. Entrega final</p>
                <p>¡Listo para ser admirado y fotografiado!</p>
              </div>
            </div>
          </div>

          {/* Right: image grid */}
          <div className="mx-auto grid aspect-[4/3] w-full max-w-[500px] grid-cols-2 grid-rows-2 gap-1 overflow-hidden rounded-sm">
            {[
              '/images/img1.jpg',
              '/images/img2.jpg',
              '/images/img3.jpg',
              '/images/img4.jpg',
            ].map((src) => (
              <Image
                key={src}
                src={src}
                alt="Proceso Color Mural"
                width={500}
                height={300}
                className="h-full w-full object-cover"
                priority
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Portfolio Section ─────────────── */}
      <section id="portafolio" className="mt-8">
        <div className="mx-auto w-full max-w-[1000px] px-6 py-12 md:px-10">
          <h2 className="mb-8 font-serif text-2xl md:text-4xl">Portafolio</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
            {[...Array(9)].map((_, idx) => {
              const src = `/images/portfolio/${idx + 1}.jpg`;
              return (
                <button
                  key={src}
                  className="group relative aspect-[4/3] overflow-hidden"
                  onClick={() => handleOpen(src)}
                >
                  <Image
                    src={src}
                    alt={`Mural ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── About Section ─────────────── */}
      <section id="sobre" className="bg-block2 py-12">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="mb-6 font-serif text-2xl md:text-4xl">
              Nuestra esencia
            </h2>
            <p className="text-sm leading-relaxed md:text-base">
              Color Mural es el estudio del artista Benjamin Contador dedicado a
              crear murales a gran escala que convierten muros comunes en hitos
              urbanos. Creemos en el poder del color, la narrativa visual y la
              colaboración cercana con cada cliente para plasmar identidad y
              emoción en cada trazo.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/about.png"
              alt="Equipo Color Mural trabajando"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─────────────── Contact Section ─────────────── */}
      <section id="contacto" className="py-16">
        <div className="mx-auto flex max-w-[600px] flex-col items-center gap-6 px-6 text-center md:px-0">
          <h2 className="font-serif text-2xl md:text-4xl">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="max-w-prose text-sm md:text-base">
            Escríbenos y conversemos sobre tu proyecto. Responderemos en menos
            de 24&nbsp;horas.
          </p>
          <a
            href="mailto:hola@colormural.cl"
            className="inline-block rounded-sm bg-[#ff5e00] px-8 py-3 text-sm tracking-wider text-white uppercase transition-colors hover:bg-[#e65000] md:text-base"
          >
            hola@colormural.cl
          </a>
        </div>
      </section>

      {/* ─────────────── Footer ─────────────── */}
      <footer className="bg-[#3c2e23] py-6 text-xs text-[#f7f5f2] md:text-sm">
        <div className="mx-auto flex max-w-[1000px] flex-wrap justify-between gap-4 px-6 md:px-10">
          <p>
            © {new Date().getFullYear()} Color Mural. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/colormural"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* ─────────────── Lightbox Modal ─────────────── */}
      {open && (
        <div
          className="animate-fade fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImg}
              alt="Mural ampliado"
              width={1200}
              height={800}
              className="max-h-[90vh] rounded-sm object-contain"
            />
            <button
              className="absolute top-2 right-2 text-2xl leading-none text-white"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
