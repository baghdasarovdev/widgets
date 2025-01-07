import React, { type FC } from 'react';

import { cn } from '@/helper';

export type WithHoverBackgroundProps = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
};

export const IconWrapper: FC<WithHoverBackgroundProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-f4f7 p-2 transition-colors duration-300 ease-in-out hover:bg-gray-light',
        className,
      )}
    >
      {children}
    </div>
  );
};
