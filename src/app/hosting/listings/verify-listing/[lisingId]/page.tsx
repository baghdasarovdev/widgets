'use client';

import { Flex } from '@resido-fhm/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PropertyCard } from '@/app/hosting/listings/verify-listing/[lisingId]/_components/PropertyCard';
import { VerificationSteps } from '@/app/hosting/listings/verify-listing/[lisingId]/_components/VerificationSteps';
import { propertyData } from '@/app/hosting/listings/verify-listing/[lisingId]/constants';
import { LeftArrow } from '@/assets/icons/LeftArrow';

const VerifyListing = () => {
  const t = useTranslations();

  return (
    <div className="mb-36.5 mt-11 flex flex-col px-4.5 sm:mb-24 md:px-8 2lg:px-18">
      <div className="flex w-full flex-col-reverse items-start justify-center md:flex-row">
        <div className="flex w-full flex-col md:mx-22 md:!w-[68%] 2lg:mx-27">
          <Flex className="relative">
            <Link
              href="/hosting/listings/editor/details"
              className="absolute -left-25"
            >
              <LeftArrow />
            </Link>
            <h3 className="hidden pb-6 text-2xxl font-semibold md:block">
              {t('verifyListingPageTitle')}
            </h3>
          </Flex>
          <VerificationSteps />
        </div>
        <Flex
          direction="column"
          className="w-full gap-2 md:mr-22 md:!w-[32%] 2lg:mr-27"
        >
          <h3 className="pb-6 pt-3 text-2xxl font-semibold md:hidden">
            {t('verifyListingPageTitle')}
          </h3>
          <PropertyCard cardData={propertyData} />
        </Flex>
      </div>
    </div>
  );
};

export default VerifyListing;
