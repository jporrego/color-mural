'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import useIsDesktop from '@/hooks/useIsDesktop';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  const isDesktop = useIsDesktop();
  const prefersReduced = useReducedMotion();
  const reduceMotion = prefersReduced || !isDesktop;
  const animationKey = reduceMotion ? 'no-motion' : 'with-motion';

  return (
    <motion.section
      key={animationKey}
      id="inicio"
      initial={reduceMotion ? false : 'hidden'}
      animate={reduceMotion ? undefined : 'show'}
      variants={reduceMotion ? undefined : container}
      className="relative isolate flex h-screen w-full flex-col justify-start overflow-hidden pt-40 md:justify-end md:pt-0"
    >
      {/* ── Background ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {isDesktop ? (
          <video
            src="/videos/colormural_light4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover brightness-40"
          />
        ) : (
          <Image
            src="/images/portfolio/5.webp"
            alt="Color Mural background"
            fill
            priority
            className="object-cover brightness-40"
          />
        )}
      </div>

      {/* Dark veil so white text always pops */}
      {/* <div className="absolute inset-0 -z-9 bg-black/45 backdrop-brightness-[.65]" /> */}

      {/* ── Text block ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1920px] px-6 pb-20">
        {/* Headline row */}
        <motion.div
          variants={reduceMotion ? undefined : container}
          className="flex flex-col items-start gap-6 md:flex-row md:items-end"
        >
          {/* Brand name */}
          <motion.h1
            initial={reduceMotion ? false : { y: 20, opacity: 0 }}
            animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[60vw] max-w-[300px] min-w-[300px]"
          >
            <span className="sr-only">
              Color Mural — especialistas en murales urbanos
            </span>
            <Image
              src="/images/colormural.svg"
              alt="Color Mural — especialistas en murales que transforman espacios cotidianos en hitos urbanos"
              width={536}
              height={412}
              priority
              className="h-auto w-full"
              sizes="(max-width: 768px) 40vw, 20vw"
            />
          </motion.h1>

          {/* Tag-line (wraps under larger screens) */}
          <motion.p
            initial={reduceMotion ? false : { y: 20, opacity: 0 }}
            animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="max-w-2xl text-lg font-medium text-white md:pl-10 md:text-2xl"
          >
            Especialistas en murales que transforman espacios cotidianos en
            hitos urbanos, dirigido por el artista Benjamín Contador
          </motion.p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute inset-x-0 bottom-20 z-20 mx-auto flex w-full max-w-[1920px] flex-col gap-4 px-6 md:static md:bottom-auto md:mt-12 md:flex-row"
        >
          <a
            href="#contacto"
            className="bg-primary inline-block w-fit rounded-full px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1232f5] md:text-base"
          >
            Solicita una propuesta
          </a>

          {/* <a
            href="#agenda"
            className="inline-block w-fit rounded-full border border-white/50 px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 md:ml-auto md:text-base"
          >
            Conversa con nosotros
          </a> */}
        </motion.div>
      </div>
    </motion.section>
  );
}
