import styles from "./sectionTitle.module.scss";

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <h2 className={styles.title}>
      <span className={styles.text}>{text}</span>
      <span className={styles.titleLine} />
    </h2>
  );
};
