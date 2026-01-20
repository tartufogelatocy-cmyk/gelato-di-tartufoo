import LogoImage from "@/assets/images/logotypeWithDecr.png";
import Image from "next/image";
import styles from "./logo.module.scss";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={LogoImage} className={styles.logoImage} alt="Logo" fill />
    </Link>
  );
};
