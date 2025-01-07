export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed, so add 1
  const day = date.getDate().toString().padStart(2, "0"); // Ensure 2 digits for the day

  return `${year}-${month}-${day}`;
}
