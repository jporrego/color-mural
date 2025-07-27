import type { Metadata } from 'next';
import { Raleway, Roboto, Roboto_Slab, DM_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
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
    'Color Mural es el estudio del artista Benjamín Contador, especializado en murales que transforman espacios urbanos y comerciales, con un servicio de muralismo que aporta identidad y carácter a cada entorno.',
  keywords: [
    'murales',
    'arte urbano',
    'Benjamín Contador',
    'Color Mural',
    'Chile',
  ],
  metadataBase: new URL('https://www.colormural.cl'),
  openGraph: {
    title: 'Color Mural - Estudio de Murales',
    description:
      'Descubre cómo Color Mural convierte muros comunes en verdaderos hitos urbanos. Solicita un mural personalizado para tu proyecto.',
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
        {children}
      </body>
      <GoogleAnalytics gaId="G-DPRRN2C238" />
    </html>
  );
}
