import styles from "@/features/RoulettePage/styles/copiedModal.module.scss";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export const CopiedModal = () => {
  return createPortal(
    <motion.div
      className={styles.copiedModal}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className={styles.copiedModalTitle}>Link copied!</h1>
    </motion.div>,
    document.getElementById("modal-root") as HTMLElement
  );
};
