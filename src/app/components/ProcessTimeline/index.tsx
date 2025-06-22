import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    title: 'Visita inicial',
    desc: 'Conocemos el espacio y tu visión',
    img: '/images/process/visit.png',
  },
  {
    title: 'Propuesta y boceto',
    desc: 'Recibes un diseño conceptualizado y personalizado',
    img: '/images/process/design.jpeg',
  },
  {
    title: 'Aprobación y producción',
    desc: 'Se agenda y ejecuta el mural',
    img: '/images/process/process1.jpg',
  },
  {
    title: 'Entrega final',
    desc: '¡Listo para ser admirado y fotografiado!',
    img: '/images/portfolio/5-crop.jpg',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="proceso" className="bg-block1-soft py-6 md:py-12">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 md:px-6">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-xl sm:text-2xl md:text-3xl"
        >
          Nuestro proceso
        </motion.h2>

        {/* timeline */}
        <motion.ul
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative before:absolute before:top-0 before:left-1/2 before:h-full before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-[#3c2e23]/30 before:to-transparent"
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
              className={`group relative mb-10 flex w-full items-center ${
                idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* connector dot with step number inside */}
              <span className="bg-highlight absolute top-1/2 left-1/2 z-10 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold text-white md:h-5 md:w-5">
                {idx + 1}
              </span>

              {/* text area */}
              <div
                className={`basis-1/2 px-2 ${
                  idx % 2 === 0
                    ? 'pl-4 text-left md:pl-8'
                    : 'pr-4 text-right md:pr-8'
                }`}
              >
                <div className="rounded-sm p-1 md:p-3">
                  <h3 className="text-sm font-medium sm:text-base md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base">{step.desc}</p>
                </div>
              </div>

              {/* image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ stiffness: 150, damping: 15 }}
                className="basis-1/2 px-4"
              >
                <div className="relative h-[110px] w-full overflow-hidden rounded-lg shadow-lg sm:h-[150px] md:h-[200px]">
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
