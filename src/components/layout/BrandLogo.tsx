import Image, { type StaticImageData } from 'next/image';

import wordmark from '@/imgs/Luiz Barbosa Branco H.svg';

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Image
      className={className}
      src={wordmark as StaticImageData}
      alt=""
      width={777}
      height={148}
      sizes="(max-width: 640px) 132px, 168px"
    />
  );
}
