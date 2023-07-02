"use client";

import React, { useState } from "react";
import data from "@/data/emojis";
import styles from "./Main.module.css";
import Emoji from "@/components/Emoji/Emoji";
import { Box, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Main = () => {
  const [filter, setFilter] = useState("");
  return (
    <Box component={"main"} className={styles.main}>
      <TextInput
        mb={16}
        leftSection={<IconSearch />}
        type={"text"}
        placeholder={"Search concept"}
        onChange={(ev) => setFilter(ev.currentTarget.value)}
      />
      <Box className={styles.autogrid}>
        {data
          .filter(
            (d) =>
              d.title.toLowerCase().includes(filter.toLowerCase()) ||
              d.description.toLowerCase().includes(filter.toLowerCase())
          )
          .map((d) => (
            <Emoji key={d.title} {...d} />
          ))}
      </Box>
    </Box>
  );
};

export default Main;
