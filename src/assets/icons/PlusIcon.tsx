import React, { type FC } from 'react';

type PlusIconPropsT = {
  width: number;
  height: number;
  color: string;
};

export const PlusIcon: FC<Partial<PlusIconPropsT>> = (props) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      {...props}
    >
      <path
        d="M12 4V20M20 12L4 12"
        stroke={props.color ?? '#091E42'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
