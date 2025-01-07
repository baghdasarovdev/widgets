import Link from 'next/link';

import { type TFunctionT } from '@/types/utils';

export const getCancellationPolicyPanelData = (t: TFunctionT) => ({
  flexible: {
    title: t('chooseStandardPolicy'),
    subtitle: t.rich('toUnderstandFullPolicies', {
      link: (chunks) => (
        <Link
          style={{
            fontWeight: 500,
            textDecoration: 'underline',
            color: '#6a6a6a',
          }}
          href="#"
        >
          {chunks}
        </Link>
      ),
    }),
    buttons: [
      { title: t('flexible'), subtitle: t('flexibleDescription') },
      { title: t('moderate'), subtitle: t('guestFullRefundDay', { days: 5 }) },
      { title: t('firm'), subtitle: t('guestFullRefundDay', { days: 30 }) },
      {
        title: t('strict'),
        subtitle: t('guestFullRefundDayAndHour', { hours: 48, days: 14 }),
      },
    ],
  },
  firm: {
    title: t('chooseLongTermPolicy'),
    subtitle: t.rich('toUnderstandFullPolicies', {
      link: (chunks) => <Link href="#">{chunks}</Link>,
    }),
    buttons: [
      { title: t('firm'), subtitle: t('fullRefundDays', { days: 30 }) },
      {
        title: t('strict'),
        subtitle: t('fullRefundDayAndHour', { hours: 48, days: 28 }),
      },
    ],
  },
});
