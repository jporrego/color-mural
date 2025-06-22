'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    title: 'Visita inicial',
    desc: 'Conocemos el espacio y tu visión',
    img: '/images/process/visit.webp',
  },
  {
    title: 'Propuesta y boceto',
    desc: 'Recibes un diseño conceptualizado y personalizado',
    img: '/images/process/design.webp',
  },
  {
    title: 'Aprobación y producción',
    desc: 'Se agenda y ejecuta el mural',
    img: '/images/process/process1.webp',
  },
  {
    title: 'Entrega final',
    desc: '¡Listo para ser admirado y fotografiado!',
    img: '/images/portfolio/5-crop.webp',
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="proceso"
      /* solid black + faint circles for depth */
      className="relative overflow-hidden py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-full overflow-hidden">
        <Image
          src="/images/portfolio/1.webp"
          alt=""
          fill
          priority
          className="blur-xlx scale-110 object-cover brightness-20"
        />
      </div>

      {/* decorative rings (optional) */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[1800px] w-[1800px] -translate-x-1/2 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute top-[300px] left-1/2 h-[1800px] w-[1800px] -translate-x-1/2 rounded-full border border-white/5" />
      <div className="mx-auto max-w-[1000px] px-6">
        {/* heading */}
        <div className="mx-auto w-fit">
          <p className="mb-6">/ Proceso</p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-semibold md:text-6xl"
          >
            Nuestro<span className="text-blue-500"> proceso</span>
          </motion.h2>
        </div>

        {/* timeline */}
        <motion.ul
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative before:absolute before:top-0 before:left-1/2 before:h-full before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent"
        >
          {steps.map((step, idx) => (
            <motion.li
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
              className={`group relative mb-20 flex w-full items-center ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* connector dot */}
              <span className="absolute top-1/2 left-1/2 z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2343FF] text-xs font-bold">
                {idx + 1}
              </span>

              {/* text area */}
              <div
                className={`basis-1/2 px-4 md:px-8 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}
              >
                <div className="rounded-md p-4">
                  <h3 className="text-lg font-medium md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80 md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ stiffness: 150, damping: 15 }}
                className="basis-1/2 px-4"
              >
                <div className="relative h-[140px] w-full overflow-hidden rounded-lg shadow-2xl md:h-[220px]">
                  <Image
                    src={step.img}
                    alt={`Paso ${idx + 1} - ${step.title}`}
                    fill
                    quality={70}
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
