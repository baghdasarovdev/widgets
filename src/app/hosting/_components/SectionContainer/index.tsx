import { type FC, type ReactNode } from 'react';

import { cn } from '@/helper';

type SectionContainerPropsT = {
  children: ReactNode;
  className?: string;
};

export const SectionContainer: FC<SectionContainerPropsT> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-8xl px-6 sm:px-10 2sm:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
};
