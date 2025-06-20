import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3c2e23] font-sans">
      {/* ─────────────── Top Navigation ─────────────── */}
      <header className="w-full flex justify-between items-start px-6 md:px-10 py-4 text-xs md:text-sm tracking-wide uppercase">
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
      <section id="inicio" className="flex flex-col gap-10 pt-8">
        {/* Headline block */}
        <div className="flex justify-between items-start mt-4 md:mt-24 px-6 md:px-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl leading-none font-serif mb-2">
              Color Mural
            </h1>
            <h3 className="text-2xl md:text-4xl leading-none font-serif">
              Murales que transforman espacios
            </h3>
          </div>
          {/* <h1 className="text-5xl md:text-7xl leading-none font-serif">
            Murales
            <br />
            <span className="block pl-2 md:pl-4">que</span>
            <span className="block w-full h-px bg-[#3c2e23] my-4 md:my-6"></span>
            transforman&nbsp;espacios
          </h1> */}

          {/* CTA link */}
          <a
            href="#contacto"
            className="hidden md:inline-block self-center md:ml-4 text-xs md:text-sm underline underline-offset-4 hover:no-underline"
          >
            Agenda tu proyecto
          </a>

          {/* Blurb + thumbnail */}
          {/* <div className="md:col-start-3 flex md:flex-col items-center gap-4 max-w-xs">
            <div className="w-12 h-12 min-w-[3rem] md:w-20 md:h-20 overflow-hidden rounded-sm">
              <Image
                src="/images/img1.png"
                alt="Miniatura de mural"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-[11px] md:text-xs leading-relaxed">
              Creamos murales a medida que convierten muros comunes en hitos
              visuales para tu marca y tu comunidad — un muro a la vez.
            </p>
          </div> */}
        </div>

        {/* Featured project */}
        <div className="mt-0 md:mt-8 px-6 md:px-10">
          <div className="flex justify-between text-[11px] md:text-xs uppercase tracking-wider mb-2">
            <span>Último proyecto</span>
            <span>2024</span>
            <span>Restobar&nbsp;Santiago</span>
          </div>
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-sm">
            <Image
              src="/images/img1.png"
              alt="Mural reciente pintado por Color Mural"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-0 md:mt-8 bg-[#FEF0DE] py-4 px-6 md:px-10 grid grid-cols-2 ">
          <div className="bg-[#FEF0DE] py-8 px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-serif mb-6">
              Así trabajamos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm md:text-base">
              <div>
                <p className="font-bold">1 Visita inicial</p>
                <p className="text-gray-700">
                  Conocemos el espacio
                  <br />y tu visión
                </p>
              </div>
              <div>
                <p className="font-bold">2 Propuesta y boceto</p>
                <p className="text-gray-700">
                  Recibes un diseño conceptualizado
                  <br />
                  personalizado
                </p>
              </div>
              <div>
                <p className="font-bold">3 Aprobación y producción</p>
                <p className="text-gray-700">Se agenda y ejecuta el mural</p>
              </div>
              <div>
                <p className="font-bold">4 Entrega final</p>
                <p className="text-gray-700">
                  ¡Listo para ser esamriado
                  <br />
                  (y fotografiado)!
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[500px] aspect-[4/3] grid grid-cols-2 grid-rows-2 gap-1 mx-auto rounded-sm overflow-hidden">
            <Image
              src="/images/img1.png"
              alt="Mural 1"
              width={500}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
            <Image
              src="/images/img1.png"
              alt="Mural 2"
              width={500}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
            <Image
              src="/images/img1.png"
              alt="Mural 3"
              width={500}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
            <Image
              src="/images/img1.png"
              alt="Mural 4"
              width={500}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
