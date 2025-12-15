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
import WhatsAppButton from './components/WhatsAppButton';
import Script from 'next/script';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('/images/img1.webp');

  const handleOpen = (src: string) => {
    setActiveImg(src);
    setOpen(true);
  };

  return (
    <div className="text-dark flex min-h-screen flex-col scroll-smooth font-sans">
      {/* <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '728156629371054');
            fbq('track', 'PageView');
          `,
        }}
      /> */}
      {/* noscript fallback (optional) */}
      {/* <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=728156629371054&ev=PageView&noscript=1"
        />
      </noscript> */}
      <Navbar />
      <Hero />
      <Projects onImageClick={handleOpen} />
      <ProcessTimeline />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Lightbox open={open} imgSrc={activeImg} onClose={() => setOpen(false)} />
    </div>
  );
}
