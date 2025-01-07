import React, { type FC, type SVGProps } from 'react';

export const ShoppingIcon: FC<SVGProps<SVGElement>> = ({
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
      <path d="M27.08 8.82a2 2 0 0 0-2-1.82h-2.16A7 7 0 0 0 9.08 7H6.91a2 2 0 0 0-1.99 1.82l-1.82 20V29c0 1.1.9 2 2 2H27.09a1.99 1.99 0 0 0 1.35-.72c.34-.41.5-.93.46-1.46l-1.82-20zM16 3a5 5 0 0 1 4.9 4h-9.8A5 5 0 0 1 16 3zM5.1 29 6.9 9H25.1l1.81 20H5.1zM11 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm12 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  );
};
