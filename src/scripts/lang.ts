// Tiny language switch controller. Reads localStorage, syncs <html data-lang>,
// listens for clicks on [data-lang-switch] buttons.

type Lang = 'en' | 'ka';

const KEY = 'zz-lang';
const root = document.documentElement;

function read(): Lang {
  const stored = localStorage.getItem(KEY);
  if (stored === 'en' || stored === 'ka') return stored;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return browser === 'ka' ? 'ka' : 'en';
}

function apply(lang: Lang) {
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang);
  localStorage.setItem(KEY, lang);
  document.querySelectorAll<HTMLButtonElement>('[data-lang-switch]').forEach((btn) => {
    btn.dataset.active = btn.dataset.langSwitch === lang ? 'true' : 'false';
  });
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

apply(read());

document.addEventListener('click', (e) => {
  const target = (e.target as HTMLElement)?.closest<HTMLElement>('[data-lang-switch]');
  if (!target) return;
  const next = target.dataset.langSwitch as Lang;
  if (next === 'en' || next === 'ka') apply(next);
});
