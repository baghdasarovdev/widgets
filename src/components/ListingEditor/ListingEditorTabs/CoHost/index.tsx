import React, { type FC } from 'react';
import { useTranslations } from 'next-intl';

import { Video } from '@/components/Video';

export const CoHost: FC = () => {
  const t = useTranslations();

  return (
    <>
      <h2 className="mb-2.5 text-xl text-neutral-blue">Co Host</h2>
      <div className="flex items-center justify-between rounded-xl bg-neutral-box p-5">
        <Video source="https://stream.media.muscache.com/4X2dJiYKEK017g3n2cZOMb9dx32EUuv9lof5Jqw6iI9s.mp4?v_q=medium" />
        <span className="text-neutral-blue">{t('inviteFriend')}</span>
      </div>
    </>
  );
};
