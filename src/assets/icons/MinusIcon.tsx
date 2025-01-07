import React, { type FC } from 'react';

export const MinusIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: 'block',
        height: '17px',
        width: '17px',
        fill: 'currentcolor',
      }}
      {...props}
    >
      <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
    </svg>
  );
};
