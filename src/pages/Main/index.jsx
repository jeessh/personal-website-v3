import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Main.css";
import Intro from "./Intro_Section/Intro";
import Projects from "./Projects_Section/Projects";

const Main = () => {
  return (
    <main className="main">
      <Sidebar />
      <Intro />
      <Projects />
      <div style={{ height: "150vh" }}>temp</div>
    </main>
  );
};

export default Main;
