import React, { type FC, type SVGProps } from 'react';

export const FoodIcon: FC<SVGProps<SVGElement>> = ({ fill = '#6b6f72' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{ display: 'block', height: '24px', width: '24px', fill }}
    >
      <path d="M12 1a5 5 0 0 1 4.9 4H31v2H16.9a5 5 0 0 1-3.9 3.9v7.44A9 9 0 0 1 28.95 23H31v3a5 5 0 0 1-4.78 5H6a5 5 0 0 1-5-4.78V23h2V11H1V9h2V7H1V5h2V3H1V1h11zm17 24H3v1a3 3 0 0 0 2.65 2.98l.17.01L6 29h20a3 3 0 0 0 3-2.82V25zM7 11H5v12h2V11zm4 0H9v12h2V11zm9 10a3 3 0 0 0-2.83 2h5.66A3 3 0 0 0 20 21zm0-4a7 7 0 0 0-6.93 6h2.03a5 5 0 0 1 9.8 0h2.03A7 7 0 0 0 20 17zM7 3H5v6h2V3zm4 0H9v6h2V3zm2 .17v5.66a3 3 0 0 0 0-5.66z"></path>
    </svg>
  );
};
