import styles from "@/features/MainPage/styles/ourChef.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import Chef from "@/features/MainPage/assets/images/chef.jpg";
import Image from "next/image";
export const OurChef = () => {
  return (
    <section id="chef" className={styles.ourChef}>
      <SectionTitle text="Our Chef" />

      <h3 className={styles.chefName}>Massimo Pignata</h3>

      <div className={styles.chefImage}>
        <div className={styles.imageOverlay} />
        <div className={styles.imageContainer}>
          <Image
            src={Chef}
            alt="Massimo Pignata"
            className={styles.image}
            fill
          />
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Italian gelato artisan from Piedmont, whose work has helped shape the
          modern gelato scene.
        </p>

        <p className={styles.meritLeft}>
          Founder of Delizia Barcelona, Massimo is recognized
          among TripAdvisor’s #1 gelato in Spain and Los 100 Mejores de la
          Gastronomía Española.
        </p>

        <p className={styles.meritRight}>
          His vision redefined gelato — transforming it from a simple dessert
          into a refined, adult experience, created for those who seek depth,
          purity, and real flavor.
        </p>
      </div>
    </section>
  );
};
