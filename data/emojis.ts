export interface Emoji {
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
    emoji: "🙏🥳☠️🙎‍♂️💩",
    title:
      ":pray: :partying_face: :skull_and_crossbones: :man_facepalming: :poop:",
    description:
      "Please, I would be so happy if you could kill that human piece of shit",
  },
  {
    emoji: "🔢🥩",
    title: ":1234: :cut_of_meat:",
    description: "All of this happened in a second",
  },
] as Emoji[];

export default data;
