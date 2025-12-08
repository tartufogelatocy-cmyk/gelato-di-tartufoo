"use client";
import styles from "@/features/WelcomeScreen/styles/welcomeScreen.module.scss";
import LogoImage from "@/features/WelcomeScreen/assets/images/logo.png";
import InstagramIcon from "@/features/WelcomeScreen/assets/icons/inst.svg";
import PhoneIcon from "@/features/WelcomeScreen/assets/icons/phone.svg";
import Link from "next/link";
import Image from "next/image";
import { Roulete } from "./ui/Roulete";
import { Poster } from "./ui/Poster";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Movie } from "@/types/movies";

export const WelcomeScreen = () => {
  const [poster, setPoster] = useState<Movie | null>(null);

  return (
    <div className={styles.welcomeScreen}>
      {/* Logo fade-in animation */}
      <motion.div
        className={styles.logoContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image src={LogoImage} alt="Logo" width={95} height={89} />
      </motion.div>

      <div className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hey, sweety!
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          You’re all set for the coziest night: blanket ready, movie loading,
          and a gelateria gift to make it extra special.
        </motion.p>
      </div>

      <div className={styles.filmStockContainer}>
        <motion.div
          className={styles.filmStock}
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <p className={styles.actionText}>
        Grab your Gelato di Tartufo{" "}
        <span className={styles.actionTextItalic}>and spin the roulette.</span>
      </p>

      <AnimatePresence mode="wait">
        {poster ? (
          <motion.div
            key="poster"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Poster
              id={poster.id}
              title={poster.name}
              image={poster.path}
              resetPoster={() => setPoster(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="roulette"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Roulete randomPoster={(p) => setPoster(p)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {poster ? (
          <motion.p
            key="poster-msg"
            className={`${styles.actionText} ${styles.actionTextSecond}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Great choice! <br />
            <span className={styles.actionTextItalic}>
              You can always take another spin, but the real goodies are waiting
              for you at the gelateria.
            </span>
          </motion.p>
        ) : (
          <motion.p
            key="roulette-msg"
            className={`${styles.actionText} ${styles.actionTextSecond}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Let the wheel pick your movie for tonight{" "}
            <span className={styles.actionTextItalic}>
              — and we’d love to see your tag in stories!
            </span>
          </motion.p>
        )}
      </AnimatePresence>

      <div className={styles.contactContainer}>
        <Link
          href="https://www.instagram.com/tartufo_gelato/"
          className={styles.contactItem}
          target="_blank"
        >
          <Image src={InstagramIcon} alt="Instagram" width={26} height={26} />
          <p className={styles.contactItemText}>tartufo_gelato</p>
        </Link>

        <Link href="tel:94334440" className={styles.contactItem}>
          <Image src={PhoneIcon} alt="Phone" width={25} height={25} />
          <p className={styles.contactItemText}>94 334440</p>
        </Link>
      </div>
    </div>
  );
};
