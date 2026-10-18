DY.addWeek({
  n: 3,
  title: 'Bij Ria thuis',
  level: 'A1',
  cando: [
    'Name the rooms and furniture in a house',
    'Use de and het, and make plurals',
    'Say this/that: deze, die, dit, dat',
    'Describe a place: big, small, cosy, cold…',
    'Say where things are, using staan, liggen and zitten',
  ],

  grammar: {
    title: 'de & het, plurals, deze/die/dit/dat',
    html: `
<p>Dutch has two words for “the”: <b>de</b> and <b>het</b>. About two thirds of nouns are de-words. There’s no reliable rule, so <b>always learn a noun together with its article</b>: <i>de tafel</i>, <i>het huis</i>.</p>
<h3>Clues that a word is a het-word</h3>
<ul>
<li>All diminutives (ending in <i>-je</i>): <i>het kopje, het meisje, het biertje</i></li>
<li>Languages: <i>het Nederlands, het Engels</i></li>
<li>Verbs used as nouns: <i>het eten</i> (the food), <i>het leven</i> (life)</li>
<li>Many words starting with <i>ge-, be-, ver-</i>: <i>het gezin, het bezoek</i></li>
</ul>
<div class="tip">All plurals are <b>de</b>: <i>het huis → de huizen</i>. And “a/an” is always <b>een</b>.</div>
<h3>Plurals</h3>
<ul>
<li>Most words add <b>-en</b>: <i>boek → boeken, stoel → stoelen</i></li>
<li>Words ending in <i>-el, -er, -em, -en, -je</i> add <b>-s</b>: <i>tafel → tafels, kamer → kamers, kopje → kopjes</i></li>
<li>Words ending in a vowel often add <b>’s</b>: <i>foto → foto’s, oma → oma’s</i></li>
<li><b>Spelling:</b> a long vowel loses its double letter in an open syllable: <i>raam → ramen, deur → deuren</i>. A short vowel doubles the consonant: <i>bed → bedden, kast → kasten</i>.</li>
<li>Some are irregular: <i>kind → kinderen, stad → steden, glas → glazen</i></li>
</ul>
<h3>This and that</h3>
<table>
<tr><th></th><th>this / these</th><th>that / those</th></tr>
<tr><td>de-words</td><td><b>deze</b> stoel</td><td><b>die</b> stoel</td></tr>
<tr><td>het-words</td><td><b>dit</b> huis</td><td><b>dat</b> huis</td></tr>
<tr><td>plurals</td><td><b>deze</b> stoelen</td><td><b>die</b> stoelen</td></tr>
</table>
<h3>It = hij or het</h3>
<p>Objects that are de-words are called <b>hij</b>: <i>Waar is mijn bril? — Hij ligt op tafel.</i> Het-words are <b>het</b>: <i>Het boek? Het ligt daar.</i></p>`,
  },

  culture: {
    title: 'Open curtains and steep stairs',
    html: `
<p><b>Open curtains:</b> walk through a Dutch street in the evening and you can look straight into living rooms. Many Dutch people simply don’t close the curtains — there’s nothing to hide.</p>
<p><b>Steep stairs:</b> old Dutch houses are narrow and tall, with very steep staircases (<i>de trap</i>). Furniture often goes in through the window with a hook at the top of the house.</p>
<p><b>Gezellig:</b> the most Dutch word there is. A home, an evening, a café or a conversation can be <i>gezellig</i> — cosy, warm, sociable, nice to be in. <i>Wat gezellig!</i> is a great compliment for your host.</p>
<p><b>Shoes:</b> unlike in many countries, Dutch people often keep their shoes on indoors — but some families don’t. Just ask: <i>Moeten mijn schoenen uit?</i></p>`,
  },

  days: [
    {
      title: 'Rooms',
      words: [
        ['het huis', 'house', 'Het huis van Ria is oud en gezellig.', 'Ria’s house is old and cosy.', { pl: 'huizen' }],
        ['de kamer', 'room', 'Het huis heeft vijf kamers.', 'The house has five rooms.', { pl: 'kamers' }],
        ['de keuken', 'kitchen', 'Ria is in de keuken.', 'Ria is in the kitchen.', { pl: 'keukens' }],
        ['de woonkamer', 'living room', 'We zitten in de woonkamer.', 'We’re sitting in the living room.', { pl: 'woonkamers' }],
        ['de slaapkamer', 'bedroom', 'Jouw slaapkamer is boven.', 'Your bedroom is upstairs.', { pl: 'slaapkamers' }],
        ['de badkamer', 'bathroom', 'De badkamer is naast de slaapkamer.', 'The bathroom is next to the bedroom.', { pl: 'badkamers' }],
        ['de wc', 'toilet', 'Waar is de wc?', 'Where is the toilet?', { note: 'Pronounced “wee-see”. Also: het toilet.' }],
        ['de tuin', 'garden', 'Kees werkt graag in de tuin.', 'Kees likes working in the garden.', { pl: 'tuinen' }],
      ],
      dialogue: {
        title: 'Een rondleiding',
        intro: 'Ria shows you around the house.',
        lines: [
          ['Ria', 'Kom, ik laat je het huis zien.', 'Come, I’ll show you the house.'],
          ['Ria', 'Dit is de woonkamer, en daar is de keuken.', 'This is the living room, and there’s the kitchen.'],
          ['Jij', 'Wat een mooie keuken!', 'What a beautiful kitchen!'],
          ['Ria', 'Dank je! Boven zijn de slaapkamers en de badkamer.', 'Thanks! Upstairs are the bedrooms and the bathroom.'],
          ['Jij', 'En waar is de wc?', 'And where is the toilet?'],
          ['Ria', 'De wc is hier, naast de deur.', 'The toilet is here, next to the door.'],
          ['Jij', 'En de tuin is prachtig!', 'And the garden is gorgeous!'],
          ['Ria', 'Dat is het werk van Kees.', 'That’s Kees’s work.'],
        ],
      },
      notesTitle: 'de or het?',
      notes: `
<p>Every noun is either a <b>de</b>-word or a <b>het</b>-word. About two thirds are de-words, and there’s no reliable rule — so learn each noun with its article, like a package: <i>de keuken, het huis</i>.</p>
<p>One sure clue: words ending in <i>-je</i> (diminutives) are always <b>het</b>.</p>`,
      ex: [
        { t: 'dehet', w: 'huis', a: 'het' },
        { t: 'dehet', w: 'keuken', a: 'de' },
        { t: 'dehet', w: 'tuin', a: 'de' },
        { t: 'dehet', w: 'kamer', a: 'de' },
        { t: 'cloze', q: 'Ria is in de ___.', a: ['keuken'], en: 'Ria is in the kitchen.' },
        { t: 'tr', en: 'Where is the toilet?', a: ['Waar is de wc?', 'Waar is het toilet?'] },
        { t: 'order', nl: 'De wc is naast de deur.', en: 'The toilet is next to the door.' },
      ],
    },

    {
      title: 'Furniture',
      words: [
        ['de tafel', 'table', 'Het eten staat op tafel.', 'The food is on the table.', { pl: 'tafels' }],
        ['de stoel', 'chair', 'Pak een stoel!', 'Grab a chair!', { pl: 'stoelen' }],
        ['de bank', 'sofa, couch', 'Kees slaapt op de bank.', 'Kees is sleeping on the sofa.', { pl: 'banken', note: 'Also means “bank” (money).' }],
        ['het bed', 'bed', 'Het bed is groot.', 'The bed is big.', { pl: 'bedden' }],
        ['de kast', 'cupboard, wardrobe', 'De kopjes staan in de kast.', 'The cups are in the cupboard.', { pl: 'kasten' }],
        ['de deur', 'door', 'Doe de deur dicht, alsjeblieft.', 'Close the door, please.', { pl: 'deuren' }],
        ['het raam', 'window', 'Het raam is open.', 'The window is open.', { pl: 'ramen' }],
        ['de trap', 'stairs', 'De trap is steil!', 'The stairs are steep!', { pl: 'trappen' }],
      ],
      dialogue: {
        title: 'Waar slaap ik?',
        intro: 'Kees takes you to the guest room.',
        lines: [
          ['Kees', 'Jij slaapt in de logeerkamer.', 'You’re sleeping in the guest room.'],
          ['Jij', 'De logeerkamer?', 'The guest room?'],
          ['Kees', 'Ja, de kamer voor bezoek. Boven, aan het einde van de gang.', 'Yes, the room for visitors. Upstairs, at the end of the hall.'],
          ['Jij', 'Oei, de trap is steil!', 'Whoa, the stairs are steep!'],
          ['Kees', 'Ja, typisch Nederlands. Voorzichtig!', 'Yes, typically Dutch. Careful!'],
          ['Jij', 'Wat een mooi bed. En een grote kast!', 'What a nice bed. And a big wardrobe!'],
          ['Kees', 'Slaap lekker straks!', 'Sleep well later!'],
        ],
      },
      notesTitle: 'Making plurals',
      notes: `
<ul>
<li>Most words: <b>+en</b> — <i>stoel → stoelen</i></li>
<li>Ending in -el, -er, -em, -en, -je: <b>+s</b> — <i>tafel → tafels, kamer → kamers</i></li>
<li>Long vowel (aa, ee, oo, uu): one letter disappears — <i>raam → ramen</i></li>
<li>Short vowel: the consonant doubles — <i>bed → bedden, trap → trappen</i></li>
</ul>
<p>Every plural is a <b>de</b>-word: <i>het raam → de ramen</i>.</p>`,
      ex: [
        { t: 'mc', q: 'de stoel → twee…', o: ['stoelen', 'stoels', 'stoelens'], a: 0 },
        { t: 'mc', q: 'de tafel → twee…', o: ['tafels', 'tafelen', 'tafel'], a: 0, x: 'Words ending in -el take -s.' },
        { t: 'mc', q: 'het raam → twee…', o: ['ramen', 'raamen', 'raams'], a: 0, x: 'In an open syllable the long vowel is written with one letter: ra-men.' },
        { t: 'mc', q: 'het bed → twee…', o: ['bedden', 'beden', 'beds'], a: 0, x: 'Short vowel → double the consonant: bed-den.' },
        { t: 'dehet', w: 'raam', a: 'het' },
        { t: 'dehet', w: 'deur', a: 'de' },
        { t: 'cloze', q: 'Doe de ___ dicht, alsjeblieft.', a: ['deur'], en: 'Close the door, please.' },
        { t: 'tr', en: 'The window is open.', a: ['Het raam is open.', 'Het raam staat open.'] },
      ],
    },

    {
      title: 'Things around the house',
      words: [
        ['het boek', 'book', 'Dit boek is van Lotte.', 'This book is Lotte’s.', { pl: 'boeken' }],
        ['de telefoon', 'phone', 'Waar is mijn telefoon?', 'Where is my phone?', { pl: 'telefoons' }],
        ['de lamp', 'lamp, light', 'Doe de lamp even aan.', 'Turn on the lamp for a moment.', { pl: 'lampen' }],
        ['de foto', 'photo', 'Wat een mooie foto!', 'What a beautiful photo!', { pl: 'foto’s' }],
        ['het kopje', 'cup', 'Wil je een kopje thee?', 'Would you like a cup of tea?', { pl: 'kopjes' }],
        ['het glas', 'glass', 'Een glas water, graag.', 'A glass of water, please.', { pl: 'glazen' }],
        ['de sleutel', 'key', 'Hier is de sleutel van het huis.', 'Here is the key to the house.', { pl: 'sleutels' }],
        ['de bril', 'glasses (spectacles)', 'Opa zoekt zijn bril.', 'Grandpa is looking for his glasses.', { pl: 'brillen', note: 'Singular in Dutch: één bril = one pair of glasses.' }],
      ],
      dialogue: {
        title: 'Waar is mijn bril?',
        intro: 'Kees can’t find his glasses. Again.',
        lines: [
          ['Kees', 'Ria, waar is mijn bril?', 'Ria, where are my glasses?'],
          ['Ria', 'Op de tafel?', 'On the table?'],
          ['Kees', 'Nee, daar ligt hij niet.', 'No, they’re not there.'],
          ['Jij', 'Is dit jouw bril? Hij ligt naast de lamp.', 'Are these your glasses? They’re next to the lamp.'],
          ['Kees', 'Ja! Dank je wel!', 'Yes! Thank you!'],
          ['Ria', 'Elke dag hetzelfde…', 'Every day the same…'],
        ],
      },
      notesTitle: 'deze, die, dit, dat — and “it”',
      notes: `
<table>
<tr><th></th><th>this</th><th>that</th></tr>
<tr><td>de-word</td><td>deze telefoon</td><td>die telefoon</td></tr>
<tr><td>het-word</td><td>dit boek</td><td>dat boek</td></tr>
<tr><td>plural</td><td>deze boeken</td><td>die boeken</td></tr>
</table>
<p>Things that are de-words are “he”: <i>Waar is de bril? — <b>Hij</b> ligt daar.</i> Het-words are “it”: <i>Het boek? <b>Het</b> ligt op tafel.</i></p>`,
      ex: [
        { t: 'mc', q: '___ boek is van Lotte. (this)', o: ['Dit', 'Deze'], a: 0, x: 'het boek → dit.' },
        { t: 'mc', q: '___ telefoon is nieuw. (this)', o: ['Deze', 'Dit'], a: 0, x: 'de telefoon → deze.' },
        { t: 'mc', q: '___ foto is mooi. (that)', o: ['Die', 'Dat'], a: 0, x: 'de foto → die.' },
        { t: 'mc', q: '___ glazen zijn schoon. (these)', o: ['Deze', 'Dit'], a: 0, x: 'Plurals → deze/die.' },
        { t: 'dehet', w: 'kopje', a: 'het', x: 'Ends in -je → always het.' },
        { t: 'dehet', w: 'glas', a: 'het' },
        { t: 'mc', q: '“Waar is de sleutel?” — “___ ligt op de tafel.”', o: ['Hij', 'Het', 'Zij'], a: 0, x: 'de sleutel is a de-word → hij.' },
        { t: 'cloze', q: 'Waar is mijn ___?', a: ['telefoon'], en: 'Where is my phone?' },
      ],
    },

    {
      title: 'Describing a place',
      words: [
        ['groot', 'big', 'Het huis is groot.', 'The house is big.'],
        ['klein', 'small', 'Mijn appartement is klein.', 'My apartment is small.'],
        ['mooi', 'beautiful, nice', 'Wat een mooie tuin!', 'What a beautiful garden!'],
        ['nieuw', 'new', 'Is die bank nieuw?', 'Is that sofa new?'],
        ['warm', 'warm', 'Het is lekker warm in de kamer.', 'It’s nice and warm in the room.'],
        ['koud', 'cold', 'Het is koud buiten!', 'It’s cold outside!'],
        ['gezellig', 'cosy, sociable', 'Wat gezellig!', 'How cosy / How nice!', { note: 'Untranslatable: warm, cosy, sociable, pleasant — all in one.' }],
        ['schoon', 'clean', 'De keuken is schoon.', 'The kitchen is clean.'],
        ['vies', 'dirty; gross', 'Bah, vies!', 'Yuck, gross!'],
      ],
      dialogue: {
        title: 'Wat gezellig!',
        intro: 'You compliment Ria on her home.',
        lines: [
          ['Jij', 'Wat een gezellig huis, Ria!', 'What a cosy house, Ria!'],
          ['Ria', 'Dank je! Het is oud, maar we vinden het mooi.', 'Thanks! It’s old, but we think it’s beautiful.'],
          ['Jij', 'Ik woon in een klein appartement.', 'I live in a small apartment.'],
          ['Ria', 'In Haifa is het vast warm, hè?', 'It must be warm in Haifa, right?'],
          ['Jij', 'Ja, heel warm! Hier is het koud.', 'Yes, very warm! Here it’s cold.'],
          ['Ria', 'Wacht, ik zet de verwarming hoger.', 'Wait, I’ll turn up the heating.'],
        ],
      },
      notesTitle: '“Wat een…!” and adjectives',
      notes: `
<p><i>Wat een …!</i> = What a …! — <i>Wat een mooi huis!</i> <i>Wat een gezellige kamer!</i></p>
<p>An adjective <b>after</b> the noun never changes: <i>De tuin is mooi.</i><br>
<b>Before</b> a noun it usually gets <b>-e</b>: <i>een mooie tuin, de grote kamer</i>. Exception: <i>een</i> + het-word: <i>een mooi huis</i>. You’ll practise this properly in week 9 — for now, just notice it.</p>
<p><i>hè?</i> at the end of a sentence = “right?” / “isn’t it?”</p>`,
      ex: [
        { t: 'mc', q: 'The opposite of “groot”:', o: ['klein', 'koud', 'nieuw'], a: 0 },
        { t: 'mc', q: 'The opposite of “schoon”:', o: ['vies', 'mooi', 'warm'], a: 0 },
        { t: 'mc', q: 'When do you say “Wat gezellig!”?', o: ['When a place or moment feels warm and pleasant', 'When the food is too salty', 'When you leave'], a: 0 },
        { t: 'cloze', q: 'Het is ___ buiten! Neem een jas.', a: ['koud'], en: 'It’s cold outside! Take a coat.' },
        { t: 'tr', en: 'The kitchen is clean.', a: ['De keuken is schoon.'] },
        { t: 'order', nl: 'Wat een gezellig huis!', en: 'What a cosy house!' },
        { t: 'tr', en: 'My apartment is small.', a: ['Mijn appartement is klein.', 'Mijn flat is klein.'] },
      ],
    },

    {
      title: 'Where is it?',
      words: [
        ['hier', 'here', 'Ik ben hier!', 'I’m here!'],
        ['daar', 'there', 'Daar is de keuken.', 'There’s the kitchen.'],
        ['boven', 'upstairs; above', 'De badkamer is boven.', 'The bathroom is upstairs.'],
        ['beneden', 'downstairs; below', 'Kom je naar beneden? Het eten is klaar!', 'Are you coming downstairs? Dinner’s ready!'],
        ['binnen', 'inside', 'Kom binnen!', 'Come in!'],
        ['buiten', 'outside', 'De kinderen spelen buiten.', 'The children are playing outside.'],
        ['op', 'on', 'Het boek ligt op de tafel.', 'The book is on the table.'],
        ['in', 'in', 'De melk staat in de koelkast.', 'The milk is in the fridge.'],
        ['naast', 'next to', 'De wc is naast de keuken.', 'The toilet is next to the kitchen.'],
      ],
      dialogue: {
        title: 'Het eten is klaar!',
        intro: 'Dinnertime at Ria’s.',
        lines: [
          ['Ria', 'Daan! Lotte! Het eten is klaar!', 'Daan! Lotte! Dinner’s ready!'],
          ['Lotte', 'Waar is Daan?', 'Where is Daan?'],
          ['Ingrid', 'Hij is boven, op zijn kamer.', 'He’s upstairs, in his room.'],
          ['Ria', 'Daan, kom naar beneden!', 'Daan, come downstairs!'],
          ['Daan', 'Ja, ik kom!', 'Yes, coming!'],
          ['Ingrid', 'Lotte, waar is je telefoon? Niet aan tafel, hè.', 'Lotte, where’s your phone? Not at the table, OK?'],
          ['Lotte', 'Hij ligt op de bank.', 'It’s on the sofa.'],
        ],
      },
      notesTitle: 'Staan, liggen, zitten',
      notes: `
<p>Where English says “is”, Dutch often uses a verb that shows the <b>position</b>:</p>
<ul>
<li><b>staan</b> (stand) — upright things: <i>Het glas staat op tafel. De melk staat in de koelkast.</i></li>
<li><b>liggen</b> (lie) — flat things: <i>Het boek ligt op tafel. De telefoon ligt op de bank.</i></li>
<li><b>zitten</b> (sit) — inside something: <i>De sleutel zit in mijn tas.</i></li>
</ul>
<p>Using <i>is</i> isn’t wrong, but these verbs make you sound much more natural.</p>`,
      ex: [
        { t: 'mc', q: 'Het boek ___ op de tafel.', o: ['ligt', 'staat'], a: 0, x: 'A book lies flat → liggen.' },
        { t: 'mc', q: 'Het glas ___ op de tafel.', o: ['staat', 'ligt'], a: 0, x: 'A glass stands upright → staan.' },
        { t: 'mc', q: 'De melk ___ in de koelkast.', o: ['staat', 'ligt'], a: 0, x: 'A bottle or carton stands → staan.' },
        { t: 'mc', q: 'De sleutel ___ in mijn tas.', o: ['zit', 'staat'], a: 0, x: 'Inside something → zitten.' },
        { t: 'cloze', q: 'Daan is ___, op zijn kamer.', a: ['boven'], en: 'Daan is upstairs, in his room.' },
        { t: 'cloze', q: 'De kinderen spelen ___.', a: ['buiten'], en: 'The children are playing outside.' },
        { t: 'tr', en: 'Come in!', a: ['Kom binnen!', 'Kom maar binnen!', 'Kom erin!'] },
        { t: 'order', nl: 'De wc is naast de keuken.', en: 'The toilet is next to the kitchen.' },
      ],
    },
  ],

  input: [
    { ref: 'super-easy', task: 'Watch an episode and count how many times you hear “de” and “het”. Pause and repeat three short sentences.' },
    { ref: 'easy-street', task: 'Try one street interview about living or housing (search the playlist for “wonen”). With subtitles is fine!' },
    { ref: 'wiktionary', task: 'Look up three nouns from your house that we haven’t learned (e.g. “koelkast”, “spiegel”, “kussen”) — find de/het and the plural. Add them to your Phrasebook.' },
  ],

  test: [
    { t: 'dehet', w: 'huis', a: 'het' },
    { t: 'dehet', w: 'raam', a: 'het' },
    { t: 'dehet', w: 'kopje', a: 'het' },
    { t: 'dehet', w: 'stoel', a: 'de' },
    { t: 'mc', q: 'het bed → twee…', o: ['bedden', 'beden', 'beds'], a: 0 },
    { t: 'mc', q: '___ foto is mooi. (this)', o: ['Deze', 'Dit'], a: 0 },
    { t: 'mc', q: 'De telefoon ___ op de bank.', o: ['ligt', 'staat'], a: 0 },
    { t: 'tr', en: 'The bathroom is upstairs.', a: ['De badkamer is boven.'] },
    { t: 'dict', nl: 'Wat een gezellig huis!', en: 'What a cosy house!' },
    { t: 'order', nl: 'Het boek ligt op de tafel.', en: 'The book is on the table.' },
  ],
});
