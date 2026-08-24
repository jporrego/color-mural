import type { Metadata } from 'next';
import Script from 'next/script';
import { Raleway, Roboto, Roboto_Slab, DM_Sans } from 'next/font/google';
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Color Mural',
  url: 'https://www.colormural.cl',
  logo: 'https://www.colormural.cl/images/colormural_icon.svg',
  image: 'https://www.colormural.cl/opengraph-image.jpg',
  description:
    'Muralismo profesional en Chile y Santiago: murales decorativos y corporativos personalizados para empresas, oficinas y hogares.',
  areaServed: ['Chile', 'Santiago de Chile'],
  serviceType: [
    'Muralismo en Chile',
    'Muralismo en Santiago',
    'Muralismo en regiones de Chile',
    'Murales para empresas',
    'Murales decorativos',
    'Murales por encargo',
  ],
  sameAs: [
    'https://www.instagram.com/colormuralchile/',
    'https://wa.me/56941675960',
  ],
  telephone: '+569 41675960',
  email: 'hola@colormural.cl',
  founder: {
    '@type': 'Person',
    name: 'Benjamín Contador',
    jobTitle: 'Artista muralista',
  },
};

export const metadata: Metadata = {
  title:
    'Color Mural – Muralismo profesional en Chile y Santiago | Murales corporativos y decorativos',
  description:
    'Color Mural es un estudio de muralistas profesionales liderado por Benjamín Contador. Creamos murales decorativos y corporativos a medida en Chile y Santiago para empresas, oficinas, hogares y proyectos por encargo.',
  keywords: [
    'muralismo Chile',
    'muralismo en Chile',
    'muralismo Santiago',
    'muralistas profesionales',
    'muralistas en Chile',
    'muralistas en Santiago',
    'pintor de murales',
    'murales decorativos',
    'murales profesionales',
    'murales en Chile',
    'murales en Santiago',
    'murales para empresas',
    'murales para oficinas',
    'murales por encargo',
    'murales a medida',
    'diseño y pintura de murales',
    'contratar muralista en Chile',
    'contratar muralista profesional',
    'Color Mural',
    'Benjamín Contador',
  ],
  metadataBase: new URL('https://www.colormural.cl'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Color Mural - Muralistas profesionales en Chile y Santiago',
    description:
      'Muralismo profesional para empresas, oficinas y espacios residenciales en Chile. Murales decorativos y corporativos personalizados por Color Mural.',
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
  return (
    <html lang="es">
      <body
        className={`antialiased ${raleway.variable} ${roboto.variable} ${robotoSlab.variable} ${dmSans.variable}`}
      >
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=728156629371054&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
      {/* <GoogleAnalytics gaId="G-DPRRN2C238" /> */}
    </html>
  );
}
