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
      <div style={{ height: "150vh" }}>temp</div>
    </main>
  );
};

export default Main;
