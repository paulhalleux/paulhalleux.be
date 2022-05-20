import SectionTitle from "../components/SectionTitle/SectionTitle";
import clsx from "clsx";
import Flex from "../components/_layout/Flex/Flex";
import Pill from "../components/Pill/Pill";
import Grid from "../components/_layout/Grid/Grid";
import Card from "../components/Card/Card";
import Text from "../components/_typography/Text/Text";
import {useRef} from "react";
import {useResponsiveGrid} from "../hooks/use-responsive-grid";
import ArrowLink from "../components/Link/ArrowLink";

export default function SkillsSection() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].splice(0, 10);

    const gridRef = useRef<HTMLDivElement>(null);
    const gridItems = useResponsiveGrid(gridRef, items, {
        uniqueColumnItemCount: 4
    });

    return <section className="section__skills">
        <SectionTitle anchor="skills" sectionName="MySkills" title="List of my current and future Skills"
                      renderAddon={SkillsTitleAddon}/>
        <Flex gap={10} className="section__skills-pills" wrap="wrap">
            {items.map(i => <Pill key={i}>Skill {i}</Pill>)}
        </Flex>
        <Grid elementRef={gridRef} gap={30} responsive={{min: 350, max: "auto"}} className="section__skills-grid">
            {gridItems.map(i => <Card key={i}>
                <Card.Header>
                    <Card.Title>JavaScript</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laudantium porro quaerat quod rem?
                        Assumenda blanditiis debitis eligendi excepturi explicabo qui quis reiciendis totam voluptas!
                    </Text>
                </Card.Body>
            </Card>)}
        </Grid>
        <Flex justify="center" align="center">
            <ArrowLink href={"/"} label="View everything" type="secondary"/>
        </Flex>
    </section>
}

function SkillsTitleAddon() {
    return <div className={clsx("section__skills-addon")}/>
}