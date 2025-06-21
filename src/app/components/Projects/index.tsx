'use client';

import Image from 'next/image';

interface Props {
  onImageClick: (src: string) => void;
}

const imageList = [
  '1.jpg',
  '2.jpg',
  '3.jpeg',
  '4.jpeg',
  '5.jpg',
  '6.jpg',
  '7.jpeg',
  '8.jpeg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
];

export default function Projects({ onImageClick }: Props) {
  return (
    <section id="projects" className="py-12">
      <div className="mx-auto w-full max-w-[1000px] px-6 md:px-10">
        <h2 className="mb-8 text-center text-2xl md:text-3xl">
          Proyectos destacados
        </h2>

        <video
          src={'/videos/color mural.mp4'}
          loop
          muted
          autoPlay
          playsInline
          className="mb-2 w-full object-cover transition-transform duration-300"
        />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {imageList.map((file) => {
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
