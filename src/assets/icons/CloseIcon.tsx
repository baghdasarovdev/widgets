import React, { type FC } from 'react';

export const CloseIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: 'block',
        fill: 'none',
        height: '16px',
        width: '16px',
        stroke: 'currentcolor',
        strokeWidth: '4',
        overflow: 'visible',
      }}
      {...props}
    >
      <path d="m6 6 20 20M26 6 6 26"></path>
    </svg>
  );
};
