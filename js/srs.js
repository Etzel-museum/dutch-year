// Spaced repetition (SM-2 style, day granularity).
// Each word gets two cards: ":r" (recognise: Dutch → English) and ":p" (produce: English → Dutch).
(function () {
  const st = () => DY.store.state;
  const today = () => DY.store.dayNum();

  function ensure(id, dueOffset = 0) {
    const cards = st().cards;
    if (!cards[id]) cards[id] = { due: today() + dueOffset, ivl: 0, ease: 2.5, reps: 0, lapses: 0, last: null };
  }

  // Production card starts tomorrow so a new lesson doesn't double the same-day load.
  function addItem(baseId) { ensure(baseId + ':r'); ensure(baseId + ':p', 1); }

  function has(baseId) { return !!st().cards[baseId + ':r']; }

  function dueList() {
    const t = today();
    return Object.entries(st().cards)
      .filter(([id, c]) => c.due <= t && lookup(id))
      .sort((a, b) => a[1].due - b[1].due || (a[0] < b[0] ? -1 : 1))
      .map(([id]) => id);
  }

  // Grades: 0 again, 1 hard, 2 good, 3 easy. Returns the new interval in days.
  function next(c, g) {
    if (g === 0) return 0;
    if (c.reps === 0) return [0, 1, 1, 3][g];
    if (c.reps === 1) return [0, 2, 3, 5][g];
    const f = [0, 1.2, c.ease, c.ease * 1.3][g];
    const ivl = Math.round(c.ivl * f);
    return g === 1 ? Math.max(1, ivl) : Math.max(c.ivl + 1, ivl);
  }

  function grade(id, g) {
    const c = st().cards[id];
    if (!c) return;
    const ivl = next(c, g);
    if (g === 0) {
      if (c.reps > 0) c.lapses++;
      c.ease = Math.max(1.3, c.ease - 0.2);
      c.reps = 0;
    } else {
      if (g === 1) c.ease = Math.max(1.3, c.ease - 0.15);
      if (g === 3) c.ease = Math.min(3, c.ease + 0.15);
      c.reps++;
    }
    c.ivl = ivl;
    c.due = today() + ivl;
    c.last = today();
    DY.store.save();
  }

  function label(days) {
    if (days <= 0) return 'now';
    if (days < 30) return days + 'd';
    if (days < 365) return Math.round(days / 30) + 'mo';
    return (days / 365).toFixed(1) + 'y';
  }
  function preview(id, g) { const c = st().cards[id]; return c ? label(next(c, g)) : ''; }

  // Resolve a card id to its content: { nl, en, ex, exEn, note, dir }.
  function lookup(id) {
    const m = id.match(/^(.*):(r|p)$/);
    if (!m) return null;
    const base = m[1];
    let item = null;
    if (base.startsWith('w:')) item = DY.course.words[base];
    else if (base.startsWith('ph:')) item = st().phrases.find(p => 'ph:' + p.id === base);
    return item ? { ...item, dir: m[2], base } : null;
  }

  // Status of a word/phrase for lists: new | learning | known
  function status(baseId) {
    const c = st().cards[baseId + ':r'];
    if (!c) return 'new';
    return c.ivl >= 21 ? 'known' : 'learning';
  }

  window.DY = window.DY || {};
  DY.srs = { addItem, has, dueList, grade, preview, lookup, status };
})();
