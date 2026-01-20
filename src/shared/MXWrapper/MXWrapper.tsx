import styles from "./MXWrapper.module.scss";

interface MXWrapperProps {
  children: React.ReactNode;
}

export const MXWrapper = ({ children }: MXWrapperProps) => {
  return <div className={styles.mxWrapper}>{children}</div>;
};
