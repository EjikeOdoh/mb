const formatNumber = number => {
  return Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

const formatCurrency = amt => {
  return Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amt);
};

function formatDateTime(dateTime) {
  if (!dateTime) return;
  const date = new Date(dateTime);

  const day = new Intl.DateTimeFormat('en', {day: 'numeric'}).format(date);
  const month = new Intl.DateTimeFormat('en', {month: 'long'}).format(date);
  const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);

  return `${day}, ${month} ${year}`;
}

function formatTime(hours, minutes) {
  let period = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }
  let formattedHours = hours.toString().padStart(2, '0');
  let formattedMinutes = minutes.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes} ${period}`;
}

function formatString(str, visibleLength = 6) {
  if (str.length <= visibleLength) {
    return str;
  }
  return str.substring(0, visibleLength) + '...';
}

export {formatDateTime, formatNumber, formatString, formatCurrency, formatTime};
