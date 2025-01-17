import React from "react";
import * as Select from "@radix-ui/react-select";
import { styled } from "../../../theme/stitches";
import { violet, mauve, blackA } from "@radix-ui/colors";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { LabelRoot } from "../input";

interface ItemProp {
  _id: number;
  name: string;
  value: string;
}
interface SelectProp {
  data?: Array<ItemProp>;
  onChange?: () => void;
  label?: string;
  name?: string;
  labelShow?: boolean;
  handleChange?: any;
  changeText?: boolean;
}
export const Dropdown = ({
  data,
  label,
  labelShow = true,
  handleChange,
  changeText = true,
}: SelectProp) => {
  return (
    <>
      {labelShow && (
        <>
          <LabelRoot css={{ marginTop: "10px", marginBottom: "10px" }}>
            Select a {label}
          </LabelRoot>
          <br />
        </>
      )}

      <Select.Root onValueChange={(e) => handleChange(e)} value={label}>
        <SelectTrigger>
          {changeText ? (
            <Select.Value placeholder={label} />
          ) : (
            <Select.Value>
              {label} {/* Provide a static placeholder */}
            </Select.Value>
          )}
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <Select.Portal>
          <SelectContent>
            <SelectScrollUpButton>
              <ChevronUpIcon />
            </SelectScrollUpButton>
            <SelectViewport>
              <Select.Group>
                <SelectLabel>{label}</SelectLabel>
                <SelectSeparator />

                {data?.map((item, index) => (
                  <React.Fragment key={index}>
                    <SelectItem value={item?.value} id={item?._id}>
                      {item.name}
                    </SelectItem>
                  </React.Fragment>
                ))}
              </Select.Group>
            </SelectViewport>
            <SelectScrollDownButton>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

const SelectTrigger = styled(Select.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "white",
  color: "$primary",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: mauve.mauve3 },
  "&[data-placeholder]": { color: "$primary" },
});

const SelectIcon = styled(Select.SelectIcon, {
  color: "$primary",
});

const SelectContent = styled(Select.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const SelectViewport = styled(Select.Viewport, {
  padding: 5,
});

const SelectItem = React.forwardRef(
  ({ children, ...props }: any, forwardedRef) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <StyledItemIndicator>
          <CheckIcon />
        </StyledItemIndicator>
      </StyledItem>
    );
  }
);

const StyledItem = styled(Select.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: "$primary",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$primary",
    color: "$white",
  },
});

const SelectLabel = styled(Select.Label, {
  padding: "0 25px",
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11,
});

const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: violet.violet11,
  cursor: "default",
};
const SelectSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);

const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles
);

export default Dropdown;
