/* eslint-disable absolute-imports/only-absolute-imports */
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { CloseIcon } from '@/assets/icons/CloseIcon';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { messagesSelectors } from '@/redux/slices/messages/selectors';
import { isShowMessageDetails } from '@/redux/slices/messages/slice';

export const MessagesDetails = () => {
  const dispatch = useAppDispatch();
  const { showDetails } = useAppSelector(messagesSelectors);
  const t = useTranslations();

  return (
    <>
      <div className="border-b border-gray-light px-20 py-4">
        <div className="flex items-center justify-between">
          <h2>{t('Details')}</h2>
          <div onClick={() => dispatch(isShowMessageDetails(false))}>
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          </div>
        </div>
      </div>
      <div className="px-20 py-4">
        {showDetails ? (
          <div className="flex items-center border-b border-gray-light pb-4">
            <Image src="/images/logo.png" width={47} height={47} alt="logo" />
            <div className="ml-5">
              <h3>{t('TouristParadiseSupport')}</h3>
              <p>{t('HelpFromTourist')}.</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
