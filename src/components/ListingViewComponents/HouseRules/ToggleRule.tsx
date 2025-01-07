import React, { useState } from 'react';

import { CheckCircleActive } from '@/assets/icons/CheckCircleActive';
import { CheckCircleIcon } from '@/assets/icons/CheckCircleIcon';
import { XCircleChecked } from '@/assets/icons/XCircleChecked';
import { XCircleIcon } from '@/assets/icons/XCircleIcon';

export const ToggleRule = () => {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  const allow = () => setAllowed(true);
  const deny = () => setAllowed(false);

  return (
    <div className="flex cursor-pointer justify-between gap-1">
      {allowed === false ? (
        <XCircleChecked width={40} height={40} />
      ) : (
        <span onClick={deny}>
          <XCircleIcon />
        </span>
      )}
      {allowed === true ? (
        <CheckCircleActive width={40} height={40} />
      ) : (
        <span onClick={allow}>
          <CheckCircleIcon width={40} height={40} />
        </span>
      )}
    </div>
  );
};
