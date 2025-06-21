"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  /* ───────────────────────────────────── modal state ───────────────────────────────────── */
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("/images/img1.png");
  const handleOpen = (src: string) => {
    setActiveImg(src);
    setOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col text-dark font-sans scroll-smooth ">
      {/* ─────────────── Top Navigation ─────────────── */}
      <header className="max-w-[1000px] w-full mx-auto flex justify-between items-center px-6 md:px-10 py-4 text-xs md:text-sm tracking-wide uppercase">
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
        <div className="hidden md:block rotate-45 text-3xl text-[#ff5e00] select-none">
          ↗
        </div>
      </header>

      {/* ─────────────── Hero Section ─────────────── */}
      <section
        id="inicio"
        className="max-w-[1000px] w-full mx-auto flex flex-col gap-10 pt-8"
      >
        {/* Headline block */}
        <div className="flex justify-between items-start mt-4 md:mt-24 px-6 md:px-10">
          <div className="mb-8 max-w-xl">
            <h1 className="text-5xl md:text-7xl leading-none font-serif mb-2">
              COLOR MURAL
            </h1>
            <span className="block w-full h-px bg-[#3c2e23] my-2 md:my-4"></span>
            <h3 className="text-2xl md:text-4xl leading-none font-serif">
              Murales que transforman espacios
            </h3>
          </div>

          {/* CTA link */}
          <a
            href="#contacto"
            className="hidden md:inline-block self-center md:ml-4 text-xs md:text-sm underline underline-offset-4 hover:no-underline"
          >
            Agenda tu proyecto
          </a>
        </div>

        {/* Featured project */}
        <div className="px-6 md:px-10">
          <div className="flex justify-between text-[11px] md:text-xs uppercase tracking-wider mb-2">
            <span>Último proyecto</span>
            <span>2024</span>
            <span>Restobar&nbsp;Santiago</span>
          </div>
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-sm">
            <Image
              src="/images/img2.jpg"
              alt="Mural reciente pintado por Color Mural"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─────────────── Process Section ─────────────── */}
      <section id="metodos" className="bg-block1 mt-8">
        <div className="max-w-[1000px] w-full mx-auto py-12 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: text */}
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 ">
              Así trabajamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm md:text-base ">
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
          <div className="w-full max-w-[500px] aspect-[4/3] grid grid-cols-2 grid-rows-2 gap-1 mx-auto rounded-sm overflow-hidden">
            {[
              "/images/img1.jpg",
              "/images/img2.jpg",
              "/images/img3.jpg",
              "/images/img4.jpg",
            ].map((src) => (
              <Image
                key={src}
                src={src}
                alt="Proceso Color Mural"
                width={500}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Portfolio Section ─────────────── */}
      <section id="portafolio" className="mt-8">
        <div className="max-w-[1000px] w-full mx-auto px-6 md:px-10 py-12">
          <h2 className="text-2xl md:text-4xl font-serif mb-8">Portafolio</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
            {[...Array(9)].map((_, idx) => {
              const src = `/images/portfolio/${idx + 1}.jpg`;
              return (
                <button
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden group"
                  onClick={() => handleOpen(src)}
                >
                  <Image
                    src={src}
                    alt={`Mural ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
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
        <div className="max-w-[1000px] w-full mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-6">
              Nuestra esencia
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Color Mural es el estudio del artista Jaime Contreras dedicado a
              crear murales a gran escala que convierten muros comunes en hitos
              urbanos. Creemos en el poder del color, la narrativa visual y la
              colaboración cercana con cada cliente para plasmar identidad y
              emoción en cada trazo.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/about.jpg"
              alt="Equipo Color Mural trabajando"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─────────────── Contact Section ─────────────── */}
      <section id="contacto" className="py-16">
        <div className="max-w-[600px] mx-auto text-center px-6 md:px-0 flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-4xl font-serif">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-sm md:text-base max-w-prose">
            Escríbenos y conversemos sobre tu proyecto. Responderemos en menos
            de 24&nbsp;horas.
          </p>
          <a
            href="mailto:hola@colormural.cl"
            className="inline-block px-8 py-3 bg-[#ff5e00] text-white uppercase tracking-wider text-sm md:text-base rounded-sm hover:bg-[#e65000] transition-colors"
          >
            hola@colormural.cl
          </a>
        </div>
      </section>

      {/* ─────────────── Footer ─────────────── */}
      <footer className="bg-[#3c2e23] text-[#f7f5f2] text-xs md:text-sm py-6">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 flex justify-between flex-wrap gap-4">
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
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade"
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
              className="object-contain max-h-[90vh] rounded-sm"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl leading-none"
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
