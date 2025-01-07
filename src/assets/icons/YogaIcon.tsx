import React, { type FC, type SVGProps } from 'react';

export const YogaIcon: FC<SVGProps<SVGElement>> = ({ fill = '#6b6f72' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{ display: 'block', height: '24px', width: '24px', fill }}
    >
      <path d="M13 16v7h6v-7h2v7h5a3 3 0 0 1 .18 6H6a3 3 0 0 1 0-6h5v-7zm2 9H6a1 1 0 0 0-1 .88V26a1 1 0 0 0 .88 1H15zm11 0h-9v2h9.12a1 1 0 0 0 .87-.88L27 26v-.12a1 1 0 0 0-1-.88zM16 2a4 4 0 0 1 3 6.64v.44h.03a6.48 6.48 0 0 1 4.63 3.25l.12.23c.8 1.58 2.07 2.37 3.96 2.43H28v2c-2.67 0-4.68-1.1-5.87-3.28l-.13-.25a4.48 4.48 0 0 0-3.78-2.45L18 11h-1V7.73a2 2 0 1 0-2 0V11h-1c-1.56 0-2.97.87-3.69 2.24l-.09.19c-1.02 2.23-2.98 3.43-5.72 3.56V17H3v-2h1c2.17 0 3.55-.73 4.31-2.21l.1-.2a6.16 6.16 0 0 1 4.37-3.47l.22-.04v-.43A4 4 0 0 1 16 2zm13 13v2h-1v-2z"></path>
    </svg>
  );
};
