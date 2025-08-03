import type { Metadata } from 'next';
import { Raleway, Roboto, Roboto_Slab, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const robotoSlab = Roboto_Slab({
  variable: '--font-roboto-slab',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Color Mural – Servicio de muralismo en Chile',
  description:
    'Color Mural es el estudio del artista Benjamín Contador en Chile, especializado en murales y servicios de muralismo que transforman espacios urbanos y comerciales.',
  keywords: [
    'murales',
    'muralismo',
    'muralismo en Chile',
    'pintor de murales',
    'servicio de muralismo en Chile',
    'arte urbano',
    'Benjamín Contador',
    'Color Mural',
    'Chile',
  ],
  metadataBase: new URL('https://www.colormural.cl'),
  openGraph: {
    title: 'Color Mural - Estudio de Murales',
    description:
      'Descubre cómo Color Mural convierte muros comunes en verdaderos hitos urbanos con muralismo en Chile.',
    url: 'https://www.colormural.cl',
    locale: 'es_CL',
    type: 'website',
    images: ['/opengraph-image.jpg'],
  },

  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Color Mural',
    url: 'https://www.colormural.cl',
    description:
      'Servicio de muralismo en Chile dirigido por el artista Benjamín Contador',
    image: 'https://www.colormural.cl/images/colormural.svg',
    sameAs: [
      'https://www.instagram.com/colormuralchile/',
      'https://wa.me/56995767606',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CL',
    },
  };

  return (
    <html lang="es">
      <body
        className={`antialiased ${raleway.variable} ${roboto.variable} ${robotoSlab.variable} ${dmSans.variable}`}
      >
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      {/* <GoogleAnalytics gaId="G-DPRRN2C238" /> */}
    </html>
  );
}
