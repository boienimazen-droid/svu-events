import { escapeHtml } from '../utils/sanitize.js';
import { showToast } from '../services/feedback-service.js';
import { formatEventDate, isPastEvent } from '../utils/event-dates.js';

export const EVENTS = {
  'future-makers': {
    interests: ['مجتمع', 'تعليم'],
    filterCategory: 'ندوة', dateValue: '2026-10-24', locationKey: 'online', shortDescription: 'حوار مفتوح حول المهارات التي يحتاجها سوق العمل في السنوات القادمة.',
    category: 'ندوة معرفية', badgeClass: 'badge-soft-blue', title: 'لقاء صُنّاع المستقبل', titleAccent: 'المستقبل',
    intro: 'حوار مفتوح حول المهارات والأفكار التي تصنع الفرق في سوق العمل القادم.', time: '18:00 — 20:00', location: 'عبر الإنترنت', icon: 'mic-fill', artWord: 'NEXT<br />GEN', mapLabel: 'فعالية أونلاين', gallery: ['حوار', 'إلهام', 'تواصل'],
    paragraphs: ['يتغير العالم من حولنا بسرعة، ومعه تتغير المهارات التي نحتاجها لنصنع مستقبلاً أفضل. في هذا اللقاء، نستضيف مجموعة من الخبراء وصنّاع الأثر لنفتح حواراً صريحاً حول الفرص والتحديات القادمة.', 'ستخرج من الجلسة بأفكار عملية، وإلهام جديد، وشبكة من الأشخاص الذين يشاركونك الطموح نفسه.'], agenda: [['الجلسة الرئيسية', 'من الجامعة إلى سوق العمل: كيف تبدأ بطريقة صحيحة؟', '18:00'], ['حوار مفتوح', 'أسئلتك المباشرة للخبراء وصنّاع القرار.', '19:00'], ['تواصل وتعارف', 'مساحة للتعرف على زملاء يشاركونك الاهتمامات.', '19:40']], seats: '120', reserved: '86', percent: '72', speakerInitial: 'أ', speaker: 'أحمد الحلاق', role: 'مستشار ابتكار وريادة أعمال', duration: 'ساعتان من الإلهام'
  },
  'creative-lab': {
    interests: ['تعليم'],
    filterCategory: 'ورشة عمل', dateValue: '2026-10-28', locationKey: 'damascus', shortDescription: 'حوّل فكرتك الأولى إلى مشروع قابل للنمو مع مدربين وخبراء في الابتكار.',
    category: 'ورشة عمل', badgeClass: 'badge-soft-orange', title: 'مختبر الأفكار الإبداعية', titleAccent: 'الإبداعية',
    intro: 'حوّل فكرتك الأولى إلى مشروع قابل للنمو مع مدربين وخبراء في الابتكار.', time: '16:00 — 18:00', location: 'دمشق + أونلاين', icon: 'brush-fill', artWord: 'MAKE<br />IT', mapLabel: 'مركز دمشق + أونلاين', gallery: ['فكرة', 'اختبار', 'نموذج'],
    paragraphs: ['كل مشروع كبير بدأ بفكرة صغيرة. في مختبر الأفكار الإبداعية نساعدك على اختبار فكرتك، فهم جمهورك، وبناء أول نموذج عملي لها.', 'لا تحتاج إلى خبرة سابقة؛ يكفي أن تأتي بفضولك وفكرة تريد أن تمنحها فرصة حقيقية.'], agenda: [['توليد الأفكار', 'تمارين عملية لإيجاد حلول جديدة للمشكلات اليومية.', '16:00'], ['اختبار الفكرة', 'كيف تعرف أن فكرتك تستحق أن تُبنى؟', '17:00'], ['خطة العمل', 'حوّل الفكرة إلى خطوات قابلة للتنفيذ.', '17:40']], seats: '40', reserved: '31', percent: '78', speakerInitial: 'ل', speaker: 'لينا مراد', role: 'مدرّبة ابتكار وتصميم', duration: 'ساعتان من التطبيق'
  },
  'digital-hackathon': {
    interests: ['مجتمع', 'تعليم'],
    filterCategory: 'تحدّي', dateValue: '2026-11-02', locationKey: 'online', shortDescription: '36 ساعة من العمل الجماعي لبناء حلول رقمية لمشكلات واقعية.',
    category: 'تحدّي', badgeClass: 'badge-soft-purple', title: 'هاكاثون الحلول الرقمية', titleAccent: 'الرقمية',
    intro: '36 ساعة من العمل الجماعي لبناء حلول رقمية لمشكلات واقعية.', time: '10:00 — 16:00', location: 'عبر الإنترنت', icon: 'code-slash', artWord: 'BUILD<br />TOGETHER', mapLabel: 'فعالية أونلاين', gallery: ['فريق', 'بناء', 'عرض'],
    paragraphs: ['كوّن فريقك وادخل تحدياً سريعاً وممتعاً لبناء حل رقمي يخدم المجتمع. ستعمل مع طلاب من اختصاصات مختلفة، وتحصل على إرشاد من خبراء طوال التحدي.', 'في النهاية، ستعرضون الحل أمام لجنة تحكيم وتحصل الفرق الفائزة على جوائز وتجربة لا تنسى.'], agenda: [['إطلاق التحدي', 'التعرف إلى المشكلة وتشكيل الفرق.', '10:00'], ['وقت البناء', 'إرشاد مفتوح وتطوير الحلول والنماذج الأولية.', '11:00'], ['العروض والنتائج', 'عرض المشاريع وإعلان الفرق الفائزة.', '15:00']], seats: '80', reserved: '56', percent: '70', speakerInitial: 'و', speaker: 'وائل قسيس', role: 'مهندس برمجيات ومرشد تقني', duration: 'يوم كامل من البناء'
  },
  'career-first-step': {
    interests: ['تعليم'],
    filterCategory: 'ندوة', dateValue: '2026-11-07', locationKey: 'online', shortDescription: 'نصائح عملية لبناء حضور مهني قوي والاستعداد للفرصة الأولى.',
    category: 'ندوة', badgeClass: 'badge-soft-green', title: 'خطوتك الأولى في سوق العمل', titleAccent: 'سوق العمل',
    intro: 'نصائح عملية لبناء حضور مهني قوي والاستعداد للفرصة الأولى.', time: '17:00 — 19:00', location: 'عبر الإنترنت', icon: 'graph-up-arrow', artWord: 'YOUR<br />START', mapLabel: 'فعالية أونلاين', gallery: ['قصة', 'سيرة', 'مقابلة'],
    paragraphs: ['الانتقال من الحياة الجامعية إلى سوق العمل لا يجب أن يكون مربكاً. نشاركك في هذه الندوة خطوات واضحة لبناء سيرتك الذاتية، حضورك الرقمي، وشبكتك المهنية.', 'استمع إلى تجارب خريجين بدأوا من المكان نفسه، واسألهم عن القرارات التي صنعت فارقاً في بداياتهم.'], agenda: [['تجهيز قصتك المهنية', 'كيف تقدم نفسك وتبرز نقاط قوتك؟', '17:00'], ['من السيرة إلى المقابلة', 'أخطاء شائعة ونصائح لتجاوز المقابلة الأولى.', '18:00'], ['أسئلة وتجارب', 'حوار مع خريجين حول بداياتهم المهنية.', '18:35']], seats: '150', reserved: '102', percent: '68', speakerInitial: 'ن', speaker: 'نور حنا', role: 'مستشارة توظيف وتطوير مهني', duration: 'ساعتان من الخطوات العملية'
  },
  'visual-story': {
    interests: ['تعليم'],
    filterCategory: 'ورشة عمل', dateValue: '2026-11-12', locationKey: 'center', shortDescription: 'تعلّم أساسيات صناعة المحتوى والتصوير من الفكرة حتى النشر.',
    category: 'ورشة عمل', badgeClass: 'badge-soft-pink', title: 'احكِ قصتك بصرياً', titleAccent: 'بصرياً',
    intro: 'تعلّم أساسيات صناعة المحتوى والتصوير من الفكرة حتى النشر.', time: '16:00 — 18:00', location: 'مركز الجامعة', icon: 'camera-fill', artWord: 'TELL<br />YOUR STORY', mapLabel: 'مركز الجامعة الافتراضية', gallery: ['فكرة', 'ضوء', 'قصة'],
    paragraphs: ['الصورة الجيدة لا تحتاج إلى كاميرا غالية، بل إلى فكرة واضحة وعين تعرف ماذا تريد أن تقول. في هذه الورشة نتعلم أساسيات التكوين، الإضاءة، وسرد القصة.', 'أحضر هاتفك فقط، واصنع في نهاية الورشة قطعة محتوى جاهزة للمشاركة.'], agenda: [['الفكرة والإطار', 'ابحث عن القصة قبل أن تلتقط الصورة.', '16:00'], ['التصوير العملي', 'تجربة الضوء والزوايا باستخدام أدوات بسيطة.', '17:00'], ['منشورك الأول', 'رتّب قصتك وجهّزها للنشر.', '17:40']], seats: '35', reserved: '23', percent: '66', speakerInitial: 'ر', speaker: 'رنا الشيخ', role: 'صانعة محتوى ومصورة', duration: 'ساعتان من التجربة'
  },
  'open-knowledge': {
    interests: ['مجتمع'],
    filterCategory: 'تحدّي', dateValue: '2026-11-20', locationKey: 'center', shortDescription: 'اختبر معلوماتك، كوّن فريقك، واربح تجربة لا تنسى.',
    category: 'تحدّي', badgeClass: 'badge-soft-yellow', title: 'مسابقة المعرفة المفتوحة', titleAccent: 'المفتوحة',
    intro: 'اختبر معلوماتك، كوّن فريقك، واربح تجربة لا تنسى.', time: '12:00 — 15:00', location: 'مركز الجامعة', icon: 'trophy-fill', artWord: 'KNOW<br />MORE', mapLabel: 'مركز الجامعة الافتراضية', gallery: ['فريق', 'تحدي', 'فوز'],
    paragraphs: ['مسابقة ودية تجمع المعرفة العامة، الثقافة الرقمية، وأسئلة من الحياة الجامعية في جولات سريعة وممتعة.', 'كوّن فريقاً من ثلاثة إلى أربعة أشخاص، وتعال لتنافس وتضحك وتتعلم شيئاً جديداً مع أصدقاء من مختلف الاختصاصات.'], agenda: [['تسجيل الفرق', 'تعرّف إلى قواعد المسابقة وشكّل فريقك.', '12:00'], ['الجولات التنافسية', 'أسئلة متنوعة ومفاجآت في كل جولة.', '13:00'], ['الجولة النهائية', 'المواجهة الأخيرة وتكريم الفائزين.', '14:30']], seats: '100', reserved: '64', percent: '64', speakerInitial: 'م', speaker: 'مجد بركات', role: 'منسق الأنشطة الطلابية', duration: 'ثلاث ساعات من المرح'
  }
};

const buildAgenda = (agenda) => agenda.map(([title, description, time], index) => `
  <div class="agenda-item"><span class="agenda-number">${String(index + 1).padStart(2, '0')}</span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(description)}</p></div><time>${escapeHtml(time)}</time></div>`).join('');

const formatArtWord = (artWord) => artWord.split('<br />').map(escapeHtml).join('<br />');

const getTitleMarkup = (event) => {
  const title = escapeHtml(event.title);
  const accent = escapeHtml(event.titleAccent);
  return title.replace(accent, `<span>${accent}</span>`);
};

const escapeIcs = (value) => String(value).replaceAll('\\', '\\\\').replaceAll(';', '\\;').replaceAll(',', '\\,').replaceAll('\n', '\\n');

const buildCalendarFile = (event) => {
  const start = event.dateValue.replaceAll('-', '') + `T${event.time.slice(0, 5).replace(':', '')}00`;
  const end = event.dateValue.replaceAll('-', '') + `T${event.time.slice(-5).replace(':', '')}00`;
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SVU Events Directory//BWP401//AR', 'BEGIN:VEVENT', `UID:${event.dateValue}-${escapeIcs(event.title)}@svu-events`, `DTSTAMP:${event.dateValue.replaceAll('-', '')}T000000Z`, `DTSTART:${start}`, `DTEND:${end}`, `SUMMARY:${escapeIcs(event.title)}`, `DESCRIPTION:${escapeIcs(event.intro)}`, `LOCATION:${escapeIcs(event.location)}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
};

const downloadCalendar = (event) => {
  const url = URL.createObjectURL(new Blob([buildCalendarFile(event)], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.dateValue}-${event.title.replaceAll(' ', '-')}.ics`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('تم تنزيل ملف التقويم بنجاح.');
};

const shareEvent = async (event) => {
  const shareData = { title: event.title, text: event.intro, url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      showToast('تمت مشاركة الفعالية بنجاح.');
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      showToast('تم نسخ رابط الفعالية.');
      return;
    }
    throw new Error('Clipboard unavailable');
  } catch (error) {
    if (error.name === 'AbortError') return;
    showToast('تعذر نسخ الرابط. يمكنك نسخه من شريط العنوان.', 'error');
  }
};

const renderRelatedEvents = (currentId) => {
  const container = document.querySelector('[data-related-events]');
  if (!container) return;
  const related = Object.entries(EVENTS).filter(([eventId]) => eventId !== currentId).slice(0, 3);
  container.innerHTML = related.map(([eventId, event]) => `<div class="col-md-6 col-xl-4"><article class="related-event-card"><div class="related-event-icon event-image-${escapeHtml(event.badgeClass.replace('badge-soft-', ''))}"><i class="bi bi-${escapeHtml(event.icon)}"></i></div><div class="related-event-body"><span class="badge ${escapeHtml(event.badgeClass)}">${escapeHtml(event.category)}</span><h3>${escapeHtml(event.title)}</h3><a href="event.html?id=${encodeURIComponent(eventId)}" class="text-link">عرض التفاصيل <i class="bi bi-arrow-left"></i></a></div></article></div>`).join('');
};

const renderEventDetail = () => {
  const root = document.querySelector('#event-detail-content');
  if (!root) return;
  const requestedId = new URLSearchParams(window.location.search).get('id') || 'future-makers';
  const isKnownEvent = Boolean(EVENTS[requestedId]);
  const activeId = isKnownEvent ? requestedId : 'future-makers';
  const event = EVENTS[activeId];
  const ended = isPastEvent(event);
  const fallbackNotice = isKnownEvent ? '' : '<div class="container invalid-event-notice alert alert-warning"><i class="bi bi-info-circle me-2"></i>لم يتم العثور على هذه الفعالية، لذلك نعرض الفعالية الافتراضية. <a href="events.html">العودة إلى الدليل</a></div>';
  document.title = `${event.title} | بوابة SVU`;
  root.innerHTML = `${fallbackNotice}
    <section class="event-detail-hero"><div class="container"><a class="back-link" href="events.html"><i class="bi bi-arrow-right"></i> العودة إلى الفعاليات</a><div class="event-detail-layout"><div class="event-detail-copy"><span class="badge ${escapeHtml(event.badgeClass)} mb-3">${escapeHtml(event.category)}</span><h1>${getTitleMarkup(event)}</h1><p class="event-detail-intro">${escapeHtml(event.intro)}</p><div class="event-detail-facts"><div><i class="bi bi-calendar3"></i><span><small>التاريخ</small><strong>${escapeHtml(formatEventDate(event.dateValue))}</strong></span></div><div><i class="bi bi-clock"></i><span><small>الوقت</small><strong>${escapeHtml(event.time)}</strong></span></div><div><i class="bi bi-laptop"></i><span><small>المكان</small><strong>${escapeHtml(event.location)}</strong></span></div></div><div class="event-action-row mt-4"><button class="btn btn-primary btn-lg" ${ended ? 'disabled' : 'data-bs-toggle="modal" data-bs-target="#registerModal"'}>${ended ? 'انتهت الفعالية' : 'سجّل حضورك <i class="bi bi-arrow-left"></i>'}</button><button class="btn btn-outline-light btn-lg" type="button" data-calendar-event>أضف إلى التقويم <i class="bi bi-calendar-plus"></i></button></div></div><div class="event-detail-art event-image-${escapeHtml(event.badgeClass.replace('badge-soft-', ''))}" role="img" aria-label="${escapeHtml(event.title)}"><div class="art-circle"><i class="bi bi-${escapeHtml(event.icon)}"></i></div><span class="art-word">${formatArtWord(event.artWord)}</span><span class="art-star">✦</span></div></div></div></section>
    <section class="section-space bg-surface"><div class="container"><div class="row g-5"><div class="col-lg-8"><span class="eyebrow eyebrow-dark">عن الفعالية</span><h2>لماذا هذه الفعالية؟</h2>${event.paragraphs.map((paragraph) => `<p class="content-copy">${escapeHtml(paragraph)}</p>`).join('')}<div class="agenda-card mt-4"><div class="agenda-heading"><h3>ماذا ينتظرك؟</h3><span>${escapeHtml(event.duration)}</span></div>${buildAgenda(event.agenda)}</div><div class="event-map-card mt-4"><div class="map-visual" role="img" aria-label="خريطة توضح موقع الفعالية"><span class="map-grid"></span><i class="bi bi-geo-alt-fill map-pin"></i><strong>${escapeHtml(event.mapLabel)}</strong><small>${escapeHtml(event.location)}</small></div></div><div class="event-gallery mt-4"><h3>لمحة عن التجربة</h3><div class="row g-3">${event.gallery.map((item, index) => `<div class="col-4"><div class="gallery-tile gallery-tile-${index + 1}" role="img" aria-label="${escapeHtml(item)}"><i class="bi bi-${['stars', 'lightbulb', 'people'][index]}"></i><span>${escapeHtml(item)}</span></div></div>`).join('')}</div></div></div><div class="col-lg-4"><aside class="event-side-card"><div class="side-card-icon"><i class="bi bi-people-fill"></i></div><h3>${ended ? 'انتهت الفعالية' : 'المقاعد محدودة'}</h3><p>${ended ? 'هذه فعالية سابقة. يمكنك الاطلاع على تفاصيلها وتصفّح الدليل لاكتشاف الفعاليات القادمة.' : `انضم إلى أكثر من ${escapeHtml(event.seats)} طالباً وطالبة في هذه الفعالية.`}</p><div class="progress mb-2" role="progressbar" aria-label="نسبة المقاعد المحجوزة" aria-valuenow="${escapeHtml(event.percent)}" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width:${escapeHtml(event.percent)}%"></div></div><div class="d-flex justify-content-between small text-muted"><span>${escapeHtml(event.reserved)} مقعداً محجوزاً</span><span>${escapeHtml(event.percent)}%</span></div><hr /><h4>ضيف الفعالية</h4><div class="speaker"><div class="speaker-avatar">${escapeHtml(event.speakerInitial)}</div><div><strong>${escapeHtml(event.speaker)}</strong><span>${escapeHtml(event.role)}</span></div></div><button class="btn btn-outline-primary w-100 mt-4" ${ended ? 'disabled' : 'data-bs-toggle="modal" data-bs-target="#registerModal"'}>${ended ? 'التسجيل مغلق' : 'احجز مقعدك الآن'}</button><button class="btn btn-link share-event-btn w-100 mt-2" type="button" data-share-event>مشاركة الفعالية <i class="bi bi-share"></i></button></aside></div></div></div></section><section class="related-events-section"><div class="container"><div class="d-flex justify-content-between align-items-end mb-4"><div><span class="eyebrow eyebrow-dark">قد يعجبك أيضاً</span><h2>فعاليات مرتبطة</h2></div><a class="text-link" href="events.html">كل الفعاليات <i class="bi bi-arrow-left"></i></a></div><div class="row g-4" data-related-events></div></div></section>`;
  renderRelatedEvents(activeId);
  document.querySelector('[data-calendar-event]')?.addEventListener('click', () => downloadCalendar(event));
  document.querySelector('[data-share-event]')?.addEventListener('click', () => shareEvent(event));
};

export const initializeEventDetails = () => renderEventDetail();
