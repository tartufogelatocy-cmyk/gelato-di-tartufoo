"use client";
import styles from "@/features/WelcomeScreen/styles/poster.module.scss";
// import InstagramIcon from "@/features/WelcomeScreen/assets/icons/inst.svg";
import CopyURLIcon from "@/features/WelcomeScreen/assets/icons/copy.svg";
import UploadIcon from "@/features/WelcomeScreen/assets/icons/upload.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { CopiedModal } from "./CopiedModal";

interface PosterProps {
  id: number;
  title: string;
  image: string;
  resetPoster: () => void;
}

export const Poster = ({ id, title, image, resetPoster }: PosterProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const tmp = document.createElement("input");
        tmp.value = text;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand("copy");
        document.body.removeChild(tmp);
      }
      setCopied(true);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }, []);

  // Share to social media
  const handleShare = useCallback(async () => {
    const posterUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/roulette/poster/${id}`
        : `https://tartufo-gelato.com/roulette/poster/${id}`;

    const shareData: ShareData = {
      title,
      text: `I rolled the roulette and got: ${title}`,
      url: posterUrl,
    };

    const nav = navigator as Navigator & {
      canShare?: (data?: ShareData) => boolean;
    };

    if (nav.share && nav.canShare?.(shareData)) {
      try {
        await nav.share(shareData);
      } catch (err) {
        console.log("Share cancelled", err);
      }
    } else {
      copyToClipboard(posterUrl);
    }
  }, [id, title, copyToClipboard]);

  // Copy to clipboard
  const handleCopy = useCallback(async () => {
    const rouletteUrl = "https://tartufo-gelato.com/roulette";
    await copyToClipboard(rouletteUrl);
  }, [copyToClipboard]);

  return (
    <>
      <div className={styles.poster}>
        <div className={styles.posterOverlay} />

        <h3 className={styles.posterTitle}>{title}</h3>

        <motion.div
          className={styles.posterImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Image
            src={image}
            alt="Poster"
            fill
            unoptimized
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        <div className={styles.shareContainer}>
          <div className={styles.shareItem}>
            <p className={styles.shareItemText}>Share:</p>
            <div className={styles.shareItemIcons}>
              <button
                className={styles.icon}
                onClick={handleCopy}
                type="button"
              >
                <Image
                  src={CopyURLIcon}
                  alt="Copy URL"
                  width={19}
                  height={19}
                />
              </button>

              <button className={styles.icon} onClick={handleShare}>
                <Image
                  src={UploadIcon}
                  alt="Upload Icon"
                  width={19}
                  height={19}
                />
              </button>
            </div>
          </div>

          <button className={styles.spinAgainButton} onClick={resetPoster}>
            Spin Again
          </button>
        </div>
      </div>

      <AnimatePresence>{copied && <CopiedModal />}</AnimatePresence>
    </>
  );
};
