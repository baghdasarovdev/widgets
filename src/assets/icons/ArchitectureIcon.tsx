import React, { type FC, type SVGProps } from 'react';

export const ArchitectureIcon: FC<SVGProps<SVGElement>> = ({
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
      <path d="m24.73 2.29.48 1.94-3.21.8V14h7a1 1 0 0 1 1 .88V29a1 1 0 0 1-.88 1H3a1 1 0 0 1-1-.88V10.03l-.73.18L.8 8.27zM9 21.99H4V28h5zM28 16H11v12h4v-7a1 1 0 0 1 .88-1H21a1 1 0 0 1 1 .88V28h6zm-8 6h-3v6h3zm5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM9 8.28 4 9.53V20h5zm11-2.75-9 2.25V14h9z"></path>
    </svg>
  );
};
