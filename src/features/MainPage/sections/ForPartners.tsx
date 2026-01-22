import styles from "@/features/MainPage/styles/forPartners.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { ForPartnersItem } from "../ui/ForPartnersItem";
import { LinkButton } from "@/shared/ui/LinkButton/LinkButton";
import Rectangle from "@/features/MainPage/assets/images/Rectangle 8.jpg";
import Image from "next/image";

export const ForPartners = () => {
  return (
    <section id="partners">
      <div className={styles.forPartners}>
        <SectionTitle
          text="For Partners"
          backgroundColor="#294037"
          color="#f7eee3"
        />

        <div className={styles.forPartnersItems}>
          <ForPartnersItem
            title="Tailored Dessert Solutions"
            description="We provide a complete dessert solution for HoReCa — restaurants, hotels, beach clubs, and events.
Italian gelato and desserts from our own production, designed for easy integration, stable service, and consistent results."
          />
          <ForPartnersItem
            title="Quality & Expertise"
            description="Our gelato is developed and controlled by an Italian brand chef using professional Italian equipment and ingredients.
We ensure consistency in taste, texture, and presentation, adapted specifically for HoReCa formats."
          />
          <ForPartnersItem
            title="End-to-End Partnership"
            description="We work as a long-term partner, not just a supplier.
From product selection and menu integration to technical guidance and ongoing support, we help our partners operate efficiently and grow sustainably."
          />
        </div>

        <div className={styles.contactInfo}>
          <p className={styles.contactInfoText}>For more information, please contact us.</p>
        </div>

        <div className={styles.buttonContainer}>
          <LinkButton
            href="mailto:tartufo.gelato.cy@gmail.com"
            text="Contact us"
            variant="white"
          />
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
