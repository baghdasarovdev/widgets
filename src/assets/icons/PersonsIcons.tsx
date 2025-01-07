import React, { type FC } from 'react';

export const PersonsIcons: FC = (props) => {
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
      <path d="M32 25h-2a8 8 0 0 0-7-7.93v-2.25a3 3 0 1 0-2 0v2.25a7.96 7.96 0 0 0-3.5 1.33A9.95 9.95 0 0 1 20 25h-2a7.95 7.95 0 0 0-2-5.28 8.06 8.06 0 0 0-1.5-1.32 7.96 7.96 0 0 0-3.5-1.33v-2.25a3 3 0 1 0-2 0v2.25A8 8 0 0 0 2 25H0a10.02 10.02 0 0 1 6.55-9.39 5 5 0 1 1 6.9 0 9.98 9.98 0 0 1 2.55 1.4 9.98 9.98 0 0 1 2.55-1.4 5 5 0 1 1 6.9 0A10.02 10.02 0 0 1 32 25Z"></path>
    </svg>
  );
};
