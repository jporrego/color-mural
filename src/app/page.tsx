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

  /* ───────────────────────────────────── process data ───────────────────────────────────── */
  const processSteps = [
    {
      title: 'Visita inicial',
      desc: 'Conocemos el espacio y tu visión',
      img: '/images/img1.jpg',
    },
    {
      title: 'Propuesta y boceto',
      desc: 'Recibes un diseño conceptualizado y personalizado',
      img: '/images/img2.jpg',
    },
    {
      title: 'Aprobación y producción',
      desc: 'Se agenda y ejecuta el mural',
      img: '/images/img3.jpg',
    },
    {
      title: 'Entrega final',
      desc: '¡Listo para ser admirado y fotografiado!',
      img: '/images/img4.jpg',
    },
  ];

  return (
    <div className="text-dark flex min-h-screen flex-col scroll-smooth font-sans">
      {/* ─────────────── Top Navigation ─────────────── */}
      <div className="relative isolate">
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

          {/* Gallery */}
          <div className="mx-auto w-full max-w-[1024px] px-6 py-12 md:px-10">
            <Gallery />
          </div>
        </section>
      </div>

      {/* ─────────────── Process Section ─────────────── */}
      <section id="proceso" className="bg-block1 mt-8">
        <div className="mx-auto w-full max-w-[1000px] px-6 py-10 md:px-10">
          <h2 className="mb-6 text-center font-serif text-2xl md:text-4xl">
            Nuestro proceso
          </h2>

          {/* Vertical timeline */}
          <div className="relative">
            {/* central line for desktop */}
            <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#3c2e23]/20 md:block"></div>

            <ul className="space-y-8 md:space-y-12">
              {processSteps.map((step, idx) => (
                <li
                  key={step.title}
                  className={`group flex items-center gap-4 ${
                    idx % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* image block */}
                  <div className="flex-shrink-0 basis-28 overflow-hidden rounded-sm shadow-lg sm:basis-36 md:basis-1/2">
                    <div className="relative aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={step.img}
                        alt={`Paso ${idx + 1} - ${step.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 112px, 50vw"
                        priority
                      />
                    </div>
                  </div>

                  {/* text block */}
                  <div
                    className={`flex-1 ${
                      idx % 2 === 0 ? 'text-left md:pl-8' : 'text-right md:pr-8'
                    }`}
                  >
                    <span className="mb-1 inline-block rounded-sm bg-[#ff5e00]/10 px-2 py-0.5 text-xs font-bold tracking-widest text-[#ff5e00] uppercase">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
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
            de 24 horas.
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
