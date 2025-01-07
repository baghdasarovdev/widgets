import React from 'react';
import { Box, Flex, List, Select, ToggleCheckbox } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { OpenNewPageIcon } from '@/assets/icons/OpenNewPageIcon';
import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { selectDataDay } from '@/components/ListingViewComponents/Availability/constants';

export const Availability = () => {
  const t = useTranslations();

  return (
    <div className="pb-5">
      <SharedHeaderDescription>
        <p>{t('availabilityDescription')}</p>
      </SharedHeaderDescription>
      <div>
        <div>
          <h3 className="pb-6">{t('tripLength')}</h3>
          <List bordered borderColor="#dddddd" radius="md">
            <List.ListItem
              withDivider
              dividerColor="#dddddd"
              size="2sm-md"
              merged
            >
              <p className="mb-2 text-sm text-gray-600">{t('minimumNights')}</p>
              <p className="text-3xl font-bold text-neutral-blue">1</p>
            </List.ListItem>
            <List.ListItem
              withDivider
              dividerColor="#dddddd"
              size="2sm-md"
              merged
            >
              <p className="mb-2 text-sm text-gray-600">{t('maximumNights')}</p>
              <p className="text-3xl font-bold text-neutral-blue">365</p>
            </List.ListItem>
          </List>
        </div>
        <div className="pt-16">
          <h3>{t('advanceNotice')}</h3>
          <p className="mb-6 mt-2 text-gray-600">
            {t('advanceNoticeDescription')}
          </p>
          <Select validationstyles={false} options={selectDataDay(t)} />
        </div>
        <div className="mt-4">
          <Flex justify="space-between" size="md" radius="md" withBorders>
            <Box>
              <p className="mb-1">{t('shortNoticeRequests')}</p>
              <p className="text-sm text-gray-600">
                {t('reviewShortNoticeRequests')}
              </p>
            </Box>
            <ToggleCheckbox id="reviewToggle" />
          </Flex>

          <Flex
            className="my-12"
            align="center"
            radius="base"
            bgColor="#f7f7f7"
            size="md"
          >
            <OpenNewPageIcon />
            <p className="ms-2.5 font-medium text-neutral-blue">
              {t('findMoreDiscounts')}
            </p>
          </Flex>
        </div>
      </div>
    </div>
  );
};
