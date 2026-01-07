"use client";
import { LinkButton } from "../ui/LinkButton/LinkButton";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./header.module.scss";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const MobileNavMenu = () => {
  return createPortal(
    <motion.div
      className={styles.mobileNavMenu}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.35 },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { ease: "easeIn", duration: 0.25 },
      }}
    >
      <motion.nav
        className={styles.navigation}
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.ul className={styles.navList}>
          <motion.li variants={itemVariants} className={styles.navListItem}>
            <Link href="/">About Us</Link>
          </motion.li>
          <motion.li variants={itemVariants} className={styles.navListItem}>
            <Link href="/menu">The Chef</Link>
          </motion.li>
          <motion.li variants={itemVariants} className={styles.navListItem}>
            <Link href="/menu">Menu</Link>
          </motion.li>
          <motion.li variants={itemVariants} className={styles.navListItem}>
            <Link href="/menu">For Partners</Link>
          </motion.li>
          <motion.li variants={itemVariants} className={styles.navListItem}>
            <Link href="/menu">Contact</Link>
          </motion.li>
        </motion.ul>
      </motion.nav>

      <LinkButton href="/menu" text="Order Online" variant="black" />
    </motion.div>,
    document.getElementById("modal-root") as HTMLElement
  );
};
