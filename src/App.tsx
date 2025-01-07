import React, { useEffect, useState } from "react";

// import { CheckCircleActive } from "@/assets/icons/CheckCircleActive";
// import { CopyIcon } from "@/assets/icons/CopyIcon";
// import { TabWrapper } from "@/components/ListingEditor/ListingEditorTabs/TabWrapper";
// import { widgetConfig } from "./constants/index.ts";
export const widgetConfig = [
  {
    value: "calendarWidget",
    label: "Full Calendar",
    id: "widget-container",
    symbol: "GME",
    class: "container-widget",
    scriptSrc:
      "https://baghdasarovdev.github.io/widgets/widget/calendar/FullCalendar.js",
    code: `
      <div id="widget-container" class="container-widget"></div>
      <script src="https://baghdasarovdev.github.io/widgets/widget/calendar/FullCalendar.js" />


      
      <div id="widget-container" class="container-widget"></div>
      <script src="https://animated-broccoli-qzeprk8.pages.github.io/widget/calendar/FullCalendar.js" />
    `,
  },
  {
    value: "calendar",
    label: "Booking Calendar",
    id: "widget-container-calendar",
    symbol: "AMC",
    class: "container-widget-calendar",
    scriptSrc:
      "https://baghdasarovdev.github.io/widgets/widget/calendar/Calendar.js",
    code: `
      <div id="widget-container-calendar" data-symbol="AMC" class="container-widget-calendar"></div>
      <script src="https://baghdasarovdev.github.io/widgets/widget/calendar/Calendar.js" />
    `,
  },
  {
    value: "datepicker",
    label: "Date Picker",
    id: "widget-container-datepicker",
    symbol: "AMZN",
    class: "container-widget-datepicker  flex items-center justify-center",
    scriptSrc:
      "https://baghdasarovdev.github.io/widgets/widget/datepicker/DatePickerModal.js",
    code: `
      <div data-symbol="AMZN" id="widget-container-datepicker" class="container-widget-datepicker"></div>
      <script src="https://baghdasarovdev.github.io/widgets/widget/datepicker/DatePickerModal.js" />
    `,
  },
];

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState("calendarWidget");

  const reloadScript = (src: string) => {
    const scriptElement = document.createElement("script");
    scriptElement.src = src;
    scriptElement.async = true;
    document.body.appendChild(scriptElement);
  };

  useEffect(() => {
    const widget = widgetConfig.find(
      (widget) => widget.value === selectedWidget
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
        console.error("Error copying text: ", err);
      });
  };

  const handleWidgetChange = (widgetValue: string) => {
    setSelectedWidget(widgetValue);
  };

  const selectedWidgetConfig = widgetConfig.find(
    (widget) => widget.value === selectedWidget
  );

  return (
    <div>
      <div className="flex w-full flex-wrap gap-10 md:flex-nowrap">
        <div className="flex w-full flex-col gap-5 p-10 md:max-w-md md:border-r">
          <h2 className="text-xl font-bold text-neutral-blue">Select Widget</h2>
          {widgetConfig.map((widget) => (
            // <TabWrapper key={widget.value} title={widget.label}>
            <div
              className="text-xl font-bold text-neutral-blue"
              onClick={() => handleWidgetChange(widget.value)}
            >
              {widget.label}
            </div>
            // </TabWrapper>
          ))}
        </div>

        <div className="h-vh-header-mobile w-full gap-10 overflow-auto p-10 scrollbar-hide md:h-vh-header-desktop">
          {selectedWidgetConfig ? (
            <>
              <div className="text-xl font-bold text-neutral-blue">
                {selectedWidgetConfig.label}
              </div>
              <div className="relative my-10 flex flex-col gap-2">
                {/* <div className="absolute right-4 top-2 self-end">
                  {!isCopied ? (
                    <CopyIcon
                      onClick={() => handleCopy(selectedWidgetConfig.code)}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <CheckCircleActive width={24} height={24} />
                  )}
                </div> */}
                <textarea
                  className="h-28 w-full rounded-lg border border-gray-200"
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
                    selectedWidgetConfig.value === "calendarWidget"
                      ? { height: "500px" }
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

export default App;
