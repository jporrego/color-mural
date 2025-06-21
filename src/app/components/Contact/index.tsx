import { Mail, PhoneCall, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contacto" className="py-20">
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
          className="text-2xl font-semibold md:text-3xl"
        >
          ¿Listo para transformar tu espacio?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={variants}
          className="mt-4 max-w-prose text-base md:text-lg"
        >
          Conversemos sobre tu proyecto.
        </motion.p>

        {/* Contact Methods */}
        <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Email */}
          <motion.a
            variants={variants}
            href="mailto:hola@colormural.cl"
            className="group"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 transition-shadow group-hover:shadow-lg">
              <Mail className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
              <span className="font-medium tracking-wide">
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
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 transition-shadow group-hover:shadow-lg">
              <PhoneCall className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
              <span className="font-medium tracking-wide">
                +56&nbsp;9&nbsp;1234&nbsp;5678
              </span>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            variants={variants}
            href="https://wa.me/56912345678?text=Hola%20Color%20Mural!"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 transition-shadow group-hover:shadow-lg">
              <MessageCircle className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
              <span className="font-medium tracking-wide">WhatsApp</span>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
