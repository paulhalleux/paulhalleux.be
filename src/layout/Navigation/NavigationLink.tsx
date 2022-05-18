import clsx from "clsx";
import {useNavigation} from "./NavigationContext";

type NavigationLinkProps = {
    href: string;
    label: string;
    order: number;
}

export default function NavigationLink({href, label, order}: NavigationLinkProps) {
    const active = useNavigation()[0];

    return <a data-active={active === href.toLowerCase()}
              href={href} className={clsx("navigation__menu-item")}>
        {label}
    </a>
}