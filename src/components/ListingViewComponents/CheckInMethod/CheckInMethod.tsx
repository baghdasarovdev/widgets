import React from 'react';
import { useTranslations } from 'next-intl';

import { data } from '@/components/ListingViewComponents/CheckInMethod/constants';

export const CheckInMethod = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="pb-2.5">
        <div>
          {data(t).map((item, index) => (
            <div
              className="my-7.5 rounded-xl border border-gray-light p-6 first:mt-0"
              key={index}
            >
              <div className="mb-4">
                <item.icon />
              </div>
              <h3 className="mb-3 text-base">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
