import HeaderLogo from "../assets/images/header-logo.svg";
import IconGithub from "../assets/images/icon-github.svg";
import IconLinkedin from "../assets/images/icon-linkedin.svg";
import clsx from "clsx";
import Flex from "../components/layout/Flex/Flex";
import Grid from "../components/layout/Grid/Grid";
import {useState} from "react";

export default function Navigation() {
    const [active, setActive] = useState("home");

    return <Grid className={clsx("navigation")} cols="25% 50% 25%">
        <img className={clsx("navigation__brand")} src={HeaderLogo} alt="Logo"/>
        <nav className={clsx("navigation__menu")}>
            <NavigationLink current={active} href={"home"} label={"Home"} />
            <NavigationLink current={active} href={"about"} label={"About me"} />
            <NavigationLink current={active} href={"skills"} label={"My skills"} />
            <NavigationLink current={active} href={"work"} label={"My work"} />
            <NavigationLink current={active} href={"contact"} label={"Contact me"} />
        </nav>
        <nav className={clsx("navigation__socials")}>
            <a href="https://www.linkedin.com/in/paulhalleux/" target="_blank" rel="noreferrer">
                <img src={IconLinkedin} alt="Github Link Icon"/>
            </a>
            <a href="https://github.com/paulhalleux" target="_blank" rel="noreferrer">
                <img src={IconGithub} alt="Github Link Icon"/>
            </a>
        </nav>
    </Grid>
}

type NavigationLinkProps = {
    current: string;
    href: string;
    label: string;
}

export function NavigationLink({current, href, label}: NavigationLinkProps) {
    return <a data-active={current === href} href={`#${href}`} className={clsx("navigation__menu-item")}>{label}</a>
}