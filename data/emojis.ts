export interface IEmoji {
  emoji: string;
  title: string;
  description: string;
}

const data = [
  {
    emoji: "👀",
    title: ":eyes:",
    description: "Vigilantly observing...",
  },
  {
    emoji: "✔️",
    title: ":check_mark:",
    description: "Marking it as done.",
  },
  {
    emoji: "💩",
    title: ":poo:",
    description: "Wtf is this shit?!",
  },
  {
    emoji: "🐌",
    title: ":snail:",
    description: "Unbearably slow progress...",
  },
  {
    emoji: "👨‍🔧❄️",
    title: ":man_mechanic: :snowflake:",
    description: "Just testing, please chill",
  },
  {
    emoji: "🤷‍♂️",
    title: ":man_shrugging:",
    description: "I don't know what is going on.",
  },
  {
    emoji: "🙏🆘",
    title: ":pray: :sos:",
    description: "God, I need some help",
  },
  {
    emoji: "🐛😡",
    title: ":bug: :rage:",
    description: "There is a bug in the code, fuck sake.",
  },
  {
    emoji: "🔇️",
    title: ":mute:",
    description: "Muted and suppressed.",
  },
  {
    emoji: "💸🔧",
    title: ":money_with_wings: :wrench:",
    description: "Pay me and I'll fix the issue.",
  },
  {
    emoji: "🤣🍑📤",
    title: ":joy: :peach: :outbox_tray:",
    description: "Laughing my ass off",
  },
  {
    emoji: "🗡",
    title: ":dagger:",
    description: "Kill me please",
  },
  {
    emoji: "🙏🥳☠️🙎💩",
    title:
      ":pray: :partying_face: :skull_and_crossbones: :person_bowing: :poop:",
    description:
      "Please, I would be so happy if you could kill that human piece of shit",
  },
  {
    emoji: "🔢🥩",
    title: ":1234: :cut_of_meat:",
    description: "All of this happened in a second",
  },
  {
    emoji: "🚫🐛✨",
    title: ":no_entry_sign: :bug: :sparkles:",
    description: "It's not a bug, it's a feature",
  },
  {
    emoji: "🌬️❔",
    title: ":wind_face: :grey_question:",
    description: "Bless you, I guess.",
  },
  {
    emoji: "✂️👐",
    title: ":scissors: :open_hands:",
    description: "I will cut your fingers",
  },
  {
    emoji: "🤦",
    title: ":facepalm:",
    description: "What a terrible failure.",
  },
  {
    emoji: "🥅♂️😇❤️",
    title: ":goal: :male_sign: :innocent: :heart:",
    description: "I carry god in my heart.",
  },
] as IEmoji[];

export default data;
