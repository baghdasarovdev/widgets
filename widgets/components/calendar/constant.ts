export const monthsOptions = [
  { title: '1 Month', value: 1 },
  { title: '2 Month', value: 2 },
  { title: '3 Month', value: 3 },
  { title: '4 Month', value: 4 },
  { title: '5 Month', value: 5 },
  { title: '6 Month', value: 6 },
  { title: '7 Month', value: 7 },
  { title: '8 Month', value: 8 },
  { title: '9 Month', value: 9 },
  { title: '10 Month', value: 10 },
  { title: '11 Month', value: 11 },
  { title: '12 Month', value: 12 },
  { title: '13 Month', value: 13 },
  { title: '14 Month', value: 14 },
  { title: '15 Month', value: 15 },
  { title: '16 Month', value: 16 },
  { title: '17 Month', value: 17 },
  { title: '18 Month', value: 18 },
  { title: '19 Month', value: 19 },
  { title: '20 Month', value: 20 },
  { title: '21 Month', value: 21 },
  { title: '22 Month', value: 22 },
  { title: '23 Month', value: 23 },
  { title: '24 Month', value: 24 },
];

export const durationDays = (start: Date, end: Date): Date[] => {
  let startDate = new Date(start);
  let endDate = new Date(end);

  let diffInMillis = endDate.getTime() - startDate.getTime();
  let diffInDays = diffInMillis / (1000 * 60 * 60 * 24);

  const newData: Date[] = [];
  for (let i = 0; i <= Math.abs(diffInDays); i++) {
    let currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    newData.push(currentDate);
  }

  return newData;
};
