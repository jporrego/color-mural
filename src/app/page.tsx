'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessTimeline from './components/ProcessTimeline';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('/images/img1.webp');

  const handleOpen = (src: string) => {
    setActiveImg(src);
    setOpen(true);
  };

  return (
    <div className="text-dark flex min-h-screen flex-col scroll-smooth font-sans">
      <Navbar />
      <Hero />
      <Projects onImageClick={handleOpen} />
      <ProcessTimeline />
      <About />
      <Contact />
      <Footer />
      <Lightbox open={open} imgSrc={activeImg} onClose={() => setOpen(false)} />
    </div>
  );
}
