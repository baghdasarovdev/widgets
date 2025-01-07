import { type FC, useMemo } from 'react';
import { Radio } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { getCancellationPolicyPanelData } from '@/components/SecondaryPanel/CancellationPolicyPanel/constants';
import { useAppSelector } from '@/redux/hooks';

export const CancellationPolicyPanel: FC = ({}) => {
  const { type } = useAppSelector(({ showDetails }) => showDetails.content);

  const t = useTranslations();

  const data = useMemo(() => {
    const allData = getCancellationPolicyPanelData(t);
    const specificData = allData[type as keyof typeof allData];

    return specificData ? specificData : null;
  }, [t, type]);

  return (
    <div className="pt-2 2sm:flex 2sm:h-full 2sm:flex-col 2sm:justify-between">
      <div className="2sm:px-16">
        {data ? (
          <>
            <h3 className="hidden text-3xl 2sm:mb-6 2sm:block">{data.title}</h3>
            <div className="no-scrollbar 2sm:max-h-[calc(100vh-302px)] 2sm:overflow-auto">
              <p className="mb-4 leading-5 text-gray-600">{data.subtitle}</p>
              <div className="flex flex-col gap-4 pb-6 2sm:pb-10">
                {data.buttons.map((el) => (
                  <label
                    className="flex cursor-pointer justify-between rounded-xl border border-gray-d p-6 hover:border-black has-[input:checked]:-my-0.25 has-[input:checked]:border-2 has-[input:checked]:border-black has-[input:checked]:bg-gray-f7"
                    key={el.title}
                  >
                    <div>
                      <h4 className="mb-4 pr-6 font-medium">{el.title}</h4>
                      <p className="text-sm text-gray-600">{el.subtitle}</p>
                    </div>
                    <div style={{ marginLeft: '24px' }}>
                      <Radio id={el.title} />
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
