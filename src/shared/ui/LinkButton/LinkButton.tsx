import clsx from "clsx";
import styles from "./linkButton.module.scss";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  variant: "black" | "white";
  target?: string;
}

export const LinkButton = ({
  href,
  text,
  variant,
  target,
}: LinkButtonProps) => {
  const buttonClassName = clsx(styles.orderOnlineButton, {
    [styles.blackButton]: variant === "black",
    [styles.whiteButton]: variant === "white",
  });

  return (
    <Link href={href} target={target} className={buttonClassName}>
      {text}
    </Link>
  );
};
