"use client";
import styles from "./header.module.scss";
import { Logo } from "../ui/Logo/Logo";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { MobileNavMenu } from "./MobileNavMenu";
import Link from "next/link";
import { LinkButton } from "../ui/LinkButton/LinkButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.navigationDesktop}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/#about-us">About Us</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/#chef">The Chef</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/menu">Menu</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/#partners">For Partners</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.navigationDesktop}>
        <LinkButton
          href="https://wolt.com/el/cyp/limassol/restaurant/tartufo-gelato"
          target="_blank"
          text="Order Online"
          variant="black"
        />
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
        {isOpen && (
          <MobileNavMenu key="mobile-nav" onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};
