import { useState } from "react";
import { CommandWaitingForRun } from "./CommandWaitingForRun";
import { CommandTypingAnimation } from "./CommandTypingAnimation";

interface Props {
  prompt?: string;
  command: string;
}

export function CommandBeforeRun(props: Props) {
  const [typingFinished, setTypingFinished] = useState(false);

  return typingFinished ? (
    <CommandWaitingForRun prompt={props.prompt} command={props.command} />
  ) : (
    <CommandTypingAnimation
      prompt={props.prompt}
      command={props.command}
      onFinishedtyping={() => {
        setTypingFinished(true);
      }}
    />
  );
}
