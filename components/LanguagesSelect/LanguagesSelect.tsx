import {
  Combobox,
  Group,
  Input,
  InputBase,
  ScrollAreaAutosize,
  Text,
  useCombobox,
} from "@mantine/core";
import get from "lodash.get";
// @ts-ignore
import { findFlagUrlByIso2Code } from "country-flags-svg";

function partitionArrayByProperty(array: Item[], property: string) {
  const partitions = {} as Record<string, Item[]>;

  array.forEach((item) => {
    const propValue = get(item, property) as string;
    if (!partitions[propValue]) {
      partitions[propValue] = [];
    }
    partitions[propValue].push(item);
  });

  return partitions;
}

interface Item {
  value: string;
  group: string;
  label: string;
}

const langs: Item[] = [
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
];

const getFlag = (value: string): string => {
  switch (value) {
    case "it_ts":
      return "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Tuscany.svg";
    case "it_bg":
      return "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Bergamo.svg";
    case "meow":
      return "https://upload.wikimedia.org/wikipedia/commons/b/bc/Anarchist_black_cat_flag.svg";
    default:
      return findFlagUrlByIso2Code(value);
  }
};

function SelectOption({ value, label, group }: Item) {
  const flag = getFlag(value);
  return (
    <Group>
      {flag && <img height={12} src={flag} alt={`${label} flag`} />}
      <Text fz="sm" fw={500}>
        {label}
      </Text>
    </Group>
  );
}

export function LanguagesSelect({
  value,
  setValue,
}: {
  value: string | null;
  setValue: (value: string | null) => void;
}) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const partitions = partitionArrayByProperty(langs, "group");

  const selectedOption = langs.find((item) => item.value === value);

  const options = Object.keys(partitions).map((groupName) => (
    <Combobox.Group label={groupName}>
      {partitions[groupName].map((item) => (
        <Combobox.Option value={item.value} key={item.value}>
          <SelectOption {...item} />
        </Combobox.Option>
      ))}
    </Combobox.Group>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          placeholder={"Language"}
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          w={260}
        >
          {selectedOption ? (
            <SelectOption {...selectedOption} />
          ) : (
            <Input.Placeholder>Pick value</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollAreaAutosize mah={220} type={"scroll"} scrollbarSize={4}>
            {options}
          </ScrollAreaAutosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
