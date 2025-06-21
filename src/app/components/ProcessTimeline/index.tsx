import Image from 'next/image';

const steps = [
  {
    title: 'Visita inicial',
    desc: 'Conocemos el espacio y tu visión',
    img: '/images/img1.jpg',
  },
  {
    title: 'Propuesta y boceto',
    desc: 'Recibes un diseño conceptualizado y personalizado',
    img: '/images/img2.jpg',
  },
  {
    title: 'Aprobación y producción',
    desc: 'Se agenda y ejecuta el mural',
    img: '/images/img3.jpg',
  },
  {
    title: 'Entrega final',
    desc: '¡Listo para ser admirado y fotografiado!',
    img: '/images/img4.jpg',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="proceso" className="bg-block1 mt-8">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-10 md:px-10">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-4xl">
          Nuestro proceso
        </h2>

        {/* Vertical timeline */}
        <div className="relative">
          {/* central line for desktop */}
          <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#3c2e23]/20 md:block" />

          <ul className="space-y-8 md:space-y-12">
            {steps.map((step, idx) => (
              <li
                key={step.title}
                className={`group flex items-center gap-4 ${
                  idx % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* image block */}
                <div className="flex-shrink-0 basis-28 overflow-hidden rounded-sm shadow-lg sm:basis-36 md:basis-1/2">
                  <div className="relative aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={step.img}
                      alt={`Paso ${idx + 1} - ${step.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 112px, 50vw"
                      priority
                    />
                  </div>
                </div>

                {/* text block */}
                <div
                  className={`flex-1 ${
                    idx % 2 === 0 ? 'text-left md:pl-8' : 'text-right md:pr-8'
                  }`}
                >
                  <span className="mb-1 inline-block rounded-sm bg-[#ff5e00]/10 px-2 py-0.5 text-xs font-bold tracking-widest text-[#ff5e00] uppercase">
                    {idx + 1}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
