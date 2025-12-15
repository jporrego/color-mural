import Image from 'next/image';
import { CornerRightDown } from 'lucide-react';
import useIsDesktop from '@/hooks/useIsDesktop';

interface Props {
  onImageClick: (src: string) => void;
}

const imageList1 = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'];
const imageList2 = [
  '7.webp',
  '8.webp',
  '9.webp',
  '10.webp',
  '11.webp',
  '12.webp',
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
        <h2 className="mb-6 flex items-center gap-2 text-center text-3xl font-semibold md:text-6xl">
          <span>Trabajos</span>
          <span className="text-primary">destacados</span>
          <CornerRightDown className="text-primarux font-boy size-8 translate-y-[8px]" />
        </h2>
        <p className="mb-12 max-w-[800px]">
          Explora el portafolio de nuestro estudio para descubrir cómo Color
          Mural transforma muros en obras memorables que dan nueva vida a
          espacios corporativos, comerciales y residenciales.
        </p>

        {/* ③ first image grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {imageList1.map((file) => {
            return (
              <button
                key={file}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
       onClick={() => onImageClick(`/images/portfolio/${file.replace('.webp', '')}`)}

              >
               <img
                src={`/images/portfolio/${file.replace('.webp', '-640.webp')}`}
                srcSet={`
                  /images/portfolio/${file.replace('.webp', '-320.webp')} 320w,
                  /images/portfolio/${file.replace('.webp', '-640.webp')} 640w,
                  /images/portfolio/${file.replace('.webp', '-960.webp')} 960w
                `}
                sizes="(max-width:768px) 50vw, 33vw"
                alt={`Mural ${file}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
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
          {imageList2.map((file) => {
            return (
              <button
                key={file}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
           onClick={() => onImageClick(`/images/portfolio/${file.replace('.webp', '')}`)}
              >
              <img
                src={`/images/portfolio/${file.replace('.webp', '-640.webp')}`}
                srcSet={`
                  /images/portfolio/${file.replace('.webp', '-320.webp')} 320w,
                  /images/portfolio/${file.replace('.webp', '-640.webp')} 640w,
                  /images/portfolio/${file.replace('.webp', '-960.webp')} 960w
                `}
                sizes="(max-width:768px) 50vw, 33vw"
                alt={`Mural ${file}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
