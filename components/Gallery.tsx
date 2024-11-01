import React from 'react';
import Image from 'next/image';

interface GalleryProps {
  children: React.ReactNode;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ children, className }) => {
  const images = [
    '/assets/i9.jpg',
  ];

  return (
    <div className={`relative min-h-screen ${className}`}>
      <div className="p-4 h-1/4">
        <Image src={images[0]} layout="fill" objectFit="cover" alt='bg-image' />
      </div>
      {/* Center children */}
      <div className="absolute inset-0 flex items-center justify-center" >
        {children}
      </div>
    </div>
  );
};

export default Gallery;
