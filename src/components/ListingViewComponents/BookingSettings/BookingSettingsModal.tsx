import React from 'react';
import { useTranslations } from 'next-intl';

import { bookingSettingsModalData } from '@/components/ListingViewComponents/BookingSettings/constants';
import styles from '@/components/ListingViewComponents/BookingSettings/page.module.scss';

export const BookingSettingsModal = () => {
  const t = useTranslations();

  return (
    <div className={styles.booking_settings_modal_container}>
      <h1>{t('turnOffInstantBook')}?</h1>
      <div className={styles.booking_settings_modal_subtitle}>
        {t('needToKeepThese')}
      </div>
      <div className={styles.booking_settings_modal_container_inner}>
        {bookingSettingsModalData(t).map((item) => (
          <div key={item.id} className={styles.booking_settings_modal_item}>
            <div className={styles.booking_settings_modal_icon}>
              <item.icon />
            </div>
            <div className={styles.booking_settings_modal_content}>
              <div className={styles.booking_settings_modal_title}>
                {item.title}
              </div>
              <div className={styles.booking_settings_modal_description}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
