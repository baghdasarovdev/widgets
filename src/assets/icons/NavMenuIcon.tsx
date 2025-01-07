import React, { type FC } from 'react';

type IconPropsT = {
  color: string;
};

export const NavMenuIcon: FC<IconPropsT> = ({
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
        fill: 'none',
        height: '24px',
        width: '24px',
        stroke: color,
        strokeWidth: '2',
        overflow: 'visible',
      }}
    >
      <g fill="none">
        <path d="M2 16h28M2 24h28M2 8h28"></path>
      </g>
    </svg>
  );
};
