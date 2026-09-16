import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Programs from "./pages/Programs.jsx";
import Projects from "./pages/Projects.jsx";
import ArgoLabs from "./pages/ArgoLabs.jsx";
import AiFeatures from "./pages/AiFeatures.jsx";
import ResumeBuilder from "./pages/ResumeBuilder.jsx";
import Timesheet from "./pages/Timesheet.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Support from "./pages/Support.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programs" element={<Programs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="argo-labs" element={<ArgoLabs />} />
        <Route path="ai-features" element={<AiFeatures />} />
        <Route path="resume-builder" element={<ResumeBuilder />} />
        <Route path="timesheet" element={<Timesheet />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="support" element={<Support />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
