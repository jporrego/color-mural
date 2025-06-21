import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="bg-block1-soft py-12">
      <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="mb-6 text-center text-2xl md:text-left md:text-3xl">
            Nuestra esencia
          </h2>
          <p className="text-center text-sm leading-relaxed md:text-left md:text-base">
            Color Mural es el estudio del artista Benjamin Contador,
            especializado en la creación de murales a gran escala que
            transforman muros comunes en hitos urbanos. Creemos en el poder del
            color, la narrativa visual y la colaboración cercana con cada
            cliente para plasmar identidad y emoción en cada trazo.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/about.jpg"
            alt="Equipo Color Mural trabajando"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
