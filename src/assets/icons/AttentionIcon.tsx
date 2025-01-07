import React, { type FC } from 'react';

export const AttentionIcon: FC = () => {
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
        height: '24px',
        width: '24px',
        stroke: 'rgb(193, 53, 21)',
        overflow: 'visible',
        strokeWidth: '2.66667',
      }}
    >
      <circle cx="16" cy="16" r="14" fill="none"></circle>
      <path fill="none" d="M16 8v10"></path>
      <circle cx="16" cy="22.5" r=".5"></circle>
    </svg>
  );
};
