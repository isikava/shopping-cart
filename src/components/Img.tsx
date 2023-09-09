import { CSSProperties } from 'react';

interface ImageProps {
  src?: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt?: string;
  fill?: boolean;
  style?: CSSProperties;
}

export const Img = ({
  src,
  srcSet,
  width,
  height,
  alt,
  fill = false,
  style,
}: ImageProps) => {
  const fillStyles: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: 0,
    objectFit: 'cover',
    ...(style || {}),
  };

  if (fill) {
    return <img src={src} srcSet={srcSet} alt={alt} style={fillStyles} />;
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      alt={alt}
      width={width}
      height={height}
      style={style}
    />
  );
};
