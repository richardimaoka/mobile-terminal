import styles from "./NextButton.module.css";

export function NextButton() {
  function onClick() {
    const event = new Event("nextStep");
    document.dispatchEvent(event);
  }

  return (
    <button className={styles.component} onClick={onClick}>
      NEXT
    </button>
  );
}
