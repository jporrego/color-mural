import Image from 'next/image';

export default function About() {
  return (
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
  );
}
