import { type FC } from 'react';

type SectionTitlePropsT = {
  title: string;
  subtitle: string;
};

export const SectionTitle: FC<SectionTitlePropsT> = ({ title, subtitle }) => {
  return (
    <div>
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};
