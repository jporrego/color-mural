'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessTimeline from './components/ProcessTimeline';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import Gallery from './components/Gallery';

export default function Home() {
  /* ───────────────────────────────────── modal state ───────────────────────────────────── */
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('/images/img1.png');

  const handleOpen = (src: string) => {
    setActiveImg(src);
    setOpen(true);
  };

  return (
    <div className="text-dark flex min-h-screen flex-col scroll-smooth font-sans">
      {/* ─────────────── Top Navigation ─────────────── */}
      <Navbar />

      {/* ─────────────── Hero Section ─────────────── */}
      <Hero />
      <div className="">
        <div className="mx-auto w-full max-w-[1024px] px-6 py-12 md:px-10">
          <Gallery />
        </div>
      </div>
      {/* ─────────────── Process Section ─────────────── */}
      <ProcessTimeline />

      {/* ─────────────── Portfolio Section ─────────────── */}
      <Portfolio onImageClick={handleOpen} />

      {/* ─────────────── About Section ─────────────── */}
      <About />

      {/* ─────────────── Contact Section ─────────────── */}
      <Contact />

      {/* ─────────────── Footer ─────────────── */}
      <Footer />

      {/* ─────────────── Lightbox Modal ─────────────── */}
      <Lightbox open={open} imgSrc={activeImg} onClose={() => setOpen(false)} />
    </div>
  );
}
