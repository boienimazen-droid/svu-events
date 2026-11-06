const EVENT_TIME_ZONE = 'Asia/Damascus';

const parseEventDate = (dateValue) => new Date(`${dateValue}T12:00:00Z`);

export const formatEventDate = (dateValue) => new Intl.DateTimeFormat('ar-SY', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
}).format(parseEventDate(dateValue));

export const getDateParts = (dateValue) => {
  const date = parseEventDate(dateValue);
  return {
    day: dateValue.slice(-2),
    month: new Intl.DateTimeFormat('ar-SY', { month: 'long', timeZone: 'UTC' }).format(date),
    year: dateValue.slice(0, 4),
  };
};

export const isPastEvent = (event, now = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: EVENT_TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const localNow = `${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}`;
  return `${event.dateValue}T${event.time.slice(-5)}` <= localNow;
};

export const getUpcomingEvents = (events, now = new Date()) => Object.entries(events)
  .filter(([, event]) => !isPastEvent(event, now))
  .sort(([, first], [, second]) => `${first.dateValue}T${first.time.slice(0, 5)}`
    .localeCompare(`${second.dateValue}T${second.time.slice(0, 5)}`));
