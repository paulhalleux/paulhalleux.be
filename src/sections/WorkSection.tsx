/* eslint-disable react-hooks/exhaustive-deps */
import SectionTitle from "../components/SectionTitle/SectionTitle";
import clsx from "clsx";
import Card from "../components/Card/Card";
import Grid from "../components/_layout/Grid/Grid";
import Text from "../components/_typography/Text/Text";
import Flex from "../components/_layout/Flex/Flex";
import ArrowLink from "../components/Link/ArrowLink";
import IconExpand from "../assets/images/icon-expand.svg"
import {useRef} from "react";
import Badge from "../components/Badge/Badge";
import {useResponsiveGrid} from "../hooks/use-responsive-grid";

export default function WorkSection() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].splice(0, 8);

    const gridRef = useRef<HTMLDivElement>(null);
    const gridItems = useResponsiveGrid(gridRef, items, {
        uniqueColumnItemCount: 4
    });

    return <section className="section__work">
        <SectionTitle anchor="work" sectionName="MyWork" title="Project I have done personally"
                      renderAddon={WorkTitleAddon}/>
        <Grid elementRef={gridRef} responsive={{min: 350, max: "auto"}} gap={30} className={clsx("section__work-grid")}>
            {gridItems.map(i => <Card key={i}>
                <Card.Body>
                    <Card.Thumbnail src="https://via.placeholder.com/250" alt={`Thumbnail ${i}`} size={{height: 200}}/>
                    <Card.Title>Project {i}</Card.Title>
                    <Text secondary>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt
                        consectetur,
                        nunc nisl aliquet nunc, euismod aliquam nunc nisl euismod.
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <Flex justify="space-between" align="end" gap={30}>
                        <Flex wrap="wrap" gap={5} className="section__work-badge-container">
                            <Badge>Badge 1</Badge>
                            <Badge>Badge 2</Badge>
                            <Badge>Badge 3</Badge>
                            <Badge>Badge 4</Badge>
                            <Badge>Badge 5</Badge>
                            <Badge>Badge 6</Badge>
                            <Badge>Badge 7</Badge>
                            <Badge>Badge 8</Badge>
                        </Flex>
                        <img className="section__work-card-expand" src={IconExpand} alt="Expand Project Icon"/>
                    </Flex>
                </Card.Footer>
            </Card>)}
        </Grid>
        <Flex justify="center" align="center">
            <ArrowLink href={"/"} label="View everything" type="secondary"/>
        </Flex>
    </section>
}

function WorkTitleAddon() {
    return <div className={clsx("section__work-addon")}/>
}