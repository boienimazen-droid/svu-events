import { EVENTS } from './event-details.js';
import { renderEventsGrid } from './event-cards.js';

const getFilterValues = () => ({
  search: document.querySelector('#event-search')?.value.trim().toLocaleLowerCase('ar') || '',
  category: document.querySelector('#event-category')?.value || 'all',
  date: document.querySelector('#event-date')?.value || '',
  location: document.querySelector('#event-location')?.value || 'all',
});

const applyFilters = () => {
  const { search, category, date, location } = getFilterValues();
  const matchingIds = Object.entries(EVENTS).filter(([, event]) => {
    const searchableText = `${event.title} ${event.shortDescription} ${event.category} ${event.location}`.toLocaleLowerCase('ar');
    return (!search || searchableText.includes(search))
      && (category === 'all' || event.filterCategory === category || event.interests.includes(category))
      && (!date || event.dateValue === date)
      && (location === 'all' || event.locationKey === location);
  }).map(([eventId]) => eventId);
  renderEventsGrid(matchingIds);
  document.querySelector('#empty-events')?.classList.toggle('d-none', matchingIds.length > 0);
  const resultCount = document.querySelector('#event-result-count');
  if (resultCount) resultCount.textContent = `${matchingIds.length} فعاليات مطابقة`;
};

const clearFilters = () => {
  document.querySelector('#event-filters-form')?.reset();
  applyFilters();
};

export const initializeEventFilters = () => {
  if (!document.querySelector('#events-grid')) return;
  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  const categorySelect = document.querySelector('#event-category');
  if (requestedCategory && [...categorySelect.options].some((option) => option.value === requestedCategory)) categorySelect.value = requestedCategory;
  renderEventsGrid();
  document.querySelector('#event-filters-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    applyFilters();
  });
  document.querySelectorAll('#event-filters-form input, #event-filters-form select').forEach((field) => {
    field.addEventListener(field.type === 'search' ? 'input' : 'change', applyFilters);
  });
  document.querySelector('#clear-event-filters')?.addEventListener('click', clearFilters);
  applyFilters();
};
