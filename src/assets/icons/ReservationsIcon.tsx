import React, { type FC } from 'react';

export const ReservationsIcon: FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: 'block',
        height: '24px',
        width: '24px',
        fill: 'currentcolor',
      }}
      {...props}
    >
      <path d="M26 6h-4V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2H6a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V11a5 5 0 0 0-5-5zM12 4h8v2h-8zM6 28a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h4v20zm6 0V8h8v20zm17-3a3 3 0 0 1-3 3h-4V8h4a3 3 0 0 1 3 3z"></path>
    </svg>
  );
};
