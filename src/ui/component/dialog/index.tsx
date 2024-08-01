import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "../../../theme/stitches";
import { violet, blackA, mauve, green } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";

interface DialogProp {
  title?: string;
  children?: any;
  dialogTrigger?: any;
  open?: boolean;
  onClose?: () => {};
}
const DialogDemo = ({
  title,
  children,
  dialogTrigger,
  open,
  onClose,
}: DialogProp) => {
  const [openn, setOpenn] = useState(open);

  useEffect(() => {
    setOpenn(open);
  }, [open]);

  return (
    <Dialog.Root open={openn}>
      <Dialog.Trigger
        asChild
        onClick={() => {
          setOpenn(true);
        }}
      >
        {dialogTrigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay
          onClick={() => {
            onClose();
          }}
        />
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          {children}
          <Dialog.Close
            asChild
            onClick={() => {
              onClose();
            }}
          >
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  overflow: "auto",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
});

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 600,
  color: mauve.mauve12,
  fontSize: 17,
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 4,
  right: 4,
  cursor: "pointer",
  "&:hover": { backgroundColor: violet.violet4 },
});

export default DialogDemo;
