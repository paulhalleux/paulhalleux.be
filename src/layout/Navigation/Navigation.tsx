import HeaderLogo from "../../assets/images/header-logo.svg";
import IconGithub from "../../assets/images/icon-github.svg";
import IconLinkedin from "../../assets/images/icon-linkedin.svg";
import clsx from "clsx";
import Grid from "../../components/_layout/Grid/Grid";
import NavigationLink from "./NavigationLink";
import {useNavigation} from "./NavigationContext";
import {useEventListener} from "../../hooks/use-event-listener";
import Container from "../../components/_layout/Container/Container";

const menuItems = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "About me"},
    {href: "#work", label: "My work"},
    {href: "#skills", label: "My skills"},
    {href: "#contact", label: "Contact me"},
];

export default function Navigation() {
    const setActive = useNavigation()[1];

    useEventListener("hashchange", () => {
        setActive(window.location.hash.toLowerCase())
    });

    return <div className={clsx("navigation")}>
        <Container>
            <Grid cols="25% 50% 25%">
                <img className={clsx("navigation__brand")} src={HeaderLogo} alt="Logo"/>
                <nav role="navigation" className={clsx("navigation__menu")}>
                    {menuItems.map(({href, label}, index) =>
                        <NavigationLink order={index} href={href} label={label} key={href}/>)}
                </nav>
                <nav role="navigation" className={clsx("navigation__socials")}>
                    <a href="https://www.linkedin.com/in/paulhalleux/" target="_blank" rel="noreferrer">
                        <img src={IconLinkedin} alt="Github Link Icon"/>
                    </a>
                    <a href="https://github.com/paulhalleux" target="_blank" rel="noreferrer">
                        <img src={IconGithub} alt="Github Link Icon"/>
                    </a>
                </nav>
            </Grid>
        </Container>
    </div>
}