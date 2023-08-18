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
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { EMOJIPERANTO_LANGS, EmojiperantoLanguage } from "../../data/langs";

function partitionArrayByProperty(
  array: EmojiperantoLanguage[],
  property: string,
) {
  const partitions = {} as Record<string, EmojiperantoLanguage[]>;

  array.forEach((item) => {
    const propValue = get(item, property) as string;
    if (!partitions[propValue]) {
      partitions[propValue] = [];
    }
    partitions[propValue].push(item);
  });

  return partitions;
}

const getFlag = (value: string): string => {
  switch (value) {
    case "it_ts":
      return "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Tuscany.svg";
    case "it_bg":
      return "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Bergamo.svg";
    case "meow":
      return "https://upload.wikimedia.org/wikipedia/commons/b/bc/Anarchist_black_cat_flag.svg";
    case "kawaii":
      return "/img/kawaii.png";
    default:
      return findFlagUrlByIso2Code(value);
  }
};

function SelectOption({ value, label }: EmojiperantoLanguage) {
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

  const partitions = partitionArrayByProperty(EMOJIPERANTO_LANGS, "group");

  const selectedOption = EMOJIPERANTO_LANGS.find(
    (item) => item.value === value,
  );

  const options = Object.keys(partitions).map((groupName) => (
    <Combobox.Group label={groupName} key={groupName}>
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
