export function timeFormatter(item) {
  const date = new Date(item);

  // Extract year, month, and day components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const day = date.getDate().toString().padStart(2, "0"); // Ensure two-digit day

  // Return the date in the format yyyy-MM-dd
  return `${year}-${month}-${day}`;
}
