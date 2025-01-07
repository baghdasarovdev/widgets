'use client';
import React, { useEffect, useState } from 'react';

import { widgetConfig } from '@/app/widgets/constants';
import { CheckCircleActive } from '@/assets/icons/CheckCircleActive';
import { CopyIcon } from '@/assets/icons/CopyIcon';
import { TabWrapper } from '@/components/ListingEditor/ListingEditorTabs/TabWrapper';

const Widgets = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState('calendarWidget');

  const reloadScript = (src: string) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = src;
    scriptElement.async = true;
    document.body.appendChild(scriptElement);
  };

  useEffect(() => {
    const widget = widgetConfig.find(
      (widget) => widget.value === selectedWidget,
    );
    if (widget) {
      reloadScript(widget.scriptSrc);
    }
  }, [selectedWidget]);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
  };

  const handleWidgetChange = (widgetValue: string) => {
    setSelectedWidget(widgetValue);
  };

  const selectedWidgetConfig = widgetConfig.find(
    (widget) => widget.value === selectedWidget,
  );

  return (
    <div>
      <div className="flex w-full flex-wrap gap-10 md:flex-nowrap">
        <div className="flex w-full flex-col gap-5 p-10 md:max-w-md md:border-r">
          <h2 className="text-xl font-bold text-neutral-blue">Select Widget</h2>
          {widgetConfig.map((widget) => (
            <TabWrapper key={widget.value} title={widget.label}>
              <div
                className="text-xl font-bold text-neutral-blue"
                onClick={() => handleWidgetChange(widget.value)}
              >
                {widget.label}
              </div>
            </TabWrapper>
          ))}
        </div>

        <div className="h-vh-header-mobile w-full gap-10 overflow-auto p-10 scrollbar-hide md:h-vh-header-desktop">
          {selectedWidgetConfig ? (
            <>
              <div className="text-xl font-bold text-neutral-blue">
                {selectedWidgetConfig.label}
              </div>
              <div className="relative my-10 flex flex-col gap-2">
                <div className="absolute right-4 top-2 self-end">
                  {!isCopied ? (
                    <CopyIcon
                      onClick={() => handleCopy(selectedWidgetConfig.code)}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <CheckCircleActive width={24} height={24} />
                  )}
                </div>
                <textarea
                  className="h-26 w-full rounded-lg border border-gray-200"
                  value={selectedWidgetConfig.code}
                  readOnly
                ></textarea>
              </div>
              <div className="flex flex-col gap-5">
                <div
                  id={selectedWidgetConfig.id}
                  data-symbol={selectedWidgetConfig.symbol}
                  className={selectedWidgetConfig.class}
                  style={
                    selectedWidgetConfig.value === 'calendarWidget'
                      ? { height: '500px' }
                      : {}
                  }
                ></div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Widgets;
