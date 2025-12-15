'use client';

import { CheckCircle } from 'lucide-react';

const serviceLists = [
  {
    title: 'Murales Corporativos ',
    items: [
      'Arte corporativo de alto impacto en Santiago y regiones.',
      'Diseños que refuerzan la cultura interna y marca.',
      'Murales a medida para oficinas, salas de reuniones, coworks y fachadas.',
    ],
  },
  {
    title: 'Muralismo Decorativo y Residencial',
    items: [
      'Murales exclusivos para hogares, terrazas y departamentos.',
      'Proyectos boutique integrados al diseño de interiores y paisajismo.',
      'Estilos contemporáneos personalizados por artistas profesionales.',
    ],
  },
  {
    title: 'Proceso y Contratación',
    items: [
      'Asesoría inicial y visita a terreno para definir el alcance.',
      'Boceto digital y presupuesto transparente antes de pintar.',
      'Ejecución limpia y segura por nuestro equipo de muralistas.',
      'Gestión ágil para empresas que buscan contratar arte en Chile.',
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
            Muralismo profesional para empresas y espacios residenciales
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Combinamos arte y estrategia para transformar oficinas, locales
            comerciales y hogares, creando piezas únicas que potencian cada
            lugar.
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
                    <CheckCircle className="mt-0.5 h-4 w-4 min-w-[16px] text-[#6ea3ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
