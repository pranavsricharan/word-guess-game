import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./KeyboardInput.css";

const BACKSPACE = "{bksp}"
const ENTER = "{enter}"

const LAYOUT = {
  default: [
    "Q W E R T Y U I O P",
    "A S D F G H J K L",
    `${BACKSPACE} Z X C V B N M ${ENTER}`,
  ]
}

const DISPLAY = {
  "{bksp}": "del",
  "{enter}": "enter"
}

type Props = {
  input: string,
  onChange: (letter: string) => void,
  onSubmit: (letter: string) => void,
};

export default function KeyboardInput({ onChange, onSubmit, input }: Props) {
  const onKeyPress = (key: string) => {
    switch(key) {
      case ENTER:
        if (input.length === 5) {
          onSubmit(input);
        }
        break;
      case BACKSPACE:
        if (input.length > 0) {
          input = input.slice(0, input.length - 1);
        }
        onChange(input);
        break;
      default:
        if (input.length < 5) {
          input += key;
          onChange(input);
        }
        break;
    }
  }
  return <Keyboard
    layout={LAYOUT}
    display={DISPLAY}
    onKeyPress={onKeyPress}
    theme={"hg-theme-default dark-theme"} />;
}
