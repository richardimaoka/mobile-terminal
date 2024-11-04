import TerminalComponent from "./components/terminal/TerminalComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <TerminalComponent />
    </div>
  );
}
