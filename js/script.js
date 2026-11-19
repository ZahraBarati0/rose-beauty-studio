/* ===== Rose Beauty Studio - script.js ===== */
'use strict';

/* ---------- Data ---------- */
const services = [
  { id: 1, alt: 'Woman resting with a pink rose clay mask while an esthetician applies it with a brush, rose petals around her', cat: 'skin', title: 'Signature Rose Facial', price: 1500, time: '75 min',
    short: 'Deep cleansing and hydration with rose-infused skincare.',
    includes: ['Skin analysis', 'Double cleanse and exfoliation', 'Rose petal mask', 'Facial massage'] },
  { id: 2, alt: 'Gold serum dropper above a cream jar and a bottle of golden serum beside pink roses', cat: 'skin', title: 'Gold Radiance Treatment', price: 2200, time: '90 min',
    short: 'A luxurious brightening ritual for glowing, even skin.',
    includes: ['Vitamin C infusion', 'Gold-peptide mask', 'LED light therapy', 'SPF finish'] },
  { id: 3, alt: 'Makeup artist applying rose-gold eyeshadow to the closed eye of a model', cat: 'makeup', title: 'Soft Glam Makeup', price: 1200, time: '60 min',
    short: 'Flawless, long-wear makeup for any occasion.',
    includes: ['Skin prep', 'Custom colour match', 'Lashes on request', 'Touch-up kit'] },
  { id: 4, alt: 'Bridal flat lay with pink roses, a pearl hair comb, drop earrings, perfume and a lace veil', cat: 'makeup', title: 'Bridal Beauty Package', price: 6500, time: '3 hrs',
    short: 'Hair and makeup with a trial session before the big day.',
    includes: ['Bridal trial', 'Hair styling', 'Full makeup', 'Veil and accessory placement'] },
  { id: 5, alt: 'Stylist blow-drying and brushing long chestnut waves with a round brush', cat: 'makeup', title: 'Hair Styling & Blowout', price: 900, time: '60 min',
    short: 'Silky blowouts, waves and elegant updos.',
    includes: ['Scalp massage wash', 'Heat-protect treatment', 'Style of your choice', 'Finishing shine'] },
  { id: 6, alt: 'Manicurist applying blush pink gel polish to the nails of a client', cat: 'nails', title: 'Luxury Manicure', price: 800, time: '50 min',
    short: 'Shape, care and gel polish in a palette of your choice.',
    includes: ['Cuticle care', 'Hand massage', 'Gel polish', 'Nail art (optional)'] },
  { id: 7, alt: 'Two white spa robes on cream chairs with rose tea and candles on a gold tray', cat: 'nails', title: 'Spa Ritual for Two', price: 3500, time: '2 hrs',
    short: 'A calming body and hand ritual shared with a friend.',
    includes: ['Aromatherapy', 'Body exfoliation', 'Hand and foot soak', 'Herbal tea service'] },
  { id: 8, alt: 'Hands decorated with a fine floral henna design resting on ivory silk beside pink roses', cat: 'nails', title: 'Henna Art', price: 1000, time: '75 min',
    short: 'Delicate hand-drawn henna designs for weddings, Eid and special days.',
    includes: ['Design consultation', 'Natural henna paste', 'Hands or feet', 'Aftercare tips'] }
];

const artists = [
  { id: 1, name: 'Zarmina Rahimi', role: 'Lead Makeup Artist', years: 9,
    tags: ['Bridal makeup', 'Soft glam', 'Color matching'],
    bio: 'Zarmina trained in Kabul and Istanbul and has styled over 600 brides. She believes makeup should feel like you, only more radiant.' },
  { id: 2, name: 'Parwana Noori', role: 'Skincare Therapist', years: 7,
    tags: ['Rose facials', 'Hydration', 'Sensitive skin'],
    bio: 'A certified esthetician, Parwana designs gentle skincare routines and is the creator of our signature Rose Facial.' },
  { id: 3, name: 'Nilofar Ahmadi', role: 'Hair & Nail Stylist', years: 6,
    tags: ['Hair styling', 'Updos', 'Nail art'],
    bio: 'Nilofar is known for effortless waves, elegant updos and delicate nail art for weddings and special evenings.' }
];

const faqs = [
  { q: 'How do I book an appointment?', a: 'Use the contact form on this page, call us, or send an email. We confirm every request within 24 hours.' },
  { q: 'How far in advance should I book?', a: 'For regular treatments, two to three days ahead is usually enough. For bridal packages we recommend booking at least four weeks before your wedding so we can plan your trial.' },
  { q: 'Do you offer a bridal trial?', a: 'Yes. The Bridal Beauty Package includes a trial session where we test your hair and makeup look, so you feel certain before the big day.' },
  { q: 'What products do you use?', a: 'We use premium, skin-friendly products. Please tell us about allergies or sensitive skin when you book and we will choose the right products for you.' },
  { q: 'Can I cancel or reschedule?', a: 'Of course. You can change or cancel your appointment free of charge up to 24 hours before your visit.' },
  { q: 'Which payment methods do you accept?', a: 'We accept cash in AFN and bank transfer. A small deposit may be requested for bridal bookings.' }
];

const testimonials = [
  { text: 'I walked in stressed and left glowing. The Rose Facial is pure bliss, and my skin has never looked better.', name: 'Mariam A.', role: 'Facial client' },
  { text: 'They made me feel like a queen on my wedding day. The makeup lasted from sunrise to the last dance.', name: 'Zohra S.', role: 'Bride' },
  { text: 'Elegant space, kind artists, and incredible attention to detail. My go-to studio for every special occasion.', name: 'Fatima N.', role: 'Regular client' }
];

/* ---------- Helpers ---------- */
const formatPrice = n => `${n.toLocaleString('en-US')} AFN`;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const header = $('#header');
const hamburger = $('#hamburger');
const navLinks = $('#nav-links');
const modal = $('#modal');            // the dark overlay
const dialog = $('.modal', modal);    // the white box
const modalContent = $('#modal-content');
let lastFocused = null;

/* ======================================================
   FEATURE 1: Mobile hamburger menu
   ====================================================== */
/* One helper decides whether the page may scroll: it is locked while the menu OR the modal is open */
function updateScrollLock() {
  const menuOpen = navLinks.classList.contains('nav-open');
  const modalOpen = modal.classList.contains('is-open');
  document.body.classList.toggle('no-scroll', menuOpen || modalOpen);   // CSS does the locking
}

function setMenu(open) {
  navLinks.classList.toggle('nav-open', open);        // JS only toggles a class...
  hamburger.setAttribute('aria-expanded', String(open)); // ...and updates aria-expanded
  hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  updateScrollLock();
}
hamburger.addEventListener('click', () => setMenu(!navLinks.classList.contains('nav-open')));
$$('a', navLinks).forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* ======================================================
   FEATURE 2: Dark / light mode (saved in localStorage)
   ====================================================== */
const themeBtn = $('#theme-toggle');
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}
let savedTheme = 'light';
try { savedTheme = localStorage.getItem('rose-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch (e) { /* storage blocked */ }
applyTheme(savedTheme);
themeBtn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('rose-theme', next); } catch (e) { /* ignore */ }
});

/* ======================================================
   FEATURE 3: Dynamic, filterable, interactive service cards + modal
   ====================================================== */
const cardsWrap = $('#service-cards');

function renderServices() {
  cardsWrap.innerHTML = services.map(s => `
    <article class="card fade-in" data-cat="${s.cat}" data-id="${s.id}">
      <div class="card-inner">
        <div class="face front">
          <div class="thumb"><img src="images/service-${s.id}.jpg" alt="${s.alt}" loading="lazy"></div>
          <h3>${s.title}</h3>
          <p>${s.short}</p>
          <p class="price">From ${formatPrice(s.price)}</p>
          <button type="button" class="card-btn" aria-expanded="false" aria-controls="back-${s.id}" aria-label="View details for ${s.title}">Learn more →</button>
        </div>
        <div class="face back" id="back-${s.id}">
          <h3>${s.title}</h3>
          <div class="meta"><span>${formatPrice(s.price)}</span><span>${s.time}</span></div>
          <ul class="includes">${s.includes.map(i => `<li>${i}</li>`).join('')}</ul>
          <button type="button" class="btn btn-primary btn-block book-btn">Book this treatment</button>
          <button type="button" class="back-btn">← Back</button>
        </div>
      </div>
    </article>`).join('');
}
renderServices();

/* Flip a card: toggle .is-flipped (CSS does the 3D turn) and move focus to the visible face */
function flipCard(card, flipped) {
  card.classList.toggle('is-flipped', flipped);
  $('.card-btn', card).setAttribute('aria-expanded', String(flipped));
  setTimeout(() => $(flipped ? '.book-btn' : '.card-btn', card).focus({ preventScroll: true }), flipped ? 50 : 450);
}

cardsWrap.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  if (e.target.closest('.book-btn')) {
    $('#service').value = card.dataset.id;
    clearError($('#service'));
    $('#contact').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => $('#name').focus({ preventScroll: true }), 700);
  } else if (e.target.closest('.back-btn')) {
    flipCard(card, false);
  } else if (e.target.closest('.card-btn')) {
    flipCard(card, true);
  }
});

cardsWrap.addEventListener('keydown', e => {
  const card = e.target.closest('.card');
  if (e.key === 'Escape' && card && card.classList.contains('is-flipped')) flipCard(card, false);
});

$$('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    $$('.card', cardsWrap).forEach(card => {
      const show = f === 'all' || card.dataset.cat === f;
      card.classList.toggle('hide', !show);
      if (show) { card.classList.remove('fade-in'); void card.offsetWidth; card.classList.add('fade-in'); }
    });
  });
});

/* ---------- Artists (rendered from data) ---------- */
const artistsGrid = $('#artists-grid');
artistsGrid.innerHTML = artists.map(a => `
  <article class="artist reveal">
    <div class="artist-photo">
      <img src="images/artist-${a.id}.jpg" alt="Portrait of ${a.name}, ${a.role}" loading="lazy">
      <span class="years">${a.years} yrs</span>
    </div>
    <h3>${a.name}</h3>
    <p class="role">${a.role}</p>
    <ul class="tags">${a.tags.map(t => `<li>${t}</li>`).join('')}</ul>
    <p class="bio">${a.bio}</p>
    <button type="button" class="btn btn-outline book-artist" data-name="${a.name}">Book with ${a.name.split(' ')[0]}</button>
  </article>`).join('');

artistsGrid.addEventListener('click', e => {
  const btn = e.target.closest('.book-artist');
  if (!btn) return;
  const msg = $('#message');
  msg.value = `I would like to book an appointment with ${btn.dataset.name}.`;
  clearError(msg);
  $('#contact').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => $('#name').focus({ preventScroll: true }), 700);
});

/* ---------- Modal (gallery lightbox / form confirmation) ---------- */
function openModal(html, label, wide = false) {
  lastFocused = document.activeElement;
  modalContent.innerHTML = html;               // html comes only from OUR trusted templates
  dialog.setAttribute('aria-label', label);    // screen readers announce what the dialog is
  dialog.classList.toggle('wide', wide);
  modal.classList.add('is-open');              // CSS shows it
  updateScrollLock();
  $('#modal-close').focus();                   // move focus into the modal
}
function closeModal() {
  modal.classList.remove('is-open');
  updateScrollLock();
  if (lastFocused) lastFocused.focus();        // give focus back
}
$('#modal-close').addEventListener('click', closeModal);
// close when the dark overlay itself is clicked (not when the click is inside the box)
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });

// keep Tab / Shift+Tab inside the open modal (Lesson 07: manage focus)
function trapFocus(event) {
  if (event.key !== 'Tab' || !modal.classList.contains('is-open')) return;
  const focusable = $$('a[href], button:not([disabled]), input, select, textarea', dialog);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!dialog.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
document.addEventListener('keydown', trapFocus);

$('#open-booking').addEventListener('click', () => {
  $('#contact').scrollIntoView({ behavior: 'smooth' });
});

/* Gallery lightbox */
$$('.g-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const thumb = $('img', btn);
    openModal('<img id="lightbox-img" alt="">', thumb.alt, true);
    const big = $('#lightbox-img');
    big.src = thumb.getAttribute('src');
    big.alt = thumb.alt;
  });
});

/* ======================================================
   Contact form validation
   ====================================================== */
const form = $('#contact-form');
const serviceSelect = $('#service');
services.forEach(s => serviceSelect.add(new Option(`${s.title} (${formatPrice(s.price)})`, s.id)));

const rules = {
  name: v => v.trim().length < 2 ? 'Please enter your full name.' : '',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
  service: v => v ? '' : 'Please choose a service.',
  message: v => v.trim().length < 10 ? 'Message must be at least 10 characters.' : ''
};

function validateField(input) {
  const msg = rules[input.name](input.value);
  const field = input.closest('.field');
  $('.error', field).textContent = msg;
  field.classList.toggle('invalid', !!msg);
  field.classList.toggle('valid', !msg);
  input.setAttribute('aria-invalid', String(!!msg));
  return !msg;
}
function clearError(input) {
  const field = input.closest('.field');
  $('.error', field).textContent = '';
  field.classList.remove('invalid', 'valid');
  input.removeAttribute('aria-invalid');
}
$$('input, select, textarea', form).forEach(input => {
  input.addEventListener('blur', () => validateField(input));
  input.addEventListener('input', () => { if (input.closest('.field').classList.contains('invalid')) validateField(input); });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const fields = $$('input, select, textarea', form);
  const results = fields.map(validateField);
  const firstBad = fields[results.indexOf(false)];
  if (firstBad) { firstBad.focus(); return; }

  const name = $('#name').value.trim().split(' ')[0];
  const svc = services.find(s => s.id === Number(serviceSelect.value));
  openModal(`
    <h2>Thank you, <span id="thanks-name"></span></h2>
    <p>Your request for <strong>${svc.title}</strong> has been received. We will email you within 24 hours to confirm your appointment.</p>
    <button type="button" class="btn btn-primary btn-block" id="ok">Done</button>`, 'Request received');
  $('#thanks-name').textContent = name;   // textContent: visitor text is shown as plain text, never run as HTML
  $('#ok').addEventListener('click', closeModal);
  form.reset();
  $$('.field', form).forEach(f => f.classList.remove('valid', 'invalid'));
  $$('input, select, textarea', form).forEach(i => i.removeAttribute('aria-invalid'));
});

/* ======================================================
   Testimonial slider
   ====================================================== */
const slideEl = $('#slide');
const dotsEl = $('#dots');
const sliderBox = $('#slider');
const sliderView = $('.slide-viewport');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let current = 0;
let timer;
let paused = false;

/* announce = true only when a visitor picked the slide, so the timer never talks over a screen reader */
function showSlide(i, announce = false) {
  current = (i + testimonials.length) % testimonials.length;
  const t = testimonials[current];
  sliderView.setAttribute('aria-live', announce ? 'polite' : 'off');
  slideEl.innerHTML = `<span class="stars" aria-label="5 stars">★★★★★</span>“${t.text}”<footer>${t.name} · ${t.role}</footer>`;
  slideEl.classList.remove('change'); void slideEl.offsetWidth; slideEl.classList.add('change');
  $$('.dot', dotsEl).forEach((d, idx) => d.classList.toggle('active', idx === current));
}

function restartTimer() {
  clearInterval(timer);
  if (!paused && !reduceMotion) timer = setInterval(() => showSlide(current + 1), 6000);
}
function setPaused(value) { paused = value; restartTimer(); }

function goToSlide(i) {   // manual change: announced, and the timer starts counting again
  showSlide(i, true);
  restartTimer();
}

testimonials.forEach((_, i) => {
  const d = document.createElement('button');
  d.type = 'button';
  d.className = 'dot';
  d.setAttribute('aria-label', `Show testimonial ${i + 1}`);
  d.addEventListener('click', () => goToSlide(i));
  dotsEl.appendChild(d);
});

sliderBox.addEventListener('mouseenter', () => setPaused(true));
sliderBox.addEventListener('mouseleave', () => setPaused(false));
sliderBox.addEventListener('focusin', () => setPaused(true));
sliderBox.addEventListener('focusout', () => setPaused(false));
$('#next').addEventListener('click', () => goToSlide(current + 1));
$('#prev').addEventListener('click', () => goToSlide(current - 1));
showSlide(0);
restartTimer();

/* ======================================================
   FAQ accordion (one open at a time, class toggling + aria-expanded)
   ====================================================== */
const faqList = $('#faq-list');
faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item${i === 0 ? ' open' : ''}">
    <h3>
      <button type="button" class="faq-q" id="faq-q-${i}" aria-expanded="${i === 0}" aria-controls="faq-a-${i}">
        <span>${f.q}</span><span class="faq-icon" aria-hidden="true"></span>
      </button>
    </h3>
    <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${f.a}</p></div></div>
  </div>`).join('');

faqList.addEventListener('click', e => {
  const btn = e.target.closest('.faq-q');
  if (!btn) return;
  const item = btn.closest('.faq-item');
  const willOpen = !item.classList.contains('open');
  $$('.faq-item', faqList).forEach(it => {
    it.classList.remove('open');
    $('.faq-q', it).setAttribute('aria-expanded', 'false');
  });
  if (willOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
});

/* Optional hero photo: shown only if images/hero.jpg exists */
const heroPhoto = $('#hero-photo');
const heroImg = new Image();
heroImg.alt = 'A woman with glowing skin at Rose Beauty Studio, surrounded by pink roses';
heroImg.onload = () => {
  heroPhoto.appendChild(heroImg);
  $('#hero-art').classList.add('has-photo');   // CSS shows the photo
};
heroImg.src = 'images/hero.jpg';

/* ======================================================
   Scroll effects: header, active link, back-to-top, reveal, counters
   ====================================================== */
const toTop = $('#to-top');
const sections = $$('main section[id]');
const links = $$('a', navLinks);

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  toTop.classList.toggle('show', window.scrollY > 600);
  const pos = window.scrollY + 140;
  let activeId = 'home';
  sections.forEach(sec => { if (pos >= sec.offsetTop) activeId = sec.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + activeId));
}, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* reveal on scroll */
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
  });
}, { threshold: 0.15 });
$$('.reveal').forEach(el => revealObserver.observe(el));

/* animated counters */
function animateCount(el) {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const dur = 1800;
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US') + (p === 1 ? '+' : '');
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}
const countObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target); } });
}, { threshold: 0.6 });
$$('[data-count]').forEach(el => countObserver.observe(el));

/* falling petals in hero (random sizes/positions can't be written in CSS, so JS sets them) */
const petalsWrap = $('#petals');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('span');
    const size = 10 + Math.random() * 14;
    p.className = 'petal';
    p.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;` +
      `animation-duration:${9 + Math.random() * 9}s;animation-delay:${-Math.random() * 14}s;` +
      `--drift:${(Math.random() - .5) * 200}px`;
    petalsWrap.appendChild(p);
  }
}

/* footer year */
$('#year').textContent = new Date().getFullYear();

/* hero greeting by time of day (Lesson 06) */
const hour = new Date().getHours();
let greeting = 'Good evening';
if (hour < 12) {
  greeting = 'Good morning';
} else if (hour < 18) {
  greeting = 'Good afternoon';
}
$('#greeting').textContent = greeting;

/* "Open now" / "Closed" badge, calculated in Kabul time: open Sat-Thu, 9:00-18:00 */
function updateOpenStatus() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kabul', weekday: 'short', hour: 'numeric', hourCycle: 'h23' })
    .formatToParts(new Date());
  const weekday = parts.find(p => p.type === 'weekday').value;
  const kabulHour = Number(parts.find(p => p.type === 'hour').value);
  const isOpen = weekday !== 'Fri' && kabulHour >= 9 && kabulHour < 18;
  const badge = $('#open-status');
  badge.textContent = isOpen ? 'Open now' : 'Closed now';
  badge.classList.toggle('is-open', isOpen);
}
updateOpenStatus();
