import Grid from "../components/_layout/Grid/Grid";
import clsx from "clsx";
import Flex from "../components/_layout/Flex/Flex";
import ArrowLink from "../components/Link/ArrowLink";
import Container from "../components/_layout/Container/Container";

export default function Header() {
    return <header>
        <Container>
            <Grid className={clsx("header")} cols="40% 60%">
                <div className={clsx("header__about")}>
                    My name is <code>Paul Halleux</code>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </div>
                <Flex className={clsx("header__quote")} justify="space-between" direction="column" gap={{col: 30}}>
                    <p>Programming. More than a job. <span className="reverse">A passion.</span></p>
                    <Flex justify="end">
                        <ArrowLink className="download-button" href="#" label="Download resume" />
                    </Flex>
                </Flex>
            </Grid>
        </Container>
    </header>
}