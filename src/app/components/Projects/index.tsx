'use client';

import Image from 'next/image';

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
  return (
    <section id="projects" className="bg-background py-12">
      <div className="mx-auto w-full max-w-[1000px] px-6 md:px-10">
        <h2 className="mb-8 text-center text-2xl md:text-3xl">
          Proyectos destacados
        </h2>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {imageList1.map((file) => {
            const src = `/images/portfolio/${file}`;
            return (
              <button
                key={src}
                className="group relative aspect-[4/3] overflow-hidden"
                onClick={() => onImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Mural ${file}`}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>
        <video
          src={'/videos/color mural.mp4'}
          loop
          muted
          autoPlay
          playsInline
          className="my-2 w-full object-cover transition-transform duration-300 md:my-4"
        />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {imageList2.map((file) => {
            const src = `/images/portfolio/${file}`;
            return (
              <button
                key={src}
                className="group relative aspect-[4/3] overflow-hidden"
                onClick={() => onImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Mural ${file}`}
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
