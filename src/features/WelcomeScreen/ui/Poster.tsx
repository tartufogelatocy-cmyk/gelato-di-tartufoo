import styles from "@/features/WelcomeScreen/styles/poster.module.scss";
import InstagramIcon from "@/features/WelcomeScreen/assets/icons/inst.svg";
import ShareIcon from "@/features/WelcomeScreen/assets/icons/copy.svg";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

interface PosterProps {
  title: string;
  image: string;
  resetPoster: () => void;
}

export const Poster = ({ title, image, resetPoster }: PosterProps) => {
  const handleShare = useCallback(async () => {
    const posterUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${image}`
        : image;

    const shareData = {
      title: title,
      text: `I rolled the roulette and got: ${title}`,
      url: posterUrl,
    } as ShareData;

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled", err);
      }
    } else {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(posterUrl);
        } else {
          const tmp = document.createElement("input");
          tmp.value = posterUrl;
          document.body.appendChild(tmp);
          tmp.select();
          document.execCommand("copy");
          document.body.removeChild(tmp);
        }
        alert("Link copied to clipboard");
      } catch (err) {
        console.error("Copy failed", err);
      }
    }
  }, [title, image]);

  return (
    <div className={styles.poster}>
      <div className={styles.posterOverlay} />

      <h3 className={styles.posterTitle}>{title}</h3>

      <div className={styles.posterImage}>
        <Image
          src={encodeURI(image)}
          alt="Poster"
          fill
          unoptimized
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={styles.shareContainer}>
        <div className={styles.shareItem}>
          <p className={styles.shareItemText}>Share:</p>
          <div className={styles.shareItemIcons}>
            <Link
              href="https://www.instagram.com/tartufo_gelato/"
              target="_blank"
              className={styles.icon}
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={19}
                height={19}
              />
            </Link>

            <button
              className={`${styles.icon} ${styles.shareIcon}`}
              onClick={handleShare}
            >
              <Image src={ShareIcon} alt="Share Icon" width={19} height={19} />
            </button>
          </div>
        </div>

        <button className={styles.spinAgainButton} onClick={resetPoster}>
          Spin Again
        </button>
      </div>
    </div>
  );
};
