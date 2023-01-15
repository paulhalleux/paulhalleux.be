import { NavigationLink } from "../NavigationLink/NavigationLink";
import styles from "./FooterNavigation.module.scss";

export function FooterNavigation() {
  return (
    <nav className={styles["footer-navigation"]}>
      <ul>
        <li>
          <NavigationLink
            external
            icon
            to="https://www.linkedin.com/in/paulhalleux/"
            label={<i className="ri-linkedin-box-fill" />}
          />
        </li>
      </ul>
      <section className={styles.footer__git}>
        <NavigationLink
          external
          to="https://github.com/paulhalleux"
          label={
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              @paulhalleux
              <i style={{ fontSize: 18 }} className="ri-github-fill" />
            </span>
          }
        />
      </section>
    </nav>
  );
}
