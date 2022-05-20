import SectionTitle from "../components/SectionTitle/SectionTitle";
import clsx from "clsx";
import IconFire from "../assets/images/icon-fire.svg";
import IconFist from "../assets/images/icon-fist.svg";
import IconArrowMove from "../assets/images/icon-arrow-move.svg";
import Grid from "../components/_layout/Grid/Grid";
import InfoItem from "../components/InfoItem/InfoItem";

export default function AboutSection() {
    return <section>
        <SectionTitle anchor="about" sectionName="AboutMe" title="Who am I, my passions and qualities" renderAddon={AboutTitleAddon} />
        <Grid responsive={{min: 300, max: "auto"}} gap={40} className="section__about-info">
            <InfoItem icon={IconFire} title="Passionate" description="My name is Paul Halleux, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <InfoItem icon={IconFist} title="Motivated" description="My name is Paul Halleux, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <InfoItem icon={IconArrowMove} title="Polyvalient" description="My name is Paul Halleux, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Grid>
    </section>
}

function AboutTitleAddon() {
    return <div className={clsx("section__about-addon")} />
}