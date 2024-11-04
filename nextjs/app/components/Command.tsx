import styles from "./Command.module.css";

interface Props {
  prompt?: string;
  command: string;
}

export function Command(props: Props) {
  const prompt = props.prompt || ">";

  return (
    <pre className={styles.component}>
      <code className={styles.prompt}>{prompt}</code>
      <span /*whitespace*/> </span>
      <code className={styles.command}>{props.command}</code>
    </pre>
  );
}
