import { type FC, type ReactNode } from 'react';

type TabContainerPropsT = {
  children: ReactNode;
};

export const TabContainer: FC<TabContainerPropsT> = ({ children }) => {
  return (
    <div className="flex h-vh-listing-tabs-mobile flex-col gap-4 overflow-x-hidden overflow-y-scroll px-5 pb-10 pt-6 md:h-vh-listing-tabs md:px-10 2sm:pl-17 2sm:pr-16">
      {children}
    </div>
  );
};
