import { Layout } from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hello } from "./Pages/Hello/Hello";
import { About } from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Hello />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/projects" element="Projects" />
          <Route path="/contact" element="Contact" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
