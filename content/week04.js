DY.addWeek({
  n: 4,
  title: 'Aan tafel',
  level: 'A1 → A2',
  cando: [
    'Name common food and drinks',
    'Accept and refuse food politely at the table',
    'Say what I like, love and prefer',
    'Put the verb in second place — even when the sentence starts with a time',
    'Make yes/no questions and choose between niet and geen',
  ],

  grammar: {
    title: 'Word order (verb second) + niet & geen',
    html: `
<h3>The verb is always in 2nd place</h3>
<p>In a normal Dutch sentence the conjugated verb is the <b>second element</b> — no matter what comes first.</p>
<table>
<tr><th>1</th><th>2 (verb)</th><th>rest</th></tr>
<tr><td>Ik</td><td><b>eet</b></td><td>vanavond stamppot.</td></tr>
<tr><td>Vanavond</td><td><b>eet</b></td><td>ik stamppot.</td></tr>
<tr><td>Stamppot</td><td><b>eet</b></td><td>ik vanavond.</td></tr>
</table>
<div class="tip">If something other than the subject comes first (a time, a place, an object), the subject moves to <b>after</b> the verb. This is called <b>inversion</b>: <i>Op zaterdag <b>eten we</b> pannenkoeken.</i> — never “Op zaterdag we eten”.</div>
<h3>Questions</h3>
<ul>
<li><b>Yes/no question:</b> the verb goes first. <i>Eet je vlees?</i> <i>Heb je honger?</i></li>
<li><b>Question word:</b> question word + verb. <i>Wat eet je?</i> <i>Waar woon je?</i></li>
<li>Remember: <i>jij/je</i> after the verb → no -t: <i>Drink je koffie?</i></li>
</ul>
<h3>niet or geen?</h3>
<ul>
<li><b>geen</b> = “no / not a / not any”. Use it with a noun that would have <i>een</i> or no article: <i>Ik heb een hond → Ik heb <b>geen</b> hond.</i> <i>Ik eet vlees → Ik eet <b>geen</b> vlees.</i></li>
<li><b>niet</b> for everything else: verbs, adjectives, places, nouns with de/het/mijn…:
<i>Ik eet <b>niet</b>.</i> <i>De soep is <b>niet</b> warm.</i> <i>Ik woon <b>niet</b> in Amsterdam.</i> <i>Ik eet de soep <b>niet</b>.</i></li>
</ul>
<p><b>Where does niet go?</b> Usually at the end, but <b>before</b> an adjective, a place/preposition or a second verb: <i>Het is niet lekker. Ik ga niet naar huis. Ik kan niet koken.</i></p>
<h3>Liking things</h3>
<p><i>Ik drink <b>graag</b> thee.</i> (I like drinking tea.) · <i>Ik drink <b>liever</b> koffie.</i> (I prefer coffee.) · <i>Ik <b>hou van</b> kaas.</i> (I love cheese.)</p>`,
  },

  culture: {
    title: 'The Dutch table',
    html: `
<p><b>Lunch is bread:</b> most Dutch people eat <i>boterhammen</i> (slices of bread) for lunch — with cheese, ham, peanut butter or <i>hagelslag</i> (chocolate sprinkles). Yes, adults eat sprinkles too.</p>
<p><b>Dinner at six:</b> the warm meal is in the evening, early, and everyone eats together. Classic winter food: <i>stamppot</i> (mashed potatoes with vegetables) with a smoked sausage.</p>
<p><b>Eet smakelijk!</b> Wait until everyone has food, then someone says <i>Eet smakelijk!</i> and everyone starts. Saying it back is polite.</p>
<p><b>Coffee and one biscuit:</b> the famous stereotype — the tin opens, you take <b>one</b> biscuit, the tin closes. In many families it’s more relaxed now, but take one and wait to be offered another.</p>
<p><b>Compliment the cook:</b> <i>Het was heerlijk!</i> (It was delicious!) is always welcome.</p>`,
  },

  days: [
    {
      title: 'Drinks',
      words: [
        ['de koffie', 'coffee', 'Wil je koffie?', 'Would you like coffee?'],
        ['de thee', 'tea', 'Ik drink thee zonder suiker.', 'I drink tea without sugar.'],
        ['het water', 'water', 'Een glas water, graag.', 'A glass of water, please.'],
        ['de melk', 'milk', 'Koffie met melk, graag.', 'Coffee with milk, please.'],
        ['het bier', 'beer', 'Kees drinkt graag een biertje.', 'Kees likes to have a beer.', { note: 'biertje = a (small) beer. Diminutives are everywhere in Dutch.' }],
        ['de wijn', 'wine', 'Rode of witte wijn?', 'Red or white wine?'],
        ['het sap', 'juice', 'Lotte drinkt appelsap.', 'Lotte drinks apple juice.'],
        ['drinken', 'to drink', 'Wat wil je drinken?', 'What would you like to drink?'],
      ],
      dialogue: {
        title: 'Koffie?',
        intro: 'Ria offers you something to drink.',
        lines: [
          ['Ria', 'Wil je koffie of thee?', 'Would you like coffee or tea?'],
          ['Jij', 'Koffie, graag.', 'Coffee, please.'],
          ['Ria', 'Met melk en suiker?', 'With milk and sugar?'],
          ['Jij', 'Alleen melk, graag.', 'Just milk, please.'],
          ['Ria', 'Alsjeblieft. En een koekje?', 'Here you go. And a biscuit?'],
          ['Jij', 'Lekker, dank je!', 'Lovely, thanks!'],
          ['Ria', 'Kees, wil jij ook koffie?', 'Kees, would you like coffee too?'],
          ['Kees', 'Nee, ik heb al thee.', 'No, I already have tea.'],
        ],
      },
      notesTitle: 'Asking and answering politely',
      notes: `
<ul>
<li><i>Wil je …?</i> = Would you like …? (literally “Do you want …?” — perfectly polite in Dutch)</li>
<li><i>… graag.</i> = … please. <i>Koffie, graag.</i> <i>Ja, graag!</i> (Yes, please!)</li>
<li><i>Nee, dank je.</i> = No, thank you.</li>
<li><i>liever</i> = rather: <i>Liever thee, graag.</i> (I’d rather have tea, please.)</li>
</ul>`,
      ex: [
        { t: 'mc', q: 'Ria: “Wil je koffie?” You’d prefer tea:', o: ['Nee, liever thee, graag.', 'Ja, tot ziens.', 'Graag gedaan.'], a: 0, x: 'liever = rather.' },
        { t: 'cloze', q: 'Koffie met ___, graag.', a: ['melk'], en: 'Coffee with milk, please.' },
        { t: 'cloze', q: 'Wat wil je ___?', a: ['drinken'], en: 'What would you like to drink?' },
        { t: 'dehet', w: 'water', a: 'het' },
        { t: 'dehet', w: 'koffie', a: 'de' },
        { t: 'dehet', w: 'biertje', a: 'het', x: 'Ends in -je → het.' },
        { t: 'tr', en: 'A glass of water, please.', a: ['Een glas water, graag.', 'Een glas water, alsjeblieft.', 'Mag ik een glas water?'] },
      ],
    },

    {
      title: 'Food',
      words: [
        ['het brood', 'bread', 'We eten brood met kaas.', 'We eat bread with cheese.'],
        ['de kaas', 'cheese', 'Nederlandse kaas is beroemd.', 'Dutch cheese is famous.'],
        ['de boter', 'butter', 'Brood met boter en hagelslag.', 'Bread with butter and chocolate sprinkles.'],
        ['het ei', 'egg', 'Op zondag eten we een gekookt ei.', 'On Sunday we eat a boiled egg.', { pl: 'eieren' }],
        ['de appel', 'apple', 'Lotte eet een appel.', 'Lotte is eating an apple.', { pl: 'appels' }],
        ['de groente', 'vegetable(s)', 'Eet je groente!', 'Eat your vegetables!', { pl: 'groenten' }],
        ['het vlees', 'meat', 'Ik eet niet veel vlees.', 'I don’t eat much meat.'],
        ['eten', 'to eat; food', 'Wat eten we vanavond?', 'What are we eating tonight?', { note: 'het eten = the food / the meal.' }],
      ],
      dialogue: {
        title: 'In de supermarkt',
        intro: 'Shopping with Ingrid and Lotte.',
        lines: [
          ['Ingrid', 'We hebben brood, kaas en eieren.', 'We have bread, cheese and eggs.'],
          ['Jij', 'En groente?', 'And vegetables?'],
          ['Ingrid', 'Ja, broccoli en wortels. Eet je vlees?', 'Yes, broccoli and carrots. Do you eat meat?'],
          ['Jij', 'Ja, maar niet veel.', 'Yes, but not much.'],
          ['Ingrid', 'Prima. Lotte, pak jij de appels?', 'Fine. Lotte, will you grab the apples?'],
          ['Lotte', 'Mag ik ook hagelslag?', 'Can I have sprinkles too?'],
          ['Ingrid', 'We hebben nog hagelslag thuis!', 'We still have sprinkles at home!'],
        ],
      },
      notesTitle: 'niet or geen?',
      notes: `
<p><b>geen</b> replaces <i>een</i>, or goes before a noun without an article:</p>
<ul>
<li><i>Ik heb een appel. → Ik heb <b>geen</b> appel.</i></li>
<li><i>Ik eet vlees. → Ik eet <b>geen</b> vlees.</i></li>
</ul>
<p><b>niet</b> is used everywhere else:</p>
<ul>
<li><i>Het brood is <b>niet</b> vers.</i> (before an adjective)</li>
<li><i>Ik woon <b>niet</b> in Amsterdam.</i> (before a place)</li>
<li><i>Ik eet <b>niet</b> veel vlees.</i> (before “veel”)</li>
</ul>`,
      ex: [
        { t: 'mc', q: 'Ik eet ___ vlees.', o: ['geen', 'niet'], a: 0, x: 'Noun without an article → geen.' },
        { t: 'mc', q: 'Het brood is ___ vers.', o: ['niet', 'geen'], a: 0, x: 'Before an adjective → niet. (vers = fresh)' },
        { t: 'mc', q: 'Lotte eet ___ appel.', o: ['geen', 'niet'], a: 0, x: 'geen replaces een.' },
        { t: 'mc', q: 'Ik woon ___ in Amsterdam.', o: ['niet', 'geen'], a: 0, x: 'Before a place → niet.' },
        { t: 'cloze', q: 'Nederlandse ___ is beroemd.', a: ['kaas'], en: 'Dutch cheese is famous.' },
        { t: 'dehet', w: 'ei', a: 'het' },
        { t: 'dehet', w: 'brood', a: 'het' },
        { t: 'tr', en: 'I don’t eat meat.', a: ['Ik eet geen vlees.'] },
      ],
    },

    {
      title: 'Meals',
      words: [
        ['het ontbijt', 'breakfast', 'Het ontbijt is om acht uur.', 'Breakfast is at eight.'],
        ['de lunch', 'lunch', 'Voor de lunch eten we boterhammen.', 'For lunch we eat sandwiches.'],
        ['het avondeten', 'dinner', 'Het avondeten is om zes uur.', 'Dinner is at six.'],
        ['de boterham', 'slice of bread, sandwich', 'Ik neem twee boterhammen met kaas.', 'I’ll have two slices of bread with cheese.', { pl: 'boterhammen' }],
        ['de soep', 'soup', 'Pas op, de soep is heet!', 'Careful, the soup is hot!'],
        ['de aardappel', 'potato', 'Kees eet bijna elke dag aardappels.', 'Kees eats potatoes almost every day.', { pl: 'aardappels / aardappelen' }],
        ['het toetje', 'dessert', 'En als toetje: vla!', 'And for dessert: custard!', { note: 'vla = a Dutch custard dessert, eaten from a bowl.' }],
        ['koken', 'to cook', 'Wie kookt er vanavond?', 'Who’s cooking tonight?'],
      ],
      dialogue: {
        title: 'Wat eten we?',
        intro: 'Lotte wants to know what’s for dinner.',
        lines: [
          ['Lotte', 'Mama, wat eten we vanavond?', 'Mum, what are we eating tonight?'],
          ['Ingrid', 'Stamppot met worst.', 'Stamppot with sausage.'],
          ['Lotte', 'Jammer! Ik wil pannenkoeken!', 'Oh no! I want pancakes!'],
          ['Ingrid', 'Pannenkoeken eten we op zaterdag.', 'We eat pancakes on Saturday.'],
          ['Jij', 'Wat is stamppot?', 'What is stamppot?'],
          ['Daan', 'Aardappels met groente, alles door elkaar. Echt lekker!', 'Potatoes with vegetables, all mashed together. Really good!'],
          ['Jij', 'En wat is het toetje?', 'And what’s for dessert?'],
          ['Ingrid', 'Vla!', 'Custard!'],
        ],
      },
      notesTitle: 'The verb in second place',
      notes: `
<p>The conjugated verb is <b>always the second element</b> of a Dutch sentence:</p>
<table>
<tr><td>We</td><td><b>eten</b></td><td>vanavond stamppot.</td></tr>
<tr><td>Vanavond</td><td><b>eten</b></td><td>we stamppot.</td></tr>
<tr><td>Pannenkoeken</td><td><b>eten</b></td><td>we op zaterdag.</td></tr>
</table>
<div class="tip">Starting with a time word is very common in Dutch. When you do, flip the subject and verb: <i>Morgen <b>kook ik</b>.</i> — not “Morgen ik kook”.</div>`,
      ex: [
        { t: 'order', nl: 'Vanavond eten we stamppot.', en: 'Tonight we’re having stamppot.', alt: ['We eten vanavond stamppot.', 'Stamppot eten we vanavond.'] },
        { t: 'order', nl: 'Op zaterdag eten we pannenkoeken.', en: 'On Saturday we eat pancakes.', alt: ['We eten op zaterdag pannenkoeken.', 'Pannenkoeken eten we op zaterdag.'] },
        { t: 'mc', q: 'Which is correct?', o: ['Om zes uur eten we.', 'Om zes uur we eten.', 'Om zes uur wij eten we.'], a: 0, x: 'Time first → verb second, then the subject.' },
        { t: 'mc', q: 'Which is correct?', o: ['Morgen kook ik.', 'Morgen ik kook.'], a: 0 },
        { t: 'cloze', q: 'Wie ___ er vanavond?', a: ['kookt'], en: 'Who’s cooking tonight?' },
        { t: 'cloze', q: 'Voor de lunch ___ we boterhammen. (eten)', a: ['eten'], en: 'For lunch we eat sandwiches.' },
        { t: 'tr', en: 'Dinner is at six o’clock.', a: ['Het avondeten is om zes uur.', 'Het eten is om zes uur.', 'We eten om zes uur.', 'Om zes uur eten we.'] },
      ],
    },

    {
      title: 'At the table',
      words: [
        ['lekker', 'tasty, nice', 'Mmm, dit is lekker!', 'Mmm, this is tasty!', { note: 'Used for much more than food: lekker weer (nice weather), slaap lekker (sleep well).' }],
        ['Eet smakelijk!', 'Enjoy your meal!', 'Iedereen heeft eten? Eet smakelijk!', 'Has everyone got food? Enjoy your meal!'],
        ['Proost!', 'Cheers!', 'Op Ria! Proost!', 'To Ria! Cheers!'],
        ['honger hebben', 'to be hungry', 'Ik heb honger!', 'I’m hungry!'],
        ['dorst hebben', 'to be thirsty', 'Heb je dorst?', 'Are you thirsty?'],
        ['nog', 'more; still', 'Wil je nog wat?', 'Would you like some more?'],
        ['genoeg', 'enough', 'Nee, dank je, ik heb genoeg.', 'No thanks, I have enough.'],
        ['Ik zit vol.', 'I’m full.', 'Het was heerlijk, maar ik zit vol.', 'It was delicious, but I’m full.'],
        ['heerlijk', 'delicious, lovely', 'Wat heerlijk!', 'How lovely!'],
      ],
      dialogue: {
        title: 'Aan tafel',
        intro: 'Dinner with the whole family.',
        lines: [
          ['Ria', 'Iedereen heeft eten? Eet smakelijk!', 'Has everyone got food? Enjoy your meal!'],
          ['Iedereen', 'Eet smakelijk!', 'Enjoy your meal!'],
          ['Jij', 'Mmm, dit is heerlijk, Ria!', 'Mmm, this is delicious, Ria!'],
          ['Ria', 'Dank je! Wil je nog wat aardappels?', 'Thanks! Would you like some more potatoes?'],
          ['Jij', 'Ja, graag. Ik heb echt honger.', 'Yes, please. I’m really hungry.'],
          ['Kees', 'Proost! Op ons bezoek!', 'Cheers! To our guest!'],
          ['Ria', 'Nog een beetje?', 'A little more?'],
          ['Jij', 'Nee, dank je. Ik zit vol!', 'No, thank you. I’m full!'],
        ],
      },
      notesTitle: 'Table phrases',
      notes: `
<ul>
<li><i>Eet smakelijk!</i> — before eating. Everyone says it back.</li>
<li><i>Proost!</i> — when raising glasses. Look people in the eye!</li>
<li><i>Wil je nog wat?</i> — Would you like some more? <i>Ja, graag!</i> / <i>Nee, dank je, ik zit vol.</i></li>
<li><i>Ik heb honger / dorst.</i> — literally “I have hunger / thirst”.</li>
<li><i>Het was heerlijk!</i> — It was delicious! (to the cook, after the meal)</li>
</ul>`,
      ex: [
        { t: 'mc', q: 'Everyone sits down to eat. You say:', o: ['Eet smakelijk!', 'Proost!', 'Tot straks!'], a: 0 },
        { t: 'mc', q: 'Ria offers more food, but you’re full:', o: ['Nee, dank je, ik zit vol.', 'Ja, ik heb honger.', 'Graag gedaan.'], a: 0 },
        { t: 'cloze', q: 'Ik heb ___. Wat eten we?', a: ['honger'], en: 'I’m hungry. What are we eating?' },
        { t: 'cloze', q: 'Wil je ___ wat koffie?', a: ['nog'], en: 'Would you like some more coffee?' },
        { t: 'tr', en: 'This is delicious!', a: ['Dit is heerlijk!', 'Dit is lekker!', 'Dit is echt lekker!', 'Dit is echt heerlijk!', 'Wat lekker!', 'Wat heerlijk!'] },
        { t: 'order', nl: 'Wil je nog wat aardappels?', en: 'Would you like some more potatoes?' },
        { t: 'tr', en: 'Are you thirsty?', a: ['Heb je dorst?', 'Heb jij dorst?', 'Hebt u dorst?', 'Heeft u dorst?'] },
      ],
    },

    {
      title: 'What I like',
      words: [
        ['graag', 'gladly; like to', 'Ik drink graag thee.', 'I like drinking tea.', { note: 'verb + graag = like doing something.' }],
        ['houden van', 'to love, to be fond of', 'Ik hou van kaas!', 'I love cheese!', { note: 'Spoken: ik hou. Written formally: ik houd.' }],
        ['niet', 'not', 'De soep is niet warm.', 'The soup isn’t warm.'],
        ['geen', 'no, not a, not any', 'Ik heb geen honger.', 'I’m not hungry.'],
        ['willen', 'to want', 'Ik wil een appel.', 'I want an apple.', { note: 'ik wil, jij wilt (wil jij?), hij wil, wij willen' }],
        ['mogen', 'may, to be allowed', 'Mag ik nog een koekje?', 'May I have another biscuit?', { note: 'ik mag, jij mag, hij mag, wij mogen' }],
        ['liever', 'rather, prefer', 'Ik drink liever thee.', 'I prefer tea.'],
        ['het lievelingseten', 'favourite food', 'Wat is jouw lievelingseten?', 'What’s your favourite food?'],
        ['alles', 'everything', 'Ik eet alles.', 'I eat everything.'],
      ],
      dialogue: {
        title: 'Lievelingseten',
        intro: 'Lotte asks about your favourite food.',
        lines: [
          ['Lotte', 'Wat is jouw lievelingseten?', 'What’s your favourite food?'],
          ['Jij', 'Hummus! Ken je dat?', 'Hummus! Do you know it?'],
          ['Lotte', 'Ja! Ik hou van hummus. Maar ik eet geen olijven.', 'Yes! I love hummus. But I don’t eat olives.'],
          ['Jij', 'Ik eet alles, behalve spruitjes.', 'I eat everything, except Brussels sprouts.'],
          ['Daan', 'Spruitjes zijn vies!', 'Brussels sprouts are gross!'],
          ['Ria', 'Hé, spruitjes zijn gezond!', 'Hey, sprouts are healthy!'],
          ['Lotte', 'Mag ik nu een toetje?', 'Can I have dessert now?'],
        ],
      },
      notesTitle: 'Likes and questions',
      notes: `
<ul>
<li><i>Ik eet <b>graag</b> kaas.</i> — I like (eating) cheese.</li>
<li><i>Ik eet <b>liever</b> kaas.</i> — I prefer cheese.</li>
<li><i>Ik <b>hou van</b> kaas.</i> — I love cheese.</li>
</ul>
<p><b>Yes/no questions</b> start with the verb: <i>Drink je koffie?</i> <i>Wil je thee?</i> <i>Mag ik…?</i><br>
<b>Question words</b> come first, then the verb: <i>Wat wil je?</i> <i>Waar is de kaas?</i></p>`,
      ex: [
        { t: 'order', nl: 'Ik drink graag thee.', en: 'I like drinking tea.' },
        { t: 'order', nl: 'Drink je liever koffie?', en: 'Do you prefer coffee?' },
        { t: 'mc', q: 'Make a yes/no question with: je · drinken · koffie', o: ['Drink je koffie?', 'Drinkt je koffie?', 'Koffie je drinkt?'], a: 0, x: 'Verb first, and no -t before je. (In casual speech you’ll also hear “Je drinkt koffie?” with rising intonation.)' },
        { t: 'cloze', q: 'Ik ___ geen honger.', a: ['heb'], en: 'I’m not hungry.' },
        { t: 'cloze', q: '___ ik nog een koekje?', a: ['Mag'], en: 'May I have another biscuit?' },
        { t: 'cloze', q: 'Wat ___ je drinken?', a: ['wil'], en: 'What would you like to drink?', x: 'jij wilt → wil je? (the t drops).' },
        { t: 'tr', en: 'I love cheese!', a: ['Ik hou van kaas!', 'Ik houd van kaas!'] },
        { t: 'tr', en: 'I’m not hungry.', a: ['Ik heb geen honger.'] },
      ],
    },
  ],

  input: [
    { ref: 'super-easy', task: 'Find an episode about food (“eten”). List five foods people mention.' },
    { ref: 'easy-street', task: 'Watch the street interview about Dutch food or breakfast. Do people eat bread for lunch? What do they say?', url: 'https://www.youtube.com/results?search_query=easy+dutch+eten' },
    { ref: 'fexingo', task: 'Listen to the kitchen episodes (“Dutch Kitchen Verbs”). Repeat the verbs out loud.' },
  ],

  test: [
    { t: 'mc', q: 'Ik heb ___ honger.', o: ['geen', 'niet'], a: 0 },
    { t: 'mc', q: 'De soep is ___ warm.', o: ['niet', 'geen'], a: 0 },
    { t: 'order', nl: 'Vanavond eten we pannenkoeken.', en: 'Tonight we’re having pancakes.', alt: ['We eten vanavond pannenkoeken.', 'Pannenkoeken eten we vanavond.'] },
    { t: 'mc', q: 'Which question is correct?', o: ['Woon je in Haifa?', 'Woont je in Haifa?', 'Je woon in Haifa?'], a: 0 },
    { t: 'cloze', q: 'Wat ___ je drinken?', a: ['wil'], en: 'What would you like to drink?' },
    { t: 'tr', en: 'Enjoy your meal!', a: ['Eet smakelijk!', 'Smakelijk eten!'] },
    { t: 'dict', nl: 'Ik drink liever thee.', en: 'I prefer tea.' },
    { t: 'tr', en: 'May I have some more coffee?', a: ['Mag ik nog wat koffie?', 'Mag ik nog koffie?', 'Mag ik nog een koffie?', 'Mag ik nog een kopje koffie?'] },
    { t: 'mc', q: 'At the end of dinner, to the cook:', o: ['Het was heerlijk!', 'Proost!', 'Eet smakelijk!'], a: 0 },
  ],
});
