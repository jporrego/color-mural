'use client';

import Image from 'next/image';

interface Props {
  onImageClick: (src: string) => void;
}

export default function Portfolio({ onImageClick }: Props) {
  return (
    <section id="portafolio" className="mt-8">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-12 md:px-10">
        <h2 className="mb-8 text-2xl md:text-4xl">Portafolio</h2>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {[...Array(9)].map((_, idx) => {
            const src = `/images/portfolio/${idx + 1}.jpg`;

            return (
              <button
                key={src}
                className="group relative aspect-[4/3] overflow-hidden"
                onClick={() => onImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Mural ${idx + 1}`}
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
