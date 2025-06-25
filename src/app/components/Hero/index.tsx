'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../Navbar';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  return (
    <motion.section
      id="inicio"
      initial="hidden"
      animate="show"
      variants={container}
      /* Full-screen hero, positions everything at the bottom */
      className="relative isolate flex h-screen w-full flex-col justify-start overflow-hidden pt-40 md:justify-end md:pt-0"
    >
      {/* ── Background ─────────────────────────────────────────────── */}
      <video
        src="/videos/colormural_light4.mp4"
        autoPlay
        playsInline
        poster="/images/portfolio/5.webp"
        loop
        muted
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover brightness-40"
      />

      {/* Dark veil so white text always pops */}
      {/* <div className="absolute inset-0 -z-9 bg-black/45 backdrop-brightness-[.65]" /> */}

      {/* ── Text block ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1920px] px-6 pb-20">
        {/* Headline row */}
        <motion.div
          variants={container}
          className="flex flex-col items-start gap-6 md:flex-row md:items-end"
        >
          {/* Brand name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(48px,10vw,100px)] leading-[0.85] font-semibold text-white"
          >
            COLOR
            <br />
            MURAL
          </motion.h1>

          {/* Tag-line (wraps under larger screens) */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl text-lg font-medium text-white md:pl-10 md:text-2xl"
          >
            Especialistas en murales que transforman espacios cotidianos en
            hitos urbanos, dirigido por el artista Benjamín Contador
          </motion.p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute inset-x-0 bottom-20 z-20 mx-auto flex w-full max-w-[1920px] flex-col gap-4 px-6 md:static md:bottom-auto md:mt-12 md:flex-row"
        >
          <a
            href="#contacto"
            className="bg-primary inline-block w-fit rounded-full px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1232f5] md:text-base"
          >
            Solicita una propuesta
          </a>

          {/* secondary CTA sits flush right on ≥md screens */}
          <a
            href="#agenda"
            className="inline-block w-fit rounded-full border border-white/50 px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 md:ml-auto md:text-base"
          >
            Conversa con nosotros
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
