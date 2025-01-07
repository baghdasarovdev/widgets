import React, { type FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { resourcesAndTabs } from '@/app/hosting/constants';

export const Resources: FC = () => {
  const t = useTranslations();

  const resourcesAndTabsWithUrls = useMemo(() => resourcesAndTabs(t), [t]);

  return (
    <div className="flex w-full flex-col flex-wrap justify-between gap-4 2xxs:flex-row">
      {resourcesAndTabsWithUrls.map((resources) => {
        return (
          <div
            key={resources.title}
            className="mt-4 flex max-w-100 rounded-2xl border border-gray-light 2xxs:my-8 2xxs:block 2xxs:w-full 2xxs:max-w-75"
          >
            <div>
              <img
                className="h-full w-25 rounded-t-2xl 2xxs:h-auto 2xxs:w-full 2xxs:rounded-2xl"
                src={resources.image}
                alt="image phone"
              />
            </div>
            <div className="p-6 font-semibold">
              <p>{resources.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
