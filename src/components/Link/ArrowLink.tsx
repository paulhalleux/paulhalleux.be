import Flex from "../_layout/Flex/Flex";
import {MouseEvent} from "react";
import clsx from "clsx";

import styles from "./ArrowLink.module.scss"
import ArrowIcon from "../_icons/ArrowIcon";

type ArrowLinkProps = {
    href: string;
    label: string;
    className?: string;
    target?: string;
    type?: "secondary" | "primary";
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function ArrowLink({href, label, className, target, onClick, type = "primary"}: ArrowLinkProps) {
    return <a href={href} target={target} onClick={onClick} className={clsx(styles.button, className, type === "secondary" && styles["button--secondary"])}>
        <Flex gap={5} justify="end" align="center">
            <ArrowIcon />
            <span>{label}</span>
        </Flex>
    </a>
}