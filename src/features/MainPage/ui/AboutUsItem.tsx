import Icon from "@/features/MainPage/assets/icons/gela.svg";
import styles from "@/features/MainPage/styles/aboutUs.module.scss";
import Image from "next/image";

interface AboutUsItemProps {
  title: string;
  description: string;
}

export const AboutUsItem = ({ title, description }: AboutUsItemProps) => {
  return (
    <div className={styles.aboutUsItem}>
      <div className={styles.titleContainer}>
        <Image src={Icon} alt={title} width={20} height={20} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
