import SectionTitle from "../components/SectionTitle/SectionTitle";
import clsx from "clsx";

export default function ContactSection() {
    return <section>
        <SectionTitle anchor="contact" sectionName="ContactMe" title="How to get in touch with me" renderAddon={ContactTitleAddon} />
    </section>
}

function ContactTitleAddon() {
    return <div className={clsx("section__contact-addon")} />
}