import React, { useState } from 'react';
import { ModalForBoxes } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { LightningIcon } from '@/assets/icons/LightningIcon';
import { MessageIcon } from '@/assets/icons/MessageIcon';
import { BookingSettingsContent } from '@/components/ListingViewComponents/BookingSettings/BookingSettingsContent';
import { BookingSettingsModal } from '@/components/ListingViewComponents/BookingSettings/BookingSettingsModal';
import { data } from '@/components/ListingViewComponents/BookingSettings/constants';
import styles from '@/components/ListingViewComponents/BookingSettings/page.module.scss';
import { BookingSettingsPanel } from '@/components/SecondaryPanel/BookingSettingsPanel/BookingSettingsPanel';
import { useAppDispatch } from '@/redux/hooks';
import { changeShowDetails } from '@/redux/slices/secondaryPanel/slice';

export const BookingSettings = () => {
  const t = useTranslations();
  const [openBox, setOpenBox] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeBox, setActiveBox] = useState<boolean>(false);
  const [showModalInMobile, setShowModalInMobile] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setShowModal(false);
    setOpenBox(false);
    setShowModalInMobile(false);
  };

  const handleShowPanel = (id: number) => {
    if (id === 1) return;

    if (id === 2 && window.innerWidth > 949) dispatch(changeShowDetails(true));
    else setShowModalInMobile(true);
  };

  return (
    <>
      <div className={styles.floating_booking_settings_container}>
        <div className={styles.booking_settings_inner}>
          <div className={styles.booking_settings_boxes_container}>
            <div
              className={
                !openBox
                  ? styles.booking_settings_content_container
                  : styles.opened_booking_settings_content_container
              }
              role="button"
              onClick={() => {
                setActiveBox(false);
                setOpenBox(true);
              }}
            >
              <div className={styles.booking_settings_first_box}>
                <div className={styles.booking_settings_first_content}>
                  <span className="text-neutral-blue">
                    {t('useInstantBook')}
                  </span>
                  <span>{t('letGuestsBookAutomatically')}</span>
                </div>
                <div className={styles.booking_settings_first_icon}>
                  <LightningIcon />
                </div>
              </div>
              <div className={styles.booking_settings_dynamic}>
                <div className={styles.divider} />
                {data(t).map((item, index) => (
                  <BookingSettingsContent
                    key={index}
                    handleShowPanel={handleShowPanel}
                    {...item}
                  />
                ))}
              </div>
            </div>
            <div
              className={
                !activeBox
                  ? styles.booking_settings_content_container
                  : styles.booking_settings_content_container_active
              }
              role="button"
              onClick={() => {
                setActiveBox(true);
                openBox && setShowModal(true);
              }}
            >
              <div className={styles.booking_settings_first_box}>
                <div className={styles.booking_settings_first_content}>
                  <span className="text-neutral-blue">
                    {t('approveAllBookings')}
                  </span>
                  <span>{t('alwaysReviewReservationRequests')}</span>
                </div>
                <div className={styles.booking_settings_first_icon}>
                  <MessageIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalForBoxes
        title={showModalInMobile ? 'Pre-booking message' : ''}
        openModal={showModal || showModalInMobile}
        isShowFooter={true}
        setOpenModal={handleCloseModal}
        cancelButtonLabel={t('cancel')}
        saveButtonLabel={t('save')}
      >
        {showModalInMobile ? (
          <BookingSettingsPanel />
        ) : (
          <BookingSettingsModal />
        )}
      </ModalForBoxes>
    </>
  );
};
