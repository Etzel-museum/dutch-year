DY.addWeek({
  n: 1,
  title: 'Hallo!',
  level: 'A1',
  cando: [
    'Greet people and say goodbye — informally and formally',
    'Ask how someone is and answer',
    'Say my name, where I’m from, where I live and which languages I speak',
    'Ask someone to slow down or repeat',
    'Use the right form of zijn (to be) and hebben (to have)',
  ],

  grammar: {
    title: 'Personal pronouns + zijn & hebben',
    html: `
<p>Dutch has a <b>stressed</b> and an <b>unstressed</b> form of most pronouns. In everyday speech the unstressed forms are far more common — use the stressed form only for emphasis or contrast.</p>
<table>
<tr><th></th><th>stressed</th><th>unstressed</th></tr>
<tr><td>I</td><td>ik</td><td>('k)</td></tr>
<tr><td>you (informal)</td><td>jij</td><td>je</td></tr>
<tr><td>you (formal)</td><td>u</td><td>u</td></tr>
<tr><td>he</td><td>hij</td><td>('ie)</td></tr>
<tr><td>she</td><td>zij</td><td>ze</td></tr>
<tr><td>it</td><td>het</td><td>('t)</td></tr>
<tr><td>we</td><td>wij</td><td>we</td></tr>
<tr><td>you (plural)</td><td>jullie</td><td>jullie</td></tr>
<tr><td>they</td><td>zij</td><td>ze</td></tr>
</table>
<h3>zijn — to be</h3>
<table>
<tr><td>ik <b>ben</b></td><td>wij <b>zijn</b></td></tr>
<tr><td>jij <b>bent</b> · <i>ben jij?</i></td><td>jullie <b>zijn</b></td></tr>
<tr><td>u <b>bent</b></td><td>zij <b>zijn</b></td></tr>
<tr><td>hij / zij / het <b>is</b></td><td></td></tr>
</table>
<h3>hebben — to have</h3>
<table>
<tr><td>ik <b>heb</b></td><td>wij <b>hebben</b></td></tr>
<tr><td>jij <b>hebt</b> · <i>heb jij?</i></td><td>jullie <b>hebben</b></td></tr>
<tr><td>u <b>hebt</b> / <b>heeft</b></td><td>zij <b>hebben</b></td></tr>
<tr><td>hij / zij / het <b>heeft</b></td><td></td></tr>
</table>
<div class="tip"><b>The disappearing -t:</b> when <i>jij/je</i> comes <b>after</b> the verb (in questions), the -t drops: <i>jij bent</i> → <i>ben jij?</i>, <i>jij hebt</i> → <i>heb je?</i></div>
<h3>je or u?</h3>
<p>With family and friends always use <i>je/jij</i>. Use <i>u</i> with strangers, in shops and with elderly people you don’t know. If someone says <i>“Zeg maar je”</i>, they’re inviting you to switch to <i>je</i>.</p>`,
  },

  culture: {
    title: 'Three kisses and a handshake',
    html: `
<p><b>Greeting:</b> family and close friends greet with <b>three kisses</b> on the cheeks (right–left–right) — especially at birthdays and after a long time apart. Men among themselves usually shake hands or hug. When meeting someone new, a firm handshake while saying your first name is normal: <i>“Hoi, Daan.”</i></p>
<p><b>First names:</b> the Dutch use first names quickly, even with older people — but older family members may appreciate <i>u</i> at first. Listen to what others do.</p>
<p><b>Directness:</b> Dutch people tend to say what they think. <i>“Je Nederlands is nog niet zo goed”</i> isn’t rude — it’s honest, and usually followed by encouragement.</p>
<p><b>Doei!</b> You’ll hear <i>doei</i>, <i>doeg</i> and even <i>doei doei!</i> at the end of phone calls with family. Very informal, very common.</p>`,
  },

  days: [
    {
      title: 'Greetings',
      words: [
        ['hallo', 'hello', 'Hallo, ik ben Daan.', 'Hello, I’m Daan.'],
        ['hoi', 'hi (informal)', 'Hoi Lotte! Hoe is het?', 'Hi Lotte! How are you?'],
        ['goedemorgen', 'good morning', 'Goedemorgen! Lekker geslapen?', 'Good morning! Slept well?'],
        ['goedemiddag', 'good afternoon', 'Goedemiddag, mevrouw.', 'Good afternoon, madam.', { note: 'Used roughly from 12:00 to 18:00.' }],
        ['goedenavond', 'good evening', 'Goedenavond, meneer De Vries.', 'Good evening, Mr De Vries.'],
        ['doei', 'bye (informal)', 'Doei, tot morgen!', 'Bye, see you tomorrow!'],
        ['tot ziens', 'goodbye', 'Dank u wel, tot ziens!', 'Thank you, goodbye!'],
        ['tot straks', 'see you later (today)', 'Ik ga even weg. Tot straks!', 'I’m popping out. See you later!'],
      ],
      dialogue: {
        title: 'Bij de deur',
        intro: 'You arrive at Ria and Kees’s house.',
        lines: [
          ['Ria', 'Hallo! Welkom!', 'Hello! Welcome!'],
          ['Jij', 'Hallo Ria! Goedemiddag.', 'Hello Ria! Good afternoon.'],
          ['Ria', 'Kom binnen! Hoe is het?', 'Come in! How are you?'],
          ['Jij', 'Goed, dank je. En met jou?', 'Good, thanks. And you?'],
          ['Ria', 'Prima! Kees, ons bezoek is er!', 'Great! Kees, our visitor is here!'],
          ['Kees', 'Hoi! Leuk dat je er bent.', 'Hi! Nice that you’re here.'],
        ],
      },
      notesTitle: 'Informal or formal?',
      notes: `
<ul>
<li><i>hoi</i> and <i>doei</i> are informal — perfect for family.</li>
<li><i>goedemorgen / goedemiddag / goedenavond</i> are neutral: fine with everyone.</li>
<li><i>dag</i> works for both hello and goodbye, and is a little old-fashioned and friendly.</li>
<li><i>tot straks</i> = later today · <i>tot morgen</i> = tomorrow · <i>tot ziens</i> = goodbye (neutral)</li>
</ul>`,
      ex: [
        { t: 'mc', q: 'You arrive at your family’s house at 3 pm. The most natural greeting for your young cousin:', o: ['Hoi!', 'Goedenavond, meneer.', 'Tot ziens!'], a: 0 },
        { t: 'mc', q: '“Tot straks” means…', o: ['See you later (today)', 'Goodbye forever', 'Good evening'], a: 0 },
        { t: 'mc', q: 'When do you say “goedemiddag”?', o: ['Between about 12:00 and 18:00', 'Before 12:00', 'After 18:00'], a: 0 },
        { t: 'cloze', q: 'Goede___! Lekker geslapen?', a: ['morgen'], en: 'Good morning! Slept well?' },
        { t: 'mc', q: 'Which one is informal?', o: ['doei', 'tot ziens', 'goedenavond'], a: 0 },
        { t: 'order', nl: 'Leuk dat je er bent.', en: 'Nice that you’re here.' },
        { t: 'tr', en: 'Good evening!', a: ['Goedenavond!'] },
      ],
    },

    {
      title: 'How are you?',
      words: [
        ['Hoe gaat het?', 'How are you? (How is it going?)', 'Hoi Daan, hoe gaat het?', 'Hi Daan, how are you?'],
        ['Hoe is het?', 'How are you? (very common)', 'Hé, hoe is het met je?', 'Hey, how are you doing?'],
        ['goed', 'good, well', 'Het gaat goed, dank je.', 'I’m doing well, thanks.'],
        ['prima', 'fine, great', 'Prima! En met jou?', 'Fine! And you?'],
        ['moe', 'tired', 'Ik ben een beetje moe.', 'I’m a little tired.'],
        ['dank je wel', 'thank you (informal)', 'Dank je wel voor de koffie!', 'Thank you for the coffee!', { note: 'Formal: dank u wel. Short and casual: bedankt.' }],
        ['dank u wel', 'thank you (formal)', 'Dank u wel, mevrouw.', 'Thank you, madam.'],
        ['alsjeblieft', 'please / here you are', 'Een koffie, alsjeblieft.', 'A coffee, please.', { note: 'Also said when handing something to someone. Formal: alstublieft.' }],
        ['graag gedaan', 'you’re welcome', 'Dank je! — Graag gedaan.', 'Thanks! — You’re welcome.'],
      ],
      dialogue: {
        title: 'Een videogesprek',
        intro: 'A video call with Ingrid, Ria’s daughter.',
        lines: [
          ['Ingrid', 'Hoi! Hoe is het met je?', 'Hi! How are you?'],
          ['Jij', 'Goed, dank je! En met jou?', 'Good, thanks! And you?'],
          ['Ingrid', 'Prima. Een beetje moe.', 'Fine. A little tired.'],
          ['Jij', 'Oh. Druk op het werk?', 'Oh. Busy at work?'],
          ['Ingrid', 'Ja, heel druk. Maar het gaat goed!', 'Yes, very busy. But it’s going well!'],
          ['Jij', 'Fijn!', 'Good to hear!'],
        ],
      },
      notesTitle: 'Polite little words',
      notes: `
<ul>
<li>Answer <i>Hoe gaat het?</i> with <i>Goed, en met jou?</i> (informal) or <i>Goed, en met u?</i> (formal).</li>
<li><i>alsjeblieft</i> has two jobs: “please” when asking, and “here you are” when giving something.</li>
<li><i>dank je wel</i> (family, friends) · <i>dank u wel</i> (strangers, formal) · <i>bedankt</i> (works for both).</li>
</ul>`,
      ex: [
        { t: 'mc', q: 'Someone says “Dank je wel!”. You answer:', o: ['Graag gedaan!', 'Hoe gaat het?', 'Goedemorgen!'], a: 0 },
        { t: 'mc', q: 'You hand Ria a cup of coffee. You say:', o: ['Alsjeblieft.', 'Graag gedaan.', 'Dank je wel.'], a: 0, x: 'alsjeblieft = “here you are” when giving something.' },
        { t: 'cloze', q: 'Hoe ___ het? — Goed, dank je.', a: ['gaat', 'is'], en: 'How are you? — Good, thanks.' },
        { t: 'cloze', q: 'Goed, en met ___?', a: ['jou'], en: 'Good, and you? (informal)' },
        { t: 'mc', q: 'Formal “thank you” to an elderly stranger:', o: ['Dank u wel.', 'Dank je wel.', 'Doei!'], a: 0 },
        { t: 'order', nl: 'Het gaat goed, dank je.', en: 'I’m doing well, thanks.' },
        { t: 'tr', en: 'I’m a little tired.', a: ['Ik ben een beetje moe.', 'Ik ben wel een beetje moe.'] },
      ],
    },

    {
      title: 'Who are you?',
      words: [
        ['heten', 'to be called', 'Hoe heet jij? — Ik heet Daan.', 'What’s your name? — My name is Daan.'],
        ['de naam', 'name', 'Wat is je naam?', 'What’s your name?', { pl: 'namen' }],
        ['komen uit', 'to come from', 'Ik kom uit Israël.', 'I come from Israel.'],
        ['wonen', 'to live (reside)', 'Ik woon in Tel Aviv.', 'I live in Tel Aviv.'],
        ['Israël', 'Israel', 'Israël is een klein land.', 'Israel is a small country.'],
        ['Nederland', 'the Netherlands', 'Mijn familie woont in Nederland.', 'My family lives in the Netherlands.'],
        ['het land', 'country', 'Uit welk land kom je?', 'Which country are you from?', { pl: 'landen' }],
        ['de stad', 'city, town', 'Utrecht is een mooie stad.', 'Utrecht is a beautiful city.', { pl: 'steden' }],
      ],
      dialogue: {
        title: 'De buurman',
        intro: 'You meet the neighbour in front of the house.',
        lines: [
          ['Henk', 'Goedemiddag! Ik ben Henk, de buurman.', 'Good afternoon! I’m Henk, the neighbour.'],
          ['Jij', 'Hallo Henk. Ik ben familie van Ria.', 'Hello Henk. I’m related to Ria.'],
          ['Henk', 'O, leuk! Waar kom je vandaan?', 'Oh, nice! Where are you from?'],
          ['Jij', 'Ik kom uit Israël.', 'I’m from Israel.'],
          ['Henk', 'Uit Israël! En waar woon je?', 'From Israel! And where do you live?'],
          ['Jij', 'Ik woon in Haifa. Dat is een stad in het noorden.', 'I live in Haifa. That’s a city in the north.'],
          ['Henk', 'Welkom in Nederland!', 'Welcome to the Netherlands!'],
        ],
      },
      notesTitle: 'Talking about yourself',
      notes: `
<ul>
<li><i>Ik heet …</i> (I’m called …) is the most common way to give your name. <i>Ik ben …</i> also works.</li>
<li><i>Waar kom je vandaan?</i> — the word <i>vandaan</i> goes to the end. Answer: <i>Ik kom uit …</i></li>
<li><i>Ik ben familie van Ria</i> = I’m related to Ria (literally “I am family of Ria”).</li>
<li>Verbs: <i>ik woon</i>, but <i>jij woont</i> — and in a question <i>woon jij?</i> (the -t drops again).</li>
</ul>`,
      ex: [
        { t: 'cloze', q: 'Ik ___ uit Israël.', a: ['kom'], en: 'I come from Israel.' },
        { t: 'cloze', q: 'Ik ___ in Haifa.', a: ['woon'], en: 'I live in Haifa.' },
        { t: 'cloze', q: 'Hoe ___ jij?', a: ['heet'], en: 'What’s your name? (literally: how are you called?)' },
        { t: 'mc', q: '“Waar kom je vandaan?” asks…', o: ['Where are you from?', 'Where do you live?', 'Where are you going?'], a: 0 },
        { t: 'order', nl: 'Waar woon je?', en: 'Where do you live?' },
        { t: 'tr', en: 'I live in Israel.', a: ['Ik woon in Israël.'] },
        { t: 'tr', en: 'My family lives in the Netherlands.', a: ['Mijn familie woont in Nederland.'] },
      ],
    },

    {
      title: 'Languages',
      words: [
        ['de taal', 'language', 'Welke talen spreek je?', 'Which languages do you speak?', { pl: 'talen' }],
        ['spreken', 'to speak', 'Spreek je Engels?', 'Do you speak English?'],
        ['Nederlands', 'Dutch', 'Ik leer Nederlands.', 'I’m learning Dutch.'],
        ['Engels', 'English', 'Ria spreekt een beetje Engels.', 'Ria speaks a little English.'],
        ['Hebreeuws', 'Hebrew', 'In Israël spreken we Hebreeuws.', 'In Israel we speak Hebrew.'],
        ['een beetje', 'a little', 'Ik spreek een beetje Nederlands.', 'I speak a little Dutch.'],
        ['leren', 'to learn', 'Ik leer elke dag Nederlands.', 'I learn Dutch every day.'],
        ['langzaam', 'slow, slowly', 'Kun je langzaam praten, alsjeblieft?', 'Can you speak slowly, please?'],
        ['begrijpen', 'to understand', 'Sorry, ik begrijp het niet.', 'Sorry, I don’t understand.'],
      ],
      dialogue: {
        title: 'Spreek je Nederlands?',
        intro: 'Daan (16), Ria’s grandson, is curious.',
        lines: [
          ['Daan', 'Spreek je Nederlands?', 'Do you speak Dutch?'],
          ['Jij', 'Een beetje. Ik leer het nu.', 'A little. I’m learning it now.'],
          ['Daan', 'Cool! Je spreekt al goed!', 'Cool! You already speak well!'],
          ['Jij', 'Dank je! Maar kun je langzaam praten?', 'Thanks! But can you talk slowly?'],
          ['Daan', 'Natuurlijk. Spreek je ook Engels?', 'Of course. Do you also speak English?'],
          ['Jij', 'Ja, en Hebreeuws.', 'Yes, and Hebrew.'],
          ['Daan', 'Wauw, drie talen!', 'Wow, three languages!'],
        ],
      },
      notesTitle: 'Survival phrases for family visits',
      notes: `
<p>These five sentences will save you in every conversation. Learn them by heart:</p>
<ul>
<li><i>Sorry, ik begrijp het niet.</i> — Sorry, I don’t understand.</li>
<li><i>Kun je langzamer praten?</i> — Can you talk slower?</li>
<li><i>Kun je dat herhalen?</i> — Can you repeat that?</li>
<li><i>Wat betekent …?</i> — What does … mean?</li>
<li><i>Hoe zeg je … in het Nederlands?</i> — How do you say … in Dutch?</li>
</ul>
<div class="tip">You can add these to your <b>Phrasebook</b> with one tap — they’re in the ready-made list.</div>`,
      ex: [
        { t: 'mc', q: 'Your aunt talks too fast. You say:', o: ['Kun je langzaam praten, alsjeblieft?', 'Ik spreek Hebreeuws.', 'Tot straks!'], a: 0 },
        { t: 'cloze', q: 'Sorry, ik ___ het niet.', a: ['begrijp'], en: 'Sorry, I don’t understand.' },
        { t: 'cloze', q: 'Ik spreek een ___ Nederlands.', a: ['beetje'], en: 'I speak a little Dutch.' },
        { t: 'order', nl: 'Spreek je Engels?', en: 'Do you speak English?' },
        { t: 'order', nl: 'Ik leer elke dag Nederlands.', en: 'I learn Dutch every day.', alt: ['Elke dag leer ik Nederlands.'] },
        { t: 'tr', en: 'Do you speak Hebrew?', a: ['Spreek je Hebreeuws?', 'Spreek jij Hebreeuws?', 'Spreekt u Hebreeuws?'] },
        { t: 'mc', q: '“Wat betekent dat?” means…', o: ['What does that mean?', 'What is that?', 'Where is that?'], a: 0 },
      ],
    },

    {
      title: 'Questions & to be / to have',
      words: [
        ['zijn', 'to be', 'Ik ben moe. Ben jij ook moe?', 'I’m tired. Are you tired too?'],
        ['hebben', 'to have', 'Heb jij een kat?', 'Do you have a cat?'],
        ['wie', 'who', 'Wie is dat?', 'Who is that?'],
        ['wat', 'what', 'Wat doe je?', 'What are you doing?'],
        ['waar', 'where', 'Waar is de wc?', 'Where is the toilet?'],
        ['hoe oud', 'how old', 'Hoe oud ben je?', 'How old are you?'],
        ['leuk', 'nice, fun', 'Leuk je te ontmoeten!', 'Nice to meet you!'],
        ['welkom', 'welcome', 'Welkom in Nederland!', 'Welcome to the Netherlands!'],
      ],
      dialogue: {
        title: 'Lotte stelt vragen',
        intro: 'Lotte (10) has a lot of questions.',
        lines: [
          ['Lotte', 'Wie ben jij?', 'Who are you?'],
          ['Jij', 'Ik ben familie van je oma. Hoe heet jij?', 'I’m related to your grandma. What’s your name?'],
          ['Lotte', 'Ik heet Lotte. Ik ben tien. Hoe oud ben jij?', 'I’m Lotte. I’m ten. How old are you?'],
          ['Jij', 'Ik ben al heel oud!', 'I’m already very old!'],
          ['Lotte', 'Haha. Heb jij een hond?', 'Haha. Do you have a dog?'],
          ['Jij', 'Nee, maar ik heb een kat.', 'No, but I have a cat.'],
          ['Lotte', 'Wij hebben ook een kat!', 'We have a cat too!'],
        ],
      },
      notesTitle: 'zijn and hebben',
      notes: `
<table>
<tr><th>zijn (to be)</th><th>hebben (to have)</th></tr>
<tr><td>ik ben</td><td>ik heb</td></tr>
<tr><td>jij bent · <i>ben jij?</i></td><td>jij hebt · <i>heb jij?</i></td></tr>
<tr><td>u bent</td><td>u hebt / heeft</td></tr>
<tr><td>hij/zij/het is</td><td>hij/zij/het heeft</td></tr>
<tr><td>wij/jullie/zij zijn</td><td>wij/jullie/zij hebben</td></tr>
</table>
<p>Ages use <i>zijn</i>: <i>Ik ben tien (jaar).</i> — not “I have ten years”.</p>`,
      ex: [
        { t: 'cloze', q: 'Ik ___ moe.', a: ['ben'], en: 'I’m tired.' },
        { t: 'cloze', q: '___ jij een kat?', a: ['Heb'], en: 'Do you have a cat?' },
        { t: 'cloze', q: 'Zij ___ mijn tante.', a: ['is'], en: 'She is my aunt.' },
        { t: 'cloze', q: 'Wij ___ een hond.', a: ['hebben'], en: 'We have a dog.' },
        { t: 'cloze', q: 'Jullie ___ welkom!', a: ['zijn'], en: 'You (all) are welcome!' },
        { t: 'mc', q: 'Which is correct?', o: ['Ben jij moe?', 'Bent jij moe?'], a: 0, x: 'When jij/je comes after the verb, the -t drops.' },
        { t: 'mc', q: 'Formal: “Do you have time?”', o: ['Heeft u tijd?', 'Heb u tijd?', 'Hebben u tijd?'], a: 0, x: 'With u, both “hebt” and “heeft” are correct.' },
        { t: 'tr', en: 'How old are you?', a: ['Hoe oud ben je?', 'Hoe oud ben jij?', 'Hoe oud bent u?'] },
      ],
    },
  ],

  input: [
    { ref: 'super-easy', task: 'Watch one or two episodes. Turn on Dutch subtitles and write down every greeting you hear.' },
    { ref: 'bart-lessons', task: 'Watch lesson 1 (“Introduce yourself”). Pause after each sentence and repeat it out loud.' },
    { ref: 'fexingo', task: 'Find the episode about introducing yourself (“name basics”) and listen twice — once while doing something else, once with full attention.' },
  ],

  test: [
    { t: 'cloze', q: 'Hoe ___ jij? — Ik heet Lotte.', a: ['heet'], en: 'What’s your name? — I’m Lotte.' },
    { t: 'cloze', q: 'Zij ___ tien jaar.', a: ['is'], en: 'She is ten years old.' },
    { t: 'cloze', q: '___ jij Engels?', a: ['Spreek'], en: 'Do you speak English?' },
    { t: 'mc', q: 'Someone hands you a coffee and says “Alsjeblieft”. You say:', o: ['Dank je wel!', 'Graag gedaan!', 'Doei!'], a: 0 },
    { t: 'mc', q: 'You leave a party and will see your cousin again tonight:', o: ['Tot straks!', 'Goedemorgen!', 'Welkom!'], a: 0 },
    { t: 'tr', en: 'I don’t understand.', a: ['Ik begrijp het niet.', 'Sorry, ik begrijp het niet.', 'Ik snap het niet.'] },
    { t: 'order', nl: 'Waar kom je vandaan?', en: 'Where are you from?' },
    { t: 'dict', nl: 'Leuk je te ontmoeten!', en: 'Nice to meet you!' },
  ],
});
