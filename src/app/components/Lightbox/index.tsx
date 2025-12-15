'use client';

import Image from 'next/image';

interface Props {
  open: boolean;
  imgSrc: string;
  onClose: () => void;
}

export default function Lightbox({ open, imgSrc, onClose }: Props) {
  if (!open) return null;
  console.log(imgSrc);

  return (
    <div
      className="animate-fade fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${imgSrc}-1280.webp`}
          srcSet={`
    ${imgSrc}-640.webp 640w,
    ${imgSrc}-960.webp 960w,
    ${imgSrc}-1280.webp 1280w,
    ${imgSrc}-1920.webp 1920w
  `}
          sizes="90vw"
          alt="Mural ampliado"
          className="max-h-[90vh] max-w-[90vw] rounded-sm object-contain"
          loading="eager"
          decoding="async"
        />

        <button
          className="absolute top-2 right-2 text-4xl leading-none text-white"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}
