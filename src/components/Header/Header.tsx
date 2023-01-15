import styles from "./Header.module.scss";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header__title}>
        <h2>paul-halleux</h2>
      </section>
      <HeaderNavigation />
    </header>
  );
}
