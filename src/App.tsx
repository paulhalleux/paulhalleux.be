import React from 'react';
import Layout from "./layout/Layout";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <Layout>
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
    </Layout>
  );
}

export default App;
