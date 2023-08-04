import { Suspense } from "react";
import "./css/index.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import ScrollToTop from "./assets/scrollToTop";

import "./fonts/Dirtyline36daysoftype2022.ttf";
import "./fonts/Dirtyline36daysoftype2022.woff";
import "./fonts/Dirtyline36daysoftype2022.woff2";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import AboutMe from "./components/pages/AboutMe";
import NoPage from "./components/pages/NoPage";
import Loader from "./components/pages/Loader";

import Work from "./components/pages/Work";
import WorkDefault from "./components/pages/work/WorkDefault";
import WorkSpecific from "./components/pages/work/WorkSpecific";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />}>
            <Route index element={<WorkDefault />} />
            <Route exact path={":workId"} element={<WorkSpecific />} />
          </Route>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
