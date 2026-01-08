import styles from "@/features/MainPage/styles/forPartners.module.scss";
import { GelatoIcon } from "@/shared/ui/icons/GelatoIcon";

interface ForPartnersItemProps {
  title: string;
  description: string;
}

export const ForPartnersItem = ({
  title,
  description,
}: ForPartnersItemProps) => {
  return (
    <div className={styles.forPartnersItem}>
      <div className={styles.imageContainer}>
        {/* size и color можно задавать через пропсы */}
        <GelatoIcon color="#F7EEE3" />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
