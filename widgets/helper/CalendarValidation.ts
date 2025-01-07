// @ts-nocheck directive by adding that at the top of the file
export function CalendarValidate(
  START_DATE,
  END_DATE,
  CURRENT_DATE,
  selectedTime,
) {
  if (START_DATE < CURRENT_DATE) {
    return 'Start date should be after current date';
  }

  if (END_DATE < CURRENT_DATE) {
    return 'End date should be after start date';
  }

  if (START_DATE <= END_DATE && selectedTime.start >= selectedTime.end) {
    return 'Start time should be smaller than end time';
  }

  if (
    selectedTime.start <
      `${new Date().getHours()}:${new Date().getMinutes()}` &&
    selectedTime.end < `${new Date().getHours()}:${new Date().getMinutes()}`
  ) {
    return 'Start time and End time should be greater than current time';
  }
}
