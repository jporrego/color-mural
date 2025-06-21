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
      <div className="mt-4 grid grid-cols-[80%_20%] px-6 md:mt-24 md:px-10">
        <div className="mb-8 max-w-xl">
          <h1 className="mb-2 text-4xl leading-none font-semibold md:text-5xl">
            COLOR MURAL
          </h1>
          <span className="my-1 block h-px w-full bg-[#3c2e23]/25 md:my-4" />
          <h3 className="text-2xl leading-none md:text-2xl">
            Murales que transforman espacios
          </h3>
        </div>
        <div>
          <p className="text-xs leading-relaxed">
            Color Mural es un estudio de arte urbano dirigido por el artista
            Benjamin Contador.
          </p>
          <div className="relative">
            <Image
              src="/images/img3.jpg"
              alt="Equipo Color Mural trabajando"
              width={100}
              height={100}
              className="mt-4 rounded-sm"
            />
            <div className="absolute bottom-2 bg-white">
              <ArrowRight className="bg-highlight h-6 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}

      <div className="px-6 py-12 md:px-10">
        <div className="mb-2 flex justify-between">
          <p className="text-sm leading-relaxed md:text-base">
            Restobar Santiago
          </p>
          <p className="text-sm leading-relaxed md:text-base">2025</p>
          <p className="text-sm leading-relaxed md:text-base">
            Restobar Santiago
          </p>
        </div>
        <Image
          src="/images/img2.jpg"
          alt="Mural de Color Mural"
          width={1000}
          height={600}
          className="w-full rounded-sm object-cover"
        />
      </div>

      {/* <div className="px-6 py-12 md:px-10">
        <Gallery />
      </div> */}
    </section>
  );
}
