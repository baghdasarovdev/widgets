import React, { type FC, type SVGProps } from 'react';

export const PhotographIcon: FC<SVGProps<SVGElement>> = ({
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
      <path d="M17.59 2a2 2 0 0 1 1.28.47l.13.12L21.42 5H25a5 5 0 0 1 4.98 4.56l.02.22V24a5 5 0 0 1-4.78 5H7a5 5 0 0 1-5-4.78V10a5 5 0 0 1 4.78-5h3.83L13 2.6a2 2 0 0 1 1.07-.57l.17-.02.18-.01zm0 2h-3.17l-2.97 3H7a3 3 0 0 0-3 2.82V24a3 3 0 0 0 2.82 3H25a3 3 0 0 0 3-2.82V10a3 3 0 0 0-2.82-3h-4.59zM16 9a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM7 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </svg>
  );
};
