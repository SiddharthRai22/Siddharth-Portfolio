import React from 'react';

export type StaticImageData = string | { src: string; width?: number; height?: number };

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string | StaticImageData;
  alt?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  fill = false,
  priority = false,
  sizes,
  className = '',
  style,
  width,
  height,
  ...props
}) => {
  const resolvedSrc = typeof src === 'string' ? src : (src as { src: string })?.src || '';

  const fillStyles: React.CSSProperties = fill
    ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }
    : {};

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      sizes={sizes}
      width={width}
      height={height}
      className={className}
      style={{ ...fillStyles, ...style }}
      {...props}
    />
  );
};

export default Image;
