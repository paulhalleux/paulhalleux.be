import {ReactNode} from "react";
import clsx from "clsx";

import styles from "./Card.module.scss";

type CardProps = {
    children?: ReactNode;
    className?: string;
}

export default function Card({ children, className }: CardProps) {
    return <div className={styles.card__wrapper}>
        <article className={clsx(styles.card, className)}>
            {children}
        </article>
        <span className={styles.card__panel}/>
    </div>
}

type CardContainableProps = {
    children: ReactNode;
}

Card.Header = ({children}: CardContainableProps) => {
    return <header className={styles.card__header}>{children}</header>
}

Card.Title = ({children}: CardContainableProps) => {
    return <h3 className={styles.card__title}>{children}</h3>
}

Card.Body = ({children}: CardContainableProps) => {
    return <div className={styles.card__body}>{children}</div>
}

Card.Footer = ({children}: CardContainableProps) => {
    return <footer className={styles.card__footer}>{children}</footer>
}

type CardThumbnailProps = {
    src: string;
    alt: string;
    size?: {width?: number | string, height?: number | string}
}

Card.Thumbnail = ({src, alt = "Card Thumbnail", size}: CardThumbnailProps) => {
    return <div className={styles.card__thumbnail} style={size}>
        <img src={src} alt={alt} />
    </div>
}