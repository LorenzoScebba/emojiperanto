import React from "react";
import data from "@/data/emojis";
import styles from "./Main.module.css";
import Emoji from "@/components/Emoji/Emoji";

const Main = () => {
  return (
    <main className={styles.main}>
      {data.map((d) => (
        <Emoji {...d} />
      ))}
    </main>
  );
};

export default Main;
