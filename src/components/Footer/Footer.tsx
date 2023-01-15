import styles from "./Footer.module.scss";
import { FooterNavigation } from "./FooterNavigation";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>Find me in:</p>
      <FooterNavigation />
    </footer>
  );
}
