import styles from "./CTAButton.module.css";

interface CTAButtonProps {
  url?: string;
  children: React.ReactNode;
}

export default function CTAButton({ url = "", children }: CTAButtonProps) {
  return (
    <button type="submit" className={styles.ctaButton}>
      {children}
    </button>
  );
}
