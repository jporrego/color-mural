'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* top gradient separator */}
      <div className="pointer-events-none absolute -top-20 right-0 left-0 h-20 bg-gradient-to-b from-transparent to-black" />

      {/* faint rings */}
      <div className="pointer-events-none absolute top-1/3 -left-1/2 h-[2000px] w-[2000px] rounded-full border border-white/5" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[2000px] w-[2000px] -translate-x-1/2 rounded-full border border-white/5" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        {/* ── copy block ─────────────────────────────────────────── */}
        <div>
          <h2 className="mb-8 text-center text-4xl font-semibold md:text-left md:text-5xl">
            <span className="text-[#2343FF]">Nuestra</span> esencia
          </h2>

          <p className="mx-auto max-w-prose text-lg leading-relaxed text-white/85 md:mx-0">
            Color Mural es el estudio del artista{' '}
            <strong>Benjamin Contador</strong>, especializado en la creación de
            murales a gran escala que transforman muros comunes en hitos
            urbanos. Creemos en el poder del color, la narrativa visual y la
            colaboración cercana con cada cliente para plasmar identidad y
            emoción en cada trazo.
          </p>

          {/* quick stats */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-8 md:mt-14">
            <Stat value="+150" label="Proyectos realizados" />
            <Stat value="12" label="Años de experiencia" />
            <Stat value="8" label="Premios &amp; menciones" />
          </div>
        </div>

        {/* ── hero image ─────────────────────────────────────────── */}
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl">
          <Image
            src="/images/about.webp"
            alt="Equipo Color Mural trabajando"
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
          />
          {/* subtle blue overlay on hover */}
          <div className="pointer-events-none absolute inset-0 bg-[#2343FF]/0 transition-colors duration-500 group-hover:bg-[#2343FF]/10" />
        </div>
      </div>
    </section>
  );
}

/* ── tiny helper component for stats ───────────────────────────── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="text-3xl font-bold text-[#2343FF]">{value}</span>
      <span className="mt-1 text-sm tracking-wide text-white/70 uppercase">
        {label}
      </span>
    </div>
  );
}
