let questions = 10;

let questionCounter = 0;

let questionArray = [
  "Please enter a noun i.e merchant",
  "Please Enter another noun i.e business",
  "Please Enter a property i.e gifts",
  "Please Enter an adjective i.e fell",
  "Please enter another noun i.e beast",
  "Please enter another adjective i.e ugly",
  "Please enter period of Time i.e week",
  "Please enter another noun i.e amphitheater, arena, garden",
  "Please enter another adjective i.e selfishly",
  "Please enter something created either animate or inanimate: such as. a human being. a being of anomalous or uncertain aspect or nature.",
  "Please enter someword causing a strong feeling of dislike or disinclination",
  "Please enter someword pleasing or agreeable to the senses",
];

let userInputs = [];

for (let i = questions; i >= 0; i--) {
  console.log(
    questionArray[questionCounter] + `...  (${questions} questions left)`
  );
  userInputs.push(
    prompt(
      questionArray[questionCounter] + `...  (${questions} questions left)`
    )
  );
  console.log(userInputs);
  questionCounter++;
  questions--;
}

let originalStory = ` <h2> Many years ago, a ${userInputs[0]} had six daughters. The first five were born when ${userInputs[1]} was good, and he spoiled them rotten. How they loved their fine clothes, pearl necklaces, and pretty ponies! The youngest came as a ${userInputs[2]}  to brighten up hard times. Her name was Belle and she was beautiful in name, looks, and temper.
The ${userInputs[0]} was due to go abroad. He asked the girls what ${userInputs[2]} he should bring back. The elder sisters demanded expensive things, but Belle asked merely for a red rose.
I am sorry to say that the ${userInputs[1]} trip went badly. The ${userInputs[0]}’s ship failed to come in, and he could not afford to buy the promised presents for his daughters. On his journey home, lost in thought, he took a wrong turn. Darkness ${userInputs[3]} and a storm blew up. Then, quite unexpectedly, in the middle of a forest, he came to a place where the sun was shining. He followed a long avenue of trees until he came upon a palace with a beautiful ${userInputs[7]} . As he wandered around the grounds, his eyes ${userInputs[3]} upon a red rose and he thought, “Ah! A ${userInputs[2]}  for my Belle!” As he picked the rose, a growling voice startled him from behind:
“Who said you could trash my ${userInputs[7]} ?”
The ${userInputs[0]} spun round and found himself staring into the blazing eyes of a hideous ${userInputs[4]} .
“You shall pay for this rose with blood!” raged the monster.
“I, I mean no harm. I wanted a rose for my youngest daughter.”
“Daughter you say? If she will come to me, you may live. But should she refuse, I shall visit your house and you shall die.”
The ${userInputs[0]} did not doubt the word of the ${userInputs[4]} . He returned home as a doomed man, not thinking for a moment that Belle would agree to stay with the creature. When he told the terrible story to his daughters, the elder ones blamed Belle for ${userInputs[8]}  demanding a red rose as a ${userInputs[2]} . She herself said, “Father, you must take me to this ${userInputs[4]}  before he comes for you.”
The ${userInputs[0]} delivered Belle to the ${userInputs[4]}  and kissed her goodbye, perhaps for ever. Belle tried to look into the face of the ${userInputs[4]} , but had to glance away because he was so ${userInputs[10]}  to her eyes. But the ${userInputs[4]}  was courteous, and gave her a comfortable room. Invisible servants brought her food, and took care of all her needs. In the daytime, she wandered around the ${userInputs[7]} , and spoke to the birds.
“Pretty, sweet, feathered ${userInputs[9]} , your ways are so gentle, how can you stand the rough, ${userInputs[5]}  ${userInputs[4]} ?”
And the birds twittered back. “He is ${userInputs[5]}  but his heart is kind, and he is sad, poor ${userInputs[4]} , because no girl will love him.” Belle either did not understand, or did not believe these tweets, and she badly missed her home.
One evening, the ${userInputs[4]}  came to her room and asked gruffly, “Belle, will you marry me?”
Belle felt sick at the thought and replied, “No ${userInputs[4]} , do not hope that I could marry you.”
“That is your choice,” said the ${userInputs[4]}  sadly.
“${userInputs[4]} ,” said Belle. “If you have good in your heart, you will let me visit my home just for one ${userInputs[6]} .”
The ${userInputs[4]}  thought and said, “You may go. But if you do not return after one ${userInputs[6]} , something dreadful will happen.”
Belle went home in a carriage arranged by the ${userInputs[4]} . Her sisters were surprised to see her, and even more amazed when she told them about about her new life. They were even jealous when they heard about the luxury of the palace, and they tried to delay her return. Belle lingered until, one day, she looked at her hand and saw a ring that the ${userInputs[4]}  had given her.
“What is this strange feeling?” she thought. “Can it be that I miss him?”
She rubbed the ring and in an instant she was transported back to the palace.
“${userInputs[4]} , where are you?” she called as she hurried through the echoing halls in search of him. She recalled his words that something dreadful might happen, and she thought, “Did he mean to me or to him, or to both of us?”
Once out in the ${userInputs[7]}  she ran up and down the hedgerows crying, “${userInputs[4]} , ${userInputs[4]} , where are you?”
The birds tweeted, “Hurry, Hurry, he is hiding in the folly and there is no time to lose.”
A flurry and fluttering led Belle to a grotto at the end of the ${userInputs[7]} . She stepped inside and saw the ${userInputs[4]}  lying down. He turned his ${userInputs[5]}  face to the cold, stone wall. “You came back,” he whispered.
“Of course,” she replied. “Because I love you.”
“Am I not too ${userInputs[5]}  to love?” he asked.
“Not when you are sweet and kind,” she whispered. “Oh ${userInputs[4]}  I see that you are sick. You are not going to die are you?”
He made no reply. She kissed the mottled back of his head, and as she did so, he gradually transformed into a handsome man, a prince, and that very same day Beauty and the ${userInputs[4]}  were wed.
And that was the story of Beauty and the ${userInputs[4]} , told by me Emma for Storynory.</h2>`;

console.log(originalStory);

/*let userInputs = [
  "merchant",
  "business",
  "gifts",
  "fell",
  "beast",
  "ugly",
  "week",
  "garden",
  "selfishly",
  "creachers",
  "discusting",
  "soft",
  "it",
  "soda can",
  "burped",
  "May, 4th 1983",
  "42",
  "socks",
  "MoMA",
  "London, England",
  "strong",
  "black hole",
  "Liberachi",
  "Cher",
  "3000",
  "bedtime story",
  "explosion",
  "derrigable",
  "duck call",
  "sing",
];*/
