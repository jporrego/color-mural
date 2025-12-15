'use client';

import { CheckCircle } from 'lucide-react';

const serviceLists = [
  {
    title: 'Murales para empresas y oficinas',
    items: [
      'Murales corporativos en Santiago y otras ciudades de Chile',
      'Diseño y pintura de murales para oficinas, cowork y retail',
      'Murales por encargo que refuerzan cultura interna y marca empleadora',
      'Murales a medida para salas de reuniones, hall de acceso y fachadas',
    ],
  },
  {
    title: 'Murales decorativos y residenciales',
    items: [
      'Murales decorativos para hogares, terrazas y departamentos',
      'Muralistas profesionales para proyectos boutique en Santiago y regiones',
      'Creación de murales personalizados con estilos contemporáneos y artísticos',
      'Murales a medida pensados para diseño de interiores y paisajismo',
    ],
  },
  {
    title: 'Proceso y contratación de muralismo',
    items: [
      'Asesoría inicial y visita a terreno en Chile para definir el alcance',
      'Boceto y presupuesto transparente antes de pintar el mural',
      'Ejecución segura y rápida por muralistas profesionales',
      'Opciones para empresas que buscan contratar muralista en Chile de forma ágil',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#0b0b0f] py-24 text-white"
    >
      <div className="bg-primary/20 pointer-events-none absolute top-10 -left-32 h-80 w-80 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm tracking-wide text-white/70 uppercase">
            / Servicios
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Muralismo en Chile para marcas, oficinas y espacios decorativos
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Somos un estudio de muralistas profesionales en Chile especializado
            en murales decorativos, corporativos y murales por encargo en
            Santiago y regiones. Combinamos arte y estrategia para crear murales
            a medida que potencian la identidad de cada espacio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {serviceLists.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-[#6ea3ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 md:text-base">
          <p>
            ¿Buscas contratar muralista en Chile? Agendamos proyectos en
            Santiago, Valparaíso y otras regiones. Realizamos murales a medida
            para empresas, oficinas, hoteles, restaurantes y proyectos
            residenciales, siempre con un proceso claro de diseño y pintura de
            murales.
          </p>
        </div>
      </div>
    </section>
  );
}
