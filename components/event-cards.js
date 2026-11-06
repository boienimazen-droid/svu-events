import { EVENTS } from './event-details.js';
import { escapeHtml } from '../utils/sanitize.js';
import { formatEventDate, getDateParts, getUpcomingEvents, isPastEvent } from '../utils/event-dates.js';

export const renderEventCard = (eventId, event) => {
  const dateParts = getDateParts(event.dateValue);
  const imageClass = `event-image-${event.badgeClass.replace('badge-soft-', '')}`;
  return `<div class="col-md-6 col-xl-4 event-item" data-category="${escapeHtml(event.filterCategory)}" data-date="${escapeHtml(event.dateValue)}" data-location="${escapeHtml(event.locationKey)}" data-search="${escapeHtml(`${event.title} ${event.shortDescription} ${event.category} ${event.location}`)}"><article class="event-card"><div class="event-image ${imageClass}" role="img" aria-label="${escapeHtml(event.title)}"><time class="event-date" datetime="${escapeHtml(event.dateValue)}" title="${escapeHtml(formatEventDate(event.dateValue))}"><strong>${escapeHtml(dateParts.day)}</strong>${escapeHtml(dateParts.month)}<br />${escapeHtml(dateParts.year)}</time><span class="event-icon"><i class="bi bi-${escapeHtml(event.icon)}"></i></span></div><div class="event-body"><div class="d-flex justify-content-between align-items-center mb-3"><span class="badge ${escapeHtml(event.badgeClass)}">${escapeHtml(event.category)}</span><span class="event-time"><i class="bi bi-clock"></i> ${escapeHtml(event.time)}</span></div>${isPastEvent(event) ? '<span class="badge badge-soft-orange mb-2">انتهت الفعالية</span>' : ''}<h3>${escapeHtml(event.title)}</h3><p>${escapeHtml(event.shortDescription)}</p><div class="event-meta"><span><i class="bi bi-${event.locationKey === 'online' ? 'laptop' : 'geo-alt'}"></i> ${escapeHtml(event.location)}</span><a href="event.html?id=${encodeURIComponent(eventId)}" aria-label="تفاصيل ${escapeHtml(event.title)}"><i class="bi bi-arrow-up-left"></i></a></div></div></article></div>`;
};

export const renderEventsGrid = (eventIds = Object.keys(EVENTS)) => {
  const grid = document.querySelector('#events-grid');
  if (!grid) return;
  grid.innerHTML = eventIds.map((eventId) => renderEventCard(eventId, EVENTS[eventId])).join('');
};

export const renderFeaturedEvents = () => {
  const grid = document.querySelector('#featured-events-grid');
  if (!grid) return;
  const upcoming = getUpcomingEvents(EVENTS).slice(0, 3);
  grid.innerHTML = upcoming.length
    ? upcoming.map(([eventId, event]) => renderEventCard(eventId, event)).join('')
    : '<div class="col-12"><p class="text-muted" role="status">لا توجد فعاليات قادمة حالياً. ترقّب الإعلان عن فعاليات جديدة.</p></div>';
};

export const renderNextEvent = () => {
  const card = document.querySelector('[data-next-event]');
  if (!card) return;
  const next = getUpcomingEvents(EVENTS)[0];
  if (!next) {
    card.innerHTML = '<div class="visual-card-body"><small>مجتمع SVU</small><h3>ترقّب فعالياتنا القادمة</h3><a class="text-link" href="events.html">تصفّح الدليل <i class="bi bi-arrow-left"></i></a></div>';
    return;
  }
  const [eventId, event] = next;
  card.innerHTML = `<div class="visual-card-top"><span class="status-dot"></span> مجتمع SVU</div>
    <div class="visual-illustration"><i class="bi bi-${escapeHtml(event.icon)}"></i><span class="sparkle sparkle-one">✦</span><span class="sparkle sparkle-two">✦</span></div>
    <div class="visual-card-body"><small>الفعالية القادمة</small><h3>${escapeHtml(event.title)}</h3>
    <p class="mb-2"><i class="bi bi-calendar3"></i> <time datetime="${escapeHtml(event.dateValue)}">${escapeHtml(formatEventDate(event.dateValue))}</time></p>
    <div class="d-flex justify-content-between align-items-center"><span><i class="bi bi-people"></i> ${escapeHtml(event.seats)} مقعد</span><a class="text-link" href="event.html?id=${encodeURIComponent(eventId)}">التفاصيل <i class="bi bi-arrow-left"></i></a></div></div>`;
};
