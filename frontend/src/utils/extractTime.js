export function extractTime(datestring) {
  const date = new Date(datestring);
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  return `${hour}:${minute}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
