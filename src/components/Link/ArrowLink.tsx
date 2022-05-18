import IconArrow from "../../assets/images/icon-arrow.svg";
import Flex from "../layout/Flex/Flex";
import {MouseEvent} from "react";
import clsx from "clsx";

import styles from "./ArrowLink.module.scss"

type ArrowLinkProps = {
    href: string;
    label: string;
    className?: string;
    target?: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function ArrowLink({href, label, className, target, onClick}: ArrowLinkProps) {
    return <a href={href} target={target} onClick={onClick} className={clsx(styles.button, className)}>
        <Flex gap={5} justify="end" align="center">
            <img src={IconArrow} alt="Arrow Link Icon"/>
            {label}
        </Flex>
    </a>
}