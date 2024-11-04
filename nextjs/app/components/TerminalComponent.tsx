import { Command } from "./Command";
import styles from "./TerminalComponent.module.css";

export default function TerminalComponent() {
  const items = [
    {
      id: 1,
      type: "command",
      prompt: "myuser>",
      command: "sleep 100000000000000",
    },
  ];

  return (
    <div className={styles.comoponent}>
      {items.map((x) => (
        <Command key={x.id} prompt={x.prompt} command={x.command}></Command>
      ))}
    </div>
  );
}
