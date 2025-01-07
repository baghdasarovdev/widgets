import React, { type FC } from 'react';

export const OpenNewPageIcon: FC = (props) => {
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
        height: '20px',
        width: '20px',
        stroke: 'currentcolor',
        strokeWidth: '3.2',
        overflow: 'visible',
      }}
      {...props}
    >
      <g fill="none">
        <path d="M26 18v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h9M17 4h10a1 1 0 0 1 1 1v10M27 5 11.5 20.5"></path>
      </g>
    </svg>
  );
};
