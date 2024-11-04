import styles from "./CommandAlreadyExecuted.module.css";

interface Props {
  prompt?: string;
  command: string;
}

export function CommandAlreadyExecuted(props: Props) {
  const prompt = props.prompt || ">";

  return (
    <pre className={styles.component}>
      <code className={styles.prompt}>{prompt}</code>
      <span /*whitespace*/> </span>
      <code className={styles.command}>{props.command}</code>
    </pre>
  );
}
