import React, { type FC } from 'react';

type IconPropsT = {
  color: string;
};
export const NavListingIcon: FC<IconPropsT> = ({
  color = 'rgb(106, 106, 106)',
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
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
      <path d="m30.6557454.56112368.6885092 1.87775264-2.3445092.85824736.0002546 24.70287632c0 1.1045695-.8954305 2-2 2h-22c-1.1045695 0-2-.8954305-2-2l-.00025465-15.1688763-1.6554907.6077526-.6885093-1.8777526 2.344-.859.00025465-7.7021237h2l-.00025465 6.96812368zm-3.656 3.47-22.00000005 8.06600002.00025465 15.9028763h6v-10c0-1.1045695.8954305-2 2-2h6c1.1045695 0 2 .8954305 2 2v10h6zm-7.9997454 13.96887632h-6v10h6zm4-9c.5522847 0 1 .44771525 1 1 0 .5522847-.4477153 1-1 1s-1-.4477153-1-1c0-.55228475.4477153-1 1-1z"></path>
    </svg>
  );
};
