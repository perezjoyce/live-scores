export default function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC',];
  const month = months[date.getUTCDate()]

  const day = date.getDate()
  const hours = date.getHours()
  const mins = date.getMinutes()

  return `${month} ${day}${(nth(day))} ${hours}:${mins}`
}

const nth = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};