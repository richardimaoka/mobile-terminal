import styles from "./page.module.css";

export default function Home() {
  const items = [
    {
      id: 1,
      type: "command",
      prompt: ">",
      command: "sleep 100000000000000",
    },
  ];

  return (
    <div className={styles.page}>
      {items.map((x) => (
        <pre key={x.id}>
          <code style={{ overflowWrap: "break-word" }}>
            {x.type === "command" ? x.command : x.output}
          </code>
        </pre>
      ))}
    </div>
  );
}
