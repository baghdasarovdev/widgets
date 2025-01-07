import { type FC, type ReactNode } from 'react';

type SectionTitlePropsT = {
  children: ReactNode;
};

export const SectionTitle: FC<SectionTitlePropsT> = ({ children }) => {
  return (
    <h2 className="mb-1 self-start text-xxl font-medium sm:text-2xxl">
      {children}
    </h2>
  );
};
