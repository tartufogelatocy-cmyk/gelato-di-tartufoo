import styles from "@/features/MainPage/styles/aboutUs.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { AboutUsItem } from "../ui/AboutUsItem";
import IceCream from "@/features/MainPage/assets/images/icecream.jpg";
import Lemon from "@/features/MainPage/assets/images/lemon.jpg";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <SectionTitle text="About Us" />

      <div className={styles.content}>
        <div className={styles.imageContainer1}>
          <Image
            src={IceCream}
            alt="About Us"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.contentItems}>
          <AboutUsItem
            title="Authentic Italian Craft"
            description="Rooted in Italian gelato tradition, we craft each flavor using time-honored techniques and a deep respect for the original recipes that define true artisanal gelato."
          />

          <AboutUsItem
            title="Natural Ingredients"
            description="Only carefully selected, high-quality ingredients make it into our gelato. No shortcuts, no additives — just honest flavors that speak for themselves."
          />
        </div>
      </div>

      <div className={styles.contentReverse}>
        <div className={styles.contentItems2}>
          <AboutUsItem
            title="Seasonality & Freshness"
            description="Our flavors follow the rhythm of the seasons. Gelato is produced daily, never stored, ensuring freshness, balance, and consistency in every batch."
          />

          <AboutUsItem
            title="More Than Dessert"
            description="For us, gelato is a ritual. A moment of pleasure, emotion, and connection — created to be savored, remembered, and returned to again and again."
          />
        </div>

        <div className={styles.imageContainer2}>
          <Image
            src={Lemon}
            alt="About Us"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image2}
          />
        </div>
      </div>
    </section>
  );
};
