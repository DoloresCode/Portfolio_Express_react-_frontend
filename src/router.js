import { createRoutesFromElements,createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import { aboutLoader, projectsLoader } from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />}  loader={aboutLoader}/>
      <Route path="/projects" element={<Projects />} loader={projectsLoader}/>
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanks" element={<Thanks />} />
    </Route>
  )
)

export default router
