import React, { type FC } from 'react';

type CheckCircleActivePropsT = {
  width: number;
  height: number;
};
export const CheckCircleActive: FC<Partial<CheckCircleActivePropsT>> = (
  props,
) => {
  return (
    <svg
      width={props.width || '32'}
      height={props.height || '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15.9998" cy="16" r="13.3333" fill="#091E42" />
      <path
        d="M12 16L14.6667 18.6667L20 13.3334"
        stroke="white"
        strokeWidth="1.86667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
