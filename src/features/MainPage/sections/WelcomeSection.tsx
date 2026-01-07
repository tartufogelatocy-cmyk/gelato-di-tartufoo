import styles from "@/features/MainPage/styles/welcomeSection.module.scss";
import BracerIcon from "@/features/MainPage/assets/icons/braces.svg";
import Image from "next/image";
import LogoImage from "@/assets/images/logolightpng.png";

export const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.leftSide}>
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          controlsList="nodownload nofullscreen noplaybackrate"
          poster="/images/videoPreview.png"
          className={styles.video}
        >
          <source src="/videos/video.webm" type="video/webm" />
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.bg} />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Italian Gelato <br /> Crafted Without{" "}
            <span className={styles.highlight}>Compromise</span>
          </h1>
          <p className={styles.description}>
            Made with natural ingredients, guided by seasonality,and created to
            express pure, authentic flavor.
          </p>
          <div className={styles.bracerIcon}>
            <Image src={BracerIcon} alt="BracerIcon" />
          </div>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image src={LogoImage} alt="Logo" fill className={styles.logo} />
      </div>
    </section>
  );
};
