export const widgetConfig = [
  {
    value: 'calendarWidget',
    label: 'Full Calendar',
    id: 'widget-container',
    symbol: 'GME',
    class: 'container-widget',
    scriptSrc: 'widgets/calendar/FullCalendar.js',
    code: `
      <div id="widget-container" class="container-widget"></div>
      <script src="https://baghdasarovdev.github.io/widgets/widget/calendar/FullCalendar.js" />
    `,
  },
  {
    value: 'calendar',
    label: 'Booking Calendar',
    id: 'widget-container-calendar',
    symbol: 'AMC',
    class: 'container-widget-calendar',
    scriptSrc:
      'https://baghdasarovdev.github.io/widgets/widget/calendar/Calendar.js',
    code: `
      <div id="widget-container-calendar" data-symbol="AMC" class="container-widget-calendar"></div>
      <script src="https://baghdasarovdev.github.io/widgets/widget/calendar/Calendar.js" />
    `,
  },
  {
    value: 'datepicker',
    label: 'Date Picker',
    id: 'widget-container-datepicker',
    symbol: 'AMZN',
    class: 'container-widget-datepicker  flex items-center justify-center',
    scriptSrc:
      'https://baghdasarovdev.github.io/widgets/widget/datepicker/DatePickerModal.js',
    code: `
      <div data-symbol="AMZN" id="widget-container-datepicker" class="container-widget-datepicker"></div>
      <script src="https://baghdasarovdev.github.io/widgets/widget/datepicker/DatePickerModal.js" />
    `,
  },
];
