"use client";

import React, { useState } from "react";
import data from "@/data/emojis";
import styles from "./Main.module.css";
import Emoji from "@/components/Emoji/Emoji";

const Main = () => {
  const [filter, setFilter] = useState("");
  return (
    <main className={styles.main}>
      <input
        className={styles.input}
        type={"text"}
        placeholder={"Search concept"}
        onChange={(ev) => setFilter(ev.currentTarget.value)}
      />
      <div className={styles.flexer}>
        {data
          .filter(
            (d) =>
              d.title.toLowerCase().includes(filter.toLowerCase()) ||
              d.description.toLowerCase().includes(filter.toLowerCase())
          )
          .map((d) => (
            <Emoji key={d.title} {...d} />
          ))}
      </div>
    </main>
  );
};

export default Main;
