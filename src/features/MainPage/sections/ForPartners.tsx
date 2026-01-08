import styles from "@/features/MainPage/styles/forPartners.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { ForPartnersItem } from "../ui/ForPartnersItem";
import { LinkButton } from "@/shared/ui/LinkButton/LinkButton";
import Rectangle from "@/features/MainPage/assets/images/Rectangle 8.jpg";
import Image from "next/image";

export const ForPartners = () => {
  return (
    <section>
      <div className={styles.forPartners}>
        <SectionTitle
          text="For Partners"
          backgroundColor="#294037"
          color="#f7eee3"
        />

        <div className={styles.forPartnersItems}>
          <ForPartnersItem
            title="Tailored Gelato Solutions"
            description="For us, gelato is a ritual. A moment of pleasure, emotion, and connection — created to be savored, remembered, and returned to again and again."
          />
          <ForPartnersItem
            title="Consistent Quality at Scale"
            description="From small batches to large volumes, we ensure stable texture, flavor, and performance — crafted daily using the same uncompromising standards."
          />
          <ForPartnersItem
            title="End-to-End Partnership"
            description="Beyond production, we provide technical guidance, menu consulting, and ongoing support — building long-term collaborations, not just supply chains."
          />
        </div>

        <div className={styles.buttonContainer}>
          <LinkButton href="/" text="Contact us" variant="white" />
        </div>
      </div>

      <div className={styles.recImageContainer}>
        <Image
          src={Rectangle}
          alt="Rectangle"
          fill
          className={styles.recImage}
        />
      </div>
    </section>
  );
};
