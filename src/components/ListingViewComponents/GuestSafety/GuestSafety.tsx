import React from 'react';
import { Flex, List } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { descriptionData } from '@/components/ListingViewComponents/GuestSafety/constants';

export const GuestSafety = () => {
  const t = useTranslations();

  return (
    <div>
      <SharedHeaderDescription>
        <p>{t('guestSafetyDescription')}</p>
      </SharedHeaderDescription>
      <div>
        <List gap="sm">
          {descriptionData.map((el, i) => (
            <List.ListItem
              key={i}
              radius="base"
              size="2sm-md"
              selectable
              gutterPadding
              hoverable
              hoverStyles={{
                backgroundColor: '#f7f7f7',
              }}
              selectedStyles={{ backgroundColor: '#f7f7f7' }}
            >
              <Flex justify="space-between">
                <p className="text-base font-bold text-neutral-blue">
                  {t(el.headingText)}
                </p>
                <ChevronRightIcon />
              </Flex>
              <p className="mt-3.5 pe-10 text-base text-gray-600">
                {t(el.text)}
              </p>
            </List.ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
