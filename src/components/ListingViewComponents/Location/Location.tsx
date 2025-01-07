import React from 'react';
import { Flex, List } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import { locationData } from '@/components/ListingViewComponents/Location/constants';

export const Location = () => {
  const t = useTranslations();

  return (
    <div>
      <div>
        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60231.51494351782!2d2.643648067879058!3d39.572850144972534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979259c61ac757%3A0xc40d5406c3d058c6!2sPalma%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sen!2sam!4v1726040478178!5m2!1sen!2sam"
              width="600"
              height="250"
              className="w-full rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div>
          <div className="mb-3.5 mt-11">
            <List gap="sm">
              {locationData.map((el, i) => (
                <List.ListItem
                  key={i}
                  radius="base"
                  size="2sm-md"
                  selectable
                  gutterPadding
                  hoverable
                  hoverStyles={{
                    backgroundColor: '#f7f7f7',
                  }}
                  selectedStyles={{ backgroundColor: '#f7f7f7' }}
                >
                  <Flex justify="space-between">
                    <p className="text-base font-bold text-neutral-blue">
                      {t(el.headingText)}
                    </p>
                    <ChevronRightIcon />
                  </Flex>
                  <p className="mt-3.5 pe-10 text-base text-gray-600">
                    {t(el.text)}
                  </p>
                </List.ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
