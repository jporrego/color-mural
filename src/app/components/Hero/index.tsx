import Gallery from '../Gallery';
import Image from 'next/image';
import { ArrowRight, ArrowRightCircleIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex w-full max-w-[1000px] flex-col gap-10 pt-8"
    >
      {/* Headline block */}
      <div className="mt-4 grid grid-cols-1 gap-4 px-6 md:mt-16 md:grid-cols-[80%_20%] md:px-10">
        <div className="mb-8 max-w-xl">
          <h1 className="font-dm-serif mb-2 text-4xl leading-none md:text-5xl">
            COLOR MURAL
          </h1>
          <span className="my-1 block h-px w-full bg-[#3c2e23]/25 md:my-4" />
          <h3 className="text-2xl leading-none md:text-2xl">
            Murales que transforman espacios
          </h3>
        </div>
        <div className="hidden md:block">
          <p className="text-xs leading-relaxed">
            Color Mural es un estudio de arte urbano dirigido por el artista
            Benjamin Contador.
          </p>
          <a className="relative" href="#projects">
            <Image
              src="/images/benja.jpg"
              alt="Equipo Color Mural trabajando"
              width={100}
              height={100}
              className="mt-4 rounded-sm"
            />
            <div className="absolute bottom-2 bg-white">
              <ArrowRight className="bg-highlight h-6 w-8 text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* Gallery */}

      <div className="px-6 pb-12 md:px-10 md:pt-10">
        <div className="mb-2 flex justify-between">
          <p className="text-sm leading-relaxed md:text-base">
            Mural de las flores
          </p>
          <p className="text-sm leading-relaxed md:text-base">2025</p>
          <p className="text-sm leading-relaxed md:text-base">Santander</p>
        </div>
        <Image
          src="/images/portfolio/5-crop.jpg"
          alt="Mural de Color Mural"
          width={1000}
          height={500}
          className="w-full rounded-sm object-cover"
        />
      </div>

      {/* <div className="px-6 py-12 md:px-10">
        <Gallery />
      </div> */}
    </section>
  );
}
