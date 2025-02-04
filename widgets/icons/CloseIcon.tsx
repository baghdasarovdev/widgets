// @ts-nocheck directive by adding that at the top of the file
import React, { type FC } from 'react';

const CloseIcon: FC<React.SVGProps<SVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="close-icon"
      width="24"
      height="24"
      style={{ cursor: 'pointer' }}
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export default CloseIcon;
