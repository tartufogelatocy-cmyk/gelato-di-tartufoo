"use client";
import styles from "./header.module.scss";
import { Logo } from "../ui/Logo/Logo";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MobileNavMenu } from "./MobileNavMenu";
import Link from "next/link";
import { LinkButton } from "../ui/LinkButton/LinkButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.navigationDesktop}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/">About Us</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/menu">The Chef</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/menu">Menu</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/menu">For Partners</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/menu">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.navigationDesktop}>
        <LinkButton href="/menu" text="Order Online" variant="black" />
      </div>

      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
        onClick={handleOpen}
      >
        <span className={styles.burgerButtonIcon} />
        <span className={styles.burgerButtonIcon} />
        <span className={styles.burgerButtonIcon} />
      </button>

      <AnimatePresence>
        {isOpen && <MobileNavMenu key="mobile-nav" />}
      </AnimatePresence>
    </header>
  );
};
