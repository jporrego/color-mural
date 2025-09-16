const cities = [
  'Santiago y Región Metropolitana',
  'Valparaíso y Viña del Mar',
  'Concepción y Biobío',
  'La Serena y Coquimbo',
  'Antofagasta y zona norte',
  'Región de Los Lagos',
];

const industries = [
  'Corporativos, startups y coworks',
  'Centros comerciales y retail',
  'Hoteles, restaurantes y turismo',
  'Municipios y gobiernos regionales',
  'Colegios, universidades y fundaciones',
  'Proyectos inmobiliarios y residenciales',
];

export default function Coverage() {
  return (
    <section
      id="cobertura"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 md:flex-row md:px-10">
        <div className="md:w-2/5">
          <p className="text-sm tracking-widest text-white/60 uppercase">
            / Cobertura
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Pintores de murales en Chile con base en Santiago
          </h2>
          <div className="mt-6 space-y-4 text-base text-white/80">
            <p>
              Operamos desde la comuna de Providencia en Santiago y nos
              desplazamos a distintas regiones de Chile según los requerimientos
              de cada proyecto. Coordinamos transporte, montaje de andamios y
              seguros para que tu intervención de muralismo sea segura y
              eficiente.
            </p>
            <p>
              Atendemos encargos para municipalidades, empresas privadas y
              comunidades residenciales. Si tu ciudad no está en la lista,
              conversemos: podemos coordinar visitas técnicas y trabajo en
              formato intensivo.
            </p>
          </div>

          <address className="mt-8 text-sm text-white/60 not-italic">
            <strong className="block text-white">Color Mural</strong>
            Av. Nueva Providencia 1881, oficina 1504
            <br />
            Providencia, Santiago, Chile
            <br />
            <span className="text-white">Teléfono:</span> +56 9 9576 7606
          </address>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">Ciudades clave</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {cities.map((city) => (
                <li key={city} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="bg-primary mt-1 h-1.5 w-1.5 rounded-full"
                  />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Sectores que atendemos
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {industries.map((industry) => (
                <li key={industry} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="bg-primary mt-1 h-1.5 w-1.5 rounded-full"
                  />
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
