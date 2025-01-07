import React, { type FC, type SVGProps } from 'react';

export const TheaterIcon: FC<SVGProps<SVGElement>> = ({ fill = '#6b6f72' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{ display: 'block', height: '24px', width: '24px', fill }}
    >
      <path d="M23 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-7-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-8 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm22-4v12a9.98 9.98 0 0 1-17.98 6H12C6.49 26 2 21.51 2 16V4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2h6a2 2 0 0 1 2 2zM12 24a8 8 0 0 0 8-8V4H4v12a8 8 0 0 0 8 8zM28 8h-6v8a9.92 9.92 0 0 1-1.38 5.04c1.58.16 3.03.96 4.15 2.29l-1.54 1.28A4.2 4.2 0 0 0 20.01 23c-.36 0-.7.07-1.05.17a9.99 9.99 0 0 1-4.57 2.53A7.97 7.97 0 0 0 20 28a8 8 0 0 0 8-8V8zM13.29 25.9l-.09.02.09-.01zM12 18a4.21 4.21 0 0 1-3.24-1.64l-1.54 1.28A6.18 6.18 0 0 0 12.01 20c1.8 0 3.5-.83 4.76-2.33l-1.54-1.28A4.21 4.21 0 0 1 12.01 18z"></path>
    </svg>
  );
};
