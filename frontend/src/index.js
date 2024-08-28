import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Projects from "./pages/ProjectsPage.jsx";
import Education from "./pages/EducationPage.jsx";
import Experience from "./pages/ExperiencePage.jsx";
import ContactMe from "./pages/ContactMePage.jsx";
import Skills from "./pages/SkilsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<ContactMe />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
