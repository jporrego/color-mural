import { CornerRightDown } from 'lucide-react';

interface Props {
  onImageClick: (src: string) => void;
}

interface ProjectGridProps extends Props {
  images: string[];
  centerLastRow?: boolean;
}

interface ProjectImageProps extends Props {
  file: string;
  className?: string;
}

const imageList1 = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'];
const imageList2 = [
  '7.webp',
  '8.webp',
  '9.webp',
  '10.webp',
  '11.webp',
  '12.webp',
  'im1.webp',
  'im2.webp',
];

function ProjectImage({
  file,
  className = '',
  onImageClick,
}: ProjectImageProps) {
  const imageName = file.replace('.webp', '');

  return (
    <button
      className={`group relative aspect-[4/3] overflow-hidden rounded-sm ${className}`}
      onClick={() => onImageClick(`/images/portfolio/${imageName}`)}
    >
      <img
        src={`/images/portfolio/${imageName}-640.webp`}
        srcSet={`
          /images/portfolio/${imageName}-320.webp 320w,
          /images/portfolio/${imageName}-640.webp 640w,
          /images/portfolio/${imageName}-960.webp 960w
        `}
        sizes="(max-width:768px) 50vw, 33vw"
        alt={`Mural art\u00edstico profesional en Chile - proyecto ${imageName}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
    </button>
  );
}

function ProjectGrid({
  images,
  centerLastRow = false,
  onImageClick,
}: ProjectGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-6 md:gap-4">
      {images.map((file, index) => {
        const mobileOnly = file === 'im1.webp' || file === 'im2.webp';
        const centeredPosition = centerLastRow
          ? index === images.length - 2
            ? 'sm:col-start-2'
            : index === images.length - 1
              ? 'sm:col-start-4'
              : ''
          : '';

        return (
          <ProjectImage
            key={file}
            file={file}
            className={`sm:col-span-2 ${centeredPosition} ${mobileOnly ? 'lg:hidden' : ''}`}
            onImageClick={onImageClick}
          />
        );
      })}
    </div>
  );
}

export default function Projects({ onImageClick }: Props) {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      <div className="bg-primary/30 pointer-events-none absolute -top-48 -right-48 h-96 w-96 rounded-full blur-[140px]" />

      <div className="mx-auto w-full max-w-[1920px] px-6 md:px-10">
        <p className="mb-6">/ Proyectos</p>
        <h2 className="mb-6 flex items-center gap-2 text-center text-3xl font-semibold md:text-6xl">
          <span>Trabajos</span>
          <span className="text-primary">destacados</span>
          <CornerRightDown className="text-primarux font-boy size-8 translate-y-[8px]" />
        </h2>
        <p className="mb-12 max-w-[800px]">
          Explora murales realizados en Santiago, regiones y a nivel
          internacional. Presentamos proyectos corporativos para oficinas y
          retail, arte decorativo para hogares y fachadas.
        </p>

        <ProjectGrid images={imageList1} onImageClick={onImageClick} />

        <div className="relative my-12 md:my-16">
          <div className="bg-primary/20 pointer-events-none absolute top-1/2 left-1/2 h-3/4 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
          <div className="relative grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)_minmax(0,1fr)] lg:gap-6">
            <ProjectImage
              file="im1.webp"
              className="hidden w-full lg:block"
              onImageClick={onImageClick}
            />

            <div className="relative mx-auto inline-flex max-w-full overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl shadow-black/60">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/10" />
              <video
                src="/videos/mural_light.mp4"
                loop
                muted
                autoPlay
                playsInline
                preload="metadata"
                aria-label={'Proceso de creaci\u00f3n de un mural de Color Mural'}
                className="block max-h-[85vh] max-w-full object-contain"
              />
            </div>

            <ProjectImage
              file="im2.webp"
              className="hidden w-full lg:block"
              onImageClick={onImageClick}
            />
          </div>
        </div>

        <ProjectGrid
          images={imageList2}
          centerLastRow
          onImageClick={onImageClick}
        />

        <div className="mt-2 w-full md:mt-4">
          <video
            src="/videos/colormural_light4.mp4"
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
            aria-label={'Selecci\u00f3n de proyectos de Color Mural'}
            className="w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
