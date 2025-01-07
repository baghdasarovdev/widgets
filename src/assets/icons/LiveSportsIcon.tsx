import React, { type FC, type SVGProps } from 'react';

export const LiveSportsIcon: FC<SVGProps<SVGElement>> = ({
  fill = '#6b6f72',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{ display: 'block', height: '24px', width: '24px', fill }}
    >
      <path d="M28 2a3 3 0 0 1 3 2.82V16a1 1 0 0 1-.88 1H26v12a1 1 0 0 1-.77.97l-.11.02L25 30H7a1 1 0 0 1-1-.88V17H2a1 1 0 0 1-.97-.77L1 16.12 1 16V5a3 3 0 0 1 2.82-3H4zm-4 24H8v2h16zM11 4H8v20h16V4h-3a5 5 0 0 1-10 .22zm2 7a2 2 0 0 1 2 1.85V21a1 1 0 0 1-.88 1H10v-2h3v-2h-2a2 2 0 0 1-2-1.85V13a2 2 0 0 1 1.85-2H11zm8 0a2 2 0 0 1 2 1.85V21a1 1 0 0 1-.88 1H18v-2h3v-2h-2a2 2 0 0 1-2-1.85V13a2 2 0 0 1 1.85-2H19zm-8 2h-2v3h2zm8 0h-2v3h2zm8 0h-3v2h3zM6 13H3v2h3zm22-9h-2v7h3V5a1 1 0 0 0-.77-.97L28.12 4zM6 4H4a1 1 0 0 0-1 .88V11h3zm13 0h-6a3 3 0 0 0 6 .18z"></path>
    </svg>
  );
};
