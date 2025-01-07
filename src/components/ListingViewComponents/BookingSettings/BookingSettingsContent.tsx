import React, { type FC, type ReactNode } from 'react';
import { ToggleCheckbox } from '@resido-fhm/ui-kit';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import styles from '@/components/ListingViewComponents/BookingSettings/page.module.scss';

type BookingSettingsContentPropsT = {
  id: number;
  title: string;
  text: string | ReactNode;
  handleShowPanel: (value: number) => void;
};

export const BookingSettingsContent: FC<BookingSettingsContentPropsT> = ({
  handleShowPanel,
  id,
  text,
  title,
}) => {
  return (
    <div
      className={styles.booking_settings_third_box}
      key={id}
      role="button"
      onClick={() => handleShowPanel(id)}
    >
      <div className={styles.booking_settings_third_content}>
        <span className="text-neutral-blue">{title}</span>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.booking_settings_third_icon}>
        {id === 1 ? (
          <ToggleCheckbox id={id.toString()} />
        ) : (
          <ChevronRightIcon />
        )}
      </div>
    </div>
  );
};
