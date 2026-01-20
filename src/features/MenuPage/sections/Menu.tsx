import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import styles from "@/features/MenuPage/styles/menu.module.scss";
import Image from "next/image";

export const Menu = () => {
  return (
    <section className={styles.menu}>
      <SectionTitle text="Menu" />

      <div className={styles.menuImages}>
        <div className={styles.menuImage}>
          <Image
            src="/images/menu.png"
            alt="Menu"
            width={800}
            height={900}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />{" "}
        </div>
      </div>
    </section>
  );
};
