import styles from "./CommandWaitingForRun.module.css";
import { FlickeringTrail } from "./FlickeringTrail";

interface Props {
  prompt?: string;
  command: string;
}

export function CommandWaitingForRun(props: Props) {
  const prompt = props.prompt || ">";

  return (
    <pre className={styles.component}>
      <code className={styles.prompt}>{prompt}</code>
      <span /*whitespace*/> </span>
      <code className={styles.command}>{props.command}</code>
      <FlickeringTrail />
    </pre>
  );
}
