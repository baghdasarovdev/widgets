import { type FC, type ReactNode } from 'react';

type FooterBoxPropsT = {
  title: string;
  children?: ReactNode;
};

export const FooterBox: FC<FooterBoxPropsT> = ({ children, title }) => {
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium">{title}</h3>
      <div className="flex flex-col gap-3 *:text-sm">{children}</div>
    </div>
  );
};
