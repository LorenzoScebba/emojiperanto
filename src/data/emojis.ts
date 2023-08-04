import * as emojies from "./emojies";
import { EMOJIPERANTO_LANGS } from "./langs.ts";

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
  emojies.observing,
  emojies.done,
  emojies.shit,
  emojies.slow,
  emojies.testing,
  emojies.idk,
  emojies.godhelppls,
  emojies.bugbugbug,
  emojies.yostfu,
  emojies.payme,
  emojies.lmao,
  emojies.kmp,
  emojies.khp,
  emojies.onetwothreefourfive,
  emojies.everydeveloper,
  emojies.blessyou,
  emojies.shitcode,
  emojies.facepalm,
  emojies.christiansw,
  emojies.grandmadontdiepls,
  emojies.importantdecisions,
  emojies.stillblocked,
  emojies.goingcrazy,
  emojies.cccccombo,
  emojies.seghementali,
];

// if we are in development mode, check if some emojies are missing some translations
if (import.meta.env.DEV) {
  data.forEach((emoji) => {
    if (emoji.translations) {
      const keys = Object.keys(emoji.translations);
      EMOJIPERANTO_LANGS.forEach((e) => {
        if (e.value !== "gb" && !keys.includes(e.value))
          console.warn(`Missing translation for "${emoji.id}": ${e.value}`);
      });
    }
  });
}

export default data;
