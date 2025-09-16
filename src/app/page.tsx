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
import Services from './components/Services';
import Coverage from './components/Coverage';
import Faq from './components/Faq';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('/images/img1.webp');

  const handleOpen = (src: string) => {
    setActiveImg(src);
    setOpen(true);
  };

  return (
    <div className="text-dark flex min-h-screen flex-col scroll-smooth font-sans">
      <Script
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
      />
      {/* noscript fallback (optional) */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=728156629371054&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Color Mural',
          image: 'https://www.colormural.cl/opengraph-image.jpg',
          url: 'https://www.colormural.cl',
          telephone: '+56 9 9576 7606',
          email: 'hola@colormural.cl',
          priceRange: '$$',
          description:
            'Estudio de muralismo en Chile que diseña y pinta murales corporativos, comerciales, residenciales y comunitarios.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Nueva Providencia 1881, oficina 1504',
            addressLocality: 'Providencia',
            addressRegion: 'RM',
            postalCode: '7500000',
            addressCountry: 'CL',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -33.426283,
            longitude: -70.615134,
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Santiago',
            },
            {
              '@type': 'City',
              name: 'Valparaíso',
            },
            {
              '@type': 'City',
              name: 'Concepción',
            },
            {
              '@type': 'Country',
              name: 'Chile',
            },
          ],
          sameAs: [
            'https://www.instagram.com/colormuralchile/',
            'https://www.facebook.com/colormural',
          ],
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Servicio de muralismo corporativo',
                areaServed: 'Chile',
                serviceType: 'Muralismo para empresas y oficinas',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'CLP',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Murales para espacios públicos y comunidades',
                areaServed: 'Chile',
                serviceType: 'Intervenciones artísticas urbanas',
              },
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'CLP',
              },
            },
          ],
        })}
      </Script>
      <Navbar />
      <Hero />
      <Services />
      <Projects onImageClick={handleOpen} />
      <ProcessTimeline />
      <About />
      <Coverage />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Lightbox open={open} imgSrc={activeImg} onClose={() => setOpen(false)} />
    </div>
  );
}
