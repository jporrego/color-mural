import { Mail, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contacto"
      /* black canvas + faint glow to echo the rest of the site */
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* blue halo decor */}
      <div className="pointer-events-none absolute -top-72 -right-72 h-[400px] w-[400px] rounded-full bg-[#2343FF]/20 blur-[140px]" />

      <div className="pointer-events-none absolute -top-20 right-0 left-0 h-20 bg-gradient-to-b from-transparent to-black" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={variants}
          className="text-3xl font-semibold md:text-4xl"
        >
          <span className="text-[#2343FF]">¿Listo</span> para transformar tu
          espacio?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={variants}
          className="mt-3 max-w-prose text-lg text-white/80 md:text-xl"
        >
          Conversemos sobre tu proyecto.
        </motion.p>

        {/* Contact methods */}
        <div className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Email */}
          <motion.a
            variants={variants}
            href="mailto:hola@colormural.cl"
            className="group"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-white/5 p-8 backdrop-blur-md transition hover:shadow-2xl hover:shadow-[#2343FF]/30">
              <Mail className="h-8 w-8 text-[#2343FF] transition-transform group-hover:-translate-y-1" />
              <span className="text-sm font-medium tracking-wide md:text-base">
                hola@colormural.cl
              </span>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            variants={variants}
            href="tel:+56912345678"
            className="group"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-white/5 p-8 backdrop-blur-md transition hover:shadow-2xl hover:shadow-[#2343FF]/30">
              <PhoneCall className="h-8 w-8 text-[#2343FF] transition-transform group-hover:-translate-y-1" />
              <span className="text-sm font-medium tracking-wide md:text-base">
                +56&nbsp;9&nbsp;1234&nbsp;5678
              </span>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
