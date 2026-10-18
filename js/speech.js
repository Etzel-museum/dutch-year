// Text-to-speech (browser Dutch voice) and speech recognition (Chrome/Edge).
(function () {
  const synth = window.speechSynthesis;
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;

  const sp = {
    voices: [],
    voice: null,
    canSpeak: !!synth,
    canListen: !!Rec,

    init() {
      if (!synth) return;
      const load = () => {
        this.voices = synth.getVoices().filter(v => /^nl/i.test(v.lang));
        this.pick();
      };
      load();
      synth.addEventListener?.('voiceschanged', load);
    },

    // Prefer the user's choice, then a natural-sounding nl-NL voice, then any Dutch voice.
    pick() {
      const pref = DY.store.state.settings.voice;
      let v = this.voices.find(x => x.voiceURI === pref);
      if (!v) {
        const nl = this.voices.filter(x => /nl[-_]NL/i.test(x.lang));
        const pool = nl.length ? nl : this.voices;
        v = pool.find(x => /natural|online|google/i.test(x.name)) || pool[0];
      }
      this.voice = v || null;
    },

    speak(text, rate) {
      if (!synth || !text) return Promise.resolve();
      synth.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/…|___/g, ' '));
      u.lang = 'nl-NL';
      if (this.voice) u.voice = this.voice;
      u.rate = rate || DY.store.state.settings.rate;
      return new Promise(res => {
        u.onend = u.onerror = () => res();
        synth.speak(u);
      });
    },

    // Resolves with an array of transcripts (best first); rejects with an error code.
    listen() {
      return new Promise((resolve, reject) => {
        if (!Rec) return reject('unsupported');
        synth && synth.cancel();
        const r = new Rec();
        r.lang = 'nl-NL';
        r.interimResults = false;
        r.maxAlternatives = 5;
        let got = false;
        r.onresult = e => { got = true; resolve(Array.from(e.results[0]).map(a => a.transcript)); };
        r.onerror = e => reject(e.error || 'error');
        r.onend = () => { if (!got) resolve([]); };
        r.start();
      });
    },
  };

  window.DY = window.DY || {};
  DY.speech = sp;
})();
