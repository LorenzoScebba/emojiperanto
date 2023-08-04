import { useState } from "react";
import styles from "./Main.module.css";
import {
  Box,
  Group,
  Image,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import get from "lodash.get";
import data from "../../data/emojis.ts";
import { LanguagesSelect } from "../LanguagesSelect/LanguagesSelect.tsx";
import Emoji from "../Emoji/Emoji.tsx";

const Main = () => {
  const [language, setLanguage] = useState("gb");
  const [enableShortcodes, setEnableShortcodes] = useState(false);
  const [filter, setFilter] = useState("");

  const dataFiltered = data.filter((d) => {
    const emoji = get(d, `translations.${language}.emoji`, d.emoji);
    const title = get(d, `translations.${language}.title`, d.title);
    const description = get(
      d,
      `translations.${language}.description`,
      d.description,
    );
    return (
      emoji.includes(filter) ||
      title.toLowerCase().includes(filter.toLowerCase()) ||
      description.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <Box component={"main"} className={styles.main}>
      <Group justify="flex-end" mb={8}>
        <Switch
          checked={enableShortcodes}
          onChange={(v) => setEnableShortcodes(v.currentTarget.checked)}
          size="md"
          onLabel="ON"
          offLabel="OFF"
          label="Shortcodes"
          labelPosition={"left"}
        />
        <LanguagesSelect
          value={language}
          setValue={(v) => setLanguage(v || "gb")}
        />
      </Group>
      <TextInput
        mb={16}
        leftSection={<IconSearch />}
        type={"text"}
        placeholder={"Search concept"}
        onChange={(ev) => setFilter(ev.currentTarget.value)}
      />

      {dataFiltered.length > 0 ? (
        <>
          <Box className={styles.autogrid}>
            {dataFiltered.map((d) => (
              <Emoji
                key={d.id}
                showShortcode={enableShortcodes}
                language={language}
                {...d}
              />
            ))}
          </Box>
        </>
      ) : (
        <Stack className={styles.centered}>
          <Text>No results found</Text>
          <Text>Try to change language or search term</Text>
          <Image
            width={300}
            height={300}
            src={"https://source.unsplash.com/random/300x300?kitten"}
            alt={"kitten"}
          />
        </Stack>
      )}
    </Box>
  );
};

export default Main;
