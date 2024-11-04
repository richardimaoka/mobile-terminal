import styles from "./Output.module.css";

interface Props {
  output: string;
}

export type OutputProps = Props;

export function Output(props: Props) {
  return (
    <pre className={styles.component}>
      <code>{props.output}</code>
    </pre>
  );
}
