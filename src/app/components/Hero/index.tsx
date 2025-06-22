import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="inicio"
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-background relative isolate w-full overflow-hidden"
    >
      {/* Background video */}
      <video
        src="/videos/colormural_light3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 -z-9 bg-black/40 backdrop-brightness-65" />

      {/* Content wrapper */}
      <div className="relative mx-auto flex w-full max-w-[1000px] flex-col gap-10 pt-8">
        {/* Headline block */}
        <motion.div className="mt-4 grid grid-cols-1 gap-4 px-6 text-white md:mt-16 md:grid-cols-[80%_20%] md:px-10">
          <div className="mb-0 flex flex-col items-center md:items-start">
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 15, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-dm-serif text-4xl leading-none font-semibold md:text-5xl"
            >
              COLOR MURAL
            </motion.h1>
            <motion.span
              initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.25 }}
              className="my-3 h-px w-full bg-white/40 md:my-4 md:block"
            />
            <motion.h3
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 text-center text-xl leading-none italic md:mb-0 md:text-left md:text-2xl"
            >
              Murales que transforman espacios
            </motion.h3>
          </div>
          <motion.div
            className="hidden md:block"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 15, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <motion.p className="text-xs leading-relaxed">
              Color Mural es un estudio de arte dirigido por el artista Benjamin
              Contador.
            </motion.p>
            <motion.a className="relative" href="#projects">
              <Image
                src="/images/benja.webp"
                alt="Equipo Color Mural trabajando"
                width={100}
                height={100}
                className="mt-4 rounded-sm"
              />
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute bottom-2 bg-white"
              >
                <ArrowRight className="bg-highlight h-6 w-8 text-white" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Gallery */}
        <motion.div className="px-6 pb-12 md:px-10 md:pt-10">
          <div className="mb-2 flex justify-between text-white">
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              className="text-sm leading-relaxed md:text-base"
            >
              Mural de las flores
            </motion.p>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.75 }}
              className="text-sm leading-relaxed md:text-base"
            >
              2025
            </motion.p>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.25, delay: 1 }}
              className="text-sm leading-relaxed md:text-base"
            >
              Santander
            </motion.p>
          </div>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 5, opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            <Image
              src="/images/portfolio/5-crop.webp"
              alt="Mural de Color Mural"
              width={1000}
              height={500}
              className="w-full rounded-sm object-cover"
            />
          </motion.div>{' '}
        </motion.div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center gap-4 bg-white/100 p-6 md:gap-6">
        <motion.div
          className="text-center text-xs font-semibold md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Estos clientes ya confiaron en nuestro trabajo
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-center gap-6 md:gap-16"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          variants={container}
        >
          <Image
            src="/images/logos/santander.webp"
            alt="Mural de Color Mural"
            width={125}
            height={50}
            className="h-auto w-[75px] md:w-[125px]"
          />{' '}
          <Image
            src="/images/logos/starbucks.webp"
            alt="Mural de Color Mural"
            width={65}
            height={50}
            className="h-auto w-[40px] md:w-[65px]"
          />
          <Image
            src="/images/logos/banco_chile.webp"
            alt="Mural de Color Mural"
            width={125}
            height={50}
            className="h-auto w-[75px] md:w-[125px]"
          />
          <Image
            src="/images/logos/socovesa.webp"
            alt="Mural de Color Mural"
            width={125}
            height={50}
            className="h-auto w-[75px] md:w-[125px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
