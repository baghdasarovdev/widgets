import React from 'react';
import { Flex, List } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { CarIcon } from '@/assets/icons/CarIcon';
import { DoorIconAirbnb } from '@/assets/icons/DoorIconAirbnb';
import { HoistIcon } from '@/assets/icons/HoistIcon';
import { LumpIconAirbnb } from '@/assets/icons/LumpIconAirbnb';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { IconWrapper } from '@/HOC/IconWrapper';

const data = [
  { text: 'accessibleParking', icon: CarIcon },
  { text: 'litPathGuestEntrance', icon: LumpIconAirbnb },
  { text: 'entranceWiderThan32Inches', icon: DoorIconAirbnb },
  { text: 'poolOrHotTubHoist', icon: HoistIcon },
  { text: 'ceilingOrMobileHoist', icon: HoistIcon },
];

export const Accessibility = () => {
  const t = useTranslations();

  return (
    <List>
      {data.map((feature, index) => (
        <List.ListItem removePadding="inline" key={index} size="md">
          <Flex align="center" gap="lg">
            <feature.icon />
            <p style={{ flexGrow: 1 }} className="text-neutral-blue">
              {t(feature.text)}
            </p>
            <IconWrapper>
              <PlusIcon />
            </IconWrapper>
          </Flex>
        </List.ListItem>
      ))}
    </List>
  );
};
