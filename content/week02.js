DY.addWeek({
  n: 2,
  title: 'Mijn familie',
  level: 'A1',
  cando: [
    'Name family members and explain who is who',
    'Use my, your, his, her, our, their',
    'Count to 100 and say ages',
    'Understand a phone number read aloud',
    'Conjugate regular verbs in the present tense',
  ],

  grammar: {
    title: 'Present tense of regular verbs + possessives',
    html: `
<p>Find the <b>stem</b>: take the infinitive and remove <i>-en</i>. Then add endings:</p>
<table>
<tr><th>werken (to work)</th><th></th></tr>
<tr><td>ik</td><td><b>werk</b> (stem)</td></tr>
<tr><td>jij / u / hij / zij / het</td><td><b>werkt</b> (stem + t)</td></tr>
<tr><td>werk jij? (question)</td><td>stem — the t drops</td></tr>
<tr><td>wij / jullie / zij</td><td><b>werken</b> (= infinitive)</td></tr>
</table>
<h3>Spelling rules for the stem</h3>
<ul>
<li><b>Keep the long vowel:</b> <i>wonen → ik woon</i>, <i>maken → ik maak</i>, <i>spreken → ik spreek</i>. (A long vowel in a closed syllable is written double.)</li>
<li><b>No double consonant at the end:</b> <i>zitten → ik zit</i>, <i>leggen → ik leg</i>.</li>
<li><b>v → f, z → s:</b> <i>leven → ik leef</i>, <i>reizen → ik reis</i>.</li>
<li><b>Stem already ends in -t?</b> No extra t: <i>zitten → hij zit</i>, <i>praten → hij praat</i>.</li>
</ul>
<h3>Possessives</h3>
<table>
<tr><td>my</td><td><b>mijn</b></td><td>our</td><td><b>ons</b> (het-words) / <b>onze</b> (de-words, plurals)</td></tr>
<tr><td>your</td><td><b>jouw</b> / <b>je</b></td><td>your (pl.)</td><td><b>jullie</b></td></tr>
<tr><td>your (formal)</td><td><b>uw</b></td><td>their</td><td><b>hun</b></td></tr>
<tr><td>his</td><td><b>zijn</b></td><td>her</td><td><b>haar</b></td></tr>
</table>
<p><i>ons huis</i> (het huis) · <i>onze tuin</i> (de tuin) · <i>onze kinderen</i> (plural)</p>
<h3>Numbers 13–100</h3>
<p>13 dertien · 14 veertien · 15 vijftien · 16 zestien · 17 zeventien · 18 achttien · 19 negentien<br>
20 twintig · 30 dertig · 40 veertig · 50 vijftig · 60 zestig · 70 zeventig · 80 tachtig · 90 negentig · 100 honderd</p>
<div class="tip"><b>Units first!</b> 45 = <i>vijfenveertig</i> (“five-and-forty”). 21 = <i>eenentwintig</i>, 72 = <i>tweeënzeventig</i> (the dots on ë show a new syllable).</div>`,
  },

  culture: {
    title: 'The birthday calendar on the toilet door',
    html: `
<p>Open the toilet door in almost any Dutch home and you’ll find a <b>verjaardagskalender</b>: a calendar with everyone’s birthdays — no year, just day and month. It’s practical (everyone visits the toilet!) and very Dutch.</p>
<p><b>Family time:</b> dinner is early — usually around <b>18:00</b> — and the whole family eats together. Dropping in unannounced is unusual; even family members often plan visits ahead in their <i>agenda</i>.</p>
<p><b>Gezin vs. familie:</b> your <i>gezin</i> is the household (parents and children); your <i>familie</i> is everyone — aunts, cousins, grandparents.</p>`,
  },

  days: [
    {
      title: 'My family',
      words: [
        ['de familie', 'family (relatives)', 'Ik heb een grote familie.', 'I have a big family.', { note: 'All relatives: aunts, cousins, grandparents…' }],
        ['het gezin', 'family (household)', 'Ons gezin is klein: twee ouders en een kind.', 'Our family is small: two parents and one child.', { note: 'Parents + their children living together.' }],
        ['de moeder', 'mother', 'Mijn moeder woont in Jeruzalem.', 'My mother lives in Jerusalem.', { pl: 'moeders' }],
        ['de vader', 'father', 'Mijn vader werkt nog.', 'My father still works.', { pl: 'vaders' }],
        ['de ouders', 'parents', 'Mijn ouders wonen in Israël.', 'My parents live in Israel.'],
        ['de broer', 'brother', 'Ik heb een broer en twee zussen.', 'I have a brother and two sisters.', { pl: 'broers' }],
        ['de zus', 'sister', 'Mijn zus heeft drie kinderen.', 'My sister has three children.', { pl: 'zussen' }],
        ['het kind', 'child', 'Hoeveel kinderen heb je?', 'How many children do you have?', { pl: 'kinderen' }],
      ],
      dialogue: {
        title: 'Foto’s kijken',
        intro: 'Ria shows you photos on her tablet.',
        lines: [
          ['Ria', 'Kijk, dit is mijn gezin.', 'Look, this is my family.'],
          ['Jij', 'Wie is dat?', 'Who is that?'],
          ['Ria', 'Dat is Ingrid, mijn dochter. En dat zijn haar kinderen.', 'That’s Ingrid, my daughter. And those are her children.'],
          ['Jij', 'Hoeveel kinderen heeft ze?', 'How many children does she have?'],
          ['Ria', 'Twee: Daan en Lotte.', 'Two: Daan and Lotte.'],
          ['Jij', 'En heb je ook een zoon?', 'And do you also have a son?'],
          ['Ria', 'Ja, Mark. Hij woont in Amsterdam.', 'Yes, Mark. He lives in Amsterdam.'],
        ],
      },
      notesTitle: 'Present tense: ik woon, jij woont',
      notes: `
<p>Regular verbs follow one pattern. Take the stem (infinitive minus <i>-en</i>):</p>
<ul>
<li><i>ik woon</i> — stem</li>
<li><i>jij woont, hij woont, zij woont</i> — stem + t</li>
<li><i>woon jij?</i> — in a question the t drops</li>
<li><i>wij wonen, jullie wonen, zij wonen</i> — same as the infinitive</li>
</ul>
<p>Pointing at people: <i>dit is / dat is</i> (one person), <i>dit zijn / dat zijn</i> (more people).</p>`,
      ex: [
        { t: 'mc', q: '“Het gezin” is…', o: ['parents and their children (the household)', 'all your relatives', 'the neighbours'], a: 0 },
        { t: 'cloze', q: 'Ik heb een broer en twee ___.', a: ['zussen'], en: 'I have a brother and two sisters.' },
        { t: 'cloze', q: 'Mark ___ in Amsterdam. (wonen)', a: ['woont'], en: 'Mark lives in Amsterdam.' },
        { t: 'cloze', q: '___ jij in Haifa? (wonen)', a: ['Woon'], en: 'Do you live in Haifa?', x: 'jij after the verb → no -t.' },
        { t: 'mc', q: 'One child, two…', o: ['kinderen', 'kinds', 'kinden'], a: 0 },
        { t: 'order', nl: 'Dat zijn haar kinderen.', en: 'Those are her children.' },
        { t: 'tr', en: 'My parents live in Israel.', a: ['Mijn ouders wonen in Israël.'] },
      ],
    },

    {
      title: 'Who is who?',
      words: [
        ['de oma', 'grandma', 'Oma woont in Zwolle.', 'Grandma lives in Zwolle.', { pl: 'oma’s' }],
        ['de opa', 'grandpa', 'Opa leest de krant.', 'Grandpa is reading the newspaper.', { pl: 'opa’s' }],
        ['de tante', 'aunt', 'Mijn tante heet Ria.', 'My aunt is called Ria.', { pl: 'tantes' }],
        ['de oom', 'uncle', 'Oom Kees is erg grappig.', 'Uncle Kees is very funny.', { pl: 'ooms' }],
        ['de neef', 'nephew; male cousin', 'Daan is mijn neef.', 'Daan is my nephew / cousin.', { pl: 'neven', note: 'Neef means both nephew and (male) cousin!' }],
        ['de nicht', 'niece; female cousin', 'Lotte is mijn nicht.', 'Lotte is my niece / cousin.', { pl: 'nichten', note: 'Nicht means both niece and (female) cousin.' }],
        ['de zoon', 'son', 'Haar zoon studeert in Utrecht.', 'Her son studies in Utrecht.', { pl: 'zonen' }],
        ['de dochter', 'daughter', 'Ingrid is de dochter van Ria.', 'Ingrid is Ria’s daughter.', { pl: 'dochters' }],
      ],
      dialogue: {
        title: 'Wie is wie?',
        intro: 'Lotte explains the family to you.',
        lines: [
          ['Lotte', 'Kees is mijn opa en Ria is mijn oma.', 'Kees is my grandpa and Ria is my grandma.'],
          ['Jij', 'En Mark?', 'And Mark?'],
          ['Lotte', 'Mark is mijn oom. Hij is de broer van mama.', 'Mark is my uncle. He’s mum’s brother.'],
          ['Jij', 'Heeft Mark kinderen?', 'Does Mark have children?'],
          ['Lotte', 'Ja, een dochter. Ze heet Noor. Ze is mijn nicht.', 'Yes, a daughter. Her name is Noor. She’s my cousin.'],
          ['Jij', 'En ik? Wat ben ik?', 'And me? What am I?'],
          ['Lotte', 'Jij bent… ook familie!', 'You are… family too!'],
        ],
      },
      notesTitle: 'Saying whose: “de broer van mama”',
      notes: `
<p>The everyday way to show possession is <i>van</i>: <i>de broer van mama</i> (mum’s brother), <i>de dochter van Ria</i> (Ria’s daughter).</p>
<p>With names you can also use <i>-s</i> without an apostrophe: <i>Ria<b>s</b> dochter</i>. After a vowel, add <i>’s</i>: <i>oma’s huis</i>.</p>
<div class="tip"><i>neef</i> and <i>nicht</i> each have two meanings: cousin <b>and</b> nephew/niece. Context tells you which.</div>`,
      ex: [
        { t: 'mc', q: 'Your aunt’s son is your…', o: ['neef', 'nicht', 'oom'], a: 0 },
        { t: 'mc', q: 'Your brother’s daughter is your…', o: ['nicht', 'neef', 'tante'], a: 0 },
        { t: 'cloze', q: 'Mark is de ___ van mama.', a: ['broer'], en: 'Mark is mum’s brother.' },
        { t: 'cloze', q: 'Opa en ___ wonen in Zwolle.', a: ['oma'], en: 'Grandpa and grandma live in Zwolle.' },
        { t: 'cloze', q: 'Haar zoon ___ in Utrecht. (studeren)', a: ['studeert'], en: 'Her son studies in Utrecht.' },
        { t: 'order', nl: 'Hij is de broer van mama.', en: 'He is mum’s brother.' },
        { t: 'tr', en: 'Lotte is my niece.', a: ['Lotte is mijn nicht.'] },
      ],
    },

    {
      title: 'My, your, our',
      words: [
        ['de man', 'man; husband', 'Kees is de man van Ria.', 'Kees is Ria’s husband.', { pl: 'mannen' }],
        ['de vrouw', 'woman; wife', 'Ria is de vrouw van Kees.', 'Ria is Kees’s wife.', { pl: 'vrouwen' }],
        ['getrouwd', 'married', 'Zijn jullie getrouwd?', 'Are you married?'],
        ['mijn', 'my', 'Mijn zus woont in Eilat.', 'My sister lives in Eilat.'],
        ['jouw', 'your (stressed)', 'Is dat jouw telefoon?', 'Is that your phone?', { note: 'Unstressed form: je. “Is dat je telefoon?”' }],
        ['zijn', 'his', 'Daan zoekt zijn telefoon.', 'Daan is looking for his phone.', { id: 'zijn-his' }],
        ['haar', 'her', 'Lotte speelt met haar kat.', 'Lotte is playing with her cat.'],
        ['ons / onze', 'our', 'Ons huis is klein, maar onze tuin is groot.', 'Our house is small, but our garden is big.', { note: 'ons + het-word, onze + de-word or plural.' }],
        ['hun', 'their', 'Hun kinderen zijn al groot.', 'Their children are already grown up.'],
      ],
      dialogue: {
        title: 'Ben je getrouwd?',
        intro: 'Ingrid asks about your life.',
        lines: [
          ['Ingrid', 'Ben je getrouwd?', 'Are you married?'],
          ['Jij', 'Ja, al twintig jaar.', 'Yes, for twenty years now.'],
          ['Ingrid', 'Wat leuk! Hebben jullie kinderen?', 'How nice! Do you have children?'],
          ['Jij', 'Ja, twee. Onze zoon is achttien en onze dochter is vijftien.', 'Yes, two. Our son is eighteen and our daughter is fifteen.'],
          ['Ingrid', 'Mijn kinderen zijn ook al groot. Daan is al zestien!', 'My kids are already big too. Daan is already sixteen!'],
          ['Jij', 'En jouw man?', 'And your husband?'],
          ['Ingrid', 'Hij heet Erik. Hij werkt veel.', 'His name is Erik. He works a lot.'],
        ],
      },
      notesTitle: 'Possessives',
      notes: `
<table>
<tr><td>mijn</td><td>my</td><td>ons / onze</td><td>our</td></tr>
<tr><td>jouw / je</td><td>your</td><td>jullie</td><td>your (pl.)</td></tr>
<tr><td>uw</td><td>your (formal)</td><td>hun</td><td>their</td></tr>
<tr><td>zijn</td><td>his</td><td>haar</td><td>her</td></tr>
</table>
<p><b>ons or onze?</b> <i>ons</i> before a singular het-word (<i>ons huis</i>), <i>onze</i> before a de-word or any plural (<i>onze tuin, onze kinderen</i>).</p>`,
      ex: [
        { t: 'cloze', q: 'Kees is de ___ van Ria.', a: ['man'], en: 'Kees is Ria’s husband.' },
        { t: 'cloze', q: 'Dit is ___ huis.', a: ['ons'], en: 'This is our house. (het huis)' },
        { t: 'cloze', q: '___ kinderen zijn groot.', a: ['Onze'], en: 'Our children are grown up.' },
        { t: 'mc', q: 'Ria and Kees say about themselves: “___ dochter heet Ingrid.”', o: ['Onze', 'Ons', 'Hun'], a: 0, x: 'They talk about themselves → our. Dochter is a de-word → onze.' },
        { t: 'mc', q: 'Ingrid talks about Erik: “Dat is ___ man.”', o: ['mijn', 'haar', 'hun'], a: 0 },
        { t: 'mc', q: 'About Lotte: “Ze speelt met ___ kat.”', o: ['haar', 'zijn', 'hun'], a: 0 },
        { t: 'tr', en: 'Are you married?', a: ['Ben je getrouwd?', 'Ben jij getrouwd?', 'Bent u getrouwd?', 'Zijn jullie getrouwd?'] },
      ],
    },

    {
      title: 'Numbers 1–8',
      words: [
        ['één', 'one', 'Ik heb één broer.', 'I have one brother.', { note: 'Written één (with accents) when it means the number, to tell it apart from een (a/an).' }],
        ['twee', 'two', 'Ik heb twee zussen.', 'I have two sisters.'],
        ['drie', 'three', 'Drie koffie, graag!', 'Three coffees, please!'],
        ['vier', 'four', 'We zijn met z’n vieren.', 'There are four of us.'],
        ['vijf', 'five', 'Het is vijf uur.', 'It’s five o’clock.'],
        ['zes', 'six', 'In Nederland eten we om zes uur.', 'In the Netherlands we eat at six.'],
        ['zeven', 'seven', 'Een week heeft zeven dagen.', 'A week has seven days.'],
        ['acht', 'eight', 'Lotte gaat om acht uur naar bed.', 'Lotte goes to bed at eight.'],
      ],
      dialogue: {
        title: 'Wat is je nummer?',
        intro: 'Daan wants your phone number.',
        lines: [
          ['Daan', 'Wat is je nummer? Dan app ik je.', 'What’s your number? Then I’ll message you.'],
          ['Jij', 'Nul, vijf, vier… drie, twee, acht…', 'Zero, five, four… three, two, eight…'],
          ['Daan', 'Langzaam! Nul, vijf, vier…', 'Slowly! Zero, five, four…'],
          ['Jij', 'Drie, twee, acht, zeven, één, zes, vier.', 'Three, two, eight, seven, one, six, four.'],
          ['Daan', 'Top! Ik app je straks.', 'Great! I’ll message you later.'],
        ],
      },
      notesTitle: 'een or één?',
      notes: `
<p><i>een</i> (pronounced like “un”) = a/an: <i>een broer</i> — a brother.<br>
<i>één</i> (pronounced “ayn”) = one: <i>één broer</i> — one brother (not two).</p>
<p><b>nul</b> = zero. Phone numbers are read digit by digit or in pairs.</p>
<p><i>appen</i> = to send a WhatsApp message: <i>Ik app je!</i></p>`,
      ex: [
        { t: 'num', n: 4 },
        { t: 'num', n: 7 },
        { t: 'num', n: 3 },
        { t: 'num', n: 8 },
        { t: 'mc', q: 'Which means “one” (the number)?', o: ['één', 'een'], a: 0 },
        { t: 'cloze', q: 'Een week heeft ___ dagen.', a: ['zeven'], en: 'A week has seven days.' },
        { t: 'cloze', q: 'Ik ___ in Tel Aviv. (werken)', a: ['werk'], en: 'I work in Tel Aviv.' },
        { t: 'cloze', q: 'Ingrid ___ veel. (werken)', a: ['werkt'], en: 'Ingrid works a lot.' },
      ],
    },

    {
      title: 'Ages & numbers to 100',
      words: [
        ['negen', 'nine', 'Ik begin om negen uur.', 'I start at nine.'],
        ['tien', 'ten', 'Lotte is tien jaar.', 'Lotte is ten years old.'],
        ['elf', 'eleven', 'Een voetbalteam heeft elf spelers.', 'A football team has eleven players.'],
        ['twaalf', 'twelve', 'Om twaalf uur eten we een boterham.', 'At twelve we eat a sandwich.'],
        ['twintig', 'twenty', 'Mijn neef is twintig.', 'My cousin is twenty.'],
        ['honderd', 'hundred', 'Opa wordt honderd!', 'Grandpa is turning a hundred!'],
        ['het jaar', 'year', 'Ik woon al tien jaar in Haifa.', 'I’ve lived in Haifa for ten years.', { pl: 'jaren', note: 'After a number use the singular: tien jaar, not tien jaren.' }],
        ['oud', 'old', 'Hoe oud is je moeder?', 'How old is your mother?'],
        ['jong', 'young', 'Je bent nog jong!', 'You’re still young!'],
      ],
      dialogue: {
        title: 'Hoe oud is opa?',
        intro: 'At the dinner table.',
        lines: [
          ['Lotte', 'Hoe oud is opa?', 'How old is grandpa?'],
          ['Ria', 'Opa is vijfenzeventig.', 'Grandpa is seventy-five.'],
          ['Lotte', 'En hoe oud ben jij, oma?', 'And how old are you, grandma?'],
          ['Ria', 'Dat is geheim!', 'That’s a secret!'],
          ['Kees', 'Oma is tweeënzeventig.', 'Grandma is seventy-two.'],
          ['Ria', 'Kees!', 'Kees!'],
          ['Lotte', 'Haha. Jullie zijn allebei oud!', 'Haha. You’re both old!'],
        ],
      },
      notesTitle: 'Numbers 13–100',
      notes: `
<p>13 dertien · 14 veertien · 15 vijftien · 16 zestien · 17 zeventien · 18 achttien · 19 negentien</p>
<p>20 twintig · 30 dertig · 40 veertig · 50 vijftig · 60 zestig · 70 zeventig · 80 tachtig · 90 negentig</p>
<div class="tip"><b>Units come first:</b> 45 = <i>vijf-en-veertig</i>, 38 = <i>acht-en-dertig</i>, 72 = <i>twee-ën-zeventig</i>. Written as one word.</div>
<p>Ages: <i>Ik ben vijfenveertig (jaar).</i> — <i>jaar</i> stays singular after a number.</p>`,
      ex: [
        { t: 'num', n: 12 },
        { t: 'num', n: 20 },
        { t: 'num', n: 45 },
        { t: 'num', n: 72 },
        { t: 'num', n: 19 },
        { t: 'mc', q: '“vijfenveertig” is…', o: ['45', '54', '405'], a: 0, x: 'Units first: vijf (5) en veertig (40).' },
        { t: 'cloze', q: 'Lotte is tien ___.', a: ['jaar'], en: 'Lotte is ten years old.', x: 'After a number: jaar (singular).' },
        { t: 'cloze', q: 'Wij ___ Nederlands. (leren)', a: ['leren'], en: 'We are learning Dutch.' },
        { t: 'tr', en: 'How old is your mother?', a: ['Hoe oud is je moeder?', 'Hoe oud is jouw moeder?'] },
      ],
    },
  ],

  input: [
    { ref: 'super-easy', task: 'Watch an episode and listen for numbers (prices, ages, times). Write down every number you catch.' },
    { ref: 'fexingo', task: 'Listen to the numbers episodes (“Dutch Numbers 1 to 5” and the next ones). Count along out loud.' },
    { ref: 'bart-verbs', task: 'Practise 5 regular verbs (e.g. wonen, werken, leren, spreken, maken) in the conjugation trainer.' },
  ],

  test: [
    { t: 'mc', q: 'Your uncle’s daughter is your…', o: ['nicht', 'neef', 'tante'], a: 0 },
    { t: 'cloze', q: 'Mark ___ in Amsterdam. (wonen)', a: ['woont'], en: 'Mark lives in Amsterdam.' },
    { t: 'cloze', q: '___ jij Engels? (spreken)', a: ['Spreek'], en: 'Do you speak English?' },
    { t: 'cloze', q: 'Dit is ___ huis.', a: ['ons'], en: 'This is our house.' },
    { t: 'num', n: 64 },
    { t: 'num', n: 17 },
    { t: 'tr', en: 'I have two sisters.', a: ['Ik heb twee zussen.'] },
    { t: 'dict', nl: 'Mijn ouders wonen in Israël.', en: 'My parents live in Israel.' },
    { t: 'order', nl: 'Hoeveel kinderen heeft ze?', en: 'How many children does she have?' },
  ],
});
