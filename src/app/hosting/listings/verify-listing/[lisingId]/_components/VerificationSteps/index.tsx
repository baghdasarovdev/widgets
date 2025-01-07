import { Flex } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { stepsData } from '@/app/hosting/listings/verify-listing/[lisingId]/_components/VerificationSteps/data';
import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';

export const VerificationSteps = () => {
  const t = useTranslations();

  return (
    <div className="w-full">
      {stepsData(t).map((step) => (
        <Flex key={step.id} direction="column" className="cursor-pointer py-6">
          <Flex
            align="start"
            justify="space-between"
            className="relative w-full pb-6"
          >
            <Flex direction="column" className="flex-grow gap-2">
              <p className="text-base text-neutral-blue">{step.title}</p>
              <p className="text-base text-gray-600">{step.description}</p>
              {step.isRequired ? (
                <span className="text-sm font-semibold text-gray-600">
                  {t('required')}
                </span>
              ) : null}
            </Flex>
            <ChevronRightIcon color="black" />
          </Flex>
          <hr className="border-t border-gray-light" />
        </Flex>
      ))}
    </div>
  );
};
