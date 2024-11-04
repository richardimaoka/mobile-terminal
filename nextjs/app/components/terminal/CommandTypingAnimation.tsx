import { useEffect, useState } from "react";
import styles from "./CommandTypingAnimation.module.css";

interface Props {
  prompt?: string;
  command: string;
  onFinishedtyping?: () => void;
}

export function CommandTypingAnimation(props: Props) {
  const prompt = props.prompt || ">";

  const [writtenLength, setWrittenLength] = useState(0);
  const command = props.command;

  useEffect(() => {
    if (command) {
      if (writtenLength < command.length) {
        const incrementStep = command.length / 10;
        const nextLength = Math.min(
          writtenLength + incrementStep,
          command.length
        );

        setTimeout(() => {
          setWrittenLength(nextLength);
        }, 20);
      } else {
        // if writtenLength >= command.length call onFinishedTyping()
        if (props.onFinishedtyping) {
          props.onFinishedtyping();
        }
      }
    } else {
      // if no command passed-in, immediately call onFinishedTyping()
      if (props.onFinishedtyping) {
        props.onFinishedtyping();
      }
    }
  });

  return (
    <pre className={styles.component}>
      <code className={styles.prompt}>{prompt}</code>
      <span /*whitespace*/> </span>
      <code className={styles.command}>
        {command?.substring(0, writtenLength)}
      </code>
    </pre>
  );
}
