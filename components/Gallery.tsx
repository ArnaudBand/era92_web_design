// components/Gallery.tsx
import React from 'react';
import Image from 'next/image';

interface GalleryProps {
  children: React.ReactNode;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ children, className }) => {
  const images = [
    '/assets/i1.jpg',
    '/assets/i2.jpg',
    '/assets/i3.jpg',
    '/assets/i4.jpg',
    '/assets/i5.jpg',
    '/assets/i6.jpg',
    '/assets/i7.jpg',
    '/assets/i8.jpg',
    '/assets/i9.jpg',
  ];

  return (
    <div className={`relative min-h-screen ${className}`}>
      <div className="p-4 h-1/4">
        <Image src={images[8]} layout="fill" objectFit="cover" alt='bg-image' />
      </div>
      {/* Center children */}
      <div className="absolute inset-0 flex items-center justify-center" >
        {children}
      </div>
    </div>
  );
};

export default Gallery;
