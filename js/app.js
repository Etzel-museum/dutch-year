// Screens, router, lesson player, review session.
(function () {
  const { h, esc, shuffle, speakBtn, icon, reportLink } = DY;
  const S = () => DY.store.state;
  const main = document.getElementById('main');
  const C = DY.course;

  const weekNums = () => Object.keys(C.weeks).map(Number).sort((a, b) => a - b);
  const lessonKey = (w, d) => `${w}-${d}`;
  const isDone = (w, d) => !!S().progress[lessonKey(w, d)];
  const dayTitle = (wk, d) => d <= 5 ? wk.days[d - 1].title : d === 6 ? 'Real Dutch' : 'Review & weekly test';

  function nextLesson() {
    for (const n of weekNums()) for (let d = 1; d <= 7; d++) if (!isDone(n, d)) return { w: n, d };
    return null;
  }

  function page(title, ...kids) {
    return h('div', { class: 'page' }, title ? h('h1', null, title) : null, ...kids);
  }

  function back(href, label) {
    return h('a', { class: 'back', href }, '‹ ', label);
  }

  // ---------- Report a mistake ----------
  DY.report = function (where) {
    const dlg = h('dialog', { class: 'modal' });
    const ta = h('textarea', { rows: 4, placeholder: 'What looks wrong? e.g. “A Dutch speaker would say … instead”' });
    dlg.append(
      h('h2', null, 'Report a mistake'),
      h('p', { class: 'muted small' }, where),
      ta,
      h('div', { class: 'row' },
        h('button', { class: 'btn ghost', type: 'button', onclick: () => dlg.close() }, 'Cancel'),
        h('button', { class: 'btn primary', type: 'button', onclick: () => {
          if (ta.value.trim()) { S().reports.push({ at: Date.now(), where, text: ta.value.trim() }); DY.store.save(); toast('Saved — thanks! See Progress › Reports.'); }
          dlg.close();
        } }, 'Save')));
    dlg.addEventListener('close', () => dlg.remove());
    document.body.append(dlg);
    dlg.showModal();
    ta.focus();
  };

  function toast(msg) {
    const t = h('div', { class: 'toast', role: 'status' }, msg);
    document.body.append(t);
    setTimeout(() => t.classList.add('out'), 2200);
    setTimeout(() => t.remove(), 2700);
  }

  // ---------- Today ----------
  function viewToday() {
    const hr = new Date().getHours();
    const greet = hr < 12 ? 'Goedemorgen!' : hr < 18 ? 'Goedemiddag!' : 'Goedenavond!';
    const due = DY.srs.dueList().length;
    const nx = nextLesson();
    const min = Math.floor(DY.store.logEntry().sec / 60);
    const goal = S().settings.goalMin;
    const streak = DY.store.streak();

    const p = page(null);
    p.append(h('div', { class: 'hero' },
      h('div', null, h('h1', null, greet), h('p', { class: 'muted' }, 'Your Dutch for today')),
      h('div', { class: 'streak', title: 'Days in a row' }, h('b', null, streak), h('span', null, streak === 1 ? 'day' : 'days'))));

    p.append(h('div', { class: 'card goal' },
      h('div', { class: 'goal-top' }, h('span', null, 'Today'), h('span', null, `${min} / ${goal} min`)),
      h('div', { class: 'bar' }, h('i', { style: `width:${Math.min(100, min / goal * 100)}%` })),
      min >= goal ? h('p', { class: 'small ok-text goal-done' }, 'Daily goal reached! Want more? Keep going with the next lesson or unlimited practice.') : null));

    p.append(h('a', { class: 'card step-card' + (due ? '' : ' quiet'), href: '#/review' },
      h('div', { class: 'num' }, '1'),
      h('div', null, h('h3', null, 'Review'),
        h('p', { class: 'muted' }, due ? `${due} card${due > 1 ? 's' : ''} due · about ${Math.max(1, Math.round(due * 0.15))} min` : 'Nothing due — nice work.')),
      h('span', { class: 'chev' }, '›')));

    if (nx) {
      const wk = C.weeks[nx.w];
      p.append(h('a', { class: 'card step-card accent', href: `#/lesson/${nx.w}/${nx.d}` },
        h('div', { class: 'num' }, '2'),
        h('div', null, h('h3', null, 'Next lesson'),
          h('p', null, `Week ${nx.w} · Day ${nx.d}: ${dayTitle(wk, nx.d)}`),
          h('p', { class: 'muted small' }, wk.title)),
        h('span', { class: 'chev' }, '›')));
    } else {
      p.append(h('div', { class: 'card' }, h('h3', null, 'All available lessons done!'),
        h('p', { class: 'muted' }, 'More weeks are on the way. Keep up your reviews and listen to something from the Library.')));
    }

    p.append(h('a', { class: 'card step-card', href: '#/practice' },
      h('div', { class: 'num' }, '3'),
      h('div', null, h('h3', null, 'Unlimited practice'),
        h('p', { class: 'muted' }, 'Endless mixed exercises from everything you’ve learned. Keep going as long as you like.')),
      h('span', { class: 'chev' }, '›')));

    // Voices load asynchronously; warn only if none has appeared after a moment.
    setTimeout(() => {
      if (DY.speech.voices.length || !p.isConnected) return;
      p.insertBefore(h('div', { class: 'card warn' },
        h('h3', null, 'No Dutch voice on this device'),
        h('p', { class: 'small' }, 'Audio needs a Dutch text-to-speech voice. Easiest: open the app in Chrome or Edge. On Android: Settings › Text-to-speech › Google › install Dutch (Nederlands). On Windows: Settings › Time & language › Speech › Add voices › Nederlands.')), p.children[1]);
    }, 1500);

    const ph = C.presets[DY.store.dayNum() % C.presets.length];
    p.append(h('div', { class: 'card' },
      h('div', { class: 'ex-label' }, 'Phrase of the day'),
      h('div', { class: 'phrase' }, h('span', { class: 'nl', lang: 'nl' }, ph[0]), speakBtn(ph[0])),
      h('p', { class: 'muted' }, ph[1]),
      h('a', { href: '#/phrases', class: 'small' }, 'Your family phrasebook ›')));
    return p;
  }

  // ---------- Course ----------
  function viewCourse() {
    const p = page('Your year', h('p', { class: 'muted' }, 'From A1 to B1 in 52 weeks — about 30 minutes a day.'));
    for (const q of C.quarters) {
      const box = h('section', { class: 'quarter' }, h('h2', null, q.name, ' ', h('span', { class: 'pill' }, q.level)));
      for (const [n, title, topic] of C.plan.filter(x => x[0] >= q.from && x[0] <= q.to)) {
        const wk = C.weeks[n];
        const done = wk ? [1, 2, 3, 4, 5, 6, 7].filter(d => isDone(n, d)).length : 0;
        const inner = [
          h('div', { class: 'wk-n' }, n),
          h('div', { class: 'wk-body' }, h('div', { class: 'wk-title', lang: 'nl' }, title), h('div', { class: 'muted small' }, topic)),
          wk ? h('div', { class: 'wk-prog' + (done === 7 ? ' full' : '') }, `${done}/7`) : h('div', { class: 'muted small' }, 'soon'),
        ];
        box.append(wk ? h('a', { class: 'wk-row', href: `#/week/${n}` }, ...inner) : h('div', { class: 'wk-row locked' }, ...inner));
      }
      p.append(box);
    }
    return p;
  }

  function viewWeek(n) {
    const wk = C.weeks[n];
    if (!wk) return page('Not available yet', back('#/course', 'Course'));
    const plan = C.plan.find(x => x[0] === n);
    const p = page(null, back('#/course', 'Course'));
    p.append(h('div', { class: 'week-head' }, h('div', { class: 'pill' }, `Week ${n} · ${wk.level}`), h('h1', { lang: 'nl' }, wk.title), h('p', { class: 'muted' }, plan[2])));

    const list = h('div', { class: 'card list' });
    for (let d = 1; d <= 7; d++) {
      const done = isDone(n, d);
      const extra = d === 7 && S().tests[n] != null ? ` · test ${S().tests[n]}%` : '';
      list.append(h('a', { class: 'day-row' + (done ? ' done' : ''), href: `#/lesson/${n}/${d}` },
        h('span', { class: 'dot' }, done ? icon('check') : d),
        h('span', { class: 'grow' }, `Day ${d}: ${dayTitle(wk, d)}`, h('span', { class: 'muted small' }, extra)),
        h('span', { class: 'chev' }, '›')));
    }
    p.append(h('h2', null, 'Lessons'), list);

    const cd = S().cando[n] || [];
    const cl = h('div', { class: 'card' }, h('p', { class: 'muted small' }, 'Tick what you can do by the end of the week.'));
    wk.cando.forEach((c, i) => {
      const cb = h('input', { type: 'checkbox', id: `cd${i}` });
      cb.checked = !!cd[i];
      cb.onchange = () => { (S().cando[n] = S().cando[n] || [])[i] = cb.checked; DY.store.save(); };
      cl.append(h('label', { class: 'check-row', for: `cd${i}` }, cb, h('span', null, c)));
    });
    p.append(h('h2', null, 'I can…'), cl);

    p.append(h('h2', null, 'Grammar'), h('details', { class: 'card grammar' }, h('summary', null, wk.grammar.title), h('div', { class: 'prose', html: wk.grammar.html })));

    const words = wk.days.flatMap(d => d.words);
    p.append(h('h2', null, `Words (${words.length})`), wordList(words));
    return p;
  }

  function wordList(words) {
    const box = h('div', { class: 'card list' });
    for (const w of words) {
      const st = DY.srs.status(w.id);
      box.append(h('div', { class: 'word-row' },
        speakBtn(w.nl),
        h('div', { class: 'grow' },
          h('div', null, h('b', { lang: 'nl' }, w.nl), w.pl ? h('span', { class: 'muted small' }, ` · pl. ${w.pl}`) : null),
          h('div', { class: 'muted small' }, w.en)),
        h('span', { class: 'status ' + st, title: st }, st === 'new' ? '' : st)));
    }
    return box;
  }

  // ---------- Lesson player ----------
  function buildSteps(n, d) {
    const wk = C.weeks[n];
    const steps = [];
    if (d <= 5) {
      const day = wk.days[d - 1];
      steps.push({ k: 'words', words: day.words });
      steps.push({ k: 'ex', ex: { t: 'match', pairs: shuffle(day.words).slice(0, 6).map(w => [w.nl, w.en]) } });
      if (day.dialogue) steps.push({ k: 'dialogue', d: day.dialogue });
      if (day.notes) steps.push({ k: 'notes', title: day.notesTitle || 'How it works', html: day.notes });
      (day.ex || []).forEach(ex => steps.push({ k: 'ex', ex }));
      shuffle(day.words.filter(w => w.ex)).slice(0, 2).forEach(w => steps.push({ k: 'ex', ex: { t: 'dict', nl: w.ex, en: w.exEn } }));
      if (day.dialogue) {
        const lines = day.dialogue.lines.filter(l => l[0] === 'Jij');
        (lines.length ? lines : day.dialogue.lines).slice(0, 3).forEach(l => steps.push({ k: 'ex', ex: { t: 'speak', nl: l[1], en: l[2] } }));
      }
    } else if (d === 6) {
      steps.push({ k: 'input' });
    } else {
      steps.push({ k: 'review' });
      steps.push({ k: 'notes', title: wk.culture.title, html: wk.culture.html, culture: true });
      const all = wk.days.flatMap(x => x.words);
      const vocab = shuffle(all).slice(0, 6).map(w => {
        const wrong = shuffle(all.filter(x => x !== w && x.en !== w.en)).slice(0, 3).map(x => x.en);
        return { t: 'mc', q: `What does “${w.nl}” mean?`, o: [w.en, ...wrong], a: 0 };
      });
      shuffle([...wk.test, ...vocab]).forEach(ex => steps.push({ k: 'ex', ex, test: true }));
    }
    steps.push({ k: 'done' });
    return steps;
  }

  function viewLesson(n, d) {
    const wk = C.weeks[n];
    if (!wk || d < 1 || d > 7) return page('Lesson not found', back('#/course', 'Course'));
    const steps = buildSteps(n, d);
    let i = 0, right = 0, scored = 0;
    const wrap = h('div', { class: 'page lesson' });
    const bar = h('i');
    const top = h('div', { class: 'lesson-top' },
      h('a', { class: 'btn-icon', href: `#/week/${n}`, 'aria-label': 'Close lesson' }, icon('x')),
      h('div', { class: 'bar grow' }, bar));
    const head = h('div', { class: 'lesson-head' }, h('div', { class: 'muted small' }, `Week ${n} · Day ${d}`), h('h1', null, dayTitle(wk, d)));
    const stage = h('div', { class: 'stage' });
    wrap.append(top, head, stage);

    const advance = ok => {
      if (ok !== null && ok !== undefined && steps[i].k === 'ex') { scored++; if (ok) right++; }
      i++;
      show();
    };

    function show() {
      bar.style.width = (i / (steps.length - 1)) * 100 + '%';
      const s = steps[i];
      let node;
      if (s.k === 'words') node = stepWords(s.words, () => advance());
      else if (s.k === 'ex') node = DY.ex.render(s.ex, advance);
      else if (s.k === 'dialogue') node = stepDialogue(s.d, () => advance());
      else if (s.k === 'notes') node = h('div', { class: 'card' + (s.culture ? ' culture' : '') },
        h('div', { class: 'ex-label' }, s.culture ? 'Culture' : 'Grammar & usage'), h('h2', null, s.title),
        h('div', { class: 'prose', html: s.html }), cont(() => advance()));
      else if (s.k === 'input') node = stepInput(n, () => advance());
      else if (s.k === 'review') node = stepReviewPrompt(() => advance());
      else node = stepDone();
      stage.replaceChildren(node);
      window.scrollTo({ top: 0 });
    }

    function stepDone() {
      const pct = scored ? Math.round(right / scored * 100) : null;
      const key = lessonKey(n, d);
      const first = !S().progress[key];
      S().progress[key] = { at: Date.now(), score: pct };
      if (d === 7 && pct != null) S().tests[n] = Math.max(S().tests[n] || 0, pct);
      if (first) DY.store.log('lessons'); else DY.store.save();
      const nx = nextLesson();
      const msg = d === 7
        ? (pct >= 70 ? 'Week complete — well done!' : 'Week complete. Below 70% — consider redoing the weakest day.')
        : 'Lesson complete!';
      return h('div', { class: 'card done-card' },
        h('div', { class: 'big-check' }, icon('check')),
        h('h2', null, msg),
        pct != null ? h('p', { class: 'score' }, `${right} / ${scored} correct · ${pct}%`) : null,
        d <= 5 ? h('p', { class: 'muted' }, 'New words were added to your review deck.') : null,
        h('div', { class: 'row center' },
          h('a', { class: 'btn ghost', href: `#/week/${n}` }, 'Week overview'),
          h('a', { class: 'btn ghost', href: '#/practice' }, 'Unlimited practice'),
          nx ? h('a', { class: 'btn primary', href: `#/lesson/${nx.w}/${nx.d}` }, 'Next lesson') : h('a', { class: 'btn primary', href: '#/' }, 'Home')));
    }

    show();
    return wrap;
  }

  const cont = (fn, label = 'Continue') => h('div', { class: 'row' }, h('button', { class: 'btn primary', type: 'button', onclick: fn }, label));

  function stepWords(words, done) {
    let k = 0;
    const box = h('div');
    function draw() {
      const w = words[k];
      const card = h('div', { class: 'card word-card' },
        h('div', { class: 'ex-label' }, `New word ${k + 1} / ${words.length}`),
        w.check ? h('div', { class: 'badge-native' }, 'Check with a native speaker') : null,
        h('div', { class: 'word-nl', lang: 'nl' }, w.nl, ' ', speakBtn(w.nl)),
        h('div', { class: 'word-en' }, w.en),
        w.pl ? h('div', { class: 'muted small' }, 'plural: ', h('span', { lang: 'nl' }, w.pl)) : null,
        w.ex ? h('div', { class: 'example' }, h('div', { lang: 'nl' }, w.ex, ' ', speakBtn(w.ex)), h('div', { class: 'muted' }, w.exEn)) : null,
        w.note ? h('div', { class: 'note' }, w.note) : null,
        reportLink(`word: ${w.nl} = ${w.en}`),
        h('div', { class: 'row' },
          k > 0 ? h('button', { class: 'btn ghost', type: 'button', onclick: () => { k--; draw(); } }, 'Back') : null,
          h('button', { class: 'btn primary', type: 'button', onclick: () => {
            if (k < words.length - 1) { k++; draw(); }
            else { words.forEach(x => DY.srs.addItem(x.id)); DY.store.save(); done(); }
          } }, k < words.length - 1 ? 'Next' : 'Got them')));
      box.replaceChildren(card);
      if (S().settings.autoplay) DY.speech.speak(w.nl);
    }
    draw();
    return box;
  }

  function stepDialogue(dl, done) {
    const showEn = h('input', { type: 'checkbox', id: 'show-en' });
    const lines = h('div', { class: 'dialogue hide-en' });
    showEn.onchange = () => lines.classList.toggle('hide-en', !showEn.checked);
    dl.lines.forEach(([who, nl, en]) => lines.append(h('div', { class: 'line' + (who === 'Jij' ? ' me' : '') },
      h('div', { class: 'who' }, who === 'Jij' ? 'You' : who),
      h('div', { class: 'bubble', onclick: () => DY.speech.speak(nl) }, h('div', { class: 'nl', lang: 'nl' }, nl, ' ', speakBtn(nl)), h('div', { class: 'en' }, en)))));
    let playing = false;
    const playAll = h('button', { class: 'btn ghost', type: 'button', onclick: async () => {
      if (playing) { playing = false; speechSynthesis.cancel(); return; }
      playing = true; playAll.textContent = 'Stop';
      for (const l of dl.lines) { if (!playing) break; await DY.speech.speak(l[1]); await new Promise(r => setTimeout(r, 350)); }
      playing = false; playAll.textContent = 'Play all';
    } }, 'Play all');
    return h('div', { class: 'card' },
      h('div', { class: 'ex-label' }, 'Dialogue'), h('h2', { lang: 'nl' }, dl.title),
      dl.intro ? h('p', { class: 'muted' }, dl.intro) : null,
      h('div', { class: 'row' }, playAll, h('label', { class: 'check-row inline', for: 'show-en' }, showEn, 'Show English')),
      lines,
      h('p', { class: 'muted small' }, 'Tip: listen first without English, then check. Tap any line to hear it again.'),
      cont(() => { playing = false; window.speechSynthesis?.cancel(); done(); }));
  }

  function stepInput(n, done) {
    const wk = C.weeks[n];
    const box = h('div', { class: 'card' },
      h('div', { class: 'ex-label' }, 'Real Dutch'),
      h('h2', null, 'Listen to real people'),
      h('p', { class: 'muted' }, 'Spend about 20–30 minutes with one or more of these. Don’t worry about understanding everything — aim to catch words you know.'));
    wk.input.forEach((it, i) => {
      const lib = C.library.find(x => x.id === it.ref) || {};
      const key = `${n}:${i}`;
      const cb = h('input', { type: 'checkbox', id: 'in' + i });
      cb.checked = !!S().inputDone[key];
      cb.onchange = () => { S().inputDone[key] = cb.checked; DY.store.save(); };
      box.append(h('div', { class: 'input-item' },
        h('div', { class: 'row between' }, h('b', null, lib.title), h('span', { class: 'pill' }, `${lib.kind} · ${lib.level}`)),
        h('p', null, it.task),
        h('div', { class: 'row between' },
          h('a', { class: 'btn ghost', href: it.url || lib.url, target: '_blank', rel: 'noopener' }, 'Open ↗'),
          h('label', { class: 'check-row inline', for: 'in' + i }, cb, 'Done'))));
    });
    box.append(cont(done, 'Finish'));
    return box;
  }

  function stepReviewPrompt(done) {
    const due = DY.srs.dueList().length;
    return h('div', { class: 'card' },
      h('div', { class: 'ex-label' }, 'Review'),
      h('h2', null, 'End of the week'),
      h('p', null, due ? `You have ${due} review card${due > 1 ? 's' : ''} due. Clearing them first makes the test easier.` : 'Your review deck is clear.'),
      h('div', { class: 'row' },
        due ? h('a', { class: 'btn ghost', href: '#/review' }, 'Review first') : null,
        h('button', { class: 'btn primary', type: 'button', onclick: done }, 'Start the week’s wrap-up')));
  }

  // ---------- Review session ----------
  function viewReview() {
    const queue = DY.srs.dueList().slice(0, 150);
    let idx = 0, count = 0;
    const p = page('Review');
    const stage = h('div');
    p.append(stage);
    if (!queue.length) {
      stage.append(h('div', { class: 'card done-card' }, h('div', { class: 'big-check' }, icon('check')),
        h('h2', null, 'Nothing to review'), h('p', { class: 'muted' }, 'New cards come from lessons and your phrasebook.'),
        h('div', { class: 'row center' }, h('a', { class: 'btn ghost', href: '#/practice' }, 'Unlimited practice'), h('a', { class: 'btn primary', href: '#/' }, 'Home'))));
      return p;
    }
    function draw() {
      if (idx >= queue.length) {
        DY.store.log('reviews', count);
        stage.replaceChildren(h('div', { class: 'card done-card' }, h('div', { class: 'big-check' }, icon('check')),
          h('h2', null, 'Review done!'), h('p', null, `${count} cards reviewed.`),
          h('div', { class: 'row center' }, h('a', { class: 'btn ghost', href: '#/practice' }, 'Unlimited practice'), h('a', { class: 'btn primary', href: '#/' }, 'Home'))));
        return;
      }
      const id = queue[idx];
      const c = DY.srs.lookup(id);
      const rec = c.dir === 'r';
      const card = h('div', { class: 'card review-card' },
        h('div', { class: 'row between' }, h('span', { class: 'ex-label' }, rec ? 'What does it mean?' : 'Say it in Dutch'), h('span', { class: 'muted small' }, `${queue.length - idx} left`)));
      const front = rec
        ? h('div', { class: 'word-nl', lang: 'nl' }, c.nl, ' ', speakBtn(c.nl))
        : h('div', { class: 'word-nl en' }, c.en);
      card.append(front);
      let inp = null;
      if (!rec) { inp = h('input', { type: 'text', class: 'answer', placeholder: 'Type it (optional) — or just say it', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'nl' }); card.append(inp); }
      const showBtn = h('button', { class: 'btn primary wide', type: 'button' }, 'Show answer');
      card.append(showBtn);
      const reveal = () => {
        showBtn.remove();
        const backSide = h('div', { class: 'review-back' });
        if (rec) backSide.append(h('div', { class: 'word-en' }, c.en));
        else {
          backSide.append(h('div', { class: 'word-nl', lang: 'nl' }, c.nl, ' ', speakBtn(c.nl)));
          if (inp && inp.value.trim()) {
            const r = DY.check(inp.value, [c.nl]);
            backSide.append(h('div', { class: 'small ' + (r.ok ? 'ok-text' : 'bad-text'), html: r.ok ? 'Your answer matches.' : 'You typed: ' + esc(inp.value) }));
            inp.disabled = true;
          }
        }
        if (c.ex) backSide.append(h('div', { class: 'example' }, h('div', { lang: 'nl' }, c.ex, ' ', speakBtn(c.ex)), h('div', { class: 'muted' }, c.exEn)));
        if (c.note) backSide.append(h('div', { class: 'note' }, c.note));
        const grades = h('div', { class: 'grades' });
        ['Again', 'Hard', 'Good', 'Easy'].forEach((g, gi) => grades.append(h('button', { class: 'grade g' + gi, type: 'button', onclick: () => doGrade(gi) },
          h('b', null, g), h('span', null, DY.srs.preview(id, gi)))));
        card.append(backSide, grades, reportLink(`card: ${c.nl} = ${c.en}`));
        if (!rec || S().settings.autoplay) DY.speech.speak(c.nl);
      };
      showBtn.onclick = reveal;
      if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (showBtn.isConnected) reveal(); } });
      const doGrade = g => {
        DY.srs.grade(id, g);
        count++;
        if (g === 0) queue.splice(Math.min(idx + 4, queue.length), 0, id);
        idx++;
        draw();
      };
      card._keys = e => {
        if (e.target.tagName === 'INPUT' && !e.target.disabled) return;
        if (showBtn.isConnected && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); reveal(); }
        else if (!showBtn.isConnected && '1234'.includes(e.key) && e.key) doGrade(Number(e.key) - 1);
      };
      stage.replaceChildren(card);
      if (rec && S().settings.autoplay) DY.speech.speak(c.nl);
      if (inp) setTimeout(() => inp.focus({ preventScroll: true }), 50);
    }
    draw();
    return p;
  }
  document.addEventListener('keydown', e => main.querySelector('.review-card')?._keys?.(e));

  // ---------- Unlimited practice ----------
  // Endless mix built from learned words, phrases and exercises of completed lessons.
  // Doesn't touch the SRS schedule — it's extra practice on top of the daily plan.
  function practicePool() {
    const st = S();
    const words = Object.values(C.words).filter(w => DY.srs.has(w.id));
    const phrases = st.phrases.filter(p => DY.srs.has('ph:' + p.id));
    const authored = [];
    for (const key of Object.keys(st.progress)) {
      const [w, d] = key.split('-').map(Number);
      const wk = C.weeks[w];
      if (!wk) continue;
      if (d <= 5) authored.push(...(wk.days[d - 1].ex || []));
      else if (d === 7) authored.push(...wk.test);
    }
    return { words, phrases, authored };
  }

  function makePracticeEx(pool) {
    const { words, phrases, authored } = pool;
    const items = [...words, ...phrases];
    const pick = a => a[Math.floor(Math.random() * a.length)];
    const nouns = words.filter(w => /^(de|het) \S+$/.test(w.nl));
    const withEx = items.filter(w => w.ex);
    const kinds = [
      [authored.length ? 30 : 0, () => pick(authored)],
      [20, () => {
        const w = pick(items);
        const wrong = shuffle(items.filter(x => x.en !== w.en)).slice(0, 3).map(x => x.en);
        return wrong.length < 2 ? null : { t: 'mc', q: `What does “${w.nl}” mean?`, o: [w.en, ...wrong], a: 0 };
      }],
      [15, () => { const w = pick(items); return { t: 'tr', en: w.en, a: [w.nl] }; }],
      [15, () => { const w = withEx.length && pick(withEx); return w ? { t: 'dict', nl: w.ex, en: w.exEn } : null; }],
      [nouns.length ? 10 : 0, () => { const w = pick(nouns); const [a, ...rest] = w.nl.split(' '); return { t: 'dehet', w: rest.join(' '), a }; }],
      [10, () => {
        const ws = shuffle(items.filter(x => x.en.length < 40)).slice(0, 5);
        return ws.length < 3 ? null : { t: 'match', pairs: ws.map(x => [x.nl, x.en]) };
      }],
      [DY.speech.canListen ? 5 : 0, () => { const w = withEx.length && pick(withEx); return w ? { t: 'speak', nl: w.ex, en: w.exEn } : null; }],
    ];
    const total = kinds.reduce((a, k) => a + k[0], 0);
    for (let tries = 0; tries < 20; tries++) {
      let r = Math.random() * total;
      const k = kinds.find(x => (r -= x[0]) < 0) || kinds[1];
      const ex = k[1]();
      if (ex) return ex;
    }
    return null;
  }

  function viewPractice() {
    const pool = practicePool();
    const p = page('Unlimited practice');
    if (!pool.words.length && !pool.phrases.length) {
      p.append(h('div', { class: 'card' }, h('p', null, 'Practice uses what you’ve already learned. Do your first lesson, then come back.'),
        h('a', { class: 'btn primary', href: '#/lesson/1/1' }, 'Start lesson 1')));
      return p;
    }
    let done = 0, right = 0, run = 0, best = 0;
    const recent = [];
    const stats = h('div', { class: 'practice-stats' });
    const drawStats = () => stats.replaceChildren(
      h('span', null, h('b', null, done), ' done'), h('span', null, h('b', null, right), ' correct'),
      h('span', null, h('b', null, run), ' in a row'), h('span', null, 'best ', h('b', null, best)));
    const stage = h('div');
    const stop = h('button', { class: 'btn ghost small', type: 'button', onclick: () => {
      stage.replaceChildren(h('div', { class: 'card done-card' }, h('div', { class: 'big-check' }, icon('check')),
        h('h2', null, 'Nice session!'),
        h('p', { class: 'score' }, `${right} / ${done} correct`), h('p', { class: 'muted' }, `Best run: ${best} in a row`),
        h('div', { class: 'row center' }, h('button', { class: 'btn ghost', type: 'button', onclick: next }, 'Keep going'), h('a', { class: 'btn primary', href: '#/' }, 'Home'))));
    } }, 'Stop');
    p.append(h('p', { class: 'muted' }, `Mixed exercises from ${pool.words.length} words, ${pool.phrases.length} phrases and your completed lessons. This doesn’t change your review schedule.`),
      h('div', { class: 'row between practice-bar' }, stats, stop), stage);

    function next() {
      let ex;
      for (let i = 0; i < 10; i++) {
        ex = makePracticeEx(pool);
        const key = JSON.stringify(ex);
        if (ex && !recent.includes(key)) { recent.push(key); if (recent.length > 12) recent.shift(); break; }
      }
      if (!ex) return;
      stage.replaceChildren(DY.ex.render(ex, ok => {
        if (ok !== null) { done++; if (ok) { right++; run++; best = Math.max(best, run); } else run = 0; DY.store.log('practice'); }
        drawStats();
        next();
        window.scrollTo({ top: 0 });
      }));
    }
    drawStats();
    next();
    return p;
  }

  // ---------- Words ----------
  function viewWords() {
    const all = weekNums().flatMap(n => C.weeks[n].days.flatMap(d => d.words));
    let showAll = false, q = '';
    const listBox = h('div');
    const search = h('input', { type: 'search', class: 'answer', placeholder: 'Search Dutch or English…' });
    const toggle = h('input', { type: 'checkbox', id: 'all-w' });
    const draw = () => {
      const nq = DY.norm(q);
      const ws = all.filter(w => (showAll || DY.srs.has(w.id)) && (!nq || DY.norm(w.nl + ' ' + w.en).includes(nq)));
      listBox.replaceChildren(ws.length ? wordList(ws) : h('p', { class: 'muted' }, showAll ? 'No matches.' : 'No learned words yet — they appear here after your first lesson.'));
    };
    search.oninput = () => { q = search.value; draw(); };
    toggle.onchange = () => { showAll = toggle.checked; draw(); };
    const learned = all.filter(w => DY.srs.has(w.id)).length;
    const p = page('Words', back('#/more', 'More'), h('p', { class: 'muted' }, `${learned} learned of ${all.length} so far`),
      search, h('label', { class: 'check-row', for: 'all-w' }, toggle, 'Include words from lessons you haven’t done yet'), listBox);
    draw();
    return p;
  }

  // ---------- Grammar ----------
  function viewGrammar() {
    const p = page('Grammar', back('#/more', 'More'), h('p', { class: 'muted' }, 'Every week’s grammar in one place.'));
    weekNums().forEach(n => {
      const g = C.weeks[n].grammar;
      p.append(h('details', { class: 'card grammar' }, h('summary', null, h('span', { class: 'muted small' }, `Week ${n} · `), g.title), h('div', { class: 'prose', html: g.html })));
    });
    return p;
  }

  // ---------- Library ----------
  function viewLibrary() {
    const p = page('Library', back('#/more', 'More'), h('p', { class: 'muted' }, 'Free Dutch from the real world. Links were checked in October 2026; some sites have paid extras.'));
    for (const it of C.library) {
      p.append(h('a', { class: 'card lib-item', href: it.url, target: '_blank', rel: 'noopener' },
        h('div', { class: 'row between' }, h('b', null, it.title), h('span', { class: 'pill' }, `${it.kind} · ${it.level}`)),
        h('p', { class: 'muted' }, it.desc)));
    }
    return p;
  }

  // ---------- Phrasebook ----------
  function viewPhrases() {
    const st = S();
    const p = page('Family phrasebook', h('p', { class: 'muted' }, 'Phrases for your family — your own and ready-made ones. Each phrase joins your review deck.'));
    const addPhrase = (nl, en, note) => {
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
      st.phrases.push({ id, nl, en, note: note || '' });
      DY.srs.addItem('ph:' + id);
      DY.store.save();
      render();
    };
    const nl = h('input', { type: 'text', class: 'answer', placeholder: 'Dutch, e.g. Hoe gaat het met de hond?', lang: 'nl' });
    const en = h('input', { type: 'text', class: 'answer', placeholder: 'English meaning' });
    const note = h('input', { type: 'text', class: 'answer', placeholder: 'Note (optional) — who says it, when…' });
    p.append(h('form', { class: 'card', onsubmit: e => { e.preventDefault(); if (nl.value.trim() && en.value.trim()) addPhrase(nl.value.trim(), en.value.trim(), note.value.trim()); } },
      h('h2', null, 'Add a phrase'), nl, en, note,
      h('div', { class: 'row' }, h('button', { class: 'btn ghost', type: 'button', onclick: () => DY.speech.speak(nl.value) }, 'Hear it'), h('button', { class: 'btn primary', type: 'submit' }, 'Add'))));

    if (st.phrases.length) {
      const box = h('div', { class: 'card list' });
      st.phrases.slice().reverse().forEach(ph => box.append(h('div', { class: 'word-row' },
        speakBtn(ph.nl),
        h('div', { class: 'grow' }, h('b', { lang: 'nl' }, ph.nl), h('div', { class: 'muted small' }, ph.en, ph.note ? ' — ' + ph.note : '')),
        h('button', { class: 'btn-icon', type: 'button', 'aria-label': 'Delete phrase', onclick: () => {
          if (!confirm('Delete this phrase?')) return;
          st.phrases = st.phrases.filter(x => x.id !== ph.id);
          delete st.cards['ph:' + ph.id + ':r']; delete st.cards['ph:' + ph.id + ':p'];
          DY.store.save(); render();
        } }, icon('x')))));
      p.append(h('h2', null, `My phrases (${st.phrases.length})`), box);
    }

    const have = new Set(st.phrases.map(x => x.nl));
    const pre = h('div', { class: 'card list' });
    C.presets.forEach(([pnl, pen, pnote]) => pre.append(h('div', { class: 'word-row' },
      speakBtn(pnl),
      h('div', { class: 'grow' }, h('b', { lang: 'nl' }, pnl), h('div', { class: 'muted small' }, pen, pnote ? ' — ' + pnote : '')),
      have.has(pnl) ? h('span', { class: 'status learning' }, 'added') : h('button', { class: 'btn small ghost', type: 'button', onclick: () => addPhrase(pnl, pen, pnote) }, '+ Add'))));
    p.append(h('h2', null, 'Ready-made family phrases'), pre);
    return p;
  }

  // ---------- More / Progress / Settings ----------
  function viewMore() {
    const items = [
      ['#/words', 'Words', 'Everything you’ve learned, with audio'],
      ['#/grammar', 'Grammar', 'All grammar explanations'],
      ['#/library', 'Library', 'Free podcasts, videos and news'],
      ['#/progress', 'Progress', 'Stats, tests, streak, reports'],
      ['#/settings', 'Settings & backup', 'Voice, speed, export your data'],
    ];
    const p = page('More');
    items.forEach(([href, t, d]) => p.append(h('a', { class: 'card step-card', href }, h('div', null, h('h3', null, t), h('p', { class: 'muted' }, d)), h('span', { class: 'chev' }, '›'))));
    p.append(h('div', { class: 'card about' }, h('h3', null, 'About the content'),
      h('p', { class: 'muted small' }, 'Lessons, sentences and explanations were written for this app by Claude (an AI), not copied from paid courses. The basics are reliable, but natural phrasing is worth checking with your family — use “Report a mistake” whenever something sounds off. Audio is your device’s Dutch text-to-speech voice.')));
    return p;
  }

  function viewProgress() {
    const st = S();
    const words = Object.keys(st.cards).filter(k => k.startsWith('w:') && k.endsWith(':r'));
    const known = words.filter(k => st.cards[k].ivl >= 21).length;
    const lessons = Object.keys(st.progress).length;
    const total = weekNums().length * 7;
    const sec = Object.values(st.log).reduce((a, e) => a + (e.sec || 0), 0);
    const tile = (v, l) => h('div', { class: 'tile-stat' }, h('b', null, v), h('span', null, l));
    const p = page('Progress', back('#/more', 'More'));
    p.append(h('div', { class: 'stats' },
      tile(DY.store.streak(), 'day streak'), tile(words.length, 'words learned'), tile(known, 'words mastered'),
      tile(`${lessons}/${total}`, 'lessons done'), tile(Math.round(sec / 3600 * 10) / 10 + 'h', 'study time'), tile(st.phrases.length, 'own phrases')));

    // Last 12 weeks activity
    const grid = h('div', { class: 'heat', 'aria-label': 'Activity over the last 12 weeks' });
    const d = new Date(); d.setDate(d.getDate() - 83);
    for (let i = 0; i < 84; i++) {
      const e = st.log[DY.store.dateKey(d)];
      const m = e ? e.sec / 60 : 0;
      const lvl = !e ? 0 : m >= st.settings.goalMin ? 3 : m >= 10 ? 2 : (m > 0 || e.reviews || e.lessons) ? 1 : 0;
      grid.append(h('i', { class: 'l' + lvl, title: `${DY.store.dateKey(d)}: ${Math.round(m)} min` }));
      d.setDate(d.getDate() + 1);
    }
    p.append(h('h2', null, 'Last 12 weeks'), h('div', { class: 'card' }, grid, h('p', { class: 'muted small' }, 'Darker = closer to your daily goal.')));

    const tests = weekNums().filter(n => st.tests[n] != null);
    p.append(h('h2', null, 'Weekly tests'), tests.length
      ? h('div', { class: 'card list' }, ...tests.map(n => h('div', { class: 'word-row' }, h('span', { class: 'grow' }, `Week ${n} · ${C.weeks[n].title}`), h('b', null, st.tests[n] + '%'))))
      : h('p', { class: 'muted' }, 'No tests yet — each week ends with one on day 7.'));

    p.append(h('h2', null, `Reports (${st.reports.length})`));
    if (st.reports.length) {
      const txt = st.reports.map(r => `- [${r.where}] ${r.text}`).join('\n');
      p.append(h('div', { class: 'card' },
        h('p', { class: 'muted small' }, 'Copy these and paste them to Claude to get the content fixed.'),
        h('pre', { class: 'reports' }, txt),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost', type: 'button', onclick: () => { if (confirm('Clear all reports?')) { st.reports = []; DY.store.save(); render(); } } }, 'Clear'),
          h('button', { class: 'btn primary', type: 'button', onclick: () => navigator.clipboard.writeText(txt).then(() => toast('Copied')) }, 'Copy all'))));
    } else p.append(h('p', { class: 'muted' }, 'No reports. Use “Report a mistake” on any word or exercise.'));
    return p;
  }

  function viewSettings() {
    const st = S();
    const p = page('Settings', back('#/more', 'More'));
    const sp = DY.speech;

    const voiceSel = h('select', { class: 'answer', id: 'voice' });
    if (!sp.voices.length) voiceSel.append(h('option', null, sp.canSpeak ? 'No Dutch voice found on this device' : 'Speech not supported'));
    sp.voices.forEach(v => { const o = h('option', { value: v.voiceURI }, `${v.name} (${v.lang})`); if (sp.voice && v.voiceURI === sp.voice.voiceURI) o.selected = true; voiceSel.append(o); });
    voiceSel.onchange = () => { st.settings.voice = voiceSel.value; DY.store.save(); sp.pick(); sp.speak('Hallo! Ik ben je Nederlandse stem.'); };

    const rate = h('input', { type: 'range', min: '0.5', max: '1.2', step: '0.05', value: st.settings.rate, id: 'rate' });
    const rateVal = h('span', null, st.settings.rate + '×');
    rate.oninput = () => { st.settings.rate = Number(rate.value); rateVal.textContent = rate.value + '×'; DY.store.save(); };
    rate.onchange = () => sp.speak('Ik spreek nu in dit tempo.');

    const auto = h('input', { type: 'checkbox', id: 'auto' });
    auto.checked = st.settings.autoplay;
    auto.onchange = () => { st.settings.autoplay = auto.checked; DY.store.save(); };

    const goal = h('select', { class: 'answer', id: 'goal' }, ...[15, 20, 30, 45, 60].map(m => { const o = h('option', { value: m }, m + ' minutes'); if (m === st.settings.goalMin) o.selected = true; return o; }));
    goal.onchange = () => { st.settings.goalMin = Number(goal.value); DY.store.save(); };

    p.append(h('div', { class: 'card form' },
      h('h2', null, 'Voice'),
      h('label', { for: 'voice' }, 'Dutch voice'), voiceSel,
      h('p', { class: 'muted small' }, 'Voices with “Natural” or “Online” in the name (Edge) or “Google” (Chrome) sound best.'),
      h('label', { for: 'rate' }, 'Speed ', rateVal), rate,
      h('label', { class: 'check-row', for: 'auto' }, auto, 'Play audio automatically'),
      h('div', { class: 'row' }, h('button', { class: 'btn ghost', type: 'button', onclick: () => sp.speak('Goedemiddag! Hoe gaat het met je?') }, 'Test voice')),
      h('h2', null, 'Daily goal'), goal));

    const file = h('input', { type: 'file', accept: 'application/json,.json', class: 'hidden' });
    file.onchange = async () => {
      const f = file.files[0]; if (!f) return;
      try { DY.store.importJSON(await f.text()); toast('Backup restored'); render(); }
      catch (e) { alert('Could not import: ' + e.message); }
    };
    p.append(h('div', { class: 'card form' },
      h('h2', null, 'Backup'),
      h('p', { class: 'muted small' }, 'Your progress is stored only in this browser. Export a backup now and then — and to move to another device.'),
      DY.store.persistent ? null : h('p', { class: 'bad-text small' }, 'Warning: this browser is not saving data (private mode?).'),
      h('div', { class: 'row' },
        h('button', { class: 'btn ghost', type: 'button', onclick: () => {
          const blob = new Blob([DY.store.exportJSON()], { type: 'application/json' });
          const a = h('a', { href: URL.createObjectURL(blob), download: `dutch-year-backup-${DY.store.dateKey()}.json` });
          document.body.append(a); a.click(); a.remove();
        } }, 'Export backup'),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => file.click() }, 'Import backup'), file),
      h('h2', null, 'Start over'),
      h('button', { class: 'btn danger', type: 'button', onclick: () => {
        if (confirm('Erase ALL progress, cards and phrases on this device? Export a backup first if unsure.')) { DY.store.reset(); render(); toast('Progress erased'); }
      } }, 'Erase all progress')));
    return p;
  }

  // ---------- Router ----------
  const STUDY = new Set(['lesson', 'review', 'practice', 'phrases', 'words']);
  let current = '';

  function render() {
    const parts = (location.hash.replace(/^#\/?/, '') || 'today').split('/');
    const r = parts[0];
    current = r;
    window.speechSynthesis?.cancel();
    let node;
    switch (r) {
      case 'today': node = viewToday(); break;
      case 'course': node = viewCourse(); break;
      case 'week': node = viewWeek(Number(parts[1])); break;
      case 'lesson': node = viewLesson(Number(parts[1]), Number(parts[2])); break;
      case 'review': node = viewReview(); break;
      case 'practice': node = viewPractice(); break;
      case 'words': node = viewWords(); break;
      case 'grammar': node = viewGrammar(); break;
      case 'library': node = viewLibrary(); break;
      case 'phrases': node = viewPhrases(); break;
      case 'more': node = viewMore(); break;
      case 'progress': node = viewProgress(); break;
      case 'settings': node = viewSettings(); break;
      default: node = viewToday();
    }
    main.replaceChildren(node);
    const tab = { today: 'today', practice: 'today', course: 'course', week: 'course', lesson: 'course', review: 'review', phrases: 'phrases' }[r] || 'more';
    document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
    const due = DY.srs.dueList().length;
    const badge = document.querySelector('.nav .badge');
    badge.textContent = due > 99 ? '99+' : due;
    badge.hidden = !due;
    document.body.classList.toggle('in-lesson', r === 'lesson');
    if (r !== 'lesson') window.scrollTo({ top: 0 });
  }

  // Study-time tracking: counts 10s ticks while the tab is visible and recently used.
  let lastInput = Date.now();
  ['pointerdown', 'keydown', 'scroll'].forEach(ev => addEventListener(ev, () => { lastInput = Date.now(); }, { passive: true }));
  setInterval(() => {
    if (document.visibilityState !== 'visible' || Date.now() - lastInput > 90000) return;
    if (!STUDY.has(current) && current !== 'library' && current !== 'grammar') return;
    DY.store.logEntry().sec += 10;
    DY.store.save();
  }, 10000);

  addEventListener('hashchange', render);
  DY.speech.init();
  render();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
