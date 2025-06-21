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
      <Navbar />

      <Hero />

      <ProcessTimeline />

      <Portfolio onImageClick={handleOpen} />

      <About />

      <Contact />

      <Footer />

      <Lightbox open={open} imgSrc={activeImg} onClose={() => setOpen(false)} />
    </div>
  );
}
