import { type FC } from 'react';
import { useTranslations } from 'next-intl';

import { helpCenterData } from '@/app/hosting/constants';

export const HelpCenter: FC = () => {
  const t = useTranslations();

  const helpCenterDataWithLinks = helpCenterData(t);

  return (
    <div className="flex flex-wrap">
      {helpCenterDataWithLinks.map((data) => {
        return (
          <div
            key={data.title}
            className="mr-2 mt-4 flex w-full flex-1 items-center rounded-2xl border border-gray-100/60 pb-5 pl-6.5 pr-8.5 pt-6 leading-5 lg:max-w-117"
          >
            {data.icon ? (
              <div className="w-12.5">
                <data.icon />
              </div>
            ) : null}
            <div className="ml-8">
              <p className="font-bold">{data.title}</p>
              <p className="mt-3 text-sm text-gray-600">{data.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
