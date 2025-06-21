import Gallery from '../Gallery';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex w-full max-w-[1000px] flex-col gap-10 pt-8"
    >
      {/* Headline block */}
      <div className="mt-4 flex items-start justify-between px-6 md:mt-24 md:px-10">
        <div className="mb-8 max-w-xl">
          <h1 className="mb-2 text-5xl leading-none font-semibold md:text-6xl">
            COLOR MURAL
          </h1>
          <span className="my-2 block h-px w-full bg-[#3c2e23] md:my-4" />
          <h3 className="text-2xl leading-none md:text-3xl">
            Murales que transforman espacios
          </h3>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 py-12 md:px-10">
        <Gallery />
      </div>
    </section>
  );
}
