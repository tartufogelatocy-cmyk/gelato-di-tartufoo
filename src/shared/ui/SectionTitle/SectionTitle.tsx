import styles from "./sectionTitle.module.scss";

interface SectionTitleProps {
  text: string;
  backgroundColor?: string;
  color?: string;
}

export const SectionTitle = ({
  text,
  backgroundColor = "#f7eee3",
  color = "#2b2c2c",
}: SectionTitleProps) => {
  return (
    <h2 className={styles.title} style={{ color: color }}>
      <span
        className={styles.text}
        style={{ backgroundColor: backgroundColor }}
      >
        {text}
      </span>
      <span className={styles.titleLine} style={{ backgroundColor: color }} />
    </h2>
  );
};
