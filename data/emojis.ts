export interface Emoji {
  emoji: string;
  title: string;
  description: string;
  background?: string;
}

const data = [
  {
    emoji: "👀",
    title: ":eyes:",
    description: "Checking issue..",
    background: "#b9b9b9",
  },
  {
    emoji: "✔️",
    title: ":check_mark:",
    description: "Issue resolved!",
  },
  {
    emoji: "💩",
    title: ":poo:",
    description: "Wtf is this shit?!",
    background: "#b9b9b9",
  },
  {
    emoji: "🐌",
    title: ":snail:",
    description: "Woah this is slow...",
    background: "#b9b9b9",
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
    background: "#b9b9b9",
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
    background: "#b9b9b9",
  },
  {
    emoji: "🔇️",
    title: ":mute:",
    description: "Not an issue, suppressed.",
  },
  {
    emoji: "💸",
    title: ":money_with_wings:",
    description: "Pay me and i'll fix the issue.",
    background: "#b9b9b9",
  },
] as Emoji[];

export default data;
