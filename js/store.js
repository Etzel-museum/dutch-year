// Local persistence. Everything lives in one localStorage key; export/import for backups.
(function () {
  const KEY = 'dutchyear.v1';

  const blank = () => ({
    version: 1,
    created: Date.now(),
    progress: {},   // "week-day" -> { at, score }
    cards: {},      // card id -> { due, ivl, ease, reps, lapses, last }
    phrases: [],    // { id, nl, en, note }
    log: {},        // "YYYY-MM-DD" -> { sec, reviews, lessons }
    tests: {},      // week -> best percentage
    cando: {},      // week -> [bool]
    inputDone: {},  // "week:itemIndex" -> true
    reports: [],    // { at, where, text }
    settings: { rate: 0.9, voice: null, autoplay: true, goalMin: 30 },
  });

  let s;
  try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { s = null; }
  const b = blank();
  s = Object.assign(b, s || {});
  s.settings = Object.assign(blank().settings, s.settings || {});

  let persistent = true;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(s)); persistent = true; }
    catch (e) { persistent = false; }
  }

  const pad = n => String(n).padStart(2, '0');
  const dateKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  // Day number in local time, used for SRS due dates.
  const dayNum = (d = new Date()) => Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);

  function logEntry(key = dateKey()) {
    return s.log[key] || (s.log[key] = { sec: 0, reviews: 0, lessons: 0 });
  }
  function log(kind, n = 1) { logEntry()[kind] += n; save(); }

  function active(e) { return e && (e.sec >= 60 || e.reviews > 0 || e.lessons > 0); }

  function streak() {
    const d = new Date();
    let n = 0;
    if (!active(s.log[dateKey(d)])) d.setDate(d.getDate() - 1); // today not done yet: count from yesterday
    while (active(s.log[dateKey(d)])) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  function exportJSON() { return JSON.stringify(s, null, 1); }
  function importJSON(text) {
    const data = JSON.parse(text);
    if (!data || data.version !== 1 || typeof data.cards !== 'object') throw new Error('Not a Dutch Year backup file');
    s = Object.assign(blank(), data);
    s.settings = Object.assign(blank().settings, data.settings || {});
    save();
  }
  function reset() { s = blank(); save(); }

  window.DY = window.DY || {};
  DY.store = {
    get state() { return s; },
    get persistent() { return persistent; },
    save, dateKey, dayNum, log, logEntry, streak, exportJSON, importJSON, reset,
  };
})();
