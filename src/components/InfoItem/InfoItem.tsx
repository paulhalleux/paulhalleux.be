import styles from "./InfoItem.module.scss";
import clsx from "clsx";
import Text from "../_typography/Text/Text";

type InfoItemProps = {
    icon: string;
    title: string;
    description: string;
}

export default function InfoItem({ icon, title, description }: InfoItemProps) {
    return <article className={clsx(styles["info-item"])}>
        <div className={styles.icon}>
            <img src={icon} alt="Info Icon"/>
        </div>
        <h3>{title}</h3>
        <Text secondary>{description}</Text>
    </article>
}