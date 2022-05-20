import React, {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../components/_layout/Container/Container";
import Navigation from "./Navigation/Navigation";

type LayoutProps = {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return <div>
        <Navigation/>
        <Header />
        <Container>
            <main>
                {children}
            </main>
            <Footer />
        </Container>
    </div>
}