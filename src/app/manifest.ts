import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Color Mural - Servicio de Muralismo en Chile',
    short_name: 'Color Mural',
    description:
      'Color Mural es el estudio de Benjamín Contador, especializado en murales que transforman espacios urbanos y comerciales en Chile.',
    lang: 'es-CL',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#2343FF',
    background_color: '#000',
    icons: [
      { src: '/favicon.ico', sizes: '72x72', type: 'image/x-icon' },
      {
        src: '/apple-icon.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'icon.png',
        sizes: '72x72',
        type: 'image/png',
      },
    ],
    categories: ['art', 'design', 'business'],
    shortcuts: [
      {
        name: 'Proyectos',
        short_name: 'Proyectos',
        url: '/#proyectos',
      },
      {
        name: 'Contacto',
        short_name: 'Contacto',
        url: '/#contacto',
      },
    ],
  };
}
