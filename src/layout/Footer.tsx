import HeaderLogo from "../assets/images/header-logo.svg"
import clsx from "clsx";
import Flex from "../components/_layout/Flex/Flex";

export default function Footer() {
    return <footer className={clsx("footer")}>
        <div className={clsx("footer__brand")}>
            <img src={HeaderLogo} alt="Logo"/>
        </div>
        <Flex className={clsx("footer__copyright")} justify="space-between">
            <p>Designed and developed with ♥ by Paul Halleux</p>
            <p>© {new Date().getFullYear()}, All rights reserved</p>
        </Flex>
    </footer>
}