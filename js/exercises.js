// DOM helper, answer checking, and the exercise renderers used by lessons and tests.
(function () {
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const k of kids.flat()) {
      if (k == null || k === false) continue;
      el.append(k.nodeType ? k : document.createTextNode(String(k)));
    }
    return el;
  }

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[’‘`]/g, "'").replace(/[.,!?;:"()¿¡…–—]/g, ' ').replace(/\s+/g, ' ').trim();

  function lev(a, b) {
    const m = a.length, n = b.length;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++)
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }

  // strict: no typo tolerance (single-word grammar gaps where one letter matters).
  function check(input, answers, strict) {
    const u = norm(input);
    let best = answers[0], bestD = Infinity;
    for (const a of answers) { const d = lev(u, norm(a)); if (d < bestD) { bestD = d; best = a; } }
    if (bestD === 0) return { ok: true, best };
    if (!strict && u && bestD <= Math.floor(norm(best).length / 12)) return { ok: true, typo: true, best };
    return { ok: false, best };
  }

  // Word-level diff: highlights target words the learner missed.
  function diffHTML(input, target) {
    const a = norm(input).split(' '), raw = String(target).split(/\s+/), b = raw.map(norm);
    const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hit = new Set();
    for (let i = 0, j = 0; i < a.length && j < b.length;) {
      if (a[i] === b[j]) { hit.add(j); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
    }
    return raw.map((w, j) => hit.has(j) ? esc(w) : `<mark>${esc(w)}</mark>`).join(' ');
  }

  // Similarity 0..1 between spoken transcript and target (word overlap via LCS).
  function similarity(spoken, target) {
    const a = norm(spoken).split(' ').filter(Boolean), b = norm(target).split(' ').filter(Boolean);
    if (!a.length || !b.length) return 0;
    const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    return dp[a.length][b.length] / Math.max(a.length, b.length);
  }

  const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const say = (t, rate) => DY.speech.speak(t, rate);

  function speakBtn(text, label = 'Play', rate) {
    return h('button', { class: 'btn-icon', type: 'button', 'aria-label': label + ': ' + text, title: label,
      onclick: e => { e.stopPropagation(); say(text, rate); } }, icon(rate && rate < 0.8 ? 'slow' : 'play'));
  }

  function icon(name) {
    const paths = {
      play: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
      slow: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>',
      mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
      flag: '<path d="M5 21V4h11l-1.5 4L16 12H5"/>',
      check: '<path d="m5 12 5 5 9-10"/>',
      x: '<path d="M6 6l12 12M18 6 6 18"/>',
    };
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true'); s.setAttribute('class', 'ico');
    s.innerHTML = paths[name] || '';
    return s;
  }

  function reportLink(where) {
    return h('button', { class: 'link-btn report', type: 'button', onclick: () => DY.report(where) }, icon('flag'), 'Report a mistake');
  }

  // Shared frame: label, body, feedback, continue.
  function frame(label, ex) {
    const card = h('div', { class: 'card ex' }, h('div', { class: 'ex-label' }, label));
    if (ex.check) card.append(h('div', { class: 'badge-native' }, 'Check with a native speaker'));
    return card;
  }

  function feedback(card, ok, opts, done) {
    const { answer, explain, typo, speak, override, where } = opts;
    card.querySelectorAll('input, textarea, .opt, .tile').forEach(el => el.disabled = true);
    card.querySelector('.check-btn')?.remove();
    const fb = h('div', { class: 'feedback ' + (ok ? 'ok' : 'bad'), role: 'status' },
      h('div', { class: 'fb-head' }, icon(ok ? 'check' : 'x'), ok ? (typo ? 'Almost — watch the spelling' : 'Correct!') : 'Not quite'),
      answer ? h('div', { class: 'fb-answer' }, h('span', { html: answer }), speak ? speakBtn(speak) : null) : null,
      explain ? h('div', { class: 'fb-explain' }, explain) : null);
    const row = h('div', { class: 'row' });
    if (!ok && override) row.append(h('button', { class: 'btn ghost', type: 'button', onclick: () => done(true) }, 'I was right'));
    const cont = h('button', { class: 'btn primary', type: 'button', onclick: () => done(ok) }, 'Continue');
    row.append(cont);
    fb.append(row, reportLink(where || 'exercise'));
    card.append(fb);
    if (speak && DY.store.state.settings.autoplay) say(speak);
    cont.focus({ preventScroll: true });
    fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function checkButton(onCheck) {
    return h('button', { class: 'btn primary check-btn', type: 'button', onclick: onCheck }, 'Check');
  }

  function textInput(placeholder, onEnter) {
    const inp = h('input', { type: 'text', class: 'answer', placeholder, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'nl' });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); onEnter(); } });
    return inp;
  }

  const R = {};

  R.mc = (ex, done) => {
    const card = frame('Choose the right answer', ex);
    card.append(h('div', { class: 'ex-q' }, ex.q));
    const opts = shuffle(ex.o.map((text, i) => ({ text, i })));
    const list = h('div', { class: 'opts' });
    opts.forEach(o => list.append(h('button', { class: 'opt', type: 'button', onclick: e => {
      const ok = o.i === ex.a, clicked = e.currentTarget;
      list.querySelectorAll('.opt').forEach((b, k) => {
        if (opts[k].i === ex.a) b.classList.add('right'); else if (b === clicked) b.classList.add('wrong');
      });
      feedback(card, ok, { answer: ok ? null : esc(ex.o[ex.a]), explain: ex.x, where: 'mc: ' + ex.q }, done);
    } }, o.text)));
    card.append(list);
    return card;
  };

  R.dehet = (ex, done) => {
    const card = frame('de or het?', ex);
    card.append(h('div', { class: 'ex-big' }, ex.w, ' ', speakBtn(ex.w)));
    const list = h('div', { class: 'opts two' });
    ['de', 'het'].forEach(a => list.append(h('button', { class: 'opt', type: 'button', onclick: e => {
      const ok = a === ex.a;
      e.currentTarget.classList.add(ok ? 'right' : 'wrong');
      feedback(card, ok, { answer: `<b>${ex.a}</b> ${esc(ex.w)}`, explain: ex.x, speak: ex.a + ' ' + ex.w, where: 'dehet: ' + ex.w }, done);
    } }, a)));
    card.append(list);
    return card;
  };

  R.cloze = (ex, done) => {
    const card = frame('Fill in the gap', ex);
    const [before, after] = ex.q.split('___');
    const go = () => {
      if (!inp.value.trim()) return inp.focus();
      const r = check(inp.value, ex.a, true);
      const full = before + ex.a[0] + (after || '');
      feedback(card, r.ok, { answer: esc(before) + '<b>' + esc(ex.a[0]) + '</b>' + esc(after || ''), explain: ex.x,
        speak: full.replace(/\s*\([^)]*\)\s*$/, ''), where: 'cloze: ' + ex.q }, done);
    };
    const inp = textInput('', go);
    inp.classList.add('inline');
    card.append(h('div', { class: 'ex-q nl' }, before, inp, after || ''));
    if (ex.en) card.append(h('div', { class: 'ex-en' }, ex.en));
    card.append(checkButton(go));
    setTimeout(() => inp.focus({ preventScroll: true }), 50);
    return card;
  };

  R.tr = (ex, done) => {
    const card = frame('Translate into Dutch', ex);
    card.append(h('div', { class: 'ex-q' }, ex.en));
    const go = () => {
      if (!inp.value.trim()) return inp.focus();
      const r = check(inp.value, ex.a);
      feedback(card, r.ok, { answer: r.ok && !r.typo ? esc(r.best) : diffHTML(inp.value, r.best), typo: r.typo,
        explain: ex.x, speak: r.best, override: true, where: 'translate: ' + ex.en }, done);
    };
    const inp = textInput('Type in Dutch…', go);
    card.append(inp, checkButton(go));
    setTimeout(() => inp.focus({ preventScroll: true }), 50);
    return card;
  };

  R.dict = (ex, done) => {
    const card = frame('Listen and type what you hear', ex);
    card.append(h('div', { class: 'row center' }, speakBtn(ex.nl, 'Play'), speakBtn(ex.nl, 'Play slowly', 0.65)));
    const go = () => {
      if (!inp.value.trim()) return inp.focus();
      const r = check(inp.value, [ex.nl]);
      feedback(card, r.ok, { answer: r.ok && !r.typo ? esc(ex.nl) : diffHTML(inp.value, ex.nl), typo: r.typo,
        explain: ex.en, where: 'dictation: ' + ex.nl }, done);
    };
    const inp = textInput('Type in Dutch…', go);
    card.append(inp, checkButton(go));
    setTimeout(() => { say(ex.nl); inp.focus({ preventScroll: true }); }, 250);
    return card;
  };

  R.num = (ex, done) => {
    const card = frame('Listen and type the number (digits)', ex);
    card.append(h('div', { class: 'row center' }, speakBtn(String(ex.n), 'Play'), speakBtn(String(ex.n), 'Play slowly', 0.65)));
    const go = () => {
      if (!inp.value.trim()) return inp.focus();
      const ok = inp.value.replace(/\D/g, '') === String(ex.n);
      feedback(card, ok, { answer: String(ex.n), where: 'number: ' + ex.n }, done);
    };
    const inp = textInput('e.g. 42', go);
    inp.setAttribute('inputmode', 'numeric');
    card.append(inp, checkButton(go));
    setTimeout(() => { say(String(ex.n)); inp.focus({ preventScroll: true }); }, 250);
    return card;
  };

  R.order = (ex, done) => {
    const card = frame('Put the words in order', ex);
    card.append(h('div', { class: 'ex-q' }, ex.en));
    const words = ex.nl.replace(/[.!?]+$/, '').split(/\s+/).map(w => w.replace(/,$/, ''));
    if (!ex.cap) words[0] = words[0][0].toLowerCase() + words[0].slice(1);
    let tiles = shuffle(words.map((w, i) => ({ w, i })));
    if (tiles.every((t, k) => t.i === k) && tiles.length > 1) tiles = tiles.reverse();
    const line = h('div', { class: 'tile-line', 'aria-label': 'Your sentence' });
    const bank = h('div', { class: 'tile-bank' });
    tiles.forEach(t => {
      const b = h('button', { class: 'tile', type: 'button' }, t.w);
      b.onclick = () => { (b.parentNode === bank ? line : bank).append(b); };
      bank.append(b);
    });
    const go = () => {
      const built = Array.from(line.children).map(b => b.textContent).join(' ');
      if (!built) return;
      const r = check(built, [ex.nl, ...(ex.alt || [])], true);
      feedback(card, r.ok, { answer: esc(r.ok ? r.best : ex.nl), explain: ex.x, speak: r.ok ? r.best : ex.nl, where: 'order: ' + ex.nl }, done);
    };
    card.append(line, bank, checkButton(go));
    return card;
  };

  R.speak = (ex, done) => {
    const card = frame('Say it out loud', ex);
    card.append(h('div', { class: 'ex-big nl' }, ex.nl), h('div', { class: 'ex-en' }, ex.en));
    const res = h('div', { class: 'speak-result', role: 'status' });
    const row = h('div', { class: 'row center' }, speakBtn(ex.nl, 'Play'), speakBtn(ex.nl, 'Play slowly', 0.65));
    if (DY.speech.canListen) {
      const mic = h('button', { class: 'btn mic', type: 'button' }, icon('mic'), 'Speak');
      mic.onclick = async () => {
        mic.disabled = true; mic.classList.add('listening'); res.textContent = 'Listening…'; res.className = 'speak-result';
        try {
          const alts = await DY.speech.listen();
          const best = alts.map(t => ({ t, s: similarity(t, ex.nl) })).sort((a, b) => b.s - a.s)[0];
          if (!best) { res.textContent = 'I didn’t hear anything. Try again.'; }
          else {
            const pct = Math.round(best.s * 100);
            res.className = 'speak-result ' + (pct >= 85 ? 'ok' : pct >= 60 ? 'mid' : 'bad');
            res.innerHTML = `<b>${pct >= 85 ? 'Great!' : pct >= 60 ? 'Close!' : 'Try again'}</b> I heard: “${esc(best.t)}”`;
          }
        } catch (err) {
          res.textContent = err === 'not-allowed' ? 'Microphone access was blocked. Allow it in the browser, or just say it aloud.' : 'Speech recognition isn’t available right now — say it aloud a few times.';
        }
        mic.disabled = false; mic.classList.remove('listening');
      };
      row.append(mic);
    } else {
      res.textContent = 'Listen, then repeat it out loud 2–3 times. (Speech recognition works in Chrome or Edge.)';
    }
    card.append(row, res, h('div', { class: 'row' }, h('button', { class: 'btn primary', type: 'button', onclick: () => done(null) }, 'Continue')));
    setTimeout(() => say(ex.nl), 250);
    return card;
  };

  // Tap-to-match pairs. Counts as correct with at most one mistake.
  R.match = (ex, done) => {
    const card = frame('Match the pairs', ex);
    const left = h('div', { class: 'match-col' }), right = h('div', { class: 'match-col' });
    let sel = null, mistakes = 0, left2go = ex.pairs.length;
    const mk = (side, p, i) => {
      const b = h('button', { class: 'tile match', type: 'button', 'data-i': i }, side === 'l' ? p[0] : p[1]);
      b.onclick = () => {
        if (b.classList.contains('done')) return;
        if (side === 'l') say(p[0]);
        if (!sel || sel.side === side) { sel?.b.classList.remove('sel'); sel = { side, b, i }; b.classList.add('sel'); return; }
        if (sel.i === i) {
          [sel.b, b].forEach(x => { x.classList.remove('sel'); x.classList.add('done'); x.disabled = true; });
          sel = null;
          if (--left2go === 0) {
            const ok = mistakes <= 1;
            card.append(h('div', { class: 'feedback ' + (ok ? 'ok' : 'bad') },
              h('div', { class: 'fb-head' }, icon(ok ? 'check' : 'x'), mistakes ? `Done — ${mistakes} mistake${mistakes > 1 ? 's' : ''}` : 'Perfect!'),
              h('div', { class: 'row' }, h('button', { class: 'btn primary', type: 'button', onclick: () => done(ok) }, 'Continue'))));
          }
        } else {
          mistakes++;
          [sel.b, b].forEach(x => { x.classList.add('shake'); setTimeout(() => x.classList.remove('shake', 'sel'), 400); });
          sel = null;
        }
      };
      return b;
    };
    shuffle(ex.pairs.map((p, i) => [p, i])).forEach(([p, i]) => left.append(mk('l', p, i)));
    shuffle(ex.pairs.map((p, i) => [p, i])).forEach(([p, i]) => right.append(mk('r', p, i)));
    card.append(h('div', { class: 'match-grid' }, left, right));
    return card;
  };

  function render(ex, done) {
    const fn = R[ex.t];
    if (!fn) return h('div', { class: 'card' }, 'Unknown exercise type: ' + ex.t);
    return fn(ex, done);
  }

  window.DY = window.DY || {};
  Object.assign(DY, { h, esc, norm, check, diffHTML, similarity, shuffle, speakBtn, icon, reportLink });
  DY.ex = { render, labels: { mc: 1, cloze: 1, tr: 1, dict: 1, num: 1, order: 1, speak: 1, match: 1, dehet: 1 } };
})();
