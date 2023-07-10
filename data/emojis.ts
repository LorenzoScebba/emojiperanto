export interface IEmoji {
  id: string;
  emoji: string;
  title: string;
  description: string;
  translations?: {
    [key: string]: {
      emoji?: string;
      title?: string;
      description?: string;
    };
  };
}

const data: IEmoji[] = [
  {
    id: "observing",
    emoji: "👀",
    title: ":eyes:",
    description: "Vigilantly observing...",
    translations: {
      it: {
        description: "Sto dando un'occhiata...",
      },
      de: {
        description: "Wachsam beobachten...",
      },
      fr: {
        description: "Observer attentivement...",
      },
      es: {
        description: "Observando atentamente...",
      },
      it_ts: {
        description: "A darò n'ucchiada...",
      },
    },
  },
  {
    id: "done",
    emoji: "✔️",
    title: ":check_mark:",
    description: "Marking it as done.",
    translations: {
      it: {
        description: "Fatto e finito!",
      },
      de: {
        description: "Als erledigt markieren.",
      },
      fr: {
        description: "Marquer comme fait.",
      },
      es: {
        description: "Marcar como hecho.",
      },
      it_ts: {
        description: "Ho f'ní",
      },
    },
  },
  {
    id: "shit",
    emoji: "💩",
    title: ":poo:",
    description: "Wtf is this shit?!",
    translations: {
      it: {
        description: "Ma che merda è sta roba?!",
      },
      de: {
        description: "Was zur Hölle ist das?!",
      },
      fr: {
        description: "Qu'est-ce que c'est que cette merde ?!",
      },
      es: {
        description: "¡Qué mierda es esta?!",
      },
      it_ts: {
        description: "Sta cosa la fa schifu",
      },
    },
  },
  {
    id: "slow",
    emoji: "🥦➕🏃➡️🐌",
    title: ":snail:",
    description: "A vegetable is faster than this.",
    translations: {
      it: {
        description: "Un vegetale è più veloce di questa roba.",
      },
      de: {
        description: "Ein Gemüse ist schneller als das.",
      },
      fr: {
        description: "Un légume est plus rapide que ça.",
      },
      es: {
        description: "Una verdura es más rápida que esto.",
      },
      it_ts: {
        description: "N cioccu l'é plu sveltu",
      },
    },
  },
  {
    id: "testing",
    emoji: "👨‍🔧❄️",
    title: ":man_mechanic: :snowflake:",
    description: "Just testing, please chill",
    translations: {
      it: {
        emoji: "👨‍🔧🦥",
        title: ":man_mechanic: :sloth:",
        description: "Sto testando, calmi tutti",
      },
      de: {
        emoji: "👨‍🔧🦥",
        title: ":man_mechanic: :sloth:",
        description: "Nur ein Test, bitte entspannen",
      },
      fr: {
        emoji: "👨‍🔧🦥",
        title: ":man_mechanic: :sloth:",
        description: "Juste un test, détendez-vous",
      },
      es: {
        emoji: "👨‍🔧🦥",
        title: ":man_mechanic: :sloth:",
        description: "Solo probando, por favor, relájate",
      },
      // TODO add it_ts
    },
  },
  {
    id: "idk",
    emoji: "🤷‍♂️",
    title: ":man_shrugging:",
    description: "I don't know what is going on.",
    translations: {
      it: {
        description: "Non so che sta a succedere.",
      },
      de: {
        description: "Ich weiß nicht, was los ist.",
      },
      fr: {
        description: "Je ne sais pas ce qui se passe.",
      },
      es: {
        description: "No sé qué está pasando.",
      },
      it_ts: {
        description: "Ansò cumalè",
      },
    },
  },
  {
    id: "GoDHeLpMePlS",
    emoji: "🙏🆘",
    title: ":pray: :sos:",
    description: "God, I need some help",
    translations: {
      it: {
        description: "Dio, aiutami tu",
      },
      de: {
        description: "Gott, ich brauche Hilfe",
      },
      fr: {
        description: "Mon Dieu, j'ai besoin d'aide",
      },
      es: {
        description: "Dios, necesito ayuda",
      },
      it_ts: {
        description: "Oh Dio pensug tè",
      },
    },
  },
  {
    id: "bugbugbug",
    emoji: "🐛😡",
    title: ":bug: :rage:",
    description: "There is a bug in the code, fuck sake.",
    translations: {
      it: {
        emoji: "😡🐛",
        title: ":rage: :bug:",
        description: "Ma che cazzo, c'è un bug nel codice.",
      },
      de: {
        emoji: "🐛😡",
        title: ":rage: :bug:",
        description: "Da ist ein Bug im Code, verdammt nochmal.",
      },
      fr: {
        emoji: "🐛😡",
        title: ":rage: :bug:",
        description: "Il y a un bug dans le code, bordel.",
      },
      es: {
        emoji: "🐛😡",
        title: ":rage: :bug:",
        description: "Hay un bug en el código, maldición.",
      },
      it_ts: {
        description: "A ghe stà un guai, cazzo",
      },
    },
  },
  {
    id: "yo stfu",
    emoji: "🔇️",
    title: ":mute:",
    description: "Muted and suppressed.",
    translations: {
      it: {
        description: "Mutato e soppresso",
      },
      de: {
        description: "Stummgeschaltet und unterdrückt.",
      },
      fr: {
        description: "Muet et réprimé.",
      },
      es: {
        description: "Silenciado y suprimido.",
      },
      it_ts: {
        description: "Zittii e arpiattà",
      },
    },
  },
  {
    id: "payme",
    emoji: "💸🔧",
    title: ":money_with_wings: :wrench:",
    description: "Pay me and I'll fix the issue.",
    translations: {
      it: {
        description: "Pagami e sistemo il problema",
      },
      de: {
        description: "Bezahle mich und ich werde das Problem beheben.",
      },
      fr: {
        description: "Payez-moi et je réglerai le problème.",
      },
      es: {
        description: "Págame y solucionaré el problema.",
      },
      it_ts: {
        description: "Basta che tmà pagu e tla ranghiu",
      },
    },
  },
  {
    id: "LMAO",
    emoji: "🤣🍑📤",
    title: ":joy: :peach: :outbox_tray:",
    description: "Laughing my ass off",
    translations: {
      it: {
        description: "Sto ridendo a crepapelle",
      },
      de: {
        description: "Ich lache mich kaputt",
      },
      fr: {
        description: "Je me plie en quatre de rire",
      },
      es: {
        description: "Me parto de risa",
      },
      it_ts: {
        description: "Murir da u ridr",
      },
    },
  },
  {
    id: "kmp",
    emoji: "🗡",
    title: ":dagger:",
    description: "Kill me please",
    translations: {
      it: {
        description: "Uccidetemi per favore.",
      },
      de: {
        description: "Töte mich bitte",
      },
      fr: {
        description: "Tuez-moi s'il vous plaît",
      },
      es: {
        description: "Mátame por favor",
      },
      it_ts: {
        description: "Puttost mazzemu",
      },
    },
  },
  {
    id: "khp",
    emoji: "🙏🥳☠️🙎💩",
    title:
      ":pray: :partying_face: :skull_and_crossbones: :person_bowing: :poop:",
    description:
      "Please, I would be so happy if you could kill that human piece of shit",
    translations: {
      it: {
        description:
          "Per favore, sarei così felice se potessi uccidere quella merda di essere umano.",
      },
      de: {
        description:
          "Bitte, ich wäre so glücklich, wenn du dieses menschliche Stück Scheiße töten könntest.",
      },
      fr: {
        description:
          "S'il vous plaît, je serais tellement heureux si vous pouviez tuer cette merde humaine.",
      },
      es: {
        description:
          "Por favor, estaría tan feliz si pudieras matar a ese pedazo de mierda humana.",
      },
      it_ts: {
        description: "A sarei cuntent la accuppassii quel pezzu da merda",
      },
    },
  },
  {
    id: "1,2,3,4,5",
    emoji: "🔢🥩",
    title: ":1234: :cut_of_meat:",
    description: "All of this happened in a second",
    translations: {
      it: {
        description: "Tutto questo in un secondo",
      },
      de: {
        description: "Das alles passierte in einer Sekunde",
      },
      fr: {
        description: "Tout cela s'est passé en une seconde",
      },
      es: {
        description: "Todo esto sucedió en un segundo",
      },
      it_ts: {
        description: "L'è success tutt in semlu",
      },
    },
  },
  {
    id: "every_developer_ever",
    emoji: "🚫🐛✨",
    title: ":no_entry_sign: :bug: :sparkles:",
    description: "It's not a bug, it's a feature",
    translations: {
      it: {
        description: "Non è un bug, è una feature",
      },
      de: {
        description: "Es ist kein Bug, es ist ein Feature",
      },
      fr: {
        description: "Ce n'est pas un bug, c'est une fonctionnalité",
      },
      es: {
        description: "No es un bug, es una característica",
      },
      it_ts: {
        description: "Un l'è nù sbagliu, l'é fatt apposta",
      },
    },
  },
  {
    id: "blessyou",
    emoji: "🌬️❔",
    title: ":wind_face: :grey_question:",
    description: "Bless you, I guess.",
    translations: {
      it: {
        description: "Salute, immagino",
      },
      de: {
        description: "Gesundheit, nehme ich an.",
      },
      fr: {
        description: "À tes souhaits, je suppose.",
      },
      es: {
        description: "Salud, supongo.",
      },
      it_ts: {
        description: "A buon pro, creidu?",
      },
    },
  },
  {
    id: "shit code",
    emoji: "✂️👐",
    title: ":scissors: :open_hands:",
    description: "I will cut your fingers",
    translations: {
      it: {
        description: "Ti taglio le dita.",
      },
      de: {
        description: "Ich werde dir die Finger abschneiden",
      },
      fr: {
        description: "Je vais te couper les doigts",
      },
      es: {
        description: "Te cortaré los dedos",
      },
      it_ts: {
        description: "A tal taj cal mann",
      },
    },
  },
  {
    id: "facepalm",
    emoji: "🤦",
    title: ":facepalm:",
    description: "What a terrible failure.",
    translations: {
      it: {
        description: "Che fail.",
      },
      de: {
        description: "Was für ein schrecklicher Misserfolg.",
      },
      fr: {
        description: "Quelle terrible défaillance.",
      },
      es: {
        description: "Qué fracaso tan terrible.",
      },
      it_ts: {
        description: "Ch'a figüra da balurdi",
      },
    },
  },
  {
    id: "christians w",
    emoji: "💁👜😇❤️",
    title: ":goal: :male_sign: :innocent: :heart:",
    description: "I carry god in my heart.",
    translations: {
      it: {
        emoji: "🥅♂️😇❤️",
        title: ":goal: :male_sign: :innocent: :heart:",
        description: "Porto dio nel cuore",
      },
      de: {
        emoji: "💁👜😇❤️",
        title: ":goal: :male_sign: :innocent: :heart:",
        description: "Ich trage Gott in meinem Herzen.",
      },
      fr: {
        emoji: "💁👜😇❤️",
        title: ":goal: :male_sign: :innocent: :heart:",
        description: "Je porte Dieu dans mon cœur.",
      },
      es: {
        emoji: "💁👜😇❤️",
        title: ":goal: :male_sign: :innocent: :heart:",
        description: "Llevo a Dios en mi corazón.",
      },
      it_ts: {
        // TODO appropiate?
        emoji: "💁👜😇❤️",
        title: ":goal: :male_sign: :innocent: :heart:",
        description: "Al signúr l'è sempre cun me",
      },
    },
  },
];

export default data;
