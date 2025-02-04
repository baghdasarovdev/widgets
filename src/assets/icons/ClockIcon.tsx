import React, { type FC } from 'react';

export const ClockIcon: FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={{
        display: 'block',
        height: '24px',
        width: '24px',
        fill: 'currentColor',
      }}
      {...props}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="M16 .33a15.67 15.67 0 1 1 0 31.34A15.67 15.67 0 0 1 16 .33zm0 2a13.67 13.67 0 1 0 0 27.34 13.67 13.67 0 0 0 0-27.34zm1 3v10.1l8.74 5.04-1 1.73L15 16.58V5.33z"></path>
    </svg>
  );
};
