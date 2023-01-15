import styles from "./Page.module.scss";
import React, { PropsWithChildren } from "react";
import { PageSidebar } from "./PageSidebar";

export function Page({ children }: PropsWithChildren) {
  return <div className={styles["page-layout"]}>{children}</div>;
}

Page.Sidebar = PageSidebar;
