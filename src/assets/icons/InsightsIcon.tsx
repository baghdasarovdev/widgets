import React, { type FC } from 'react';

export const InsightsIcon: FC = (props) => {
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
      <path d="M27 5h-4a2 2 0 0 0-2 2v4h-4V3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM9 29H5V13h4zm6 0h-4V3h4zm6 0h-4V13h4zm6 0h-4V7h4z"></path>
    </svg>
  );
};
