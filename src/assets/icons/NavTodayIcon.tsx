import React, { type FC } from 'react';

type IconPropsT = {
  color: string;
};

export const NavTodayIcon: FC<IconPropsT> = ({
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
      <path d="M13.92 1.11a3 3 0 0 1 4.02-.13l.14.13 11.3 10.87a2 2 0 0 1 .61 1.26l.01.18V27a3 3 0 0 1-2.82 3H5a3 3 0 0 1-3-2.82V13.43a2 2 0 0 1 .49-1.31l.12-.13L13.92 1.1zm2.77 1.44a1 1 0 0 0-1.29-.08l-.1.08L4 13.43V27a1 1 0 0 0 .88 1H27a1 1 0 0 0 1-.88V13.43L16.7 2.55zM22 12.6 23.41 14 14 23.41 8.59 18 10 16.59l4 4 8-8z"></path>
    </svg>
  );
};
