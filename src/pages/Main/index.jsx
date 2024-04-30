import React from "react";
import Sidebar from "../../components/Sidebar";
import "./Main.css";
import Intro from "./Intro_Section";
import Projects from "./Projects_Section";

const Main = () => {
  return (
    <main className="main">
      <Sidebar />
      <Intro />
      <Projects />
    </main>
  );
};

export default Main;
