import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0e9e5] text-[#3c2e23] font-sans">
      {/* ─────────────────────  Top Navigation  ───────────────────── */}
      <header className="w-full flex justify-between items-start px-6 md:px-10 py-4 text-xs md:text-sm tracking-wide uppercase">
        <nav className="flex flex-wrap items-center gap-2 md:gap-4">
          <a href="#about" className="hover:underline">
            About us
          </a>
          <span>/</span>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <span>/</span>
          <a href="#insights" className="hover:underline">
            Insights
          </a>
          <span>/</span>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <span>/</span>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
        </nav>

        {/* Decorative arrow icon */}
        <div className="hidden md:flex">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-45 text-[#ff5a2d]"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </header>

      {/* ─────────────────────  Hero Section  ───────────────────── */}
      <section className="flex-1 w-full px-6 md:px-20 pb-16 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_260px] gap-10 md:gap-20">
        {/* Headline + CTA */}
        <div className="flex flex-col gap-6 pt-4">
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.9]">
            <span className="block">Sustainable</span>
            <span className="block italic">
              Living
              <span className="inline-block w-24 md:w-40 h-px bg-current align-middle mx-2" />
              Spaces
            </span>
          </h1>

          <a
            href="#contact"
            className="self-start uppercase tracking-widest text-xs md:text-sm border-b border-current hover:text-[#ff5a2d]"
          >
            Talk your plan
          </a>
        </div>

        {/* Side description + thumb */}
        <div className="flex flex-col gap-4 max-w-xs md:pt-12">
          <Image
            src="/thumb-placeholder.jpg"
            alt="Small preview"
            width={120}
            height={120}
            className="w-24 h-24 object-cover"
          />
          <p className="text-xs leading-relaxed text-[#6e6e6e]">
            Creating timeless spaces with minimal environmental impact,
            transforming the way we live—one green space at a time.
          </p>
        </div>
      </section>

      {/* ─────────────────────  Showcase Banner  ───────────────────── */}
      <section className="w-full relative">
        {/* Meta labels */}
        <div className="absolute inset-x-0 top-2 px-6 md:px-20 flex justify-between text-[11px] md:text-xs uppercase tracking-wide pointer-events-none">
          <span>Eco Retreat Villas</span>
          <span className="hidden md:block">2023</span>
          <span>Luxury Living</span>
        </div>

        {/* Hero Image */}
        <Image
          src="/hero-placeholder.jpg"
          alt="Eco Retreat Villas preview"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </section>
    </div>
  );
}
