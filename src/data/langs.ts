export interface EmojiperantoLanguage {
  value: SupportedLanguages;
  group: string;
  label: string;
}

export type SupportedLanguages =
  | "gb"
  | "it"
  | "de"
  | "fr"
  | "es"
  | "it_ts"
  | "it_bg"
  | "meow"
  | "kawaii";

export const EMOJIPERANTO_LANGS: EmojiperantoLanguage[] = [
  {
    value: "gb",
    group: "Real languages",
    label: "English",
  },
  {
    value: "it",
    group: "Real languages",
    label: "Italian",
  },
  {
    value: "de",
    group: "Real languages",
    label: "Deutsch",
  },
  {
    value: "fr",
    group: "Real languages",
    label: "French",
  },
  {
    value: "es",
    group: "Real languages",
    label: "Spanish",
  },
  {
    value: "it_ts",
    group: "Wtf languages",
    label: "Italian (Tuscan)",
  },
  {
    value: "it_bg",
    group: "Wtf languages",
    label: "Italian (Bergamàsch)",
  },
  {
    value: "meow",
    group: "Wtf languages",
    label: "Meow~",
  },
  {
    value: "kawaii",
    group: "Wtf languages",
    label: "Kawaii~",
  },
];
