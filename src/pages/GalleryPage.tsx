import React from 'react';
import { GallerySection } from '../components/home/GallerySection';

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-28 pb-12 bg-ivory-100 min-h-screen">
      <GallerySection showAllLink={false} />
    </div>
  );
};
