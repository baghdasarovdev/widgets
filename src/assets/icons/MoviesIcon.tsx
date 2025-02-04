import React, { type FC, type SVGProps } from 'react';

export const MoviesIcon: FC<SVGProps<SVGElement>> = ({ fill = '#6b6f72' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{ display: 'block', height: '24px', width: '24px', fill }}
    >
      <path d="m28.17 2.13.04.14L29.3 7 10.59 12H30v17a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V13.13L1 9.39A2 2 0 0 1 2.28 7l.14-.04L16.64 3.2l.02-.04.03.02L25.8.78a2 2 0 0 1 2.37 1.35zM28 19H4v10h24V19zm-16.42-5H4v3h4.58l3-3zM28 14h-3.59l-3 3H28v-3zm-6.42 0h-7.17l-3 3h7.17l3-3zM7.1 7.78l-4.17 1.1.78 2.9 7.04-1.9-3.65-2.1zm9.3-2.45L9.86 7.06l3.63 2.1 6.53-1.75-3.6-2.08zm9.86-2.6-7.1 1.87 3.58 2.08 4.18-1.12-.66-2.83z"></path>
    </svg>
  );
};
