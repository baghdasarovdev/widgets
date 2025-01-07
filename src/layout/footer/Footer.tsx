import React from 'react';
import { useTranslations } from 'next-intl';

import { FooterBox } from '@/layout/footer/FooterBox';

export const Footer = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-wrap justify-between">
      <FooterBox title={t('support')}>
        <p>{t('helpCentre')}</p>
        <p>{t('getHelpWithSafetyIssue')}</p>
        <p>{t('airCover')}</p>
        <p>{t('antiDiscrimination')}</p>
        <p>{t('disabilitySupport')}</p>
        <p>{t('cancellationOptions')}</p>
        <p>{t('reportNeighbourhoodConcern')}</p>
      </FooterBox>
      <FooterBox title={t('hosting')}>
        <p>{t('airbnbYourHome')}</p>
        <p>{t('airCoverForHosts')}</p>
        <p>{t('hostingResources')}</p>
        <p>{t('communityForum')}</p>
        <p>{t('hostingResponsibly')}</p>
        <p>{t('joinFreeHostingClass')}</p>
      </FooterBox>
      <FooterBox title={t('airbnb')}>
        <p>{t('newsroom')}</p>
        <p>{t('newFeatures')}</p>
        <p>{t('careers')}</p>
        <p>{t('investors')}</p>
        <p>{t('giftCards')}</p>
        <p>{t('airbnbOrgEmergencyStays')}</p>
      </FooterBox>
    </div>
  );
};
