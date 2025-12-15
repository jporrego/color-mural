'use client';

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
          <p className="mb-6">/ Sobre nosotros</p>
          <h2 className="mb-8 text-3xl font-semibold md:text-left md:text-6xl">
            Nuestra <span className="text-[#2343FF]">esencia</span>
          </h2>

          <p className="mx-auto max-w-prose text-lg leading-relaxed text-white/85 md:mx-0">
            <strong>Color Mural</strong> es el estudio profesional de{' '}
            <strong>Benjamin Contador</strong>, especializados en crear
            arte a gran escala que transforma muros comunes en hitos
            urbanos. Ofrecemos soluciones de muralismo en Chile para empresas,
            oficinas y proyectos residenciales en Santiago y regiones.
          </p>

          <p className="mt-6 max-w-prose text-lg *:leading-relaxed text-white/85">
            Creemos en el poder del color y la narrativa visual para plasmar
            tu marca, comunicar propósito y reforzar la cultura organizacional.
            Si buscas contratar un muralista o un pintor profesional para tu
            proyecto, te guiamos de forma colaborativa desde el concepto inicial
            hasta la instalación final.
          </p>

          {/* quick stats */}
          {/* <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-8 md:mt-14">
            <Stat value="+150" label="Proyectos realizados" />
            <Stat value="12" label="Años de experiencia" />
            <Stat value="8" label="Premios &amp; menciones" />
          </div> */}
        </div>

        {/* ── hero image ─────────────────────────────────────────── */}
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl">
          <img
            src="/images/about-960.webp"
            srcSet="
            /images/about-320.webp 320w,
            /images/about-640.webp 640w,
            /images/about-960.webp 960w,
            /images/about-1280.webp 1280w,
          "
            sizes="100vw"
            alt="Equipo Color Mural trabajando"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
            decoding="async"
          />

          {/* subtle blue overlay on hover */}
          <div className="pointer-events-none absolute inset-0 bg-[#2343FF]/0 transition-colors duration-500 group-hover:bg-[#2343FF]/10" />
        </div>
      </div>
    </section>
  );
}