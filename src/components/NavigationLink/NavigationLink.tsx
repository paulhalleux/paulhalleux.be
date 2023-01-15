import clsx from "clsx";
import styles from "./NavigationLink.module.scss";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type NavigationLinkProps = {
  to: string;
  label: ReactNode;
  external?: boolean;
  icon?: boolean;
};

export function NavigationLink({
  to,
  label,
  external,
  icon,
}: NavigationLinkProps) {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        className={clsx(
          styles["navigation-link"],
          styles.external,
          icon && styles.icon
        )}
      >
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          styles["navigation-link"],
          isActive && styles.active,
          icon && styles.icon
        )
      }
    >
      {label}
    </NavLink>
  );
}
