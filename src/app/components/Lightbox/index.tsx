'use client';

import Image from 'next/image';

interface Props {
  open: boolean;
  imgSrc: string;
  onClose: () => void;
}

export default function Lightbox({ open, imgSrc, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      className="animate-fade fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imgSrc}
          alt="Mural ampliado"
          width={1200}
          height={800}
          className="max-h-[90vh] rounded-sm object-contain"
        />

        <button
          className="absolute top-2 right-2 text-2xl leading-none text-white"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}
