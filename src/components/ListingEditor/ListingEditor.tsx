'use client';
import React, { type FC } from 'react';
import { Flex } from '@resido-fhm/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ChevronLeftIcon } from '@/assets/icons/ChevronLeftIcon';
import { FilterIcon } from '@/assets/icons/FilterIcon';
import { LeftArrow } from '@/assets/icons/LeftArrow';
import { ListingEditorTabs } from '@/components/ListingEditor/ListingEditorTabs/ListingEditorTabs';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch } from '@/redux/hooks';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';

export const ListingEditor: FC = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(listingEditorData(''));
  };

  return (
    <div className="z-1 w-full bg-white 2sm:pl-10 2lgx:pl-0">
      <div className="2sm:hidden">
        <div className="my-6 px-5 md:px-10">
          <Flex className="w-full" justify="space-between" align="center">
            <Link href="/hosting/listings" onClick={handleClick}>
              <ChevronLeftIcon />
            </Link>
            <div>
              <h1 className="text-lg">{t('listingEditor')}</h1>
            </div>
            <div>
              <IconWrapper>
                <FilterIcon />
              </IconWrapper>
            </div>
          </Flex>
        </div>
      </div>
      <div className="hidden 2sm:block">
        <Flex align="center" className="pt-11 2sm:pb-6">
          <Link href="/hosting/listings" onClick={handleClick}>
            <LeftArrow />
          </Link>
          <div className="pl-6">
            <h1 className="text-3xl">{t('listingEditor')}</h1>
          </div>
        </Flex>
      </div>
      <ListingEditorTabs />
    </div>
  );
};
