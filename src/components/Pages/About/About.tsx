import styles from "./About.module.scss";
import { Page } from "../Page";
import { SidebarGroup } from "../../Sidebar/SidebarGroup";
import { TreeItem } from "../../TreeItem/TreeItem";
import { OpenedFiles } from "../../OpenedFiles/OpenedFiles";
import { AboutContext, AboutProvider } from "./AboutContext";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import { EmptyState } from "../../EmptyState/EmptyState";
import { AboutHobbies } from "./AboutHobbies";
import { AboutEvs } from "./AboutEvs";
import { AboutGraduate } from "./AboutGraduate";
import { AboutHighSchool } from "./AboutHighSchool";

export function About() {
  return (
    <AboutProvider>
      <AboutContent />
    </AboutProvider>
  );
}

const files = [
  {
    icon: {
      color: "var(--c-red)",
      type: "ri-folder-3-fill",
    },
    name: "interests",
    defaultOpened: true,
    children: [
      {
        path: "/about/hobbies",
        icon: "ri-markdown-fill",
        name: "hobbies.md",
        component: AboutHobbies,
      },
    ],
  },
  {
    icon: {
      color: "var(--c-blue)",
      type: "ri-folder-3-fill",
    },
    name: "education",
    defaultOpened: true,
    children: [
      {
        path: "/about/high-school",
        icon: "ri-markdown-fill",
        name: "high-school.md",
        component: AboutHighSchool,
      },
      {
        path: "/about/graduate-studies",
        icon: "ri-markdown-fill",
        name: "graduate-studies.md",
        component: AboutGraduate,
      },
    ],
  },
  {
    icon: {
      color: "var(--c-green)",
      type: "ri-folder-3-fill",
    },
    name: "work",
    defaultOpened: true,
    children: [
      {
        path: "/about/work/evs-broadcast-equipment",
        icon: "ri-markdown-fill",
        name: "evs-broadcast-equipment.md",
        component: AboutEvs,
      },
    ],
  },
];

function AboutContent() {
  const { setOpenedFiles, openedFiles } = useContext(AboutContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onFileOpen = (path: string, name: string) => {
    if (!openedFiles.find((file) => file.path === path))
      setOpenedFiles((prevState) => [{ path, name }, ...prevState]);
    navigate(path);
  };

  useEffect(() => {
    const flatFiles = files.flatMap((value) => value.children);
    const sectionFile = flatFiles.find((value) =>
      value.path.toLowerCase().endsWith(pathname.toLowerCase())
    );
    if (sectionFile) {
      setOpenedFiles((prev) => [sectionFile, ...prev]);
    }
  }, []);

  return (
    <div className={styles.about}>
      <Page>
        <Page.Sidebar>
          <SidebarGroup title="personal-info">
            {files.map((value) => (
              <TreeItem
                icon={
                  <i
                    className={value.icon.type}
                    style={{ color: value.icon.color }}
                  />
                }
                defaultOpened={value.defaultOpened}
                name={value.name}
                children={value.children.map((child) => ({
                  icon: <i className={child.icon} />,
                  name: child.name,
                  onClick: () => onFileOpen(child.path, child.name),
                  selected: pathname
                    .toLowerCase()
                    .endsWith(child.path.toLowerCase()),
                }))}
              />
            ))}
          </SidebarGroup>
          <SidebarGroup title="contacts">
            <TreeItem
              href="mailto:mail@paulhalleux.be"
              icon={<i className="ri-mail-fill" />}
              name="mail@paulhalleux.be"
            />
            <TreeItem
              href="tel:+32478840971"
              icon={<i className="ri-phone-fill" />}
              name="+32478 84 09 71"
            />
          </SidebarGroup>
        </Page.Sidebar>
        <div className={styles.content}>
          <OpenedFiles />
          <Routes>
            {files
              .flatMap((value) => value.children)
              .map(({ component: Component, ...file }) => (
                <Route
                  path={file.path.replace("/about/", "")}
                  element={Component ? <Component /> : null}
                />
              ))}
            <Route
              path="*"
              element={<EmptyState title="Select a page to start." />}
            />
          </Routes>
        </div>
      </Page>
    </div>
  );
}
