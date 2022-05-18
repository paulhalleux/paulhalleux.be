import React, {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../components/layout/Container/Container";

type LayoutProps = {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return <Container>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Container>
}