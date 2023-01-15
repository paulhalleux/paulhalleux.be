import styles from "./OpenedFiles.module.scss";
import clsx from "clsx";
import React, { useContext } from "react";
import { AboutContext } from "../Pages/About/AboutContext";
import { useLocation, useNavigate } from "react-router";

export function OpenedFiles() {
  const { openedFiles, setOpenedFiles } = useContext(AboutContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles["opened-files"]}>
      {openedFiles.map((file) => (
        <File
          name={file.name}
          selected={pathname.endsWith(file.path)}
          onSelect={() => navigate(file.path)}
          onClose={() => {
            if (pathname.endsWith(file.path)) {
              const otherFiles = openedFiles.filter(
                (f) => f.path !== file.path
              );
              navigate(
                otherFiles.length === 0 ? "/about" : otherFiles[0]?.path
              );
            }
            setOpenedFiles((prevState) =>
              prevState.filter((f) => f.path !== file.path)
            );
          }}
        />
      ))}
    </header>
  );
}

type FileProps = {
  selected?: boolean;
  name: string;
  onSelect: () => void;
  onClose: () => void;
};

export function File({selected, name, onSelect, onClose}: FileProps) {
  const onCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClose();
  };

  return (
    <div
      onAuxClick={onCloseClick}
      onClick={onSelect}
      className={clsx(styles.file, selected && styles["file--selected"])}
    >
      <p>{name}</p>
      <button onClick={onCloseClick}>
        <i className="ri-close-line"/>
      </button>
    </div>
  );
}
