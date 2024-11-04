import { Command } from "./Command";
import styles from "./TerminalComponent.module.css";

export default function TerminalComponent() {
  const items = [
    {
      id: 1,
      type: "command",
      prompt: "myuser>",
      // command: "sleep 100000000000000",
      command: "echo abcde",
      beforeRun: true,
    },
    {
      id: 2,
      type: "command",
      prompt: "myuser>",
      // command: "sleep 100000000000000",
      command: "echo abcde",
      beforeRun: true,
    },
  ];

  return (
    <div className={styles.comoponent}>
      {items.map((x, i) => (
        <Command
          key={x.id}
          prompt={x.prompt}
          command={x.command}
          beforeRun={items.length -1 === i}
        ></Command>
      ))}
    </div>
  );
}
