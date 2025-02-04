import React, { type FC } from 'react';

type ChangeToListViewIconPropsT = {
  width: number;
  height: number;
  color: string;
};

export const ChangeToListViewIcon: FC<Partial<ChangeToListViewIconPropsT>> = (
  props,
) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H6C4.89543 10 4 9.10457 4 8V6Z"
        stroke="#091E42"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16C4 14.8954 4.89543 14 6 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V16Z"
        stroke="#091E42"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
