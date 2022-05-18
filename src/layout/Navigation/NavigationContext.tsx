import {createContext, ReactNode, useContext, useState} from "react";

type NavigationContextProps = {
    active: string;
    setActive: (active: string) => void;
}
export const NavigationContext = createContext<NavigationContextProps>({} as NavigationContextProps);

export default function NavigationProvider({children}: { children: ReactNode }) {
    const [active, setActive] = useState("#home");

    return <NavigationContext.Provider value={{active, setActive}}>
        {children}
    </NavigationContext.Provider>
}

export function useNavigation(): [string, (_: string) => void] {
    const context = useContext(NavigationContext);
    return [context.active, context.setActive];
}