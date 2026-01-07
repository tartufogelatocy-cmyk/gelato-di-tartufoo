import clsx from "clsx";
import styles from "./linkButton.module.scss";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  variant: "black" | "white";
}

export const LinkButton = ({ href, text, variant }: LinkButtonProps) => {
  const buttonClassName = clsx(styles.orderOnlineButton, {
    [styles.blackButton]: variant === "black",
    [styles.whiteButton]: variant === "white",
  });

  return (
    <Link href={href} className={buttonClassName}>
      {text}
    </Link>
  );
};
