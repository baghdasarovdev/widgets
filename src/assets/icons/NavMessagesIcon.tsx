import React, { type FC } from 'react';

type IconPropsT = {
  color: string;
};

export const NavMessagesIcon: FC<IconPropsT> = ({
  color = 'rgb(106, 106, 106)',
}) => {
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
        fill: color,
      }}
    >
      <path d="M16 31.08 11.84 26H6a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5h-5.85ZM6 4a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6.8l3.2 3.92L19.2 24H26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"></path>
    </svg>
  );
};
