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
    description: "Checking...",
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
    description: "Wtf is this shit",
    background: "#b9b9b9",
  },
  {
    emoji: "👨‍🔧❄️",
    title: ":man_mechanic: :snowflake:",
    description: "Just testing, please chill",
  },
  {
    emoji: "🐌",
    title: ":snail:",
    description: "Process is taking a while...",
    background: "#b9b9b9",
  },
] as Emoji[];

export default data;
