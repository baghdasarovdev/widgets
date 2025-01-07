import React, { type FC, useState } from 'react';
import { Counter, InputValidation, Select } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { WarningIcon } from '@/assets/icons/WarningIcon';
import {
  secondOptionData,
  thirdOptionData,
} from '@/components/ListingViewComponents/PropertyType/constants';
import { cn } from '@/helper';

export const PropertyType: FC = () => {
  const t = useTranslations();
  const [showErrorMessage] = useState<boolean>(true);
  const [accommodation, setAccommodation] = useState<unknown>(null);
  const [artDesInserts, setArtDesInserts] = useState<unknown>(null);
  const [thirdOption, setThirdOption] = useState<unknown>(null);
  const [construction, setConstruction] = useState<string>('');

  return (
    <>
      <div>
        <div className="pb-5 2sm:pb-25">
          <div className="mt-6 first:mt-0">
            <div className="mb-2 text-gray-600">
              <label
                className={cn(
                  !accommodation && 'font-semibold text-red-attention',
                )}
              >
                {secondOptionData(t).label}
              </label>
            </div>
            <Select
              validationstyles={!accommodation ? showErrorMessage : false}
              errorimage={<WarningIcon />}
              errormessage={!accommodation ? t('pleaseSelectType') : ''}
              options={secondOptionData(t).options}
              onChange={(e) => setAccommodation(e)}
              value={accommodation}
            />
            {!showErrorMessage ? (
              <p className="mt-2.5 text-sm text-gray-600">{t('rentedPlace')}</p>
            ) : null}
          </div>
          <div className="mt-6 first:mt-0">
            <div className="mb-2 text-gray-600">
              <label
                className={cn(
                  !artDesInserts && 'font-semibold text-red-attention',
                )}
              >
                {thirdOptionData(t).label}
              </label>
            </div>
            <Select
              validationstyles={!artDesInserts ? showErrorMessage : false}
              errorimage={<WarningIcon />}
              errormessage={!artDesInserts ? t('pleaseSelectType') : ''}
              options={thirdOptionData(t).options}
              onChange={(e) => setArtDesInserts(e)}
              value={artDesInserts}
            />
            {!showErrorMessage ? (
              <p className="mt-2.5 text-sm text-gray-600">{t('guestsHave')}</p>
            ) : null}
          </div>
          <div>
            <div className="mt-5.5 flex items-center justify-between gap-4">
              <p className="text-neutral-blue">{t('howManyFloors')}</p>
              <div className="flex cursor-pointer items-center">
                <Counter
                  countDefaultNumber={1}
                  countSize={20}
                  countWidth={40}
                />
              </div>
            </div>
            <div className="mt-5.5 flex items-center justify-between gap-4">
              <p className="text-neutral-blue">{t('whichFloor')}</p>
              <div className="flex cursor-pointer items-center">
                <Counter
                  countDefaultNumber={1}
                  countSize={20}
                  countWidth={40}
                />
              </div>
            </div>
          </div>
          <div className="my-7 px-0.5">
            <div className="mb-2 text-gray-600">
              <label
                className={cn(
                  !construction && 'font-semibold text-red-attention',
                )}
              >
                {t('yearOfConstruction')}
              </label>
            </div>
            <InputValidation
              type="number"
              errorimage={<WarningIcon />}
              validationstyles={!construction ? showErrorMessage : false}
              errormessage={!construction ? t('theYearMustHave') : ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConstruction(e.target.value)
              }
            />
          </div>
          <div className="flex flex-wrap justify-between md:max-w-112.5 md:flex-nowrap">
            <div className="w-full md:max-w-60">
              <div className="mb-2">
                <label className="text-gray-600">
                  {t('sizeAccommodation')}
                </label>
              </div>
              <InputValidation type="text" validationstyles={false} />
            </div>
            <div className="mt-5 w-full md:mt-0 md:max-w-50 2sm:pl-3.5">
              <div className="mb-2">
                <label className="text-gray-600">{t('unit')}</label>
              </div>
              <Select
                validationstyles={false}
                options={thirdOptionData(t).options}
                onChange={(e) => setThirdOption(e)}
                value={thirdOption || true}
              />
            </div>
          </div>
          <p className="mt-4 rounded-lg text-gray-600">{t('availableGuest')}</p>
        </div>
      </div>
    </>
  );
};
