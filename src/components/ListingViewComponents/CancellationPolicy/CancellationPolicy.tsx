import React, { useState } from 'react';
import { ModalForBoxes, ToggleCheckbox } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import {
  type BoxT,
  getData,
} from '@/components/ListingViewComponents/CancellationPolicy/constants';
import { SectionTitle } from '@/components/ListingViewComponents/CancellationPolicy/SectionTitle';
import { CancellationPolicyPanel } from '@/components/SecondaryPanel/CancellationPolicyPanel/CancellationPolicyPanel';
import { getCancellationPolicyPanelData } from '@/components/SecondaryPanel/CancellationPolicyPanel/constants';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { showDetailsStateSelectors } from '@/redux/slices/secondaryPanel/selector';
import {
  changePanelContent,
  changeShowDetails,
} from '@/redux/slices/secondaryPanel/slice';

export const CancellationPolicy = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const {
    content: { type },
  } = useAppSelector(showDetailsStateSelectors);

  const handleEditClick = (item: BoxT) => {
    if (window.innerWidth < 950) {
      setShowModal(true);
    }

    dispatch(
      changePanelContent({
        content: {
          title: item.title,
          description: item.subtitle,
          type: item.type,
        },
      }),
    );

    dispatch(changeShowDetails(true));
  };

  const panelData = getCancellationPolicyPanelData(t);

  return (
    <div>
      <div className="pb-5 no-scrollbar 2sm:pb-0">
        {getData(t).map((el) => (
          <div key={el.title} className="group flex flex-col gap-6">
            <SectionTitle title={el.title} subtitle={el.subtitle} />
            {el.boxes.map((item) => (
              <div
                key={item.title}
                className="flex justify-between rounded-xl border border-gray-d p-6"
              >
                <div className="flex flex-col gap-3">
                  <h4 className="text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
                {item.icon ? (
                  <div
                    onClick={() => handleEditClick(item)}
                    className="cursor-pointer"
                  >
                    <IconWrapper>
                      <item.icon />
                    </IconWrapper>
                  </div>
                ) : null}
                {item.switcher ? <ToggleCheckbox id={el.title} /> : null}
              </div>
            ))}
            <div className="mt-3.5 border-gray-d group-last:hidden sm:mb-10 sm:mt-4 sm:border-b"></div>
          </div>
        ))}
      </div>
      <ModalForBoxes
        title={panelData[type as keyof typeof panelData]?.title}
        openModal={showModal}
        isShowFooter={true}
        setOpenModal={setShowModal}
        saveButtonLabel={t('save')}
        cancelButtonLabel={t('cancel')}
      >
        <CancellationPolicyPanel />
      </ModalForBoxes>
    </div>
  );
};
