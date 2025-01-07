import React, { type FC } from 'react';

type LeftArrowPropsT = React.SVGProps<SVGSVGElement> & {
  width: number;
  height: number;
};

export const LeftArrow: FC<Partial<LeftArrowPropsT>> = (props) => {
  return (
    <svg
      width={props.width || '40'}
      height={props.height || '40'}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      {...props}
    >
      <circle cx="20" cy="20" r="20" fill="#F4F5F7" />
      <path
        d="M18 27L11 20M11 20L18 13M11 20L29 20"
        stroke="#091E42"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
