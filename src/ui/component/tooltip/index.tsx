import React, { useState } from "react";
import * as StyledTooltip from "@radix-ui/react-tooltip";
import { styled } from "../../../theme/stitches";
import { PlusIcon } from "@radix-ui/react-icons";

interface TooltipProps {
  content?: any;
  label?: any;
}

const Tooltip = ({ content, label }: TooltipProps) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <StyledTooltip.Provider delayDuration={200}>
      <StyledTooltip.Root open={open} onOpenChange={setOpen}>
        <StyledTooltip.Trigger asChild>
          <div onClick={handleToggle}>{content || <PlusIcon />}</div>
        </StyledTooltip.Trigger>
        <StyledTooltip.Portal>
          <TooltipContent sideOffset={5} data-side="right">
            {label}
            <TooltipArrow />
          </TooltipContent>
        </StyledTooltip.Portal>
      </StyledTooltip.Root>
    </StyledTooltip.Provider>
  );
};

const TooltipContent = styled(StyledTooltip.Content, {
  borderRadius: 4,
  padding: "10px 15px",
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
});

const TooltipArrow = styled(StyledTooltip.Arrow, {
  fill: "white",
});

export default Tooltip;
