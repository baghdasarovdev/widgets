import React, { type FC } from 'react';

export const Notification: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={{
        display: 'block',
        fill: 'none',
        height: props.height || '24px',
        width: props.width || '24px',
        stroke: 'currentColor',
        strokeWidth: '2',
        overflow: 'visible',
      }}
      aria-hidden="true"
      role="presentation"
      focusable="false"
      {...props}
    >
      <g fill="none">
        <path d="M6.83 20.55 7 20.3V13a9 9 0 1 1 18 0v7.3l.17.25 2.68 4.02a.92.92 0 0 1-.77 1.43H4.92a.92.92 0 0 1-.77-1.43zm6.18 5.82-.01.83a3 3 0 1 0 6 0l-.01-.77M16 1v3"></path>
      </g>
    </svg>
  );
};
