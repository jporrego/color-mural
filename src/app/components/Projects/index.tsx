import Image from 'next/image';
import { CornerRightDown } from 'lucide-react';
import useIsDesktop from '@/hooks/useIsDesktop';

interface Props {
  onImageClick: (src: string) => void;
}

const projects = [
  {
    file: '1.webp',
    alt: 'Mural abstracto en fachada corporativa en Santiago de Chile',
  },
  {
    file: '2.webp',
    alt: 'Intervención de muralismo en oficina creativa en Providencia',
  },
  {
    file: '3.webp',
    alt: 'Mural de gran formato para tienda retail en Santiago',
  },
  {
    file: '4.webp',
    alt: 'Arte urbano con figuras orgánicas en Ñuñoa, Chile',
  },
  {
    file: '5.webp',
    alt: 'Mural colorido en galería comercial de Las Condes',
  },
  {
    file: '6.webp',
    alt: 'Mural exterior para condominio residencial en Vitacura',
  },
  {
    file: '7.webp',
    alt: 'Mural educativo creado en colegio de Maipú',
  },
  {
    file: '8.webp',
    alt: 'Mural artístico para restaurante turístico en Valparaíso',
  },
  {
    file: '9.webp',
    alt: 'Intervención mural para edificio cultural en Concepción',
  },
  {
    file: '10.webp',
    alt: 'Mural geométrico en centro de innovación de Santiago',
  },
  {
    file: '11.webp',
    alt: 'Mural colaborativo realizado con comunidad de Rancagua',
  },
  {
    file: '12.webp',
    alt: 'Mural panorámico para proyecto inmobiliario en La Serena',
  },
];

export default function Projects({ onImageClick }: Props) {
  const isDesktop = useIsDesktop();
  return (
    <section
      id="proyectos"
      /* ① full-width dark block with a subtle blue halo in the corner */
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      {/* blue glow just for a bit of flair */}
      <div className="bg-primary/30 pointer-events-none absolute -top-48 -right-48 h-96 w-96 rounded-full blur-[140px]" />

      <div className="mx-auto w-full max-w-[1920px] px-6 md:px-10">
        {/* ② headline: white + accent-blue word + arrow */}
        <p className="mb-6">/ Proyectos</p>
        <h2 className="mb-6 flex flex-wrap items-center justify-center gap-2 text-center text-3xl font-semibold md:text-6xl">
          <span>Trabajos</span>
          <span className="text-primary">destacados</span>
          <CornerRightDown className="text-primarux font-boy size-8 translate-y-[8px]" />
        </h2>
        <div className="mb-12 max-w-[900px] space-y-4">
          <p>
            Cada mural es una historia pintada junto a nuestros clientes. Nos
            especializamos en <strong>muralismo en Chile</strong> con enfoque en
            identidad local, revitalización de barrios y posicionamiento de
            marcas. Desde fachadas corporativas en Santiago hasta circuitos
            turísticos en Valparaíso, diseñamos obras a medida para cada
            objetivo.
          </p>
          <p className="text-white/80">
            Nuestro equipo se hace cargo de la investigación, dirección de arte
            y producción en terreno para entregar murales duraderos y seguros. A
            continuación encontrarás una muestra de intervenciones recientes en
            espacios corporativos, educacionales y residenciales.
          </p>
        </div>

        {/* ③ first image grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {projects.slice(0, 6).map(({ file, alt }) => {
            return (
              <button
                key={file}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
                onClick={() => onImageClick(`/images/portfolio/${file}`)}
              >
                <Image
                  src={`/images/portfolio/thumbs/${file}`}
                  alt={alt}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>

        {/* ④ inline video break */}
        <div className={`${isDesktop ? 'my-4' : 'my-2'} w-full`}>
          {isDesktop && (
            <video
              src="/videos/colormural_light4.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="w-full rounded-sm object-cover"
            />
          )}
        </div>

        {/* ⑤ second image grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {projects.slice(6).map(({ file, alt }) => {
            return (
              <button
                key={file}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
                onClick={() => onImageClick(`/images/portfolio/${file}`)}
              >
                <Image
                  src={`/images/portfolio/thumbs/${file}`}
                  alt={alt}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
