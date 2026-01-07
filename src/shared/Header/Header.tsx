import Link from "next/link";
import styles from "./header.module.scss";
import { Logo } from "../ui/Logo/Logo";
import { LinkButton } from "../ui/LinkButton/LinkButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.navigation}>
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

      <LinkButton href="/menu" text="Order Online" variant="black" />
    </header>
  );
};
