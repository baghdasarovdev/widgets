import React, { type FC } from 'react';

type XCircleCheckedPropsT = {
  width: number;
  height: number;
};

export const XCircleChecked: FC<Partial<XCircleCheckedPropsT>> = (props) => {
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
        d="M13.3335 18.6667L16.0002 16M16.0002 16L18.6668 13.3334M16.0002 16L13.3335 13.3334M16.0002 16L18.6668 18.6667"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
