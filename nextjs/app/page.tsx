import styles from "./page.module.css";

export default function Home() {
  const items = [
    {
      id: 1,
      type: "command",
      command: "pwd",
    },
    {
      id: 2,
      type: "output",
      output:
        "/home/richardimaoka/ghq/src/github.com/richardimaoka/imaginary-zoo/nextjs",
    },
  ];

  return (
    <div className={styles.page}>
      {items.map((x) => (
        <pre key={x.id}>
          <code>{x.type === "command" ? x.command : x.output}</code>
        </pre>
      ))}
      <pre>
        <code>
          this is a line in <span style={{ color: "blue" }}>color</span>
        </code>
      </pre>
    </div>
  );
}
