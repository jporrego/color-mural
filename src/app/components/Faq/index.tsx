const faqs = [
  {
    question: '¿Qué incluye el servicio de muralismo de Color Mural?',
    answer:
      'Incluye visita técnica, levantamiento fotográfico, propuesta creativa, producción, instalación y sellado de protección. También podemos gestionar permisos municipales y coordinación con contratistas cuando el proyecto lo requiere.',
  },
  {
    question: '¿En qué ciudades de Chile trabajan?',
    answer:
      'Estamos radicados en Santiago, pero nos desplazamos a Valparaíso, Concepción, Antofagasta, La Serena y a cualquier región de Chile. Ajustamos el presupuesto considerando traslados y viáticos.',
  },
  {
    question: '¿Cuánto tiempo toma pintar un mural?',
    answer:
      'Dependiendo del metraje y la complejidad, un mural puede tomar entre 5 y 15 días hábiles. Coordinamos la ejecución para intervenir fuera de horarios punta y minimizar interrupciones en tu operación.',
  },
  {
    question: '¿Qué materiales utilizan para los murales?',
    answer:
      'Usamos pinturas profesionales para exterior e interior, con protección UV y recubrimientos anti grafiti. Esto garantiza un acabado duradero y fácil de mantener.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-24 text-black">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <p className="text-primary/80 text-sm tracking-widest uppercase">
          / Preguntas frecuentes
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Resolvemos dudas sobre nuestro muralismo en Chile
        </h2>
        <p className="mt-6 max-w-3xl text-base text-black/70">
          Estas respuestas resumen las consultas más habituales que recibimos de
          empresas, municipalidades y particulares interesados en contratar un{' '}
          <strong>pintor de murales profesional</strong>.
        </p>

        <div className="mt-12 space-y-8">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-black/5 bg-[#f6f5ff] p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <p className="mt-3 text-base text-black/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
