// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Word for Today — rotates automatically based on the date
const verses = [
  { text: "Trust in the Lord with all your heart, and lean not on your own understanding.", ref: "Proverbs 3:5" },
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", ref: "1 Corinthians 13:4" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "And we know that in all things God works for the good of those who love him.", ref: "Romans 8:28" },
  { text: "Above all else, guard your heart, for everything you do flows from it.", ref: "Proverbs 4:23" },
  { text: "As for me and my household, we will serve the Lord.", ref: "Joshua 24:15" },
  { text: "Commit to the Lord whatever you do, and he will establish your plans.", ref: "Proverbs 16:3" },
  { text: "The joy of the Lord is your strength.", ref: "Nehemiah 8:10" }
];

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

const todayIndex = getDayOfYear(new Date()) % verses.length;
const todayVerse = verses[todayIndex];

const verseTextEl = document.getElementById('verseText');
const verseRefEl = document.getElementById('verseRef');
if (verseTextEl && verseRefEl) {
  verseTextEl.textContent = todayVerse.text;
  verseRefEl.textContent = todayVerse.ref;
}

// ===== Word for Today: rotates daily =====
// Add, remove, or edit verses here — the site will cycle through this list,
// showing a new one each day (same verse all day, changes at midnight).
const verses = [
  { text: "Trust in the Lord with all your heart, and lean not on your own understanding.", ref: "Proverbs 3:5" },
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.", ref: "Jeremiah 29:11" },
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", ref: "Romans 8:28" },
  { text: "Come to me, all who labor and are heavy laden, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
  { text: "Above all else, guard your heart, for everything you do flows from it.", ref: "Proverbs 4:23" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4" },
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", ref: "1 Corinthians 13:4" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
  { text: "Let all that you do be done in love.", ref: "1 Corinthians 16:14" }
];

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

const verseTextEl = document.getElementById('verseText');
const verseRefEl = document.getElementById('verseRef');

if (verseTextEl && verseRefEl) {
  const todayIndex = getDayOfYear(new Date()) % verses.length;
  const todaysVerse = verses[todayIndex];
  verseTextEl.textContent = todaysVerse.text;
  verseRefEl.textContent = todaysVerse.ref;
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.about, .cards, .sermons, .verse, .contact, .card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
