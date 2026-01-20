import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/logolightpng.png";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import IceCream from "@/features/MainPage/assets/images/Group.png";

export const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.columnContainer}>
        <h3 className={styles.columnTitle}>Contact us</h3>

        <div className={styles.contactInfo}>
          <div className={styles.contactInfoItem}>
            <h4 className={styles.contactInfoItemTitle}>Phone</h4>
            <Link
              href="tel:+35794334440"
              className={styles.contactInfoItemValue}
            >
              +357 94 33 44 40
            </Link>
          </div>

          <div className={styles.contactInfoItem}>
            <h4 className={styles.contactInfoItemTitle}>Email</h4>
            <Link
              href="mailto:tartufo.gelato.cy@gmail.com"
              target="_blank"
              className={styles.contactInfoItemValue}
            >
              tartufo.gelato.cy@gmail.com
            </Link>
          </div>

          <div className={styles.contactInfoItem}>
            <h4 className={styles.contactInfoItemTitle}>Address</h4>
            <Link
              href="https://maps.app.goo.gl/h11Wo5BmNNyoMnCk8?g_st=ic"
              target="_blank"
              className={`${styles.contactInfoItemValue} ${styles.address}`}
            >
              16 Georgiou Gennadiou, Old Town, 3041 Limassol
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${styles.columnContainer} ${styles.descriptionContainer}`}
      >
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="Logo" fill style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={`${styles.contactInfoItemValue} ${styles.description}`}>
            Crafted daily using natural ingredients, guided by seasonality, and
            created to express pure, honest flavor.
          </p>

          <p className={styles.copyrightDesktop}>
            © 2025 Gelato di Tartufo. All rights reserved.
          </p>
        </div>
      </div>

      <div className={`${styles.columnContainer} ${styles.followUsContainer}`}>
        <h3 className={styles.columnTitle}>Follow us</h3>

        <div className={styles.socialLinks}>
          <Link
            href="https://www.instagram.com/tartufo_gelato?igsh=MXV1OHpydDRxeXd3ZQ=="
            target="_blank"
            className={styles.socialLink}
          >
            <Image src={Instagram} alt="Instagram" width={19} height={19} />
          </Link>

          <Link
            href="https://www.facebook.com/share/1AY9TLBWtb/?mibextid=wwXIfr"
            target="_blank"
            className={styles.socialLink}
          >
            <Image src={Facebook} alt="Facebook" width={20} height={20} />
          </Link>
        </div>
      </div>

      <p className={styles.copyrightMobile}>
        © 2025 Gelato di Tartufo. All rights reserved.
      </p>

      <div className={styles.iceCreamContainer}>
        <Image
          src={IceCream}
          alt="Ice Cream"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </footer>
  );
};
