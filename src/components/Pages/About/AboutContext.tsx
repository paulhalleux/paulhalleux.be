import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export type File = { path: string; name: string };
type AboutContextType = {
  openedFiles: File[];
  setOpenedFiles: Dispatch<SetStateAction<File[]>>;
};

export const AboutContext = createContext<AboutContextType>(
  {} as AboutContextType
);

export function AboutProvider({ children }: PropsWithChildren) {
  const [openedFiles, setOpenedFiles] = useState<File[]>([]);

  return (
    <AboutContext.Provider value={{ openedFiles, setOpenedFiles }}>
      {children}
    </AboutContext.Provider>
  );
}
