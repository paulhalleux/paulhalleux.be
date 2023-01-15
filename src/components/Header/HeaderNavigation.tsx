import styles from "./HeaderNavigation.module.scss";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export function HeaderNavigation() {
  return (
    <nav className={styles["header-navigation"]}>
      <ul>
        <li>
          <NavigationLink to="/" label="_hello" />
        </li>
        <li>
          <NavigationLink to="/about" label="_about-me" />
        </li>
        <li>
          <NavigationLink to="/projects" label="_projects" />
        </li>
      </ul>
      <section className={styles.header__contact}>
        <NavigationLink to="/contact" label="_contact-me" />
      </section>
    </nav>
  );
}
