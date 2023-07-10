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
    },
  },
  {
    id: "kmp",
    emoji: "🗡",
    title: ":dagger:",
    description: "Kill me please",
    translations: {
      it: {
        description: "Uccidetemi perfavore.",
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
        description: "Uccidetemi perfavore.",
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
    },
  },
];

export default data;
