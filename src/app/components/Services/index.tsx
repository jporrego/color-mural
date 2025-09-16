const services = [
  {
    title: 'Muralismo corporativo',
    description:
      'Diseñamos murales para oficinas, corporativos y centros de innovación que buscan comunicar cultura interna, propósito y orgullo de pertenencia.',
    deliverables: [
      'Diagnóstico de espacio',
      'Concepto y bocetos a color',
      'Planificación por etapas',
    ],
  },
  {
    title: 'Intervenciones comerciales',
    description:
      'Creamos murales memorables para retail, gastronomía y hotelería, elevando la experiencia del cliente y diferenciando tu marca frente a la competencia.',
    deliverables: [
      'Desarrollo de narrativa visual',
      'Producción con materiales de alto tráfico',
      'Implementación fuera de horario comercial',
    ],
  },
  {
    title: 'Arte para comunidades y espacios públicos',
    description:
      'Co-diseñamos proyectos participativos junto a municipios, juntas de vecinos y fundaciones para revitalizar barrios y generar sentido de pertenencia.',
    deliverables: [
      'Metodologías participativas',
      'Gestión de permisos municipales',
      'Cierre con activaciones culturales',
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#f6f5ff] py-24 text-black">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="text-primary/80 text-sm tracking-widest uppercase">
          / Servicios
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Servicio de muralismo profesional en Chile
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-black/80">
          <p>
            Acompañamos a organizaciones y personas que necesitan un{' '}
            <strong>servicio de muralismo en Chile</strong> de principio a fin.
            Investigamos el contexto, definimos la estrategia narrativa y
            producimos murales de alto impacto visual que permanecen en el
            tiempo.
          </p>
          <p>
            Nuestro director creativo Benjamín Contador lidera a un equipo de
            pintores de murales, diseñadores y gestores culturales que coordinan
            cada etapa del proyecto. Trabajamos con pinturas profesionales,
            recubrimientos anti rayado y protocolos de seguridad para asegurar
            una ejecución impecable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-lg"
            >
              <div>
                <h3 className="text-xl font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-black/70">
                  {service.description}
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-black/70">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="bg-primary mt-1 h-1.5 w-1.5 rounded-full"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-black">
              Entregables clave
            </h3>
            <p className="mt-3 text-sm text-black/70">
              Incluimos planos, renders y fichas técnicas para coordinar con
              arquitectos, inmobiliarias y equipos de mantenimiento.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">
              Plazos y logística
            </h3>
            <p className="mt-3 text-sm text-black/70">
              Ajustamos calendarios a aperturas comerciales, actividades
              corporativas y temporadas altas de turismo para minimizar
              interrupciones.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">
              Impacto medible
            </h3>
            <p className="mt-3 text-sm text-black/70">
              Documentamos el proceso y los resultados para que puedas mostrar
              el impacto cultural, comunicacional y social de cada mural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
