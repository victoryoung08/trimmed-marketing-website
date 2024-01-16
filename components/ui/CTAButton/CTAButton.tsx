import styles from "./CTAButton.module.css";

interface CTAButtonProps {
  children: React.ReactNode;
}

export default function CTAButton({ children }: CTAButtonProps) {
  return (
    <button type="submit" className={styles.ctaButton}>
      {children}
    </button>
  );
}
