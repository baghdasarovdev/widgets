'use client';
import type { FC, JSX } from 'react';
import { useRef } from 'react';

export const Video: FC<{ source: string }> = ({ source }): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (): void => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (): void => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      data-testid="video-player"
      crossOrigin="anonymous"
      preload="auto"
      style={{ objectFit: 'cover' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      height={70}
      width={70}
      muted
    >
      <source src={source} />
    </video>
  );
};
