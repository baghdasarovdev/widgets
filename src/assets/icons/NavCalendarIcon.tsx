import React, { type FC } from 'react';

type IconPropsT = {
  color: string;
};

export const NavCalendarIcon: FC<IconPropsT> = ({
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
      <path d="M28 2h-6V0h-2v2h-8V0h-2v2H4a2 2 0 0 0-2 2v21a5 5 0 0 0 5 5h12.59a2.01 2.01 0 0 0 1.41-.59L29.41 21a2.01 2.01 0 0 0 .59-1.41V4a2 2 0 0 0-2-2Zm-8 25.59V23a3 3 0 0 1 3-3h4.59ZM28 10H4v2h24v6h-5a5 5 0 0 0-5 5v5H7a3 3 0 0 1-3-3V4h6v2h2V4h8v2h2V4h6Z"></path>
    </svg>
  );
};
