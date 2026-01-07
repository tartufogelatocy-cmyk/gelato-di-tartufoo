import LogoImage from "@/assets/images/logotypeWithDecr.png";
import Image from "next/image";
import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={LogoImage} className={styles.logoImage} alt="Logo" fill />
    </div>
  );
};
