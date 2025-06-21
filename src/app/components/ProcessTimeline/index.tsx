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
      <div className="mx-auto w-full max-w-[1000px] px-6 py-12 md:px-10">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-4xl">
          Nuestro proceso
        </h2>

        {/* Vertical timeline */}
        <div className="relative">
          {/* central line */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-[#3c2e23]/20 md:left-1/2 md:-translate-x-1/2"></div>

          <ul className="space-y-10 md:space-y-16">
            {steps.map((step, idx) => (
              <li
                key={step.title}
                className={`group flex flex-col items-center md:flex-row ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* text block */}
                <div
                  className={`order-2 mt-4 w-full md:order-1 md:w-1/2 ${
                    idx % 2 === 0
                      ? 'md:pl-8 md:text-left'
                      : 'md:pr-8 md:text-right'
                  }`}
                >
                  <span className="mb-1 inline-block rounded-sm bg-[#ff5e00]/10 px-2 py-0.5 text-xs font-bold tracking-widest text-[#ff5e00] uppercase">
                    {idx + 1}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base">{step.desc}</p>
                </div>

                {/* image block */}
                <div className="order-1 w-full overflow-hidden rounded-sm shadow-lg md:order-2 md:w-1/2">
                  <div className="relative aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={step.img}
                      alt={`Paso ${idx + 1} - ${step.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
