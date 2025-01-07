import React, { type FC, type SVGProps } from 'react';

export const MuseumIcon: FC<SVGProps<SVGElement>> = ({ fill = '#6b6f72' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{ display: 'block', height: '24px', width: '24px', fill }}
    >
      <path d="M24 1a6 6 0 0 1 3 11.2V14a3 3 0 0 1-1.82 2.76l-.18.07v12.7c0 .96-.87 1.42-1.85 1.47H9c-.98 0-1.9-.42-2-1.33V16.82h-.01A3 3 0 0 1 5 14.19L5 14v-1.8A6 6 0 0 1 7.78 1H8zm0 2H8a4 4 0 0 0-.2 8H10a2 2 0 1 0-2-2.15V9H6a4 4 0 1 1 4.2 4H8c-.34 0-.67-.03-1-.08V14a1 1 0 0 0 .88 1H9v14h14V15h1a1 1 0 0 0 1-.88V12.92c-.25.04-.51.07-.78.08H21.8A4 4 0 1 1 26 8.8V9h-2v-.15A2 2 0 1 0 21.84 11L22 11h2a4 4 0 0 0 .2-8zm-7 12v12h-2V15zm-4 0v12h-2V15zm8 0v12h-2V15z"></path>
    </svg>
  );
};
