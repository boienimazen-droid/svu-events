import { renderSiteShell } from '../../components/site-shell.js';
import { initializeEventFilters } from '../../components/event-filters.js';
import { initializeTheme } from '../../ui/theme-toggle.js';
import { initializeScrollTop } from '../../ui/scroll-top.js';
import { initializeContactForm, initializeInteractiveForms } from '../../services/feedback-service.js';
import { initializeEventDetails } from '../../components/event-details.js';
import { renderFeaturedEvents, renderNextEvent } from '../../components/event-cards.js';

renderSiteShell();
initializeTheme();
initializeScrollTop();
initializeInteractiveForms();
initializeContactForm();
initializeEventFilters();
initializeEventDetails();
renderFeaturedEvents();
renderNextEvent();
