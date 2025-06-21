export default function Contact() {
  return (
    <section id="contacto" className="py-16">
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-6 px-6 text-center md:px-0">
        <h2 className="text-2xl md:text-4xl">
          ¿Listo para transformar tu espacio?
        </h2>
        <p className="max-w-prose text-sm md:text-base">
          Escríbenos y conversemos sobre tu proyecto. Responderemos en menos de
          24 horas.
        </p>
        <a
          href="mailto:hola@colormural.cl"
          className="inline-block rounded-sm bg-[#ff5e00] px-8 py-3 text-sm tracking-wider text-white uppercase transition-colors hover:bg-[#e65000] md:text-base"
        >
          hola@colormural.cl
        </a>
      </div>
    </section>
  );
}
