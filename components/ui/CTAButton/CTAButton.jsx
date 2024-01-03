import styles from "./CTAButton.module.css";
export default function CTAButton({ cta, children }) {
  return (
    <button submit={cta} className={styles.ctaButton}>
      {children}
    </button>
  );
}
