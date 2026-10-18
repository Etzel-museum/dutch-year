// Course registry: the 52-week plan, external library, phrasebook presets.
// Week files (week01.js …) call DY.addWeek() to register their content.
window.DY = window.DY || {};

DY.course = {
  weeks: {},
  words: {},

  quarters: [
    { name: 'Quarter 1 · Foundations', from: 1, to: 13, level: 'A1 → A2' },
    { name: 'Quarter 2 · Talking about your life', from: 14, to: 26, level: 'A2' },
    { name: 'Quarter 3 · Stories & opinions', from: 27, to: 39, level: 'A2+ → B1' },
    { name: 'Quarter 4 · Sounding natural', from: 40, to: 52, level: 'B1' },
  ],

  plan: [
    [1, 'Hallo!', 'Introductions · pronouns, zijn & hebben'],
    [2, 'Mijn familie', 'Family & numbers · present tense'],
    [3, 'Bij Ria thuis', 'The home · de/het, plurals'],
    [4, 'Aan tafel', 'Food & drink · word order, niet/geen'],
    [5, 'Mijn dag', 'Daily routine & time · telling time'],
    [6, 'Wat doe je graag?', 'Hobbies · modal verbs'],
    [7, 'Het weer', 'Weather & seasons · er is / er zijn'],
    [8, 'Boodschappen', 'Shopping & money · object pronouns'],
    [9, 'Kleren en kleuren', 'Clothes & colours · adjective endings'],
    [10, 'Hoe voel je je?', 'Body & health · imperatives, reflexives'],
    [11, 'Op pad', 'Transport & directions · prepositions'],
    [12, 'Mijn werk', 'Work · separable verbs'],
    [13, 'Kwartaaltoets 1', 'Review & quarter test'],
    [14, 'Wat heb je gedaan?', 'The weekend · perfect tense with hebben'],
    [15, 'Ik ben gegaan', 'Movement · perfect tense with zijn'],
    [16, 'Op vakantie', 'Holidays · irregular participles'],
    [17, 'Vroeger', 'Childhood · simple past'],
    [18, 'Gefeliciteerd!', 'Birthdays & parties · comparatives'],
    [19, 'Plannen maken', 'Plans · future with gaan & zullen'],
    [20, 'Bellen en appen', 'Phone & WhatsApp · informal written Dutch'],
    [21, 'Waarom?', 'Reasons · omdat, want, dus'],
    [22, 'Ik denk dat…', 'Opinions · dat-clauses'],
    [23, 'Kleine dingen', 'Diminutives · -je, -tje, -pje'],
    [24, 'Bij de dokter', 'Health · pain & symptoms'],
    [25, 'Het huishouden', 'Chores · er + preposition'],
    [26, 'Kwartaaltoets 2', 'Review & quarter test'],
    [27, 'Vertel eens', 'Storytelling · toen, daarna, eerst'],
    [28, 'Gevoelens', 'Emotions · reflexive verbs'],
    [29, 'Mensen beschrijven', 'Character · relative clauses'],
    [30, 'Om te…', 'Purpose · om … te'],
    [31, 'Waar denk je aan?', 'Prepositional verbs'],
    [32, 'Israël en Nederland', 'Talking about home · comparisons'],
    [33, 'Als ik…', 'Conditionals · zou'],
    [34, 'Wat zei je?', 'Reported speech'],
    [35, 'Natuur en dieren', 'Nature · er in all its uses'],
    [36, 'Het nieuws', 'News · passive voice'],
    [37, 'Sport en gezondheid', 'Fitness · reflexives in the past'],
    [38, 'Geld en wonen', 'Money & housing · hoewel, terwijl, zodat'],
    [39, 'Kwartaaltoets 3', 'Review & quarter test'],
    [40, 'Even, maar, toch', 'Modal particles I'],
    [41, 'Hoor, wel, nou, eens', 'Modal particles II'],
    [42, 'Discussiëren', 'Agreeing & disagreeing'],
    [43, 'Grapjes', 'Humour & Dutch directness'],
    [44, 'Spreekwoorden', 'Idioms & sayings'],
    [45, 'Sinterklaas en kerst', 'Traditions'],
    [46, 'Koningsdag', 'National days & history'],
    [47, 'Media en cultuur', 'TV, music, books'],
    [48, 'Toekomst', 'Ambitions · future perfect'],
    [49, 'Formeel', 'Formal situations · the u-form'],
    [50, 'Lange zinnen', 'Combining sentences'],
    [51, 'Een lang gesprek', 'Extended conversation practice'],
    [52, 'Eindtoets', 'Final review & B1 test'],
  ],

  // Verified free resources (checked Oct 2026). Some have paid extras.
  library: [
    { id: 'super-easy', title: 'Super Easy Dutch', kind: 'Video', level: 'A1–A2',
      url: 'https://www.youtube.com/playlist?list=PLA5UIoabheFOF-wn5yKE8ZI8rmMQCTbMD',
      desc: 'Short street interviews in simple Dutch with Dutch and English subtitles.' },
    { id: 'fexingo', title: 'Learn Dutch with Fexingo', kind: 'Podcast', level: 'A1–A2',
      url: 'https://castbox.fm/channel/Learn-Dutch-with-Fexingo-id7228157',
      desc: 'Short beginner episodes: slow stories, everyday conversations, lots of repetition. Also in any podcast app.' },
    { id: 'bart-lessons', title: 'Heb je zin? (Bart de Pau)', kind: 'Video', level: 'A1–A2',
      url: 'https://www.learndutch.org/lessons/lesson-01-introduce-yourself/',
      desc: 'Animated soap-opera lessons from learndutch.org. Some parts need a free account.' },
    { id: 'bart-grammar', title: 'Dutch grammar (learndutch.org)', kind: 'Grammar', level: 'A1–A2',
      url: 'https://www.learndutch.org/dutch-grammar/',
      desc: 'Short grammar videos by Bart de Pau — a second explanation alongside ours.' },
    { id: 'bart-verbs', title: 'Verb conjugation trainer', kind: 'Practice', level: 'A1–B1',
      url: 'https://www.learndutch.org/dutch-verb-conjugation-trainer/',
      desc: 'Drill verb forms. Useful from week 2 onward.' },
    { id: 'easy-street', title: 'Easy Dutch street interviews', kind: 'Video', level: 'A2–B1',
      url: 'https://www.youtube.com/playlist?list=PLA5UIoabheFM3fi9i9xw6ODUoSqyKJYU7',
      desc: 'Real people on Dutch streets talking about everyday life, with double subtitles.' },
    { id: 'nos-makkelijk', title: 'NOS Journaal in Makkelijke Taal', kind: 'News', level: 'A2–B1',
      url: 'https://www.youtube.com/results?search_query=NOS+Journaal+in+Makkelijke+Taal',
      desc: 'Daily 10-minute news in easy Dutch (weekdays on NPO 1 / NPO Start and YouTube).' },
    { id: 'jeugdjournaal', title: 'NOS Jeugdjournaal', kind: 'News', level: 'A2+–B1',
      url: 'https://jeugdjournaal.nl',
      desc: 'Children’s news: clear, short videos and articles about current events.' },
    { id: 'potje', title: 'Potje Nederlands (University of Groningen)', kind: 'Podcast', level: 'A2–B1',
      url: 'https://www.rug.nl/language-centre/about-us/news/podcast-potje-nederlands?lang=en',
      desc: 'A podcast for Dutch learners from the RUG language centre (started April 2026).' },
    { id: 'easy-pod', title: 'Easy Dutch podcast', kind: 'Podcast', level: 'B1',
      url: 'https://www.easydutch.fm/episodes',
      desc: 'Authentic conversations in Dutch. Listen in your podcast app; transcripts are a paid extra.' },
    { id: 'wiktionary', title: 'Wiktionary', kind: 'Tool', level: 'All',
      url: 'https://en.wiktionary.org/wiki/Wiktionary:Main_Page',
      desc: 'Look up any Dutch word: de/het, plural, verb forms, pronunciation.' },
    { id: 'forvo', title: 'Forvo', kind: 'Tool', level: 'All',
      url: 'https://forvo.com/',
      desc: 'Hear words pronounced by native speakers — a check on the app’s synthetic voice.' },
    { id: 'tatoeba', title: 'Tatoeba sentences', kind: 'Tool', level: 'All',
      url: 'https://tatoeba.org/en/sentences/search?from=nld&to=eng',
      desc: 'Example sentences written by native speakers, Dutch ↔ English.' },
  ],

  // One-tap additions for the family phrasebook. [nl, en, note]
  presets: [
    ['Sorry, mijn Nederlands is nog niet zo goed.', 'Sorry, my Dutch isn’t very good yet.'],
    ['Ik leer Nederlands om met jullie te praten.', 'I’m learning Dutch to talk with you (all).'],
    ['Kun je wat langzamer praten?', 'Can you talk a bit slower?'],
    ['Kun je dat herhalen?', 'Can you repeat that?'],
    ['Wat betekent dat?', 'What does that mean?'],
    ['Hoe zeg je … in het Nederlands?', 'How do you say … in Dutch?'],
    ['Ik vind het fijn om hier te zijn.', 'I’m happy to be here.'],
    ['Ik heb jullie gemist.', 'I missed you (all).'],
    ['Wat lief van je!', 'How sweet of you!'],
    ['Bedankt voor alles.', 'Thanks for everything.'],
    ['Gefeliciteerd!', 'Congratulations! / Happy birthday!', 'At a Dutch birthday you congratulate everyone in the room.'],
    ['Slaap lekker!', 'Sleep well!'],
    ['Fijne dag!', 'Have a nice day!'],
    ['Tot de volgende keer!', 'Until next time!'],
    ['Doe de groetjes aan iedereen!', 'Say hi to everyone!'],
    ['Dikke kus!', 'Big kiss!', 'Common at the end of a message to family.'],
    ['Ik ben trots op je.', 'I’m proud of you.'],
    ['Zeg maar je.', 'Just call me “je” (no need for “u”).'],
  ],
};

DY.slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Words are written compactly as [nl, en, example, exampleEn, extra?].
// extra may hold: pl (plural), note, id (to disambiguate), check (ask a native).
DY.addWeek = function (w) {
  w.days.forEach((d, i) => {
    d.n = i + 1;
    d.words = d.words.map(a => {
      const extra = a[4] || {};
      const wd = { nl: a[0], en: a[1], ex: a[2], exEn: a[3], ...extra };
      wd.id = 'w:' + (extra.id || DY.slug(a[0]));
      wd.week = w.n; wd.day = d.n;
      if (DY.course.words[wd.id]) console.warn('Duplicate word id', wd.id);
      DY.course.words[wd.id] = wd;
      return wd;
    });
  });
  DY.course.weeks[w.n] = w;
};
