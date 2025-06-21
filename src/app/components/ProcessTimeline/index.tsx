import { motion } from 'framer-motion';
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
    <section id="proceso" className="bg-block1/40 py-20">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-xl font-semibold md:text-2xl"
        >
          Nuestro proceso
        </motion.h2>

        {/* timeline */}
        <motion.ul
          variants={{ show: { transition: { staggerChildren: 0.25 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
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
              className={`group relative mb-12 flex flex-col items-center gap-8 md:mb-14 md:flex-row ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* connector dot */}
              <span className="absolute top-1/2 -left-1.5 z-10 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-[#ff5e00] md:left-1/2 md:flex md:-translate-x-1/2"></span>

              {/* text area */}
              <div
                className={`order-2 w-full md:order-1 md:w-1/2 ${
                  idx % 2 === 0
                    ? 'md:pl-12 md:text-left'
                    : 'md:pr-12 md:text-right'
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="mb-2 inline-block rounded-full bg-[#ff5e00]/10 px-3 py-1 text-sm font-bold tracking-widest text-[#ff5e00] uppercase"
                >
                  {idx + 1}
                </motion.span>
                <h3 className="text-xl font-medium md:text-xl">{step.title}</h3>
                <p className="text-sm text-[#3c2e23]/90 md:text-base">
                  {step.desc}
                </p>
              </div>

              {/* image */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ stiffness: 150, damping: 15 }}
                className="order-1 overflow-hidden rounded-xl shadow-xl md:order-2"
              >
                <div className="relative h-[200px] w-[250px]">
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
